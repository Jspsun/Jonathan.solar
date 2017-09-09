import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import {MaterialCard} from '../UI/MaterialCard.js';
import {TextButton} from '../UI/TextButton.js';
import {StyledImage} from './StyledImage.js';

/**
 * accepts a prop called data which is a json with:
 * src (image array)
 * title
 * technologies
 * bodyText
 * gitLink (optional)
 * demoLink (optional)
 */

export class ProjectCard extends React.Component {
  render () {
    var data = this.props.data;

    function StyledImages (props) {
      return (
        <StyledImage src={props.src} href={props.href} />
      );
    }

    function GitButton (props) {
      if (!props.gitLink) {
        return null;
      }
      return (
        <TextButton text='Git' href={props.gitLink} color='#fff' hoverColor='#ffd377' />
      );
    }

    function DemoButton (props) {
      if (!props.demoLink) {
        return null;
      }
      return (
        <TextButton text='Live Demo' href={props.demoLink} color='#fff' hoverColor='#ffd377' />
      );
    }

    return (
      <MaterialCard className={styles.card} >
        <StyledImages src={data.src} />
        <div className={css(styles.textWrapper)}>
          <div className={css(styles.title)}>{data.title}</div>
          <div className={css(styles.technologies)}>{data.technologies}</div>
          <p className={css(styles.bodyText)}>
            {data.bodyText}
          </p>
          <div className={css(styles.buttonWrapper)}>
            <GitButton gitLink={data.gitLink} />
            <DemoButton demoLink={data.demoLink} />
          </div>
        </div>
      </MaterialCard>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    width: '1000px',
    height: '500px',
    margin: '20px 20px 20px 20px',
    overflow: 'auto',
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'center',
    padding: '40px',

    color: '#fff'
  },

  imgWrapper: {

  },

  textWrapper: {

  },

  title: {
    marginTop: '50px',
    fontSize: '40px'
  },

  technologies: {
    fontSize: '20px',
    marginLeft: '50px',
    marginRight: '50px',
    marginBottom: '0px'
  },

  p: {
    fontSize: '20px',
    marginLeft: '50px',
    marginRight: '50px',
    marginBottom: '0px'
  },

  buttonWrapper: {
    padding: '30px',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: '1',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
