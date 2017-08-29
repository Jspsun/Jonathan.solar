import React from 'react';
import { StyleSheet, css } from 'aphrodite';

//requires a source, animation duration, orbitradius, size
export class Planet extends React.Component {
  render () {
    const orbitRadius = {marginLeft: this.props.orbitRadius + 'px'};
    return (
      <div>
        <div className = {css(styles.orbit)} >
          <img className ={css(styles.planet)} style={orbitRadius} src={this.props.source} alt='Planet' />
        </div>
      </div>
    );
  }
}
const rotateKeyframes =  { 
  '100%': { 
    transform: 'rotate(360deg)' 
  }
};

const styles = StyleSheet.create({
  planet: {
    height: '50px',
    width: '50px',
    position: 'absolute',

    animationName: [rotateKeyframes],
    animationDuration: '100s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear'
  },

  orbit: {
    animationName: [rotateKeyframes],
    animationDuration: '5s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear'
  }
});
