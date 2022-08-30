import { faGlobe, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import cls from './Navbar.module.css';
export default function Navbar() {
  return (
    <div className={cls.main}>
      <div className={cls.left}>
        <span><FontAwesomeIcon icon={faPhone} className={cls.icon} />
          +998951057870
        </span>
        <span><FontAwesomeIcon icon={faLocationDot} className={cls.icon} />UZBEKISTAN</span>
      </div>
      <div className={cls.mid}>
        <NavLink to={'/'} className={({ isActive }) => isActive ? cls.selected : cls.navItem}>Home</NavLink>
        <NavLink to={'/products'} className={({ isActive }) => isActive ? cls.selected : cls.navItem} >Products</NavLink>
        <NavLink to={'/about'} className={({ isActive }) => isActive ? cls.selected : cls.navItem} >About</NavLink>
        <NavLink to={'/contact'} className={({ isActive }) => isActive ? cls.selected : cls.navItem}>contact</NavLink>
      </div>
      <div className={cls.right}>
        <span><FontAwesomeIcon icon={faGlobe} className={cls.icon} /></span>
        <select >
          <option value="">RU</option>
          <option value="">EN</option>
        </select>
      </div>
    </div>
  )
}
