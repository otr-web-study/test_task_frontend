import Link from '../Link'
import './Navigation.css'

function Navigation() {
  const classNameFunc = ({ isActive }) => (isActive ? 'link navigation__link navigation__link_active' : 'link navigation__link')
  return (
    <nav className='navigation'>
      <Link href='/' className={classNameFunc}>
        Конвертер
      </Link>
      <Link href='/exchange-rate' className={classNameFunc}>
        Курсы
      </Link>
    </nav>
  );
}

export default Navigation;