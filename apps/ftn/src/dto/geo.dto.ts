export interface IDistrict {
  id: string | number;
  name: string;
  code?: string;
  provinceId?: string | number;
}

export interface IProvince {
  id: string | number;
  name: string;
  code?: string;
}

export interface IWard {
  id: string | number;
  name: string;
  code?: string;
  districtId?: string | number;
}

export interface ListDistrictReq {
  code?: string;
  provinceId: string | number;
}

export interface ListWardReq {
  code?: string;
  districtId: string | number;
}