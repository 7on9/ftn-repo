import { validateModuleKeys } from '@nestjs/common/utils/validate-module-keys.util';
import { MODULE_PATH } from '@nestjs/common/constants';
import { ModuleMetadata } from '@nestjs/common/interfaces';
import { ApiTags } from '@nestjs/swagger';

export interface IChildModuleMetadata extends ModuleMetadata {
  prefix: string;
}
const PREFIX_METADATA = '__prefix___';
function fixPath(strInput: string) {
  let path = strInput;
  const regex = new RegExp('//', 'g');
  while (path.includes('//')) {
    path = path.replace(regex, '/');
  }

  const regexConfig = /(^\/+|\/+$)/gm;
  return path.replace(regexConfig, '');
}

export function ChildModule(childMetadata?: IChildModuleMetadata): ClassDecorator {
  let { prefix = '', ...metadata } = childMetadata;
  const propsKeys = Object.keys(metadata);
  validateModuleKeys(propsKeys);
  return target => {
    console.log('=====ChildModule=====');
    for (const property in metadata) {
      if (metadata.hasOwnProperty(property)) {
        Reflect.defineMetadata(property, metadata[property], target);
      }
    }
    const defPrefix = fixPath(prefix);
    Reflect.defineMetadata(MODULE_PATH, defPrefix ? '/' + defPrefix : defPrefix, target);
    const data = metadata['imports'] || [];
    data.forEach(item => {
      const childPath = Reflect.getMetadata(MODULE_PATH, item) || '';
      // Reflect.deleteMetadata(MODULE_PATH, item);
      const mixPath = fixPath(defPrefix + childPath);
      Reflect.defineMetadata(MODULE_PATH, mixPath ? '/' + mixPath : mixPath, item);
    });
    const controllers = metadata['controllers'] || [];
    controllers.forEach(ctr => {
      // mix Tags group swagger
      const groupName = prefix ? `[${prefix.toPascalCase()}] ${ctr.name}` : `[API]${ctr.name}`;
      ApiTags(groupName)(ctr);
    });
  };
}
