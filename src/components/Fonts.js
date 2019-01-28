import React, { Component } from 'react';

class Fonts extends Component {
    render() {
        return (
            <div className="design--fonts">
                <h4 className="design--colours_title">Fuentes</h4>
                <div className="design--colours_radio">
                    <div className="fonts">
                        <input onChange={this.props.handleFonts} className="design_input design_input-font" type="radio" name="fonts" id="ubuntu" value="1" checked={this.props.card.typography === '1'} />
                        <label className="ubuntu" htmlFor="ubuntu">Ubuntu</label>
                    </div>
                    <div className="fonts">
                        <input onChange={this.props.handleFonts} className="design_input design_input-font" type="radio" name="fonts" id="comic" value="2" checked={this.props.card.typography === '2'} />
                        <label className="comic" htmlFor="comic">Comic Soon</label>
                    </div>
                    <div className="fonts">
                        <input onChange={this.props.handleFonts} className="design_input design_input-font" type="radio" name="fonts" id="montserrat" value="3" checked={this.props.card.typography === '3'} />
                        <label className="montserrat" htmlFor="montserrat">Montserrat</label>
                    </div>
                </div>
            </div>
        )
    }
}

export default Fonts;