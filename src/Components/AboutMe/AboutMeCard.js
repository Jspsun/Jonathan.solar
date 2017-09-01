import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import {MaterialCard} from '../UI/MaterialCard.js';
import {TextButton} from '../UI/TextButton.js';

export class AboutMeCard extends React.Component {
  render () {
    return (
      <MaterialCard style={styles.card} >
        <div className={css(styles.header)}>About Me</div>
        <p className={css(styles.p)}>
          I’m a Computer Engineering student at the University of Waterloo and currently a full-stack developer at 
          <a className={css(styles.link)} href='http://getvideostream.com/' target='__blank'> Videostream!</a>
          <br />
          <br />
          When I’m not in class, I’m usually at a hackathon, flying my drone or riding my Boosted Board
        </p>
        <div className={css(styles.centerWrapper)}>
          <TextButton text='Resume' href='./JonathanSunResume.pdf' color='#000' hoverColor='#ffd377' />
        </div>
      </MaterialCard>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    width: '550px',
    // height: '400px',
    margin: '20px 20px 20px 20px',
    overflow: 'auto',
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'center'
  },

  header: {
    marginTop: '50px',
    fontSize: '40px'
  },

  p: {
    fontSize: '20px',
    marginLeft: '50px',
    marginRight: '50px',
    marginBottom: '0px'
  },

  link: {
    textDecoration: 'none',
    color: '#EA6325'
  },

  centerWrapper: {
    padding: '30px',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: '1',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
