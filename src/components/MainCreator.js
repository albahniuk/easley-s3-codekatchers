import React, { Component } from 'react';
import MainForm from './MainForm';
import MainPreview from './MainPreview';

class MainCreator extends Component {
    render() {
        return (
            <main className="main__parts">
                <MainPreview card={this.props.card} handleReset={this.props.handleReset} />
                <MainForm card={this.props.card} skills={this.props.skills} collapsibleDesign={this.props.collapsibleDesign} collapsibleFill={this.props.collapsibleFill} collapsibleShare={this.props.collapsibleShare} arrowDesign={this.props.arrowDesign} arrowFill={this.props.arrowFill} arrowShare={this.props.arrowShare} preview={this.props.preview} handleName={this.props.handleName} handleJob={this.props.handleJob} handleUrl={this.props.handleUrl} handleEmail={this.props.handleEmail} handlePhone={this.props.handlePhone} handleLinkedin={this.props.handleLinkedin} handleGithub={this.props.handleGithub} handleColor={this.props.handleColor} handleFonts={this.props.handleFonts} handleSkills={this.props.handleSkills} handleCollapsibleDesign={this.props.handleCollapsibleDesign} handleCollapsibleFill={this.props.handleCollapsibleFill} handleCollapsibleShare={this.props.handleCollapsibleShare} />
            </main>
        );
    }
}

export default MainCreator;

