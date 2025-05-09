import { Injectable } from '@nestjs/common';
import { geoApiConnector } from '@libs/common/connectors';
import {
  IDistrict,
  IProvince,
  IWard,
  ListDistrictReq,
  ListWardReq,
} from '~ftn/dto/geo.dto';

const Endpoint = {
  listProvinces: '/city_public/find',
  listDistrict: '/district_public/find',
  listWard: '/ward_public/find',
};

@Injectable()
export class GeoService {
  cache: Record<
    'ward' | 'district' | 'province',
    Record<string, IDistrict | IProvince | IWard>
  >;
  lastUpdate: number;
  maxCacheTime = 1000 * 60 * 60; // 1 hour
  constructor() {
    this.cache = {
      ward: {},
      district: {},
      province: {},
    };
    this.lastUpdate = Date.now() - this.maxCacheTime;
  }
  async listProvinces() {
    return geoApiConnector.post(Endpoint.listProvinces);
  }
  async listDistrict(params: ListDistrictReq) {
    try {
      const endpointProvinces = `${Endpoint.listProvinces}`;
      const province = await geoApiConnector.post<IProvince>(
        endpointProvinces,
        {
          code: params.code,
        },
      );
      const endpoint = `${Endpoint.listDistrict}`;
      const districts = await geoApiConnector.post<IProvince>(endpoint, {
        cityId: province[0].id,
      });
      return districts;
    } catch (error) {
      return [];
    }
  }
  async listWard(params: ListWardReq) {
    try {
      if (!params.code) {
        // const endpoint = `${Endpoint.listWard}`;
        // const wards = await apeApiConnector.post<IWard[]>(endpoint, {
        //   depth: 2,
        // });
        const endpoint = `${Endpoint.listWard}`;
        const wards = await geoApiConnector.post<IWard[]>(endpoint);
        return wards;
      } else {
        const endpointDistrict = `${Endpoint.listDistrict}`;
        const districts = await geoApiConnector.post<IProvince>(
          endpointDistrict,
          {
            code: params.code,
          },
        );
        const endpoint = `${Endpoint.listWard}`;
        const wards = await geoApiConnector.post<IWard[]>(endpoint, {
          districtId: districts[0].id,
        });
        return wards;
      }
    } catch (error) {
      return [];
    }
  }

  async getProvince(code: string, depth?: number) {
    try {
      const endpoint = `${Endpoint.listProvinces}`;
      const province = await geoApiConnector.post<IProvince>(endpoint, {
        code: code,
      });
      return province[0];
    } catch (error) {
      return null;
    }
  }

  async getDistrict(code: string, depth?: number) {
    try {
      const endpoint = `${Endpoint.listDistrict}`;
      const district = await geoApiConnector.post<IDistrict>(endpoint, {
        code: code,
      });
      return district[0];
    } catch (error) {
      return null;
    }
  }

  async getWard(code: string, depth?: number) {
    try {
      // check if cache is expired
      // console.log(Date.now() - this.lastUpdate > this.maxCacheTime)
      // if (Date.now() - this.lastUpdate > this.maxCacheTime) {
      //   const wards = await this.listWard({ code: undefined });
      //   for (const ward of wards) {
      //     this.cache.ward[String(ward.code)] = ward;
      //   }
      //   this.lastUpdate = Date.now();
      // }
      const endpoint = `${Endpoint.listWard}`;
      const ward = await geoApiConnector.post<IWard>(endpoint, {
        code: code,
      });
      // console.log(JSON.stringify(this.cache.ward));
      return ward[0];
    } catch (error) {
      return null;
    }
  }

  async getFullAddress({
    provinceCode,
    districtCode,
    wardCode,
    address = '',
  }: {
    provinceCode: string;
    districtCode: string;
    wardCode: string;
    address?: string;
  }) {
    try {
      const [province, district, ward] = await Promise.all([
        this.getProvince(provinceCode),
        this.getDistrict(districtCode),
        this.getWard(wardCode),
      ]);
      return `${[province?.name || '', district?.name || '', ward?.name || ''].join(` , `)} ${address}`.trim();
    } catch (error) {
      return null;
    }
  }

  async getGeoMap(
    provinces: Array<string>,
    districts: Array<string>,
    wards: Array<string>,
  ) {
    const resMap: {
      provinces: Record<string, IProvince>;
      districts: Record<string, IDistrict>;
      wards: Record<string, IWard>;
    } = {
      provinces: {},
      districts: {},
      wards: {},
    };

    const arrPromiseProvinces = provinces.map(async (code) => {
      if (resMap.provinces[code]) return;
      const province = await this.getProvince(code);
      resMap.provinces[code] = province;
    });
    const arrPromiseDistricts = districts.map(async (code) => {
      if (resMap.districts[code]) return;
      const district = await this.getDistrict(code);
      resMap.districts[code] = district;
    });
    const arrPromiseWards = wards.map(async (code) => {
      if (resMap.wards[code]) return;
      const ward = await this.getWard(code);
      resMap.wards[code] = ward;
    });

    await Promise.all([
      ...arrPromiseProvinces,
      ...arrPromiseDistricts,
      ...arrPromiseWards,
    ]);
    return resMap;
  }
}
