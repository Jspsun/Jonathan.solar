import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import {StarField} from './SolarSystem/StarField.js';
import {MediaBar} from './AboutMe/MediaBar.js';
import {Photo} from './AboutMe/Photo.js';
import {AboutMeCard} from './AboutMe/AboutMeCard.js';

export class AboutMe extends React.Component {
  render () {
    return (
      <div id='About-Me' className={css(styles.wrapper)}>
        <StarField noOfStars='140' />
        <MediaBar />
        <div className={css(styles.inline)}>
          <Photo />
          <AboutMeCard />
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '120px',
    flexGrow: '1'
  },

  inline: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap'
  }
});
