import React from 'react';
import { ThemeProvider } from 'styled-components'
import { Route } from "react-router-dom";
import Game from './scenes/Game'
import Intro from './scenes/Intro'
import type { State } from './redux/reducers'
import { connect } from "react-redux";

type color = { primary: string, secondary: string }

export type Theme = {
  main: color,
  BURNING: color,
  FLOODED: color,
  EARTH: color,
  STEAMY: color,
  SMOKEY: color,
  ELECTRIC_CURRENT: color,
  BRIGHT: color,
  WINDY: color
  ocean: color
}


const theme: Theme = {
  main: {
    primary: '#8cff66;',
    secondary: '#f68e5f'
  },
  ocean: {
    primary: '#33bbff',
    secondary: '#33bbff',
  },
  BURNING: {
    primary: '#f76c5e',
    secondary: '#f68e5f'
  },
  FLOODED: {
    primary: '#20a4f3',
    secondary: '#56cbf9'
  },
  EARTH: {
    primary: '#553A41',
    secondary: '#2F0601'
  },
  STEAMY: {
    primary: '#F8F8F8',
    secondary: '#b4d2e7'
  },
  SMOKEY: {
    primary: '#4c5c68',
    secondary: '#46494C'
  },
  ELECTRIC_CURRENT: {
    primary: '#F5DD90',
    secondary: '#FF9F1C'
  },
  BRIGHT: {
    primary: '#white',
    secondary: '#white'
  },
  WINDY: {
    primary: '#white',
    secondary: '#white'
  },
}

type AppProps = { state: State }

const App = ({ state }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Route path="/game/:level">
        <Game />
      </Route>
      <Route exact path="/">
        <Intro />
      </Route>
    </ThemeProvider>
  );
}

const mapStateToProps = (state: State) => {
  return { state }
};

export default connect(mapStateToProps)(App);

