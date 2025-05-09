import { ValidateNested, isDefined, IsDefined } from 'class-validator';
import { ApiExtraModels, ApiOkResponse, ApiProperty, getSchemaPath } from '@nestjs/swagger';
import { applyDecorators, Type } from '@nestjs/common';
type TOperatorString = '=' | 'LIKE' | 'NOT LIKE';
type TOperatorNumber = '=' | '!=' | '<' | '>' | '>=' | '<=';
type TOperatorDate = '=' | '!=' | '<' | '>' | '>=' | '<=';
type TOperatorSelect = 'IN' | 'NOT IN';
type TOperatorBoolean = '=';

export class FilterItemString {
  type: 'TEXT' = 'TEXT';
  value: string = '';
  compare?: TOperatorString = 'LIKE';
}
export class FilterItemNumber {
  type: 'NUMBER' = 'NUMBER';
  value: number;
  compare?: TOperatorNumber = '=';
}
export class FilterItemDate {
  type: 'DATE' = 'DATE';
  value: Date;
  compare?: TOperatorDate = '=';
}
export class FilterItemBoolean {
  type: 'BOOLEAN' = 'BOOLEAN';
  value: boolean;
  compare?: TOperatorBoolean = '=';
}

export class FilterItemSelect {
  type: 'SELECT' = 'SELECT';
  value: any[] = [];
  compare?: TOperatorSelect = 'IN';
}
export type FilterItem =
  | FilterItemString
  | FilterItemNumber
  | FilterItemDate
  | FilterItemBoolean
  | FilterItemSelect;

export type FilterOption<T = any> = {
  [k in keyof T]?: FilterItem;
};
export type OrderOption<T> = {
  [k in keyof T]?: 'ASC' | 'DESC';
};

export class PageRequest {
  @ApiProperty({
    example: 10,
  })
  pageSize: number = 10;
  @ApiProperty({
    example: 1,
  })
  pageIndex: number = 1;
}

export class TablePageRequest<T = any> extends PageRequest {
  // @ValidateNested()
  // @IsDefined()
  @ApiProperty({
    type: Object,
  })
  orders?: OrderOption<T>;
  // @ValidateNested()
  // @IsDefined()
  @ApiProperty({
    type: Object,
  })
  filters?: FilterOption<T>;
}

export class PageResponse<T = any> {
  // @ApiProperty()
  data: T[];

  @ApiProperty()
  total: number;
}
export class SuccessResponse {
  @ApiProperty({
    example: 'success',
  })
  message: string = 'success';
}

export class DataSuccessResponse {
  @ApiProperty({
    example: 'success',
  })
  message: string = 'success';
  data: any;

  constructor(data: any) {
    this.data = data;
  }
}

function mapPostgresQueryFilter<T>(filters: FilterOption<T> = {}) {
  let where = ' where 1 = 1 ';
  Object.keys(filters).forEach(key => {
    const filterItem: FilterItem = filters[key] || [];

    if (filterItem.type === 'TEXT') {
      const { value, compare = 'LIKE' } = filterItem;
      if (value) {
        where += ` AND ( "${key}" ${compare} '%${value}%'  ) `;
      }
    }
    if (filterItem.type === 'DATE') {
      const { value, compare = '=' } = filterItem;
      if (value) {
        switch (compare) {
          case '=':
            where += ` AND ( "${key}" >= '${value}'::date AND  "${key}" < ('${value}'::date + '1 day'::interval) ) `;
            break;
          default:
            where += ` AND ( "${key}" ${compare} '%${value}%'  ) `;
            break;
        }
      }
    }

    if (filterItem.type === 'NUMBER' || filterItem.type === 'BOOLEAN') {
      const { value, compare = '=' } = filterItem;
      if (value !== undefined && value !== null && typeof value === 'number') {
        where += ` AND ( "${key}" ${compare} ${value}  ) `;
      }
    }

    if (filterItem.type === 'SELECT') {
      const { value, compare = 'IN' } = filterItem;
      const makeValue = value.filter(v => v);
      if (makeValue && makeValue.length > 0) {
        where += ` AND ( "${key}" ${compare} ('${value.join(',')}')  ) `;
      }
    }
  });
  return where;
}

export const ApiPaginatedDto = <TModel extends Type<any>>(model: TModel) => {
  return applyDecorators(
    ApiOkResponse({
      schema: {
        allOf: [
          { $ref: getSchemaPath(PageResponse) },
          {
            properties: {
              data: {
                type: 'array',
                items: { $ref: getSchemaPath(model) },
              },
            },
          },
        ],
      },
    }),
  );
};
export const ApiOkResponsePaginated = <DataDto extends Type<unknown>>(dataDto: DataDto) => {
  return applyDecorators(
    ApiExtraModels(PageResponse, dataDto),
    ApiOkResponse({
      schema: {
        allOf: [
          { $ref: getSchemaPath(PageResponse) },
          {
            properties: {
              data: {
                type: 'array',
                items: { $ref: getSchemaPath(dataDto) },
              },
            },
          },
        ],
      },
    }),
  );
};
export default {
  mapPostgresQueryFilter,
};
