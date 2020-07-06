import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import _ from 'lodash';
import { useCookies } from 'react-cookie';
import { useHistory, useParams } from 'react-router-dom';
import useMedia from 'use-media';
import Board from './components/Board';
import TotemSelector from './components/TotemSelector';
import Landscape from './components/Landscape';
import { ReactComponent as Shaman } from '../../assets/shaman1.svg';
import { ReactComponent as Island } from '../../assets/island.svg';
import { ReactComponent as Back } from '../../assets/back.svg';
import type { State } from '../../redux/reducers';
import getSolutionFromState from '../../logic/getSolutionFromState';
import { ReactComponent as BluePrints } from './assets/history.svg';
import BluePrintModal from './components/Blueprint-Modal';
import ActivateModal from './components/Activate-Modal';
import solve from './solve';
import { setLevel } from '../../redux/actions';
import type { SetLevel } from '../../redux/actions';
import levels from '../../levels';
import Mobile from '../../shared/Mobile';
// import phrases from './phrases';

type GridItemProps = { column: number; row: number; align?: string }

const GridItem = styled.div<GridItemProps>`
grid-column-start: ${props => props.column};
grid-row-start:  ${props => props.row};
display: flex;
justify-content: center;
align-items: ${props => props.align || 'center'};

@media only screen and (max-width: ${props => props.theme.media.mobile}px) {
  font-size: 20px;
}
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

@media only screen and (max-width: ${props => props.theme.media.mobile}px) {
  display: flex;
  flex-direction: column;
}
`;

const BoardGridItem = styled.div`
grid-column-start: 2;
grid-row-start: 1;
display: grid;
grid-template-rows: 100px 1fr;
grid-template-columns: 300px 5fr 300px;

@media only screen and (max-width: ${props => props.theme.media.mobile}px) {
  display: flex;
  flex-direction: column;
  padding: 20px;
  flex-grow: 1;
}
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

@media only screen and (max-width: ${props => props.theme.media.mobile}px) {
  flex-direction: row;
  width: 100%;
  justify-self: flex-start;
  align-self: flex-start;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px;
  padding-left: 10px;
  padding-bottom: 10px;
}
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

@media only screen and (max-width: ${props => props.theme.media.mobile}px) {
  min-height: ${45 / 1.5}px;
  min-width: ${50 / 1.5}px;
  box-shadow: 0 ${10 / 1.5}px #e24f4f;
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

@media only screen and (max-width: ${props => props.theme.media.mobile}px) {
  font-size: 12px;
}

`;

const ActiveButtonContainer = styled.div`
display: flex;
flex-direction: row;
grid-column-start: 2;
font-size: 20px;
place-items: center;

@media only screen and (max-width: ${props => props.theme.media.mobile}px) {
  font-size: 12px;
}
`;

const LevelName = styled.div`
@media only screen and (max-width: ${props => props.theme.media.mobile}px) {
  font-size: 20px;
}
`;


const BackContainer = styled.div`
position: relative;
align-items: center;
justify-content: center;
height: 200px;
width: 200px;
display: flex;
flex-direction: column;
cursor: pointer;

&:hover {
  transform: scale(1.1);
}

@media only screen and (max-width: ${props => props.theme.media.mobile}px) {
  height: 100px;
  width: 100px;
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

const MobileFlexRow = styled.div`
display: flex;
  flex-direction: row;
`;

type AppProps = { state: State; setLevel: SetLevel }



const Game = ({ state, setLevel }: AppProps) => {
  const [bluePrintModalOpen, setBluePrintModalOpen] = useState<boolean>(false);
  const [activateModalOpen, setActivateModalOpen] = useState<boolean>(false);
  const [isSolved, setIsSolved] = useState<boolean>(false);
  const [cookies, setCookie] = useCookies(['levelsComplete']);
  const { level: levelNumber } = useParams();
  const history = useHistory();
  const isMobile = useMedia('(max-width: 700px)');

  useEffect(() => {
    if(`${state.level.number}` !== `${levelNumber}`) {
      setLevel({ level: levels.levelMap[levelNumber] });
    }
  });

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
      <GridItem row={1} column={2} style={{ fontSize: '32px'}}> 
          <LevelName>
            {state.level.name}
          </LevelName>
        </GridItem>
        {!isMobile ? (
          <>
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
        </>
        ) : (
      <MobileFlexRow>
        <ActiveButtonContainer style={{ flexGrow: 1 }}>
          <ActivateButton onClick={handleActivate} />
          ACTIVATE
        </ActiveButtonContainer>
        <BluePrintMenuContainer>
          BLUEPRINTS
          <BluePrintIconContainer onClick={() => setBluePrintModalOpen(true)} >
            <BluePrints style={{ height: '50px', width: '50px' }}/>
          </BluePrintIconContainer>
        </BluePrintMenuContainer>
      </MobileFlexRow>
        )}
        <GridItem row={2} column={2} align="flex-start">
          <Board />
        </GridItem>
        <GridItem row={2} column={3} style={{ flexGrow: 1, paddingTop: '40px' }}>
        <TotemSelector />
        </GridItem>
      </BoardGridItem>
      <SideBar>
        <Mobile.Hide>
        <ShamanContainer>
  {/* <div>{phrases[state.totemSelection][Math.floor(Math.random() * phrases[state.totemSelection].length)]}</div> */}
        <Shaman style={{ width: '200px'}} fill="red"/>
        </ShamanContainer>
        </Mobile.Hide>
        <BackContainer onClick={() => history.push('/faoweiah')}>
          <Island style={{ width: '150px', height: '150px'}}/>
          <Back style={{ width: '50px', height: '50px', fill: 'white'}}/>
        </BackContainer>
      </SideBar>
      <BluePrintModal isOpen={bluePrintModalOpen} close={() => setBluePrintModalOpen(false)}/>
      <ActivateModal isOpen={activateModalOpen} close={() => setActivateModalOpen(false)} isSolved={isSolved}/>
    </AppContainer>
    </AbsoluteContainer>
  );
};

const mapStateToProps = (state: State) => ({ state });

export default connect(
  mapStateToProps,
  { setLevel },
)(Game);

