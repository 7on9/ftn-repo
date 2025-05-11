import { ObjectLiteral } from 'typeorm';
import { BaseRepoPostgreSql, BaseRepository } from './base.repo';

export class PrimaryRepo<Entity extends ObjectLiteral> extends BaseRepoPostgreSql<Entity> {
  constructor() {
    super();
  }
  static getConnectionName() {
    return 'default';
  }
}
