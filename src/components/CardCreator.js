import React, { Component } from 'react';
import HeaderCreator from './HeaderCreator';
import MainCreator from './MainCreator';
import Footer from './Footer';

class CardCreator extends Component {
    render() {
        return (
            <div className="page">
                <HeaderCreator />
                <MainCreator card={this.props.card} skills={this.props.skills} collapsibleDesign={this.props.collapsibleDesign} collapsibleFill={this.props.collapsibleFill} collapsibleShare={this.props.collapsibleShare} arrowDesign={this.props.arrowDesign} arrowFill={this.props.arrowFill} arrowShare={this.props.arrowShare} preview={this.props.preview} handleName={this.props.handleName} handleJob={this.props.handleJob} handleUrl={this.props.handleUrl} handleEmail={this.props.handleEmail} handlePhone={this.props.handlePhone} handleLinkedin={this.props.handleLinkedin} handleGithub={this.props.handleGithub} handleColor={this.props.handleColor} handleFonts={this.props.handleFonts} handleSkills={this.props.handleSkills} handleCollapsibleDesign={this.props.handleCollapsibleDesign} handleCollapsibleFill={this.props.handleCollapsibleFill} handleCollapsibleShare={this.props.handleCollapsibleShare} handleReset={this.props.handleReset} />
                <Footer />
            </div>
        );
    }
}

export default CardCreator;
