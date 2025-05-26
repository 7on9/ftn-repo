import dayjs, { Dayjs } from "dayjs";
import { configEnv } from "@libs/@config/env";

const getKeyEnumByValue = <T extends object = object>(targetEnum: T, valueFind: any) => {
  return Object.keys(targetEnum)[Object.values(targetEnum).indexOf(valueFind)] || '';
};

const validateVietNamese = (str: string): boolean => {
  const vietnameseText =
    /[A-Za-zÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵýỷỹ0-9.,!?""''()…\s-]+/;
  const isMatch = str.match(vietnameseText);
  return isMatch ? true : false;
};

const convertToDisplayTimezone = (date?: Date | string, offset = 7): Dayjs => {
  return dayjs(date).add(offset, 'hour');
}

export { getKeyEnumByValue, validateVietNamese, convertToDisplayTimezone };
