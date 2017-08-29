import React from 'react';
import { StyleSheet, css } from 'aphrodite';
// import SunImage from '../../Assets/Img/Header/SolarSystem/Sun.svg';
// import SunImage from 'Assets/Img/Header/SolarSystem/Sun.svg';

export class Sun extends React.Component {
  render () {
    return (
      <div>
        <img className ={css(styles.sun)} src='Assets/Img/Header/SolarSystem/Sun.svg' alt='Sun' />
      </div>
    );
  }
}

const styles = StyleSheet.create({
  sun: {
    height: '100px',
    width: '100px',
    position: 'absolute',
    transform: 'translate(-50px, -50px)'
  }
});