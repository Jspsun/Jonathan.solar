import React from 'react';
import githubLogo from '../Assets/Img/Header/github-logo.svg';

export class NavBar extends React.Component {
  render () {
    const style = {
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
        margin: '15px'
      },

      titleText: {
        display: 'inline'
      },

      navigationWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '400px',
        marginLeft: 'auto',
        marginRight: '50px'
      },

      navigationItem: {
        textDecoration: 'none',
        color: '#F6B427'
      }
    };

    return (
      <div style={style.wrapper}>
        <div style={style.titleWrapper}>
          <a href='https://github.com/Jspsun' target='_blank'>
            <img style={style.image} src={githubLogo} alt='github' href='google.ca' />
          </a>
          <div style={style.titleText}>
            Jonathan.Solar
          </div>
        </div>

        <div style={style.navigationWrapper}>
          <a href='#About Me' style={style.navigationItem}><div>About Me</div></a>
          <a href='#Projects' style={style.navigationItem}><div>Projects</div></a>
          <a href='#Contact' style={style.navigationItem}><div>Contact</div></a>
          <a href='https://medium.com/@jspsun' target='_blank' style={style.navigationItem}><div>Blog</div></a>
          <a href='./JonathanSunResume.pdf' target='_blank' style={style.navigationItem}><div>Resume</div></a>
        </div>

      </div>
    );
  }
}
