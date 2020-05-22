import React from 'react';
import styled from 'styled-components'
import Board from './components/Board'
import TotemSelector from './components/TotemSelector'
import Solution from './components/Solution'
import { ReactComponent as Shaman } from '../../top-level-assets/shaman1.svg'
import exampleSolution from './components/Solution/example-solution-2.json';
import type { Solution as SolutionType } from '../../logic/getSolutionFromState';
import type { State } from '../../redux/reducers';
import getSolutionFromState from '../../logic/getSolutionFromState';
import { connect } from "react-redux";
import _ from 'lodash'

const AppContainer = styled.div`
position: absolute;
background-color: #294363;
top: 0;
bottom: 0;
right: 0;
left: 0;
overflow: scroll;
display: grid;
grid-template-columns: 1fr 4fr 1fr;
grid-template-columns: 1fr 4fr 1fr;
`

const BoardGridItem = styled.div`
grid-column-start: 2;
grid-row-start: 1;
`

const TotemPowerGridTitle = styled.div`
font-size: 50px;
color: white;
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

const SolutionSideBar = styled.div`
grid-column-start: 3;
grid-row-start: 1;
display: flex;
flex-direction: column;
padding: 10px;
justify-self: center;
align-self: center;
align-items: center;
justify-content: center;
`

const ActivateButton = styled.button`
font-size: 20px;
padding: 10px;
`

const solve = (state: State, solution: SolutionType) => {
  const playerSolution = getSolutionFromState(state)
  const isSolved = _.isEqual(playerSolution, solution)
  if(isSolved) {
    console.log('solved!')
  } else {
    console.log('The village blew up.')
  }
}

type AppProps = { state: State }

const App = ({ state }: AppProps) => {
  return (
    <AppContainer>
      <SolutionSideBar>
        <Solution solution={exampleSolution as SolutionType}/>
        <ActivateButton onClick={() => solve(state, exampleSolution as SolutionType)}>ACTIVATE</ActivateButton>
      </SolutionSideBar>
      <BoardGridItem>
        <Board />
      </BoardGridItem>
      <SideBar>
      <TotemPowerGridTitle>TOTEM POWER GRID</TotemPowerGridTitle>
        <div style={{ width: '200px'}}>
        <Shaman style={{ width: '200px'}} fill="red"/>
        </div>
        <TotemSelector />
      </SideBar>
    </AppContainer>
  );
}

const mapStateToProps = (state: State) => {
  return { state }
};

export default connect(mapStateToProps)(App);

