import React, { Component } from 'react';
import Fonts from './Fonts';
import Colors from './Colors';

class Design extends Component {
    render() {
        return (
            <fieldset className={`design ${this.props.collapsibleDesign}`}>
                <div className="form--btn" onClick={this.props.handleCollapsibleDesign}>
                    <div className="form--btn_title">
                        <i className="far fa-object-ungroup"></i>
                        <h3 className="btn-collapsible">Diseña</h3>
                    </div>
                    <div className="form--btn_icon">
                        <i className={`fas ${this.props.arrowDesign}`}></i>
                    </div>
                </div>
                <div className="section design--section">
                    <Colors handleColor={this.props.handleColor} card={this.props.card}/>
                    <Fonts handleFonts={this.props.handleFonts} card={this.props.card}/>
                </div>
            </fieldset>
        )
    }
}

export default Design;