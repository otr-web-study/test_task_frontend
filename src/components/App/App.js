import { useState, useEffect } from 'react';
import './App.css';
import Footer from '../Footer';
import Main from '../Main';
import api from '../../utils/FixerApi';


function App() {
  const [rates, setRates] = useState({});
  const [infoData, setInfoData] = useState({});

  useEffect(() => {
    getRates();
  }, []);

  const handleError = (err) => {
    console.log(err);
    setInfoData({message: String(err)});
  };

  const getRates = () => {
    api.getFixtures()
      .then((res) => {
        if (!res.success || !res.base || !res.rates) {
          throw new Error('Ошибка получения данных от сервера.');
        }
        setRates(res)
      })
      .catch((err) => handleError(err));
  };

  const handlePopupClose = () => {
    setInfoData({});
  }

  return (
    <div className='page'>
      <Main
        rates={rates}
        infoData={infoData}
        onInfoPopupClose={handlePopupClose}
        onError={handleError} />
      <Footer />
    </div>
  );
}

export default App;
