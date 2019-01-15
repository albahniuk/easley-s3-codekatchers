import React, { Component } from 'react';
import CardCreator from './components/CardCreator';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: ['html', 'gulp', 'javaScript'],
      card: {
        name: 'Nombre Apellido',
        job: 'Front-end developer'
      }
    }
    this.handleName = this.handleName.bind(this);
    this.handleJob = this.handleJob.bind(this);
  }

  handleName(e) {
    const cardState = this.state.card;
    this.setState(
      {
        card: { ...cardState, name: e.currentTarget.value }
      });
  }

  handleJob(e) {
    const cardState = this.state.card;
    this.setState(
      {
        card: { ...cardState, job: e.currentTarget.value }
      });
  }
  render() {
    return (
      <React.Fragment>
        <CardCreator skills={this.state.skills} name={this.state.card.name} handleName={this.handleName} handleJob={this.handleJob} job={this.state.card.job}/>
        {/* para pasar de CardCreator a hijos poner en cardCreator el name={this.state.name} y el onkeyup={this.handlekeyup}. Luego el name tiene que ir tanto en el sitio donde escibe el usuario como en el sitio donde se pinta */}
        {/* <input type="text" onKeyUp={this.handleKeyUp} defaultValue={this.state.name} />
        <div>{this.state.card.name}</div> */}
      </React.Fragment>
    )
  }
}

export default App;
