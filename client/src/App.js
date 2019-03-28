import React, { Component } from 'react';

import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageForm from './components/InputForm/InputForm';
import Rank from './components/Rank/Rank';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <Rank />
        <ImageForm />
      </div>
    );
  }
}

export default App;
