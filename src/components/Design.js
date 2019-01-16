import React, { Component } from 'react';
import Fonts from './Fonts';
import Colors from './Colors';

class Design extends Component {
    render() {
        return (
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
                    <Colors handleColor={this.props.handleColor}/>
                    <Fonts />
                </div>
            </fieldset>
        )
    }
}

export default Design;