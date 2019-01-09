import React, { Component } from 'react';

class MainPreview extends Component {
    render() {
        return (
            <section className="cardSection">
                <div className="card">
                    <div className="card__wrapper" id="card__wrapper">
                        <div className="card__titles">
                            <h2 className="title__name">nombre apellido</h2>
                            <p className="title__profession">front-end developer</p>
                        </div>
                        <div className="card__image">
                            <img src="" alt="" className="image__photo" />
                        </div>
                        <ul className="card__list card__contact-list">
                            <li className="contact-list__element contact-list__phone">
                            </li>
                            <li className="contact-list__element contact-list__mail">
                            </li>
                            <li className="contact-list__element contact-list__linkedin">
                            </li>
                            <li className="contact-list__element contact-list__github">
                            </li>
                        </ul>
                        <ul className="card__list card__skills-list" id="ul-skills">
                        </ul>
                        <button className="card__button" type="button">
                            <span className="button__icon">
                                <i className="button_icon far fa-trash-alt"></i>
                            </span>
                            <span className="button__text">Reset</span>
                        </button>
                    </div>
                </div>
            </section>
        )
    }
}

export default MainPreview;