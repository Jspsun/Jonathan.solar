import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import {StarField} from './SolarSystem/StarField.js';
import {MaterialCard} from './UI/MaterialCard.js';
import {ProjectCategory} from './Projects/ProjectCategory.js';

export class Projects extends React.Component {
  render () {
    var projectCategoriesList;
    projectCategoriesMap.forEach((key) => {
      projectCategoriesList.push(<ProjectCategory />);
    });

    return (
      <div id='Projects' className={css(styles.wrapper)}>
        <StarField noOfStars='140' />
        <MaterialCard className={styles.card}>
          <div className={css(styles.header)}>Projects</div>
        </MaterialCard>
        {projectCategoriesList}
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
  card: {
    margin: '20px',
    padding: '20px',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    width: '300px'
  },

  header: {
    fontSize: '50px'
  }
});

// map of titles to project categories data
const projectCategoriesMap = new Map([]);

