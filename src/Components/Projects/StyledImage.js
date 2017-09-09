import React from 'react';
import { StyleSheet, css } from 'aphrodite';

/**
 * accept img source as well as a link
 */
export class StyledImage extends React.Component {
  render () {
    return (
      <a>
        <img className={css(styles.img, this.props.style)} src={this.props.src} />
      </a>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    position: 'absolute',
    width: '400px',
    ':hover': {
      zIndex: '5'
    }
  }
});
