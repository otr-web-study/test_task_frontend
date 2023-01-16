import './Exchange-rate.css';
import RatesList from '../RatesList';

function ExchangeRate({rates, onUpdateRates}) {
  return (
    <div className='exchange-rate'>
      <div className='exchange-rate__title-container'>
        <h1 className='exchange-rate__title'>
          {`Базовая валюта: ${rates.base}`}
        </h1>
        <span className='exchange-rate__update'>
          {`данные на: ${rates.timeUpdate}`}
          <button 
            className='exchange-rete__button-update'
            onClick={onUpdateRates}>&#8635;</button>
        </span>
      </div>
      {rates.rates && <RatesList rates={rates.rates} />}
    </div>
  );
}

export default ExchangeRate;