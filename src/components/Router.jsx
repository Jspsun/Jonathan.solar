import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';
import { NavBar } from './NavBar.js';
import {StarField} from './SolarSystem/StarField.js';
import {SolarPanel} from './SolarPanel.js';
import {AboutMe} from './AboutMe.js';
import {Projects} from './Projects.js';

import SimpleComponent from './SimpleComponent/SimpleComponent';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={
            () => <div className={css(styles.wrapper)}>
                    <StarField noOfStars='140' />
                    <NavBar />
                    <SolarPanel />
                    <AboutMe />
                    <Projects />
                  </div>}
        />
      </Switch>
    </BrowserRouter>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'visible',
    overflowX: 'hidden',
  },
});