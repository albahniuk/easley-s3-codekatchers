import React, { Component } from 'react';

class MainForm extends Component {
    render() {
        return (
            <form className="form" method="post">
                <div className="error__wrapper hidden">
                    Campo de email obligatorio
  </div>
                <fieldset className="design">
                    <div className="form--btn">
                        <div className="form--btn_title">
                            <i className="far fa-object-ungroup"></i>
                            <h3 className="btn-desplegable">Diseña</h3>
                        </div>
                        <div className="form--btn_icon">
                            <i className="fas fa-chevron-down"></i>
                        </div>
                    </div>
                    <div className="section design--section">
                        <div className="design--colours">
                            <h4 className="design--colours_title">Colores</h4>
                            <div className="design--colours_radio">
                                <div className="clase__green">
                                    <label className="clase" htmlFor="green">
                                        <input className="design_input" type="radio" name="colors" value="green" id="green" checked />
                                        <div className="design--colours_label">
                                            <div className="label_item item_green_1"></div>
                                            <div className="label_item item_green_2"></div>
                                            <div className="label_item item_green_3"></div>
                                        </div>
                                    </label>
                                </div>
                                <div className="clase clase__red">
                                    <input className="design_input" type="radio" name="colors" value="red" id="red" />
                                    <label htmlFor="red">
                                        <div className="design--colours_label">
                                            <div className="label_item item_red_1"></div>
                                            <div className="label_item item_red_2"></div>
                                            <div className="label_item item_red_3"></div>
                                        </div>
                                    </label>
                                </div>
                                <div className="clase clase__blue">
                                    <input className="design_input" type="radio" name="colors" value="blue" id="blue" />
                                    <label htmlFor="blue">
                                        <div className="design--colours_label">
                                            <div className="label_item item_blue_1"></div>
                                            <div className="label_item item_blue_2"></div>
                                            <div className="label_item item_blue_3"></div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="design--fonts">
                            <h4 className="design--colours_title">Fuentes</h4>
                            <div className="design--colours_radio">
                                <div className="fonts">
                                    <input className="design_input design_input-font" type="radio" name="fonts" id="ubuntu" />
                                    <label className="ubuntu" htmlFor="ubuntu">Ubuntu</label>
                                </div>
                                <div className="fonts">
                                    <input className="design_input design_input-font" type="radio" name="fonts" id="comic" checked />
                                    <label className="comic" htmlFor="comic">Comic Soon</label>
                                </div>
                                <div className="fonts">
                                    <input className="design_input design_input-font" type="radio" name="fonts" id="montserrat" />
                                    <label className="montserrat" htmlFor="montserrat">Montserrat</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </fieldset>

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
                        <div className="fill--form">
                            <label className="fill--form_label" htmlFor="full_name">Nombre completo</label>
                            <input className="fill--form_input" placeholder=" Ej: Sally Jill" id="full_name" type="text" name="full_name"
                                data-vinculo="title__name" maxLength="20" />
                        </div>
                        <div className="fill--form">
                            <label className="fill--form_label" htmlFor="position">Puesto</label>
                            <input className="fill--form_input" placeholder=" Ej: Front-end unicorn" id="position" type="text" name="position"
                                data-vinculo="title__profession" maxLength="20" />
                        </div>

                        <div className="fill--form__btn">
                            <label className="fill--form_label" htmlFor="image">Imagen de perfil</label>
                            <div className="fill--wraper">
                                <button type="button" className="fill--btn">Añadir imagen</button>
                                <input className="search--btn" type="file" id="img-selector" />
                                <div className="fill--input__img"></div>
                            </div>

                        </div>

                        <div className="fill--form">
                            <label className="fill--form_label" htmlFor="email">Email</label>
                            <input className="fill--form_input" placeholder=" Ej: sally-hill@gmail.com" id="email" type="email" name="email" />
                        </div>

                        <div className="fill--form">
                            <label className="fill--form_label" htmlFor="telNumber">Teléfono</label>
                            <input className="fill--form_input" placeholder=" Ej: 555-55-55-55" id="telNumber" type="tel" name="telNumber" />
                        </div>

                        <div className="fill--form">
                            <label className="fill--form_label" htmlFor="linkedin">Linkedin</label>
                            <input className="fill--form_input" placeholder=" Ej: sally.hill" id="linkedin" type="text"
                                name="linkedin" />
                        </div>

                        <div className="fill--form">
                            <label className="fill--form_label" htmlFor="github">Github</label>
                            <input className="fill--form_input" placeholder=" Ej: sally-hill" id="github" type="text" name="github" />
                        </div>
                        <p className="fill--checkbox__text">Habilidades (máximo 3)</p>
                        <div className="checkers"></div>
                    </div>
                </fieldset>

                <fieldset className="share">
                    <div className="share__wrapper">
                        <div className="form--btn">
                            <div className="form--btn_title">
                                <i className="fas fa-share-alt"></i>
                                <h3 className="btn-desplegable">Comparte</h3>
                            </div>
                            <div className="form--btn_icon">
                                <i className="fas fa-chevron-down"></i>
                            </div>
                        </div>
                        <div className="section btn-create-card">
                            <button className="create-btn" type="button">
                                <i className="far fa-address-card"></i>
                                <h3 className="create-title">Crear tarjeta</h3>
                            </button>
                        </div>
                    </div>
                    <div className="share__wrapper twitter">
                        <div className="share-created">
                            <p className="text-created">La tarjeta ha sido creada:</p>
                            <div className="link-created"></div>
                        </div>
                        <a className="link-twitter" href="" target="_blank">
                            <button className="share-twitter" type="button">
                                <i className="fab fa-twitter"></i>
                                <span className="text-twitter">Compartir en Twitter</span>
                            </button>
                        </a>
                    </div>
                </fieldset>
            </form>
        );
    }
}

export default MainForm;