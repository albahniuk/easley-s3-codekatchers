import React, { Component } from 'react';

class SocialMedia extends Component {
    render() {
        return (
            <div>
                <div className="fill--form">
                    <label className="fill--form_label" htmlFor="email">Email</label>
                    <input onKeyUp={this.props.handleEmail} className="fill--form_input" placeholder=" Ej: sally-hill@gmail.com" id="email" type="email" name="email" />
                </div>
                <div className="fill--form">
                    <label className="fill--form_label" htmlFor="telNumber">Teléfono</label>
                    <input onKeyUp={this.props.handlePhone}className="fill--form_input" placeholder=" Ej: 555-55-55-55" id="telNumber" type="tel" name="telNumber" />
                </div>
                <div className="fill--form">
                    <label className="fill--form_label" htmlFor="linkedin">Linkedin</label>
                    <input onKeyUp={this.props.handleLinkedin}className="fill--form_input" placeholder=" Ej: sally.hill" id="linkedin" type="text"
                        name="linkedin" />
                </div>
                <div className="fill--form">
                    <label className="fill--form_label" htmlFor="github">Github</label>
                    <input onKeyUp={this.props.handleGithub} className="fill--form_input" placeholder=" Ej: sally-hill" id="github" type="text" name="github" />
                </div>
            </div>
        )
    }
}

export default SocialMedia;