import './Header.css'
import Logo from '../Logo'
import Navigation from '../Navigation'

function Header({onSettings}) {
  return (
    <header className='header'>
      <Logo />
      <Navigation onSettings={onSettings} />
    </header>
  );
}

export default Header;