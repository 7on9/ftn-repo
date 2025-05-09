import { getManager } from 'typeorm';
import { getEntityManagerOrTransactionManager } from 'typeorm-transactional-cls-hooked';

export function BindEm(dbName: string = 'default'): PropertyDecorator {
  return function (target: any, propertyKey: string | symbol) {
    let val = target[propertyKey];
    const getter = () => {
      return getEntityManagerOrTransactionManager(dbName, getManager(dbName));
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
