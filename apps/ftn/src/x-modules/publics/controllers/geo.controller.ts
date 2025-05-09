import { Param, Query, UseInterceptors } from '@nestjs/common';
import { DefController, DefGet } from '@libs/@core/decorator';
import { GeoService } from '../services';
import { CacheInterceptor } from '@nestjs/cache-manager';

@DefController('geo')
@UseInterceptors(CacheInterceptor)
export class GeoController {
  constructor(private readonly geoService: GeoService) {}

  @DefGet('list-provinces')
  listProvinces() {
    return this.geoService.listProvinces();
  }

  @DefGet('list-district')
  listDistrict(@Query() params: any) {
    return this.geoService.listDistrict(params);
  }

  @DefGet('list-ward')
  listWard(@Query() params: any) {
    return this.geoService.listWard(params);
  }
}
