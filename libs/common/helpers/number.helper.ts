// export const USD_DECIMALS = 30;
const formatAmountToken = ({
  stringNumber,
  tokenDecimals,
}: {
  stringNumber: string;
  tokenDecimals: number;
}) => {
  const numberValue = BigInt(stringNumber);
  const divisor = BigInt('1'.padEnd(tokenDecimals + 1, '0'));
  const scaledNumber = Number(numberValue / divisor);
  return scaledNumber;
  // const formattedNumber = scaledNumber.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
};

export const numberHelper = {
  formatAmountToken,
};
