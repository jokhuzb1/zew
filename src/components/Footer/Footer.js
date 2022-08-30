import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import cls from './Footer.module.css'
export default function Footer() {
  const date = new Date().getFullYear()
  return (

    <div className={cls.main}>
      <div className={cls.footer}>
        <ul>
          <Link to='products'>Products</Link>
          <li>Poplin</li>
          <li>Bozlen</li>
        </ul>
        <ul>
          <Link to='about'>About</Link>
          <li>Company</li>
          <li>Technology</li>
        </ul>
        <ul>

          <Link to='contact'>Contact</Link>
          <li>Leave Email</li>
          <li>Request phone/zoom call</li>
        </ul>
      </div>
      <div className={cls.bottom}>
        <span><FontAwesomeIcon className={cls.icon} icon={faCopyright} />Copyright  {date} Zeytun Textile </span>
        <span><FontAwesomeIcon className={cls.icon} icon={faCode} /> Developed by Odis Development and Design Studio</span>
      </div>
    </div>
  )
}
