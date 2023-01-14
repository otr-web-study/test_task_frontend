import './Footer.css';
import ExternalLink from '../ExternalLink';

function Footer() {
  return (
    <footer className='footer'>
      <h2 className='footer__title'>
        Мой первый тестовый проект.
      </h2>
      <div className='footer__container'>
        <p className='footer__copyright'>
          &copy; 2023
        </p>
        <nav>
          <ul className='footer_links'>
            <li>
              <ExternalLink 
                href='https://github.com/otr-web-study'
                className='external-link footer__link'>Github</ExternalLink>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer;