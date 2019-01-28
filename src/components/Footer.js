import React, { Component } from 'react';
import logo from './../images/logo-adalab-80px.png';

class Footer extends Component {
    render() {
        return (
            <footer className="footer_box">
                <div className="footer_box-container">
                    <div>
                        <p className="footer_par">Awesome profile-cards @2018</p>
                    </div>
                    <div>
                        <a href="https://adalab.es/">
                            <img className="footer_logo" src={logo} alt="" />
                        </a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;