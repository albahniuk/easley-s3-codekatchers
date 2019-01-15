import React, { Component } from 'react';
import NameJob from './NameJob';
import Image from './Image';
import SocialMedia from './SocialMedia';
import Skills from './Skills';

class Fill extends Component {
    render() {
        return (
            <fieldset className="fill--page">
                <div className="form--btn">
                    <div className="form--btn_title">
                        <i className="far fa-keyboard"></i>
                        <h3 className="btn-desplegable">Rellena</h3>
                    </div>
                    <div className="form--btn_icon">
                        <i className="fas fa-chevron-down"></i>
                    </div>
                </div>
                <div className="section fill--content">
                    <NameJob handleName={this.props.handleName} handleJob={this.props.handleJob}/>
                    <Image />
                    <SocialMedia />
                    <Skills  skills={this.props.skills}/>
                </div>
            </fieldset>
        )
    }
}

export default Fill;