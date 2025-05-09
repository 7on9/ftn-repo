import { getCustomRepository, getRepository, ObjectType } from 'typeorm';
import { TRepoClass } from './types';
export function BindRepo(repoClass: TRepoClass): PropertyDecorator {
  return function (target: any, propertyKey: string | symbol) {
    let val = target[propertyKey];
    const getter = () => {
      const getConnectionName =
        repoClass.getConnectionName && typeof repoClass.getConnectionName == 'function'
          ? repoClass.getConnectionName() || 'default'
          : '';
      return getCustomRepository(repoClass, getConnectionName);
    };
    const setter = next => {
      val = next;
    };

    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  };
}
export function BindDefaultRepo<Entity>(
  entityClass: ObjectType<Entity>,
  getConnectionName?: string,
): PropertyDecorator {
  return function (target: any, propertyKey: string | symbol) {
    let val = target[propertyKey];
    const getter = () => {
      return getRepository(entityClass, getConnectionName || 'default');
    };
    const setter = next => {
      val = next;
    };

    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  };
}
