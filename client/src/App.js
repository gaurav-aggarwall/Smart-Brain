import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import InputForm from './components/InputForm/InputForm';
import Rank from './components/Rank/Rank';

const app = new Clarifai.App({
  apiKey: 'd7fa32f8d6064906bf4c9f77865da330'
});

const ParticlesOptions = {
  particles: {
    number:{
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};

class App extends Component {
  state = {
    input: ''
  };

  onInputChange = event => {
    this.setState({input: event.target.value});
  }

  onSubmit = event => {
    app.models.initModel({id: Clarifai.GENERAL_MODEL, version: "aa7f35c01e0642fda5cf400f543e7c40"})
      .then(generalModel => {
        return generalModel.predict("https://samples.clarifai.com/metro-north.jpg");
      })
      .then(response => {
        console.log(response);
      });
    
    app.models.predict("d7fa32f8d6064906bf4c9f77865da330", "https://samples.clarifai.com/face-det.jpg")
    .then(res => {
      console.log(res);
    })
    .catch();
  }

  render() {
    return (
      <div className="App">
        <Particles className='particles' params={ParticlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <InputForm onInputChange={this.onInputChange} onSubmitBtn={this.onSubmit}/>
      </div>
    );
  }
}

export default App;
