import React, { Component } from 'react';
import HeaderCreator from './HeaderCreator';
import MainCreator from './MainCreator';
import Footer from './Footer';

class CardCreator extends Component {
    render() {
        return (
            <div className="page">
                <HeaderCreator />
                <MainCreator />
                <Footer />
            </div>
        );
    }
}

export default CardCreator;
