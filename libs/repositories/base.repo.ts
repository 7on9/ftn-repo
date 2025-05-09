import {
  FindOptions,
  ObjectLiteral,
  Repository,
  FindOneOptions,
  FindOptionsUtils,
  DeepPartial,
  SaveOptions,
  FindManyOptions,
} from 'typeorm';
import {
  PageRequest,
  PageResponse,
  TablePageRequest,
} from '@libs/@systems/utils/page.utils';

interface ISumFindOptions<Entity extends ObjectLiteral = any> {
  sumSelect: (keyof Entity)[];
  where?: FindOptions<Entity>[] | FindOptions<Entity> | ObjectLiteral | string;
}
type TSumResult<Entity extends ObjectLiteral = any> = {
  [key in keyof Entity]: number;
};

const pageSizeDefault = 10;

export class BaseRepository<
  Entity extends ObjectLiteral,
> extends Repository<Entity> {
  constructor(target: any, manager: any, queryRunner?: any) {
    super(target, manager, queryRunner);
  }
  async findOrCreate(value: Partial<Entity>, options?: FindOneOptions<Entity>) {
    let entity = (await this.findOne(options || {})) as any;

    if (!entity) {
      entity = await this.save(value as DeepPartial<Entity>);
    }
    return entity;
  }
  async saves(entities: DeepPartial<Entity>[], options: SaveOptions = {}) {
    const newOption: SaveOptions = {
      reload: true,
      chunk: 10000,
      ...options,
    };
    return this.save(entities, newOption);
  }

  async findPagination(
    options: FindOneOptions<Entity> = {},
    pageRequest: PageRequest,
  ) {
    const { pageIndex = 1, pageSize = 20 } = pageRequest;
    return super
      .findAndCount({
        ...options,
        skip: (pageIndex - 1) * pageSize,
        take: pageSize,
      })
      .then(([data, total]) => ({ data, total }));
  }
}
export class BaseRepoPostgreSql<
  Entity extends ObjectLiteral,
> extends BaseRepository<Entity> {
  constructor(target: any, manager: any, queryRunner?: any) {
    super(target, manager, queryRunner);
  }

  async queryPagination<T = any, F = any>(
    sqlRoot: string,
    pageRequest: PageRequest,
  ): Promise<PageResponse<T>> {
    let { pageIndex = 1, pageSize = pageSizeDefault } = pageRequest;
    if (!pageIndex) {
      pageIndex = 1;
    }
    if (!pageSize) {
      pageSize = pageSizeDefault;
    }
    let sqlData = ` select * from ( ${sqlRoot} ) temp  `;
    const sqlTotal = ` select CAST( count(*) as integer ) as total from ( ${sqlRoot} ) temp  `;
    sqlData =
      sqlData + ` limit ${pageSize} offset  ${(pageIndex - 1) * pageSize}  `;
    const res = await Promise.all([this.query(sqlData), this.query(sqlTotal)]);
    return {
      data: res[0],
      total: res[1][0].total,
    };
  }

  async pageQueryMaxTotal<T = any, F = any>(
    sqlRoot: string,
    pageRequest: PageRequest,
    maxTotal = 1000,
  ): Promise<PageResponse<T>> {
    let { pageIndex = 1, pageSize = pageSizeDefault } = pageRequest;
    if (!pageIndex) {
      pageIndex = 1;
    }
    if (!pageSize) {
      pageSize = pageSizeDefault;
    }
    const offset = (pageIndex - 1) * pageSize;
    if (offset > maxTotal) {
      return {
        data: [],
        total: maxTotal,
      };
    }
    let sqlData = ` select * from ( ${sqlRoot} ) temp  `;
    sqlData = sqlData + ` limit ${pageSize} offset  ${offset}  `;
    const data = (await this.query(sqlData)) as T[];
    return {
      data,
      total: data.length >= pageSize ? maxTotal : offset + data.length,
    };
  }

  async queryOne<T = any>(
    query: string,
    parameters?: any[],
  ): Promise<T | undefined> {
    try {
      const res = await this.query(query, parameters);
      if (!res || !(res instanceof Array) || res.length === 0) {
        return undefined;
      }
      return res[0] as T;
    } catch (error) {
      return undefined;
    }
  }

  async queryOneOrFail<T = any>(query: string, parameters?: any[]): Promise<T> {
    const res = await this.query(query, parameters);
    if (!res || !(res instanceof Array) || res.length === 0) {
      throw new Error('Empty record');
    }
    return res[0] as T;
  }
}
