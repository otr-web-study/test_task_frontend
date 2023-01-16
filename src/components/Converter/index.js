import { useState, useEffect } from 'react';
import { convertCurrency } from '../../utils';
import { saveState, restoreState } from '../../utils';
import './Converter.css'

const INPUT_PATTERN = /\d* [A-Z]{3,3} in [A-Z]{3,3}/
const VALIDATION_MESSAGE = 'Строка должна быть в формате "15 USD in RUB"'

function Converter({rates, onError}) {
  const [convertString, setConvertString] = useState('');
  const [showValidationMessage, setShowValidationMessage] = useState(false);
  const [resultString, setResultString] = useState('');

  useEffect(() => {
    const state = restoreState();
    if (state) {
      setConvertString(state.convertString);
      setResultString(state.result);
    }
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!convertString.match(INPUT_PATTERN)) {
      setShowValidationMessage(true);
      return;
    }

    const [result, error] = convertCurrency(rates, convertString);
    if (error) {
      onError(error);
      return;
    }

    setResultString(result);
    saveState({result, convertString});
  }

  const handleInputChange = (evt) => {
    setConvertString(evt.target.value);
    if (showValidationMessage && evt.target.value.match(INPUT_PATTERN)) {
      setShowValidationMessage(false);
    }
  }

  return (
    <section className='converter'>
      <form className='converter__form' onSubmit={handleSubmit}>
        <div className='converter__container'>
          <input
            className='converter__input' 
            id='input_convert' 
            name='input_convert'
            placeholder='15 usd in rub'
            value={convertString || ''}
            onChange={handleInputChange}></input>
          <button className='converter__submit' type='submit'>&gt;&gt;</button>
          <span 
            className={`converter__error ${showValidationMessage && 'converter__error_active'}`}>
            {VALIDATION_MESSAGE}
          </span>
        </div>
        <div className='converter__underline'></div>
      </form>
      <p className='converter__result'>{resultString}</p>
    </section>
  );
}

export default Converter;
