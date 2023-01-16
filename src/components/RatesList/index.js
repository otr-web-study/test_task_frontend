import './RatesList.css';
import RateElement from '../RateElement';

function RatesList({rates}) {
  const ratesElements = Object.keys(rates).map((key) => {
    return (
      <li key={key}>
        <RateElement currency={key} value={rates[key]} />
      </li>
    )
  })
  
  return (
    <ul className='rates-list'>
      {ratesElements}
    </ul>
  );
}

export default RatesList;