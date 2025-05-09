import { Injectable } from '@nestjs/common';
import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { validateVietNamese } from '@libs/@systems/utils';

@ValidatorConstraint({ async: true })
@Injectable()
export class IsValidVietnameseName implements ValidatorConstraintInterface {
  validate(str: string, args: ValidationArguments) {
    if (!str || str.length === 0) {
      return true;
    }
    return validateVietNamese(str);
  }
}
