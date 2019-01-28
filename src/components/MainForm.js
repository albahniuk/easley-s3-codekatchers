import React, { Component } from 'react';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';

class MainForm extends Component {
    render() {
        return (
            <form className="form" method="post">
                <div className="error__wrapper hidden">
                    Campo de email obligatorio
                </div>
                <Design collapsibleDesign={this.props.collapsibleDesign} handleColor={this.props.handleColor} handleFonts={this.props.handleFonts} handleCollapsibleDesign={this.props.handleCollapsibleDesign} arrowDesign={this.props.arrowDesign} card={this.props.card} />
                <Fill card={this.props.card} skills={this.props.skills} collapsibleFill={this.props.collapsibleFill} arrowFill={this.props.arrowFill} preview={this.props.preview} handleName={this.props.handleName} handleJob={this.props.handleJob} handleUrl={this.props.handleUrl} handleEmail={this.props.handleEmail} handlePhone={this.props.handlePhone} handleLinkedin={this.props.handleLinkedin} handleGithub={this.props.handleGithub} handleSkills={this.props.handleSkills} handleCollapsibleFill={this.props.handleCollapsibleFill} />
                <Share card={this.props.card} arrowShare={this.props.arrowShare} collapsibleShare={this.props.collapsibleShare} handleCollapsibleShare={this.props.handleCollapsibleShare} />
            </form>
        );
    }
}

export default MainForm;