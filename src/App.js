import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import CardCreator from './components/CardCreator';
import { fetchSkills } from './services/SkillsService';
import {defaultImg} from './components/DefaultImg';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: [],
      collapsibleDesign: '',
      collapsibleFill: '',
      collapsibleShare: '',
      arrowDesign: 'fa-chevron-down',
      arrowFill: 'fa-chevron-down',
      arrowShare: 'fa-chevron-down',
      preview: false,
      card: {
        name: 'Nombre Apellido',
        job: 'Front-end developer',
        photo: defaultImg,
        email: '',
        phone: '',
        linkedin: '',
        github: '',
        palette: '1',
        typography: '2',
        skills: []
      }
    }

    this.handleName = this.handleName.bind(this);
    this.handleJob = this.handleJob.bind(this);
    this.handleUrl = this.handleUrl.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
    this.handleLinkedin = this.handleLinkedin.bind(this);
    this.handleGithub = this.handleGithub.bind(this);
    this.handleColor = this.handleColor.bind(this);
    this.handleFonts = this.handleFonts.bind(this);
    this.handleSkills = this.handleSkills.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleCollapsibleDesign = this.handleCollapsibleDesign.bind(this);
    this.handleCollapsibleFill = this.handleCollapsibleFill.bind(this);
    this.handleCollapsibleShare = this.handleCollapsibleShare.bind(this);
  }
  
  fetchNewSkills() {
    fetchSkills()
      .then(data => {
        this.setState({
          skills: data.skills
        })
      })
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

  handleUrl(url) {
    const cardState = this.state.card;

    this.setState(
      {
        card: { ...cardState, photo: url },
        preview: true
      });
  }

  handleEmail(e) {
    const cardState = this.state.card;
    this.setState(
      {
        card: { ...cardState, email: e.currentTarget.value }
      });

  }

  handlePhone(e) {
    const cardState = this.state.card;
    this.setState(
      {
        card: { ...cardState, phone: e.currentTarget.value }
      });

  }

  handleLinkedin(e) {
    const cardState = this.state.card;
    this.setState(
      {
        card: { ...cardState, linkedin: e.currentTarget.value }
      });

  }

  handleGithub(e) {
    const cardState = this.state.card;
    this.setState(
      {
        card: { ...cardState, github: e.currentTarget.value }
      });

  }

  handleColor(e) {
    const cardState = this.state.card;

    if (e.currentTarget.value === '1') {

      this.setState(
        {
          card: { ...cardState, palette: '1' },
        });

    } else if (e.currentTarget.value === '2') {
      this.setState(
        {
          card: { ...cardState, palette: '2' },
        });

    } else if (e.currentTarget.value === '3') {
      this.setState(
        {
          card: { ...cardState, palette: '3' },
        });
    }
  }

  handleFonts(e) {
    const cardState = this.state.card;

    if (e.currentTarget.id === 'comic') {

      this.setState(
        {
          card: { ...cardState, typography: '2' }
        });

    } else if (e.currentTarget.id === 'ubuntu') {
      this.setState(
        {
          card: { ...cardState, typography: '1' }
        });

    } else if (e.currentTarget.id === 'montserrat') {
      this.setState(
        {
          card: { ...cardState, typography: '3' }
        });
    }
  }

  handleSkills(e){
    const cardState = this.state.card;
    const currentSkills = cardState.skills.slice(0);
    const check = e.currentTarget;
    const newSkill = check.value;
    const isChecked = check.checked;

    if(currentSkills.length < 3 && isChecked) {
      currentSkills.push(newSkill);
    } else {
      check.checked = false;
      const index = currentSkills.indexOf(newSkill);
      if (index > -1) {
        currentSkills.splice(index, 1);
      }
    }

    const newCard = {...cardState, skills: currentSkills};

    this.setState({
      card: newCard
    });
  }

  handleReset(){
    const cardState = this.state;

    this.setState({...cardState, card: {
      name: 'Nombre Apellido',
      job: 'Front-end developer',
      photo: defaultImg,
      email: '',
      phone: '',
      linkedin: '',
      github: '',
      palette: '1',
      typography: '2',
      skills: []
    }});

    document.querySelector(".form").reset();
  }

  saveData(data) {
    localStorage.setItem('savedCard', JSON.stringify(data));
  }

  getData() {
    const savedCard = localStorage.getItem('savedCard');

    if (savedCard !== null) {
      return JSON.parse(savedCard);
    } else {
      return '';
    }
  }

  handleCollapsibleDesign() {
    if (this.state.collapsibleDesign.includes('collapsible--visible')){
      this.setState({
        collapsibleDesign: '',
        arrowDesign: 'fa-chevron-down'   
      })
    } else {
    this.setState({
        collapsibleDesign: 'collapsible--visible',
        arrowDesign: 'fa-chevron-up',
        arrowFill: 'fa-chevron-down',
        arrowShare: 'fa-chevron-down',
        collapsibleFill: '',
        collapsibleShare: '',
    })
  }
}

handleCollapsibleFill() {
  if (this.state.collapsibleFill.includes('collapsible--visible')){
    this.setState({
      collapsibleFill: '',
      arrowFill: 'fa-chevron-down'  
    })
  } else {
  this.setState({
      collapsibleFill: 'collapsible--visible',
      arrowFill: 'fa-chevron-up',
      arrowDesign: 'fa-chevron-down',
      arrowShare: 'fa-chevron-down',
      collapsibleDesign: '',
      collapsibleShare: '',
  })
}
}

handleCollapsibleShare() {
  if (this.state.collapsibleShare.includes('collapsible--visible')){
    this.setState({
      collapsibleShare: '',
      arrowShare: 'fa-chevron-down', 
    })
  } else {
  this.setState({
      collapsibleShare: 'collapsible--visible',
      arrowShare: 'fa-chevron-up',
      arrowDesign: 'fa-chevron-down',
      arrowFill: 'fa-chevron-down',
      collapsibleFill: '',
      collapsibleDesign: '',
  })
}
}
  componentDidMount(){
    this.fetchNewSkills();
    const card = this.getData();

    if(card !== '') {
      this.setState({
        card: card
      });
    }
  }

  componentDidUpdate(){
    this.saveData(this.state.card);
  }

  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/card' render={() => <CardCreator card={this.state.card} skills={this.state.skills} collapsibleDesign={this.state.collapsibleDesign} collapsibleFill={this.state.collapsibleFill} collapsibleShare={this.state.collapsibleShare} arrowDesign={this.state.arrowDesign} arrowFill={this.state.arrowFill} arrowShare={this.state.arrowShare} preview={this.state.preview} handleName={this.handleName} handleJob={this.handleJob} handleUrl={this.handleUrl} handleEmail={this.handleEmail} handlePhone={this.handlePhone} handleLinkedin={this.handleLinkedin} handleGithub={this.handleGithub} handleColor={this.handleColor} handleFonts={this.handleFonts} handleSkills={this.handleSkills} handleCollapsibleDesign={this.handleCollapsibleDesign} handleCollapsibleFill={this.handleCollapsibleFill} handleCollapsibleShare={this.handleCollapsibleShare} handleReset={this.handleReset}/>} />
        </Switch>
      </React.Fragment>
    )
  }
}

export default App;
