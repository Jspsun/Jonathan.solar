import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import {ProjectCard} from './ProjectCard.js';

/**
 * accepts an array of project data jsons
 * accepts a title
 */
export class ProjectCategory extends React.Component {
  render () {
    var projects = [];
    var data = this.props.data;
    for (var i = 0; i < data.length; i++) {
      projects.push(<ProjectCard className={styles.card} data={data} />);
    }

    return (
      <div className={css(styles.wrapper)}>
        <div className={css(styles.title)}>{this.props.title}</div>
        {projects}
      </div>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    // height: 'auto',
    flexDirection: 'column',
    paddingTop: '80px',

    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',

    overflowY: 'visible',
    overflowX: 'hidden',
    '@media (max-width: 877px)': {
      paddingTop: '130px'
    }
  },
  title: {
    fontSize: '50px'
  }
});
