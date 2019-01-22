import React, { Component } from 'react';
import {sendCard} from './../services/CardService';

class Share extends Component {
    constructor(props) {
        super(props);
        this.state = {
          twitter: 'twitter',
          linkTwitter: '',
          linkCard: '' 
        }
        this.handleShare = this.handleShare.bind(this);
    }

    handleShare() {
        sendCard(this.props.card)
            .then(url => {
                this.setState({
                    twitter: 'on',
                    linkTwitter: `https://twitter.com/share?url=${url.cardURL}&text=Lo peto con mi tarjeta personal! by Sticker Fighters&hashtags=JavaScript, Adalab`,
                    linkCard: url.cardURL
                })        
            })
            .catch(err => alert('Servicio no disponible.\nError: ' + err));
    } 

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
                        <button onClick={this.handleShare} className="create-btn" type="button">
                            <i className="far fa-address-card"></i>
                            <h3 className="create-title">Crear tarjeta</h3>
                        </button>
                    </div>
                </div>
                <div className={`share__wrapper ${this.state.twitter}`}>
                    <div className="share-created">
                        <p className="text-created">La tarjeta ha sido creada:</p>
                    <div className="link-created">
                        <a href={this.state.linkCard} target="_blank">{this.state.linkCard}</a>
                    </div>
                    </div>
                    <a className="link-twitter" href={this.state.linkTwitter} target="_blank">
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