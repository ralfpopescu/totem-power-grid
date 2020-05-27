import React, { useState } from 'react';
import styled from 'styled-components'
import Board from './components/Board'
import TotemSelector from './components/TotemSelector'
import Solution from './components/Solution'
import Landscape from './components/Landscape'
import { ReactComponent as Shaman } from '../../top-level-assets/shaman1.svg'
import exampleSolution from './components/Solution/example-solution-2.json';
import type { Solution as SolutionType } from '../../logic/getSolutionFromState';
import type { State } from '../../redux/reducers';
import getSolutionFromState from '../../logic/getSolutionFromState';
import { connect } from "react-redux";
import _ from 'lodash'
import { ReactComponent as BluePrints } from './assets/history.svg'
import BluePrintModal from './components/Blueprint-Modal'

const AppContainer = styled.div`
position: absolute;
background-color: #7FD4FF;
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
display: flex;
flex-direction: column;
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
z-index: 1;
`

const ActivateButton = styled.button`
font-size: 20px;
padding: 10px;
grid-column-start: 1;
background-color: red;
height: 100px;
min-width: 90px;
border-radius: 50%;
box-shadow: 0 20px black;
margin-right: 20px;
cursor: pointer;
transition: 0.1s all ease-out;

&:active {
  box-shadow: 0 0 black;
  transform: translate(0px, 20px);
}

`

const BottomToolBar = styled.div`
display: grid;
grid-template-columns: 80px 80px 1fr 80px 80px;
`

const BluePrintIconContainer = styled.div`
fill: white;
cursor: pointer;
margin-left: 20px;
`

const BluePrintMenuContainer = styled.div`
display: flex;
flex-direction: row;
font-size: 30px;
place-items: center;
align-self: flex-end;
grid-column-start: 4;

z-index: 1;
`

const ActiveButtonContainer = styled.div`
display: flex;
flex-direction: row;
grid-column-start: 2;
font-size: 30px;
place-items: center;
z-index: 1;
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
  const [bluePrintModalOpen, setBluePrintModalOpen] = useState<boolean>(false)
  return (
    <AppContainer>
      <Landscape />
      <BoardGridItem>
        <Board />
        <BottomToolBar>
          <ActiveButtonContainer>
            <ActivateButton onClick={() => solve(state, exampleSolution as SolutionType)} />
            ACTIVATE
          </ActiveButtonContainer>
          <BluePrintMenuContainer>
            BLUEPRINTS
            <BluePrintIconContainer onClick={() => setBluePrintModalOpen(true)} >
              <BluePrints style={{ height: '100px', width: '100px' }}/>
            </BluePrintIconContainer>
          </BluePrintMenuContainer>
        </BottomToolBar>
      </BoardGridItem>
      <SideBar>
      <TotemPowerGridTitle>TOTEM POWER GRID</TotemPowerGridTitle>
        <div style={{ width: '200px'}}>
        <Shaman style={{ width: '200px'}} fill="red"/>
        </div>
        <TotemSelector />
      </SideBar>
      <BluePrintModal isOpen={bluePrintModalOpen} close={() => setBluePrintModalOpen(false)}/>
    </AppContainer>
  );
}

const mapStateToProps = (state: State) => {
  return { state }
};

export default connect(mapStateToProps)(App);

