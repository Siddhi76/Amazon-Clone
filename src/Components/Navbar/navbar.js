import React from 'react';
import './navbar.css';
import NavbarBelt from './NavbarBelt/navbarBelt';
import NavbarBanner from './NavbarBanner/navbarBanner';

const navbar = () => {
  return (
    <div>
        <NavbarBelt />
        <NavbarBanner />
    </div>
  )
}

export default navbar