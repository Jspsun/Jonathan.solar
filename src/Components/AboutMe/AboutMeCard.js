import React from 'react';
import { StyleSheet } from 'aphrodite';
import {MaterialCard} from '../UI/MaterialCard.js';

export class AboutMeCard extends React.Component {
  render () {
    return (
      <MaterialCard style={styles.card} >
      </MaterialCard>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    width: '600px',
    height: '400px',
    margin: '20px 20px 20px 20px',
  }
});
