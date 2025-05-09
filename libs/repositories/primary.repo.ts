import { BaseRepoPostgreSql } from './base.repo';
import { ObjectLiteral } from 'typeorm';

export class PrimaryRepo<Entity extends ObjectLiteral> extends BaseRepoPostgreSql<Entity> {
  constructor(target: any, manager: any, queryRunner?: any) {
    super(target, manager, queryRunner);
  }
  static getConnectionName() {
    return 'default';
  }
}
