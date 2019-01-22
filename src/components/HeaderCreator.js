import React, { Component } from 'react';
import mainLogo from './../images/tarjetas-molonas.png';
import { Link } from 'react-router-dom';

class HeaderCreator extends Component {
    render() {
        return (
            <div className="headerCreator_box">
          <header className="headerCreator">
            <Link to='/'>
                <img className="header__image" src={mainLogo} alt="" />
            </Link>
          </header>
        </div>
        )
    }
}

export default HeaderCreator;