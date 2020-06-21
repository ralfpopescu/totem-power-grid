import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import _ from 'lodash';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';
import Board from './components/Board';
import TotemSelector from './components/TotemSelector';
import Landscape from './components/Landscape';
import { ReactComponent as Shaman } from '../../assets/shaman1.svg';
import exampleSolution from './components/Solution/example-solution-2.json';
import type { Solution as SolutionType } from '../../logic/getSolutionFromState';
import type { State } from '../../redux/reducers';
import getSolutionFromState from '../../logic/getSolutionFromState';
import { ReactComponent as BluePrints } from './assets/history.svg';
import BluePrintModal from './components/Blueprint-Modal';
import ActivateModal from './components/Activate-Modal';
import solve from './solve';

type GridItemProps = { column: number; row: number; align?: string }

const GridItem = styled.div<GridItemProps>`
grid-column-start: ${props => props.column};
grid-row-start:  ${props => props.row};
display: flex;
justify-content: center;
align-items: ${props => props.align || 'center'};
`;

const AbsoluteContainer = styled.div`
background-color: #7FD4FF;
position: absolute;
top: 0;
bottom: 0;
right: 0;
left: 0;
animation: sky-fade-in 0.5s ease-in-out;

@keyframes sky-fade-in {
  0% {
    background-color: transparent;
  }
  100% {
    background-color: #7FD4FF;
  }
`;

const AppContainer = styled.div`
position: absolute;
top: 0;
bottom: 0;
right: 0;
left: 0;
overflow: scroll;
display: grid;
grid-template-columns: 1fr 4fr 1fr;
grid-template-columns: 1fr 4fr 1fr;
`;

const BoardGridItem = styled.div`
grid-column-start: 2;
grid-row-start: 1;
display: grid;
grid-template-rows: 100px 1fr;
grid-template-columns: 300px 5fr 300px;
`;

const TotemPowerGridTitle = styled.div`
font-size: 40px;
color: white;
text-align: center;
`;

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
`;

const ActivateButton = styled.button`
grid-column-start: 1;
background-image: linear-gradient(#f74d4d, #f86569);
min-height: 45px;
min-width: 50px;
border: none;
border-radius: 50%;
box-shadow: 0 10px #e24f4f;
margin-right: 20px;
cursor: pointer;
transition: 0.1s all ease-out;
outline: none; 

&:active {
  box-shadow: 0 0 #e24f4f;
  transform: translate(0px, 20px);
}

`;

const BluePrintIconContainer = styled.div`
fill: white;
cursor: pointer;
margin-left: 20px;
`;

const BluePrintMenuContainer = styled.div`
display: flex;
flex-direction: row;
font-size: 20px;
place-items: center;

`;

const ActiveButtonContainer = styled.div`
display: flex;
flex-direction: row;
grid-column-start: 2;
font-size: 20px;
place-items: center;
`;

const BackToFaoweiah = styled.div`
margin-top: 24px;
cursor: pointer;

&:hover {
  transform: scale(1.2);
}
`;

const ShamanContainer = styled.div`
animation: shaman-entry 0.5s ease-in-out;
width: 200px;

@keyframes shaman-entry {
  0% {
    opacity: 0;
    {transform: scale(0.1);}
  }
  75% {
    opacity: 1;
    {transform: scale(1.2);}
  }
  100% {
    opacity: 1;
    {transform: scale(1);}
  }
`;

type AppProps = { state: State }

const App = ({ state }: AppProps) => {
  const [bluePrintModalOpen, setBluePrintModalOpen] = useState<boolean>(false);
  const [activateModalOpen, setActivateModalOpen] = useState<boolean>(false);
  const [isSolved, setIsSolved] = useState<boolean>(false);
  const [cookies, setCookie] = useCookies(['levelsComplete']);
  const history = useHistory();

  const handleActivate = () => {
    const levelsComplete = cookies.levelsComplete || [];
    setActivateModalOpen(true);
    const playerSolution = getSolutionFromState(state);
    const actualSolution = state.level.solution;
    const solutionResuit = solve(playerSolution, actualSolution);
    setIsSolved(solutionResuit);
    if(solutionResuit) {
      console.log('Level complete!', state.level.number);
      setCookie('levelsComplete', [...levelsComplete, state.level.number], { path: '/' });
    }
  };

  return (
    <AbsoluteContainer>
    <Landscape />
    <AppContainer>
      <BoardGridItem>
        <GridItem row={1} column={1}>
          <ActiveButtonContainer>
            <ActivateButton onClick={handleActivate} />
            ACTIVATE
          </ActiveButtonContainer>
        </GridItem>
        <GridItem row={1} column={3}>
          <BluePrintMenuContainer>
            BLUEPRINTS
            <BluePrintIconContainer onClick={() => setBluePrintModalOpen(true)} >
              <BluePrints style={{ height: '50px', width: '50px' }}/>
            </BluePrintIconContainer>
          </BluePrintMenuContainer>
        </GridItem>
        <GridItem row={1} column={2} style={{ fontSize: '32px'}}> 
          {state.level.name}
        </GridItem>
        <GridItem row={2} column={2} align="flex-start">
          <Board />
        </GridItem>
        <GridItem row={2} column={3}>
        <TotemSelector />
        </GridItem>
      </BoardGridItem>
      <SideBar>
      <TotemPowerGridTitle>TOTEM POWER GRID</TotemPowerGridTitle>
      <BackToFaoweiah onClick={() => history.push('/faoweiah')}>Back to Fa'Owei-ah</BackToFaoweiah>
        <ShamanContainer>
        <Shaman style={{ width: '200px'}} fill="red"/>
        </ShamanContainer>
      </SideBar>
      <BluePrintModal isOpen={bluePrintModalOpen} close={() => setBluePrintModalOpen(false)}/>
      <ActivateModal isOpen={activateModalOpen} close={() => setActivateModalOpen(false)} isSolved={isSolved}/>
    </AppContainer>
    </AbsoluteContainer>
  );
};

const mapStateToProps = (state: State) => ({ state });

export default connect(mapStateToProps)(App);

