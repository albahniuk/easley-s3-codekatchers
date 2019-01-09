import React, { Component } from 'react';

class Fonts extends Component {
    render() {
        return (
            <div className="design--fonts">
                <h4 className="design--colours_title">Fuentes</h4>
                <div className="design--colours_radio">
                    <div className="fonts">
                        <input className="design_input design_input-font" type="radio" name="fonts" id="ubuntu" />
                        <label className="ubuntu" htmlFor="ubuntu">Ubuntu</label>
                    </div>
                    <div className="fonts">
                        <input className="design_input design_input-font" type="radio" name="fonts" id="comic" checked />
                        <label className="comic" htmlFor="comic">Comic Soon</label>
                    </div>
                    <div className="fonts">
                        <input className="design_input design_input-font" type="radio" name="fonts" id="montserrat" />
                        <label className="montserrat" htmlFor="montserrat">Montserrat</label>
                    </div>
                </div>
            </div>
        )
    }
}

export default Fonts;