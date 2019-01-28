import React, { Component } from 'react';

class Colors extends Component {
    render() {
        return (
            <div className="design--colours">
                <h4 className="design--colours_title">Colores</h4>
                <div className="design--colours_radio">
                    <div className="class__green">
                        <label className="colours" htmlFor="green">
                            <input onChange={this.props.handleColor} className="design_input" type="radio" name="colors" value="1" id="green" checked={this.props.card.palette === '1'} />
                            <div className="design--colours_label">
                                <div className="label_item item_green_1"></div>
                                <div className="label_item item_green_2"></div>
                                <div className="label_item item_green_3"></div>
                            </div>
                        </label>
                    </div>
                    <div className="colours class__red">
                        <input onChange={this.props.handleColor} className="design_input" type="radio" name="colors" value="2" id="red" checked={this.props.card.palette === '2'} />
                        <label htmlFor="red">
                            <div className="design--colours_label">
                                <div className="label_item item_red_1"></div>
                                <div className="label_item item_red_2"></div>
                                <div className="label_item item_red_3"></div>
                            </div>
                        </label>
                    </div>
                    <div className="colours class__blue">
                        <input onChange={this.props.handleColor} className="design_input" type="radio" name="colors" value="3" id="blue" checked={this.props.card.palette === '3'} />
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