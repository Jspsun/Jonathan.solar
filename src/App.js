import React, { Component } from 'react';
import {NavBar} from './Components/NavBar.js';
import {SolarPanel} from './Components/SolarPanel.js';
import {MediaBar} from './Components/MediaBar.js';

class App extends Component {
  render () {
    return (
      <div>
        <NavBar />
        <SolarPanel />
        <MediaBar />
      </div>
    );
  }
}

export default App;
