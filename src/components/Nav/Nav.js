import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import cls from '../Navbar/Navbar.module.css'
function Navb() {
  return (
    <div className={cls.mobile} >
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand ><NavLink to={'/'} >ZEYTUN-TEX</NavLink></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <NavLink to={'/'} className={({ isActive }) => isActive ? cls.selected : cls.navItem}>HOME</NavLink>
              <NavLink to={'/products'} className={({ isActive }) => isActive ? cls.selected : cls.navItem} >PRODUCTS</NavLink>
              <NavLink to={'/about'} className={({ isActive }) => isActive ? cls.selected : cls.navItem} >ABOUT</NavLink>
              <NavLink to={'/contact'} className={({ isActive }) => isActive ? cls.selected : cls.navItem}>CONTACT</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navb;