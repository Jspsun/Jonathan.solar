import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import {NavBar} from './Components/NavBar.js';
import {StarField} from './Components/SolarSystem/StarField.js';
import {SolarPanel} from './Components/SolarPanel.js';
import {AboutMe} from './Components/AboutMe.js';
import {Projects} from './Components/Projects.js';

import {ProjectCard} from './Components/Projects/ProjectCard.js';

class App extends Component {
  render () {
    return (
      <div className={css(styles.wrapper)}>
        <StarField noOfStars='140' />
        <NavBar />
        <SolarPanel />
        <AboutMe />
        <Projects />
        <ProjectCard data={data} />
      </div>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'visible',
    overflowX: 'hidden'
  }
});


const data = {
  src: 'Assets/Img/Projects/InternetThoughts.png',
  title: 'Internet Thoughts',
  technologies: 'JavaScript, CSS, HTML, Node.JS, Heroku',
  bodyText: 'Have you ever wondered what the internet things about something ? We had that question so at YaleHacks we put together a site that lets you enter in any topic. We grab the top tweets, Reddit posts and Tumblr posts on that topic and run our in-house sentiment analysis engine on it. We take the data output and turn it into nice easy to understand graphs! ',
  gitLink: 'https://github.com/Jspsun/WhatDoesTheInternetThink',
  demoLink: 'http://internetthoughts.net/'
};


export default App;
