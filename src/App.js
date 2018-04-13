import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { NavBar } from './Components/NavBar.js';
import {StarField} from './Components/SolarSystem/StarField.js';
import {SolarPanel} from './Components/SolarPanel.js';
import {AboutMe} from './Components/AboutMe.js';
import {Projects} from './Components/Projects.js';

class App extends Component {
  render () {
    return (
      <div className={css(styles.wrapper)}>
        <StarField noOfStars='140' />
        <NavBar />
        <SolarPanel />
        <AboutMe />
        <Projects />
      </div>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'visible',
    overflowX: 'hidden',
  },
});

export default App;
