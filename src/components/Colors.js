import React, { Component } from 'react';

class Colors extends Component {
    
    render() {
        return (
            <div className="design--colours">
                <h4 className="design--colours_title">Colores</h4>
                <div className="design--colours_radio">
                    <div className="clase__green">
                        <label className="clase" htmlFor="green">
                            <input onChange={this.handleColorCheck} onClick={this.props.handleColor} className="design_input" type="radio" name="colors" value="1" id="green" checked={this.props.card.palette === '1'} />
                            <div className="design--colours_label">
                                <div className="label_item item_green_1"></div>
                                <div className="label_item item_green_2"></div>
                                <div className="label_item item_green_3"></div>
                            </div>
                        </label>
                    </div>
                    <div className="clase clase__red">
                        <input onChange={this.handleColorCheck} onClick={this.props.handleColor} className="design_input" type="radio" name="colors" value="2" id="red" checked={this.props.card.palette === '2'} />
                        <label htmlFor="red">
                            <div className="design--colours_label">
                                <div className="label_item item_red_1"></div>
                                <div className="label_item item_red_2"></div>
                                <div className="label_item item_red_3"></div>
                            </div>
                        </label>
                    </div>
                    <div className="clase clase__blue">
                        <input onChange={this.handleColorCheck} onClick={this.props.handleColor} className="design_input" type="radio" name="colors" value="3" id="blue" checked={this.props.card.palette === '3'} />
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