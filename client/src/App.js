import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Logo from './components/Logo/Logo';
import InputForm from './components/InputForm/InputForm';
import Rank from './components/Rank/Rank';
import Image from './components/Image/Image';

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
    input: '',
    imgUrl: '',
    box: [],
    faceCount: 0,
    route: 'signin',
    isSignedIn: false
  };


  // Box Area Calculation
  calculateBox = data => {
    let faceCount = data.outputs[0].data.regions.length;
    this.setState({faceCount: faceCount});
    
    const img = document.getElementById('faceImg');
    const width = Number(img.width);
    const height = Number(img.height);

    const faceObj = [];
    
    for(let i = 0; i < faceCount; i++){
      const face = data.outputs[0].data.regions[i].region_info.bounding_box;

      let leftCol = face.left_col * width;
      let topRow = face.top_row * height;
      let rightCol = width - (face.right_col * width);
      let bottomRow = height - (face.bottom_row * height);
  
      faceObj.push([topRow, rightCol, bottomRow, leftCol]);
    }
    
    return faceObj;
  }


  // Setting Box Boundaries
  displayBox = box => {
    this.setState({box: box});
  }


  // Input Handler
  onInputChange = event => {
    this.setState({input: event.target.value});
  }


  // Submit Handler
  onSubmit = event => {
    this.setState({imgUrl: this.state.input})

    app.models.predict("a403429f2ddf4b49b307e318f00e528b", this.state.input)
    .then(response => this.displayBox(this.calculateBox(response)))
      .catch(err =>{
      console.log(err);
    });
  }


  // Route Changer
  routeChanger = route => {
    if(route === 'home'){
      this.setState({isSignedIn: true});
    } else {
      this.setState({isSignedIn: false});
    }
    this.setState({route: route});
  }


  render() {
    let route;

    if(this.state.route === 'signin'){
      route = <SignIn routeChanger={this.routeChanger}/>;
    } else if(this.state.route === 'register'){
      route = <Register routeChanger={this.routeChanger}/>;
    } else {
      route = <div>
                <Logo />
                <Rank />
                <InputForm onInputChange={this.onInputChange} onSubmitBtn={this.onSubmit}/>
                <Image box={this.state.box} imgSrc={this.state.imgUrl}/>
              </div>;
    }

    return (
      <div className="App">
        <Particles className='particles' params={ParticlesOptions} />
        <Navigation routeChanger={this.routeChanger} isSignedIn={this.state.isSignedIn}/>
        { route }
      </div>
    );
  }
}

export default App;
