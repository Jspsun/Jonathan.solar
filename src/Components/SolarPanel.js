import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import {Sun} from './SolarSystem/Sun.js';
import {Planet} from './SolarSystem/Planet.js';

export class SolarPanel extends React.Component {
  render () {
    return (
      <div className={css(styles.wrapper)}>
        <Sun/>
        <Planet source='Assets/Img/Header/SolarSystem/Earth.svg' orbitRadius='150'/>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#21232B',
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
    display: 'flex',

    alignItems: 'center',
    justifyContent: 'center'
  }
});
