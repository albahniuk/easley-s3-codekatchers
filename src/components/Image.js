import React, { Component } from 'react';

class Image extends Component {
    render() {
        return (
            <div className="fill--form__btn">
                <label className="fill--form_label" htmlFor="image">Imagen de perfil</label>
                <div className="fill--wraper">
                    <button type="button" className="fill--btn">Añadir imagen</button>
                    <input className="search--btn" type="file" id="img-selector" />
                    <div className="fill--input__img"></div>
                </div>
            </div>
        )
    }
}

export default Image;