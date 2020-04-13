import React, { Component } from 'react';

import icon from '../../assets/user-icon-white.png';
import './LinkPerfil.css';


class LinkPerfil extends Component {
  render() {
    return (
      <div>
        <a href="#" className="link">Meu perfil</a>
        <img src={icon} width="25px" height="25px" className="icon"/>
      </ div>  
    )
  }
}

export default LinkPerfil;
