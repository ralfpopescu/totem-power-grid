import React, { useState } from 'react';
import styled from 'styled-components';
import { useCookies } from 'react-cookie';
import Tile from './Tile';
import Levels from '../../../levels';

const LevelSelectContainer = styled.div`
display: grid;
grid-template-rows: repeat(6, 100px);
grid-template-columns: repeat(6, 100px);
overflow: visible;
place-items: center;

@media only screen and (max-width: ${props => props.theme.media.mobile}px) {
  grid-template-rows: repeat(6, 50px);
  grid-template-columns: repeat(6, 50px);
}
`;

const LevelSelectGridContainer = styled.div`
grid-row-start: 4;
place-items: center;
padding: 20px;

`;

const Container = styled.div`
display: grid;
grid-template-rows: 120px 40px 40px 1fr;
grid-row-start: 4;
height: 100%;
width: 100%:
place-items: center;


@media only screen and (max-width: ${props => props.theme.media.mobile}px) {
  display: flex;
  flex-direction: column;
}
`;

const Hero = styled.div`
grid-row-start: 1;
place-self: center;
display: flex;
flex-direction: column;
`;


const TheIslesOf = styled.div`
font-size: 20px;
place-self: center;
`;

const FaOweiah = styled.div`
font-size: 40px;
place-self: center;
`;

const LevelTitle = styled.div`
grid-row-start: 2;
font-size: 20px;
place-self: center;
`;

const getDifficultyColor = (difficulty: string | undefined) => {
  if(!difficulty) {
    return 'black';
  }
  if(difficulty.toLowerCase() === 'very-hard') {
    return 'red';
  }
  if(difficulty.toLowerCase() === 'hard') {
    return 'orange';
  }
  if(difficulty.toLowerCase() === 'medium') {
    return 'yellow';
  }
  if(difficulty.toLowerCase() === 'easy') {
    return 'green';
  }
  return 'black';
};

type LevelDifficultyProps = { difficulty: string | undefined }

const LevelDifficulty = styled.div<LevelDifficultyProps>`
grid-row-start: 3;
font-size: 20px;
place-self: center;
color: ${props => getDifficultyColor(props.difficulty)}
`;

type LevelCompleteProps = { complete: boolean }

const LevelComplete = styled.div<LevelCompleteProps>`
grid-row-start: 3;
font-size: 20px;
place-self: center;
color: ${props => props.complete ? 'white' : 'grey'};
margin-left: 16px;
`;

const SubLevelSelectContainer = styled.div`
place-self: center;
grid-row-start: 3;
display: flex;
flex-direction: row;
`;

export type LevelSelectTitle = { name: string; number: number; difficulty: string; complete: boolean }

const getCompletion = (levelSelectTitle: LevelSelectTitle | null | undefined) => {
  if(!levelSelectTitle) {
    return '';
  }
  return levelSelectTitle.complete ? '(powered)' : '(unpowered)';
};

