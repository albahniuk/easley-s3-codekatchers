import React, { Component } from 'react';
import MainForm from './MainForm';
import MainPreview from './MainPreview';

class MainCreator extends Component {
    render() {
        return (
            <main className="main__parts">
                <MainPreview name={this.props.name} job={this.props.job}/>
                <MainForm skills={this.props.skills} handleName={this.props.handleName} handleJob={this.props.handleJob}/>
            </main>
        );
    }
}

export default MainCreator;

