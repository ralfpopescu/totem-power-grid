import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { CookiesProvider } from 'react-cookie';
import Game from './scenes/Game';
import Intro from './scenes/Intro';
import SmallScreenMessage from './scenes/SmallScreenMessage';
import type { State } from './redux/reducers';

type color = { primary: string; secondary: string }
type media = { mobile: number }

export type Theme = {
  main: color;
  BURNING: color;
  FLOODED: color;
  EARTH: color;
  STEAMY: color;
  SMOKEY: color;
  ELECTRIC_CURRENT: color;
  BRIGHT: color;
  WINDY: color;
  ocean: color;
  FIRE: color;
  ELECTRIC: color;
  LIGHT: color;
  WATER: color;
  media: media;
}


const theme: Theme = {
  main: {
    primary: 'white;',
    secondary: '#f68e5f',
  },
  ocean: {
    primary: '#33bbff',
    secondary: '#33bbff',
  },
  BURNING: {
    primary: '#f76c5e',
    secondary: '#f68e5f',
  },
  FLOODED: {
    primary: '#20a4f3',
    secondary: '#56cbf9',
  },
  STEAMY: {
    primary: '#F8F8F8',
    secondary: '#b4d2e7',
  },
  SMOKEY: {
    primary: '#4c5c68',
    secondary: '#46494C',
  },
  ELECTRIC_CURRENT: {
    primary: '#F5DD90',
    secondary: '#FF9F1C',
  },
  BRIGHT: {
    primary: '#white',
    secondary: '#D7F3F3',
  },
  WINDY: {
    primary: '#white',
    secondary: '#white',
  },
  ELECTRIC: {
    primary: '#F5DD90',
    secondary: '#FF9F1C',
  },
  LIGHT: {
    primary: '#fff',
    secondary: '#D7F3F3',
  },
  FIRE: {
    primary: '#f76c5e',
    secondary: '#f68e5f',
  },
  WATER: {
    primary: '#20a4f3',
    secondary: '#56cbf9',
  },
  EARTH: {
    primary: '#553A41',
    secondary: '#2F0601',
  },
  media: {
    mobile: 700,
  },
};

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Chelsea Market';
    color: white;
  }
`;

type AppProps = { state: State }

const App = ({ state }: AppProps) => (
  <CookiesProvider>
      <ThemeProvider theme={theme}>
      <link href="https://fonts.googleapis.com/css2?family=Chelsea+Market&display=swap" rel="stylesheet" />
        <GlobalStyle />
        <Route path="/game/:level">
          <Game />
        </Route>
        <Route path="/faoweiah">
          <Intro />
        </Route>
        <Route exact path="/">
          <Redirect to="/faoweiah" />
        </Route>
      </ThemeProvider>
      <SmallScreenMessage />
      </CookiesProvider>
  );

const mapStateToProps = (state: State) => ({ state });

export default connect(mapStateToProps)(App);

