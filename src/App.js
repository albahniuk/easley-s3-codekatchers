import React, { Component } from 'react';
import CardCreator from './components/CardCreator';
import './App.scss';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      skills: ['html','gulp','javaScript'],
      name: 'Nombre Apellido' 
    }
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleKeyUp(e) {
    let guilty = e.currentTarget.value;
    this.setState({
      name: guilty
    });
  }

  render() {
    return (
      <React.Fragment>
        <CardCreator skills={this.state.skills} name={this.state.name} />
        <input type="text" onKeyUp={this.handleKeyUp}/>
        <div>{this.state.name}</div>
      </React.Fragment>
    )
    }
  }
    
export default App;
