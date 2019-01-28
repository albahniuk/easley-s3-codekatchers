import React, { Component } from 'react';

class NameJob extends Component {
    render() {
        return (
            <div>
                <div className="fill--form">
                    <label className="fill--form_label" htmlFor="full_name">Nombre completo</label>
                    <input className="fill--form_input" placeholder=" Ej: Sally Jill" id="full_name" type="text" name="full_name"
                        data-vinculo="title__name" maxLength="20" onKeyUp={this.props.handleName} />
                </div>
                <div className="fill--form">
                    <label className="fill--form_label" htmlFor="position">Puesto</label>
                    <input className="fill--form_input" placeholder=" Ej: Front-end unicorn" id="position" type="text" name="position"
                        data-vinculo="title__profession" maxLength="20" onKeyUp={this.props.handleJob} />
                </div>
            </div>
        )
    }
}

export default NameJob;
