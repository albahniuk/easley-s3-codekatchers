import React, { Component } from 'react';

class Colors extends Component {
    render() {
        return (
            <div className="design--colours">
                <h4 className="design--colours_title">Colores</h4>
                <div className="design--colours_radio">
                    <div className="clase__green">
                        <label className="clase" htmlFor="green">
                            <input onClick={this.props.handleColor} className="design_input" type="radio" name="colors" value="green" id="green" checked/>
                            <div className="design--colours_label">
                                <div className="label_item item_green_1"></div>
                                <div className="label_item item_green_2"></div>
                                <div className="label_item item_green_3"></div>
                            </div>
                        </label>
                    </div>
                    <div className="clase clase__red">
                        <input onClick={this.props.handleColor} className="design_input" type="radio" name="colors" value="red" id="red" />
                        <label htmlFor="red">
                            <div className="design--colours_label">
                                <div className="label_item item_red_1"></div>
                                <div className="label_item item_red_2"></div>
                                <div className="label_item item_red_3"></div>
                            </div>
                        </label>
                    </div>
                    <div className="clase clase__blue">
                        <input onClick={this.props.handleColor} className="design_input" type="radio" name="colors" value="blue" id="blue" />
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
        )
    }
}

export default Colors;