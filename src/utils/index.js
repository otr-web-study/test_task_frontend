const MESSAGE_PARSE_CURRENCY = 'Данные сервера не содержат информации о валюте'
export const convertCurrency = (rates, convertString) => {
  const result = ['', null];
  const [amount, inCurrency, , outCurrency] = convertString.split(' ');
  let ratio = 1;

  if (rates.base !== inCurrency) {
    ratio = rates.rates[inCurrency];
  }

  if (!ratio) {
    result[1] = `${MESSAGE_PARSE_CURRENCY} "${inCurrency}"`;
    return result;
  }

  const rate = rates.rates[outCurrency];
  if (!rate) {
    result[1] = `${MESSAGE_PARSE_CURRENCY} "${outCurrency}"`;
    return result;
  }
  
  const convertedAmount = (amount * ratio * rate).toFixed(2);
  result[0] = `${amount} ${inCurrency} = ${convertedAmount} ${outCurrency}`;
  return result;
}

export const saveState = (state) => {
  localStorage.setItem('state', JSON.stringify(state));
}

export const restoreState = () => {
  const storedState = localStorage.getItem('state');
  if (!storedState) {
    return null;
  }

  return JSON.parse(storedState);
}

const addZero = (item) => {
  return String(item).padStart(2, '0');
}

export const currentDateTime = () => {
  const today = new Date();
  const date = `${addZero(today.getDate())}.${addZero(today.getMonth()+1)}.${today.getFullYear()}`;
  const time = `${addZero(today.getHours())}:${addZero(today.getMinutes())}:${addZero(today.getSeconds())}`;
  return `${date} ${time}`;
}

export const getSettings = () => {
  const settings = localStorage.getItem('settings');
  if (settings) {
    return JSON.parse(settings);
  }

  return {base: 'RUB'};
}