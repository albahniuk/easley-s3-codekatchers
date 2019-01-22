import React, { Component } from 'react';
import MainForm from './MainForm';
import MainPreview from './MainPreview';

class MainCreator extends Component {
    render() {
        return (
            <main className="main__parts">
                <MainPreview card={this.props.card}/>
                <MainForm card={this.props.card} skills={this.props.skills} preview={this.props.preview} handleName={this.props.handleName} handleJob={this.props.handleJob} handleUrl={this.props.handleUrl} handleEmail={this.props.handleEmail} handlePhone={this.props.handlePhone} handleLinkedin={this.props.handleLinkedin} handleGithub={this.props.handleGithub} handleColor={this.props.handleColor} handleFonts={this.props.handleFonts} handleSkills={this.props.handleSkills}/>
            </main>
        );
    }
}

export default MainCreator;