const LevelSelect = () => {
  const [levelSelectTitle, setLevelSelectTitle] = useState<LevelSelectTitle | null>();
  const [cookies, setCookie] = useCookies(['levelsComplete']);

  return (
  <Container>
    <Hero>
      <TheIslesOf>The Isles Of</TheIslesOf>
      <FaOweiah>Fa'Owei-ah</FaOweiah>
    </Hero>
    <LevelTitle>{levelSelectTitle ? levelSelectTitle.name : null}</LevelTitle>
    <SubLevelSelectContainer>
      <LevelDifficulty difficulty={levelSelectTitle?.difficulty}>{levelSelectTitle?.difficulty}</LevelDifficulty>
      <LevelComplete complete={!!levelSelectTitle?.complete}>{getCompletion(levelSelectTitle)}</LevelComplete>
    </SubLevelSelectContainer>
    <LevelSelectGridContainer>
      <LevelSelectContainer>
        <Tile levelSelectTitle={levelSelectTitle} setLevelSelectTitle={setLevelSelectTitle} level={Levels.easy.l0} adjacencies={['NORTH', 'WEST']}   index={1}/>
        <Tile levelSelectTitle={levelSelectTitle} setLevelSelectTitle={setLevelSelectTitle} level={Levels.medium.l0} adjacencies={['NORTH']}  index={2}/>
        <Tile levelSelectTitle={levelSelectTitle} setLevelSelectTitle={setLevelSelectTitle} level={Levels.medium.l1} adjacencies={['NORTH', 'EAST']}  index={3} />
        <Tile levelSelectTitle={levelSelectTitle} setLevelSelectTitle={setLevelSelectTitle} adjacencies={[]}/>
        <Tile levelSelectTitle={levelSelectTitle} setLevelSelectTitle={setLevelSelectTitle} adjacencies={[]}/>
        <Tile levelSelectTitle={levelSelectTitle} setLevelSelectTitle={setLevelSelectTitle} adjacencies={[]}/>
        <Tile levelSelectTitle={levelSelectTitle} setLevelSelectTitle={setLevelSelectTitle} level={Levels.easy.l1} adjacencies={['WEST']}  index={4}/>
        <Tile levelSelectTitle={levelSelectTitle} setLevelSelectTitle={setLevelSelectTitle} level={Levels.medium.l2} adjacencies={[]} land  index={5}/>
        <Tile levelSelectTitle={levelSelectTitle} setLevelSelectTitle={setLevelSelectTitle} level={Levels.hard.l0} adjacencies={['EAST']}  index={6}/>
        <Tile levelSelectTitle={levelSelectTitle} setLevelSelectTitle={setLevelSelectTitle} adjacencies={[]}/>
        <Tile levelSelectTitle={levelSelectTitle} setLevelSelectTitle={setLevelSelectTitle} level={Levels.veryHard.l0} adjacencies={['NORTH', 'WEST', 'SOUTH', 'EAST']}  index={7}/>
        <Tile levelSelectTitle={levelSelectTitle} setLevelSelectTitle={setLevelSelectTitle} adjacencies={[]}/>
        <Tile levelSelectTitle={levelSelectTitle} setLevelSelectTitle={setLevelSelectTitle} level={Levels.veryHard.l1} adjacencies={['SOUTH', 'WEST']}  index={8}/>
        <Tile levelSelectTitle={levelSelectTitle} setLevelSelectTitle={setLevelSelectTitle} level={Levels.veryHard.l2} adjacencies={[]}  land index={9}/>
        <Tile levelSelectTitle={levelSelectTitle} setLevelSelectTitle={setLevelSelectTitle} level={Levels.medium.l3} adjacencies={[]}  land index={10}/>
        <Tile levelSelectTitle={levelSelectTitle} setLevelSelectTitle={setLevelSelectTitle} level={Levels.easy.l2} adjacencies={['NORTH', 'EAST']}  index={11}/>
        <Tile levelSelectTitle={levelSelectTitle} setLevelSelectTitle={setLevelSelectTitle} adjacencies={[]}/>
        <Tile levelSelectTitle={levelSelectTitle} setLevelSelectTitle={setLevelSelectTitle} adjacencies={[]}/>
        <Tile levelSelectTitle={levelSelectTitle} setLevelSelectTitle={setLevelSelectTitle} adjacencies={[]}/>
        <Tile levelSelectTitle={levelSelectTitle} setLevelSelectTitle={setLevelSelectTitle} level={Levels.hard.l1} adjacencies={['SOUTH', 'WEST']}  index={12}/>
        <Tile levelSelectTitle={levelSelectTitle} setLevelSelectTitle={setLevelSelectTitle} level={Levels.easy.l3} adjacencies={[]}  land index={13}/>
        <Tile levelSelectTitle={levelSelectTitle} setLevelSelectTitle={setLevelSelectTitle} level={Levels.medium.l4} adjacencies={['SOUTH', 'EAST']}  index={14}/>
        <Tile levelSelectTitle={levelSelectTitle} setLevelSelectTitle={setLevelSelectTitle} adjacencies={[]}/>
        <Tile levelSelectTitle={levelSelectTitle} setLevelSelectTitle={setLevelSelectTitle} adjacencies={[]}/>
        <Tile levelSelectTitle={levelSelectTitle} setLevelSelectTitle={setLevelSelectTitle} adjacencies={[]}/>
        <Tile levelSelectTitle={levelSelectTitle} setLevelSelectTitle={setLevelSelectTitle} adjacencies={[]}/>
        <Tile levelSelectTitle={levelSelectTitle} setLevelSelectTitle={setLevelSelectTitle} level={Levels.easy.l4} adjacencies={['EAST', 'WEST']}  index={15}/>
        <Tile levelSelectTitle={levelSelectTitle} setLevelSelectTitle={setLevelSelectTitle} adjacencies={[]}/>
        <Tile levelSelectTitle={levelSelectTitle} setLevelSelectTitle={setLevelSelectTitle} adjacencies={[]}/>
        <Tile levelSelectTitle={levelSelectTitle} setLevelSelectTitle={setLevelSelectTitle} adjacencies={[]}/>
        <Tile levelSelectTitle={levelSelectTitle} setLevelSelectTitle={setLevelSelectTitle} adjacencies={[]}/>
        <Tile levelSelectTitle={levelSelectTitle} setLevelSelectTitle={setLevelSelectTitle} level={Levels.veryHard.l3} adjacencies={['NORTH', 'SOUTH', 'WEST']}  index={16}/>
        <Tile levelSelectTitle={levelSelectTitle} setLevelSelectTitle={setLevelSelectTitle} level={Levels.hard.l3} adjacencies={['SOUTH', 'EAST']} index={17}/>
        <Tile levelSelectTitle={levelSelectTitle} setLevelSelectTitle={setLevelSelectTitle} adjacencies={[]}/>
        <Tile levelSelectTitle={levelSelectTitle} setLevelSelectTitle={setLevelSelectTitle} level={Levels.hard.l4}adjacencies={['NORTH', 'SOUTH', 'WEST']} index={18}/>
        <Tile levelSelectTitle={levelSelectTitle} setLevelSelectTitle={setLevelSelectTitle} level={Levels.hard.l2}adjacencies={['NORTH', 'SOUTH', 'EAST']} index={19}/>
      </LevelSelectContainer>
    </LevelSelectGridContainer>
  </Container>
);};

export default LevelSelect;