import { useEffect } from 'react';
import './PopupInfo.css';
import { ESC_KEY, ENTER_KEY } from '../../constants';
import ButtonClosePopup from '../ButtonClosePopup';

function PopupInfo({data, onClose}) {
  const { message='' } = data;

  useEffect(() => {
    if (message) {
      const handleEscClose = (evt) => {
        if (evt.key === ESC_KEY || evt.key === ENTER_KEY) {
          evt.preventDefault();
          onClose();
        }
      }

      window.addEventListener('keydown', handleEscClose);

      return () => window.removeEventListener('keydown', handleEscClose);
    }
  }, [message]);

  const handlePopupMouseDown = (evt) => {
    if (evt.target.classList.contains('button-close-popup')
        || evt.target.classList.contains('popup-info')) {
      onClose();
    }
  };

  return (
    <div 
      className={`popup-info ${message && 'popup-info_opened'}`}
      onMouseDown={handlePopupMouseDown}>
      <div className='popup-info__container'>
        <div className='popup-info__logo'></div>
        <h2 className='popup-info__title'>
          {message}
        </h2>
        <ButtonClosePopup />
      </div>
    </div>
  );
}

export default PopupInfo;