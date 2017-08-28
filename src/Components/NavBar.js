import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import githubLogo from '../Assets/Img/Header/github-logo.svg';

export class NavBar extends React.Component {
  render () {
    return (
      <div className={css(styles.wrapper) + ' animated slideInDown'}>
        <div className={css(styles.titleWrapper)}>
          <a href='https://github.com/Jspsun' target='_blank'>
            <img className={css(styles.image)} src={githubLogo} alt='github' href='google.ca' />
          </a>
          <div className={css(styles.titleText)}>
            Jonathan.Solar
          </div>
        </div>

        <div className={css(styles.navigationWrapper)}>
          <a href='#About Me' className={css(styles.navigationItem)}><div>About Me</div></a>
          <a href='#Projects' className={css(styles.navigationItem)}><div>Projects</div></a>
          <a href='#Contact' className={css(styles.navigationItem)}><div>Contact</div></a>
          <a href='https://medium.com/@jspsun' target='_blank' className={css(styles.navigationItem)}><div>Blog</div></a>
          <a href='./JonathanSunResume.pdf' target='_blank' className={css(styles.navigationItem)}><div>Resume</div></a>
        </div>

      </div>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#262C35',
    height: '100px',
    boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    alignItems: 'center',
    display: 'flex',
    color: '#F6B427'
  },

  titleWrapper: {
    fontSize: '40px',
    alignItems: 'center',
    display: 'flex'
  },

  image: {
    display: 'inline',
    margin: '15px',
    ':hover': {
      boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
      color: '#F6B427'
    }
  },

  titleText: {
    display: 'inline'
  },

  navigationWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
    marginLeft: 'auto',
    marginRight: '50px',
    '@media (max-width: 825px)': {
      display: 'none'
    }
  },

  navigationItem: {
    textDecoration: 'none',
    color: '#F6B427'
  }
});