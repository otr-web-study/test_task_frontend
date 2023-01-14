import { Route, Routes } from 'react-router-dom';
import './Main.css';
import Header from '../Header'
import Converter from '../Converter';
import ExchangeRate from '../Exchange-rate';
import PopupInfo from '../PopupInfo';
import NotFound from '../NotFound';

function Main(props) {
  const {infoData, onInfoPopupClose} = props;
  return (
    <div className='main'>
      <Header />
      <Routes>
        <Route path='/' element={<Converter {...props} />} />
        <Route path='/exchange-rate' element={<ExchangeRate />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <PopupInfo data={infoData} onClose={onInfoPopupClose} />
    </div>
  );
}

export default Main;