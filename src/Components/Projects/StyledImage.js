import React from 'react';
import { StyleSheet, css } from 'aphrodite';

/**
 * accept img source
 */
export class StyledImage extends React.Component {
  render () {
    return (
      // <a>
        <img className={css(styles.img)} src={this.props.src} />
      // </a>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    width: '400px',
    maxHeight: '400px',
    transform: 'translateY(-50px)'
  }
});
