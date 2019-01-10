import React, { Component } from 'react';

class Skills extends Component {
    render() {

        const skills = this.props.skills.map(skill => {
            return (
                <div className="fill--checkbox__item">
                    <label htmlFor={skill}>
                        <input className="fill--checkbox__input" id={skill} type="checkbox" value={skill} name="skills" />
                            {skill}
                    </label>
                </div>
            )
        });



        return (
            <div>
                <p className="fill--checkbox__text">Habilidades (máximo 3)</p>
                <div className="checkers">{skills}</div>
            </div>
        )
    }
}

export default Skills;