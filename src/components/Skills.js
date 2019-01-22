import React, { Component } from 'react';

class Skills extends Component {
    render() {

        const skills = this.props.skills.map((skill, index) => {
            return (
                <div className="fill--checkbox__item" key={index}>
                    <label htmlFor={skill}>
                        <input className="fill--checkbox__input" id={skill} type="checkbox" value={skill} name="skills" onClick={this.props.handleSkills}/>
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