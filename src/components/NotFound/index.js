import { useNavigate  } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  const navigate = useNavigate();
  
  const handleButtonBackClick = () => {
    navigate(-1);
  }

  return (
    <section className='not-found'>
      <div className='not-found__elements'>
        <h1 className='not-found__title'>404</h1>
        <p className='not-found__text'>Страница не найдена</p>
        <button className='not-found__button-back' onClick={handleButtonBackClick}>
          Назад
        </button>
      </div>
    </section>
  );
}

export default NotFound;