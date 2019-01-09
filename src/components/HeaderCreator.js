import React, { Component } from 'react';
import mainLogo from './../images/tarjetas-molonas.png';

class HeaderCreator extends Component {
    render() {
        return (
            <div className="headerCreator_box">
          <header className="headerCreator">
            <img className="header__image" src={mainLogo} alt="" />
          </header>
        </div>
        )
    }
}

export default HeaderCreator;