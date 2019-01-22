import React, { Component } from 'react';

class Fonts extends Component {
    constructor(props){
        super(props);

        this.state = {
            check: 'comic'
        }

        this.handleFontCheck = this.handleFontCheck.bind(this);
    }

    handleFontCheck = e => {
        this.setState({
            check: e.currentTarget.value
        });
    }

    render() {
        return (
            <div className="design--fonts">
                <h4 className="design--colours_title">Fuentes</h4>
                <div className="design--colours_radio">
                    <div className="fonts">
                        <input onChange={this.handleFontCheck} onClick={this.props.handleFonts} className="design_input design_input-font" type="radio" name="fonts" id="ubuntu" value="ubuntu" checked={this.state.check === 'ubuntu'} />
                        <label className="ubuntu" htmlFor="ubuntu">Ubuntu</label>
                    </div>
                    <div className="fonts">
                        <input onChange={this.handleFontCheck} onClick={this.props.handleFonts} className="design_input design_input-font" type="radio" name="fonts" id="comic" value="comic" checked={this.state.check === 'comic'} />
                        <label className="comic" htmlFor="comic">Comic Soon</label>
                    </div>
                    <div className="fonts">
                        <input onChange={this.handleFontCheck} onClick={this.props.handleFonts} className="design_input design_input-font" type="radio" name="fonts" id="montserrat" value="montserrat" checked={this.state.check === 'montserrat'} />
                        <label className="montserrat" htmlFor="montserrat">Montserrat</label>
                    </div>
                </div>
            </div>
        )
    }
}

export default Fonts;