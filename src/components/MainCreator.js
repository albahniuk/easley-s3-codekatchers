import React, { Component } from 'react';
import MainForm from './MainForm';
import MainPreview from './MainPreview';

class MainCreator extends Component {
    render() {
        return (
            <main className="main__parts">
                <MainPreview card={this.props.card}/>
                <MainForm skills={this.props.skills} handleName={this.props.handleName} handleJob={this.props.handleJob} handleUrl={this.props.handleUrl} handleEmail={this.props.handleEmail} handlePhone={this.props.handlePhone} handleLinkedin={this.props.handleLinkedin} handleGithub={this.props.handleGithub}/>
            </main>
        );
    }
}

export default MainCreator;

