import { useEffect } from 'react';
import './Preloader.css'
import { ENTER_KEY } from '../../constants';

const Preloader = ({isActive}) => {
  useEffect(() => {
    const handleEscClose = (evt) => {
      if (evt.key === ENTER_KEY) {
        evt.preventDefault();   
      }
    }

    window.addEventListener('keydown', handleEscClose);

    return () => window.removeEventListener('keydown', handleEscClose);
  })
  return (
    <div className={`preloader ${isActive && 'preloader_active'}`}>
      <div className='preloader__container'>
        <span className='preloader__round'></span>
      </div>
      <div className='preloader__cover'></div>
    </div>
  )
};

export default Preloader
