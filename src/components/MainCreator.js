import React, { Component } from 'react';
import MainForm from './MainForm';
import MainPreview from './MainPreview';

class MainCreator extends Component {
    render() {
        return (
            <main className="main__parts">
                <MainPreview />
                <MainForm skills={this.props.skills} name={this.props.name}/>
            </main>
        );
    }
}

export default MainCreator;