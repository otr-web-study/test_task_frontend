import { Route, Routes } from 'react-router-dom';
import './Main.css';
import Header from '../Header'
import Converter from '../Converter';
import ExchangeRate from '../Exchange-rate';
import NotFound from '../NotFound';

function Main(props) {
  const { onSettings, ...restProps } = props;
  return (
    <div className='main'>
      <Header onSettings={onSettings} />
      <Routes>
        <Route path='/' element={<Converter {...restProps} />} />
        <Route path='/exchange-rate' element={<ExchangeRate {...restProps} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default Main;