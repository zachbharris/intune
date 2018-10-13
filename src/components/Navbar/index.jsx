import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header className="navbar">
    <Link to="/" className="brand">InTune</Link>
  </header>
);

export default Navbar;
