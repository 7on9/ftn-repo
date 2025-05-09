import { DynamicModule } from '@nestjs/common';
import { ConnectionOptions } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
function dbModules(dbs: ConnectionOptions[]) {
  const multipleDatabaseModule: DynamicModule[] = [];
  dbs.forEach(item => {
    const typeormModule = TypeOrmModule.forRoot({
      ...item,
    });
    multipleDatabaseModule.push(typeormModule);
  });
  return multipleDatabaseModule;
}
export const TechUtils = {
  dbModules,
};
