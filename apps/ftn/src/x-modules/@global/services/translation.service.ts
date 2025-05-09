import { Injectable } from '@nestjs/common';
import { I18nService } from 'nestjs-i18n';
import { getKeyEnumByValue } from '@libs/@systems/utils';

@Injectable()
export class EnumTranslationService {
  constructor(private readonly i18n: I18nService) {}

  private getEnumFullName<T extends object>(enumInput: T): string {
    for (const namespaceKey in global) {
      const namespace = (global as any)[namespaceKey];
      if (typeof namespace === 'object') {
        for (const enumName in namespace) {
          if (namespace[enumName] === enumInput) {
            return `${namespaceKey}.${enumName}`;
          }
        }
      }
    }
    return '';
  }

  /**
   * Translate enum based on namespace and enum name
   * @param enumType - Enum to translate
   * @param enumValue - Enum value to translate
   */
  translateEnum<T extends object>(enumType: T, enumValue: string) {
    const enumFullName = this.getEnumFullName(enumType);
    const enumKey = getKeyEnumByValue(enumType, enumValue);
    return this.i18n.translate(`enum.${enumFullName}.${enumKey}`);
  }
}
