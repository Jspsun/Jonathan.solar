import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export class NavBar extends React.Component {
  render () {
    return (
      <div className={css(styles.wrapper) + ' animated slideInDown'}>
        <div className={css(styles.titleWrapper)}>
          <a href='https://github.com/Jspsun' target='_blank' rel='noopener noreferrer'>
            <img className={css(styles.image)} src='Assets/Img/Header/github-logo.svg' alt='github' />
          </a>
          <div className={css(styles.titleText)}>
            Jonathan.Solar
          </div>
        </div>

        <div className={css(styles.navigationWrapper)}>
          <a href='#About Me' className={css(styles.navigationItem)}><div>About Me</div></a>
          <a href='#Projects' className={css(styles.navigationItem)}><div>Projects</div></a>
          <a href='#Contact' className={css(styles.navigationItem)}><div>Contact</div></a>
          <a href='https://medium.com/@jspsun' target='_blank' className={css(styles.navigationItem)} rel='noopener noreferrer'><div>Blog</div></a>
          <a href='./JonathanSunResume.pdf' target='_blank' className={css(styles.navigationItem)}><div>Resume</div></a>
        </div>

      </div>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    // boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',

    margin: '10px',
    alignItems: 'center',
    display: 'flex',
    color: '#fff',
    position: 'fixed',
    width: '100%',
    flexWrap: 'wrap',
    flexGrow: 1,
    padding: '15px',
    boxSizing: 'border-box',
    zIndex: 2,
    '@media (max-width: 870px)': {
      justifyContent: 'center'
    }
  },

  titleWrapper: {
    fontSize: '40px',
    alignItems: 'center',
    display: 'flex',

    '@media (max-width: 870px)': {
      // display: 'block',
      textAlign: 'center',
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },

  image: {
    display: 'inline',
    // width: '50px',
    // height: '50px',
    marginRight: '10px',
    ':hover': {
      fill: '#ffd377'
    }
  },

  titleText: {
    display: 'inline'
  },

  navigationWrapper: {
    display: 'flex',
    marginLeft: 'auto',
    textAlign: 'center',

    '@media (max-width: 870px)': {
      display: 'block',
      float: 'none',
      // marginTop: '20px',
      marginLeft: '0px'
    }
  },

  navigationItem: {
    textDecoration: 'none',
    color: '#fff',
    display: 'inline-block',
    marginRight: '25px',
    marginLeft: '25px',

    '@media (max-width: 870px)': {
      marginBottom: '5px',
      marginTop: '5px'
    },
    ':hover': {
      color: '#ffd377'
    }
  }
});
