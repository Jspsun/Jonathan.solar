import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import {Sun} from './SolarSystem/Sun.js';
import {Planet} from './SolarSystem/Planet.js';
import {StarField} from './SolarSystem/StarField.js';
import {AstroidBelt} from './SolarSystem/AstroidBelt.js';

export class SolarPanel extends React.Component {
  render () {
    return (
      <div className={css(styles.wrapper)}>
        <StarField noOfStars= '75'/>
        <Sun/>
        <Planet background='#9f5e26' orbitRadius='50' size='5' duration='14'/> {/*mercury*/}
        <Planet background='#BEB768' orbitRadius='70' size='8' duration='15'/> {/*venus*/}
        <Planet background='#11abe9' orbitRadius='100' size='9' duration='40'/> {/*earth*/}
        <Planet background='#cf3921' orbitRadius='130' size='15' duration='70'/> {/*mars*/}
        <AstroidBelt noOfAstroids='400' innerR='130' outerR='200' duration='180' />
        <Planet background='#c76e2a' orbitRadius='200' size='12' duration='140'/> {/*jupiter*/}
        <Planet background='#e7c194' orbitRadius='220' size='13' duration='190'/> {/*saturn*/}
        <Planet background='#b5e3e3' orbitRadius='250' size='9' duration='240'/> {/*uranus*/}
        <Planet background='#175e9e' orbitRadius='280' size='13' duration='250'/> {/*neptune*/}
        <Planet background='#fff' orbitRadius='320' size='6' duration='300'/> {/*pluto*/}
      </div>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    background: 'radial-gradient(ellipse at bottom, #1C2837 0%, #050608 100%)',
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
    display: 'flex',

    alignItems: 'center',
    justifyContent: 'center'
  }
});
