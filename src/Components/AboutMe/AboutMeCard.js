import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import {MaterialCard} from '../UI/MaterialCard.js';

export class AboutMeCard extends React.Component {
  render () {
    return (
      <MaterialCard style={styles.card} >
        <div className={css(styles.header)}>About Me</div>
        {/* <p>I’m a student at the University of Waterloo studying
Computer Engineering. Currently a full-stack
developer at Videostream.

When I’m not at in class, I’m usually at a hackathon,
flying my drone or riding my Boosted Board</p> */}
      </MaterialCard>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    width: '600px',
    height: '400px',
    margin: '20px 20px 20px 20px',
    padding: '30px',

    justifyContent: 'center',
    // alignItems: 'center'
  },

  header: {
    fontSize: '40px'
  }
});
