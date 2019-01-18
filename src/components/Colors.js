import React, { Component } from 'react';

class Colors extends Component {
    constructor(props){
        super(props);

        this.state = {
            check: 'green'
        }

        this.handleColorCheck = this.handleColorCheck.bind(this);
    }

    handleColorCheck = e => {
        this.setState({
            check: e.currentTarget.value
        });
    }
    
    render() {
        return (
            <div className="design--colours">
                <h4 className="design--colours_title">Colores</h4>
                <div className="design--colours_radio">
                    <div className="clase__green">
                        <label className="clase" htmlFor="green">
                            <input onChange={this.handleColorCheck} onClick={this.props.handleColor} className="design_input" type="radio" name="colors" value="green" id="green" checked={this.state.check === 'green'} />
                            <div className="design--colours_label">
                                <div className="label_item item_green_1"></div>
                                <div className="label_item item_green_2"></div>
                                <div className="label_item item_green_3"></div>
                            </div>
                        </label>
                    </div>
                    <div className="clase clase__red">
                        <input onChange={this.handleColorCheck} onClick={this.props.handleColor} className="design_input" type="radio" name="colors" value="red" id="red" checked={this.state.check === 'red'} />
                        <label htmlFor="red">
                            <div className="design--colours_label">
                                <div className="label_item item_red_1"></div>
                                <div className="label_item item_red_2"></div>
                                <div className="label_item item_red_3"></div>
                            </div>
                        </label>
                    </div>
                    <div className="clase clase__blue">
                        <input onChange={this.handleColorCheck} onClick={this.props.handleColor} className="design_input" type="radio" name="colors" value="blue" id="blue" checked={this.state.check === 'blue'} />
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