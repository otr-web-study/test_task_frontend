export const convertCurrency = (rates, convertString) => {
  const result = ['', null];
  const [amount, inCurrency, , outCurrency] = convertString.split(' ');
  let ratio = 1;

  if (rates.base !== inCurrency) {
    ratio = rates.rates[inCurrency];
  }

  if (!ratio) {
    result[1] = `Данные сервера не содержат информации о валюте "${inCurrency}"`;
    return result;
  }

  const rate = rates.rates[outCurrency];
  if (!rate) {
    result[1] = `Данные сервера не содержат информации о валюте "${outCurrency}"`;
    return result;
  }
  
  const convertedAmount = (amount * ratio * rate).toFixed(2);
  result[0] = `${amount} ${inCurrency} = ${convertedAmount} ${outCurrency}`;
  return result;
}