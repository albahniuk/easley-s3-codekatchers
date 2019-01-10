import React, { Component } from 'react';
import CardCreator from './components/CardCreator';
import './App.scss';

const skills = ['html','gulp','javaScript'];



class App extends Component {
  render() {
    return <CardCreator skills={skills}/>
    }
  }
    
export default App;
