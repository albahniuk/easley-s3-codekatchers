import React, { Component } from 'react';
import NameJob from './NameJob';
import Image from './Image';
import SocialMedia from './SocialMedia';
import Skills from './Skills';

class Fill extends Component {
    render() {
        return (
            <fieldset className={`fill--page ${this.props.collapsibleFill}`}>
                <div onClick={this.props.handleCollapsibleFill} className="form--btn">
                    <div className="form--btn_title">
                        <i className="far fa-keyboard"></i>
                        <h3 className="btn-desplegable">Rellena</h3>
                    </div>
                    <div className="form--btn_icon">
                        <i className={`fas ${this.props.arrowFill}`}></i>
                    </div>
                </div>
                <div className="section fill--content">
                    <NameJob handleName={this.props.handleName} handleJob={this.props.handleJob}/>
                    <Image handleUrl={this.props.handleUrl} preview={this.props.preview} card={this.props.card}/>
                    <SocialMedia handleEmail={this.props.handleEmail} handlePhone={this.props.handlePhone} handleLinkedin={this.props.handleLinkedin} handleGithub={this.props.handleGithub}/>
                    <Skills skills={this.props.skills} handleSkills={this.props.handleSkills}/>
                </div>
            </fieldset>
        )
    }
}

export default Fill;