import './ButtonClosePopup.css';

function ButtonClosePopup({onClose}) {
  const handleButtonClick = () => {
    onClose && onClose();
  }

  return (
    <button className='button-close-popup' onClick={handleButtonClick}></button>
  );
}

export default ButtonClosePopup;