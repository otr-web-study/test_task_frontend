import { useState, useEffect } from 'react';
import './App.css';
import Footer from '../Footer';
import Main from '../Main';
import api from '../../utils/FixerApi';
import { currentDateTime, getSettings } from '../../utils';
import PopupSettings from '../PopupSettings';
import PopupInfo from '../PopupInfo';
import Preloader from '../Preloader/Preloader';


function App() {
  const [rates, setRates] = useState({});
  const [infoData, setInfoData] = useState({});
  const [isSettingsOpened, setIsSettingsOpened] = useState(false);
  const [isPendingServerResponse, setIsPendingServerResponse] = useState(true);

  useEffect(() => {
    getRates();
  }, []);

  const handleError = (err) => {
    console.log(err);
    setInfoData({message: String(err)});
  };

  const getRates = () => {
    const { base='RUB' } = getSettings();
    setIsPendingServerResponse(true);

    api.getRates(base)
      .then((res) => {
        if (!res.success || !res.base || !res.rates) {
          throw new Error('Ошибка получения данных от сервера.');
        }
        res.timeUpdate = currentDateTime();
        setRates({...res})
      })
      .catch((err) => handleError(err))
      .finally(() => setIsPendingServerResponse(false));
  };

  const handlePopupClose = () => {
    setInfoData({});
    setIsSettingsOpened(false);
  }

  const handleSettingsClick = () => {
    setIsSettingsOpened(true);
  }

  const handleSettingsSave = (settings) => {
    localStorage.setItem('settings', JSON.stringify(settings));
    if (settings.base !== rates.base) {
      getRates();
    }
    setIsSettingsOpened(false);
  }

  return (
    <div className='page'>
      <Main
        rates={rates}
        onError={handleError}
        onSettings={handleSettingsClick}
        onUpdateRates={getRates} />
      <Footer />
      <PopupSettings 
        isOpened={isSettingsOpened} 
        rates={rates}
        onSave={handleSettingsSave} 
        onClose={handlePopupClose} />
      <PopupInfo data={infoData} onClose={handlePopupClose} />
      <Preloader isActive={isPendingServerResponse} />
    </div>
  );
}

export default App;
