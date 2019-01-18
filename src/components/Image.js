import React, { Component } from 'react';

const reader = new FileReader();

class Image extends Component {
    constructor(props){
        super(props);
        this.fileInput = React.createRef();

        this.handleChangeImage = this.handleChangeImage.bind(this);
        this.handleLoadImage = this.handleLoadImage.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.fileInput.current.click();
    }

    handleChangeImage(e) {

        const files = e.currentTarget.files[0];

        reader.addEventListener('load', this.handleLoadImage);
        reader.readAsDataURL(files);
    
    }

    handleLoadImage() {
        const url = reader.result;
        this.props.handleUrl(url);
    }

    render() {
        return (
            <div className="fill--form__btn">
                <label className="fill--form_label" htmlFor="image">Imagen de perfil</label>
                <div className="fill--wraper">
                    <button type="button" className="fill--btn" onClick={this.handleClick}>Añadir imagen</button>
                    <input className="search--btn" type="file" id="img-selector" onChange={this.handleChangeImage} ref={this.fileInput} />
                    <div className="fill--input__img"></div>
                </div>
            </div>
        )
    }
}

export default Image;