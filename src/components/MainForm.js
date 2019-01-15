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
                <Design />
                <Fill skills={this.props.skills} name={this.props.name} handleName={this.props.handleName} handleJob={this.props.handleJob}/>
                <Share />
            </form>
        );
    }
}

export default MainForm;