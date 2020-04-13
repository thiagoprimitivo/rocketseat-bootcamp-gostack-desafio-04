import React, { Component } from 'react';

import Logo from './Logo';
import LinkPerfil from './LinkPerfil';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="topo">
        <Logo />
        <LinkPerfil />
      </div>
    );  
  }
}

export default Header;