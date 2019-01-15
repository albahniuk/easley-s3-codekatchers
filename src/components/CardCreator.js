import React, { Component } from 'react';
import HeaderCreator from './HeaderCreator';
import MainCreator from './MainCreator';
import Footer from './Footer';

class CardCreator extends Component {
    render() {
        return (
            <div className="page">
                <HeaderCreator />
                <MainCreator skills={this.props.skills} name={this.props.name} handleName={this.props.handleName} handleJob={this.props.handleJob} job={this.props.job}/>
                <Footer />
            </div>
        );
    }
}

export default CardCreator;
