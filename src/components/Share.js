import React, { Component } from 'react';

class Share extends Component {
    render() {
        return (
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
        )
    }
}

export default Share;