import React, { Component } from 'react';
import HeaderCreator from './HeaderCreator';
import MainCreator from './MainCreator';
import Footer from './Footer';

class CardCreator extends Component {
    render() {
        return (
            <div className="page">
                <HeaderCreator />
                <MainCreator card={this.props.card} skills={this.props.skills} handleName={this.props.handleName} handleJob={this.props.handleJob} handleUrl={this.props.handleUrl} handleEmail={this.props.handleEmail} handlePhone={this.props.handlePhone} handleLinkedin={this.props.handleLinkedin} handleGithub={this.props.handleGithub} handleColor={this.props.handleColor} handleFonts={this.props.handleFonts}/>
                <Footer />
            </div>
        );
    }
}

export default CardCreator;
