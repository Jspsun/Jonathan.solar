import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export class MaterialCard extends React.Component {
  render () {
    return (
      <div className={css(styles.wrapper, this.props.style)}>
        {this.props.children}
      </div>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    borderRadius: '2px',
    boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
  }
});
