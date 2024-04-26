import React from 'react';
import { NavLink } from 'react-router-dom';
// import LoginContainer from '../login/LoginContainer';
import logo from '../../assets/csslogo.png';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo"><img src={logo} alt="logo" width="100"/></div>
      <nav className="nav-menu">
        <NavLink to="/test" className={({isActive}) => (isActive ? "active" : 'none')}>
        Test page
        </NavLink>
        <NavLink to="/basiccss" className={({isActive}) => (isActive ? "active" : 'none')}>
          Basic css
        </NavLink>
        <NavLink to="/cssmodules" className={({isActive}) => (isActive ? "active" : 'none')}>
          Css modules
        </NavLink>
        <NavLink to="/basicflex" className={({isActive}) => (isActive ? "active" : 'none')}>
          Basic Flex
        </NavLink>
        <NavLink to="/flexbox" className={({isActive}) => (isActive ? "active" : 'none')}>
          Flexbox
        </NavLink>
        <NavLink to="/cssgrid" className={({isActive}) => (isActive ? "active" : 'none')}>
          Css grid
        </NavLink>
        <NavLink to="/tailwind" className={({isActive}) => (isActive ? "active" : 'none')}>
          Tailwind
        </NavLink>
        <NavLink to="/styledcomponents" className={({isActive}) => (isActive ? "active" : 'none')}>
          Styled Components
        </NavLink>
        {/* <LoginContainer facade={facade} setUserContext={setUserContext} /> */}
      </nav>
    </header>
  );
};

export default Header;
