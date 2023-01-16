import './RateElement.css';

function RateElement({currency, value}) {
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(value);
  }

  return (
    <div className='rate-element'>
      <p className='rate-element__currency'>{currency}</p>
      <p className='rate-element__value'>{value}</p>
      <button 
        className='rate-element__button-copy'
        onClick={handleCopyToClipboard}></button>
    </div>
  )
}

export default RateElement;