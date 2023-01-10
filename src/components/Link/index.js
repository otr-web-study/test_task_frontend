import { NavLink } from 'react-router-dom';
import './Link.css'

function Link({ children, href, exact, className, onClick }) {
  const handleClick = () => {
    onClick && onClick();
  }
  return (
    <NavLink
      to={href}
      exact={exact}
      onClick={handleClick}
      className={className}>
      {children}
    </NavLink>
  );
}

export default Link;