import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components'
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
    primary: 'white;',
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

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Chelsea Market';
    color: white;
  }
`

type AppProps = { state: State }

const App = ({ state }: AppProps) => {
  return (
      <ThemeProvider theme={theme}>
      <link href="https://fonts.googleapis.com/css2?family=Chelsea+Market&display=swap" rel="stylesheet" />
        <GlobalStyle />
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

