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
                <Design handleColor={this.props.handleColor} handleFonts={this.props.handleFonts} card={this.props.card}/>
                <Fill skills={this.props.skills} preview={this.props.preview} handleName={this.props.handleName} handleJob={this.props.handleJob} handleUrl={this.props.handleUrl} handleEmail={this.props.handleEmail} handlePhone={this.props.handlePhone} handleLinkedin={this.props.handleLinkedin} handleGithub={this.props.handleGithub} handleSkills={this.props.handleSkills} card={this.props.card}/>
                <Share card={this.props.card} />
            </form>
        );
    }
}

export default MainForm;