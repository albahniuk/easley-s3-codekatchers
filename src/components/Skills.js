import React, { Component } from 'react';

class Skills extends Component {
    render() {
        return (
            <div>
                <p className="fill--checkbox__text">Habilidades (máximo 3)</p>
                <div className="checkers">{this.props.skills}</div>
            </div>
        )
    }
}

export default Skills;