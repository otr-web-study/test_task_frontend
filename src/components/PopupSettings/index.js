import { useState, useEffect } from 'react';
import './PopupSettings.css';
import ButtonClosePopup from '../ButtonClosePopup';

function PopupSettings({isOpened, rates, onSave, onClose}) {
  const [currencyValue, setCurrencyValue] = useState('');

  let currencyValues = '';
  if (rates.rates) {
    currencyValues = Object.keys(rates.rates).map((key) => {
      return (
        <option key={key} value={key}>{key}</option>
      );
    });
  }

  useEffect(() => {
    if (rates.base) {
      setCurrencyValue(rates.base);
    }
  }, [rates.base]);

  const handleSettingsSave = () => {
    onSave({base: currencyValue});
  }

  const handleChangeCurrency = (evt) => {
    setCurrencyValue(evt.target.value);
  }

  return (
    <div className={`popup-settings ${isOpened && 'popup-settings_opened'}`}>
      <div className='popup-settings__container'>
        <h2 className='popup-settings__title'>
          Настройки:
        </h2>
        <label className='popup-settings__label'>
          Базовая валюта:
          <select 
            className='popup-settings__select' 
            value={currencyValue}
            onChange={handleChangeCurrency}>
            {currencyValues}
          </select>
        </label>
        <button 
          className='popup-settings__button-save'
          onClick={handleSettingsSave}>Сохранить</button>
        <ButtonClosePopup onClose={onClose} />
      </div>
    </div>
  );
}

export default PopupSettings;