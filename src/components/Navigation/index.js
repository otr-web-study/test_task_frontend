import Link from '../Link'
import './Navigation.css'

function Navigation({onSettings}) {
  const classNameFunc = ({ isActive }) => (isActive ? 'link navigation__link navigation__link_active' : 'link navigation__link')
  return (
    <nav className='navigation'>
      <Link href='/' className={classNameFunc}>
        Конвертер
      </Link>
      <Link href='/exchange-rate' className={classNameFunc}>
        Курсы
      </Link>
      <button className='navigation__settings-button' onClick={onSettings}></button>
    </nav>
  );
}

export default Navigation;