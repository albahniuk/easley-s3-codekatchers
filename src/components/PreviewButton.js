import React, { Component } from 'react';

class PreviewButton extends Component {
    render() {
        return(
            <button className="card__button" type="button">
                <span className="button__icon">
                    <i className="button_icon far fa-trash-alt"></i>
                </span>
                <span className="button__text">Reset</span>
            </button>
        );
    }
}

export default PreviewButton;