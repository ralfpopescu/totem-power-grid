import React from 'react';
import styled, { ThemeProvider } from 'styled-components'
import Board from './components/Board'
import TotemSelector from './components/TotemSelector'
import Solution from './components/Solution'
import { ReactComponent as Shaman } from './top-level-assets/shaman1.svg'
import exampleSolution from './components/Solution/example-solution.json';
import type { Solution as SolutionType } from './logic/getSolutionFromState';

const AppContainer = styled.div`
position: absolute;
background-color: #36454f;
top: 0;
bottom: 0;
right: 0;
left: 0;
overflow: scroll;
display: grid;
grid-template-columns: 1fr 4fr 1fr;
grid-template-columns: 1fr 4fr 1fr;
`

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
}

const theme: Theme = {
  main: {
    primary: '#274029',
    secondary: '#f68e5f'
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

const BoardGridItem = styled.div`
grid-column-start: 2;
grid-row-start: 1;
`

const TotemPowerGridTitle = styled.div`
`

const SideBar = styled.div`
grid-column-start: 1;
grid-row-start: 1;

display: flex;
flex-direction: column;
padding: 10px;
justify-self: center;
align-self: center;
align-items: center;
justify-content: center;
`


function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Solution solution={exampleSolution as SolutionType}/>
        <BoardGridItem>
          <Board />
        </BoardGridItem>
        <SideBar>
        <TotemPowerGridTitle>Totem Power Grid</TotemPowerGridTitle>
          <div style={{ width: '200px'}}>
          <Shaman style={{ width: '200px'}} fill="red"/>
          </div>
          <TotemSelector />
        </SideBar>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
