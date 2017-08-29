import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export class MediaBar extends React.Component {
  render () {
    return (
      <div className={css(styles.wrapper)}>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#F3F4F5',
    width: '100%',
    height: '75px'
  }
});
