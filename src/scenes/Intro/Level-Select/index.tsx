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
`;

const LevelSelectGridContainer = styled.div`
grid-row-start: 4;
place-items: center;

`;

const Container = styled.div`
display: grid;
grid-template-rows: 120px 40px 40px 1fr;
grid-row-start: 4;
height: 100%;
width: 100%:
place-items: center;
`;

const FaOweiah = styled.div`
grid-row-start: 1;
font-size: 50px;
place-self: center;
`;

const LevelTitle = styled.div`
grid-row-start: 2;
font-size: 24px;
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
    <FaOweiah>Fa'Owei-ah</FaOweiah>
    <LevelTitle>{levelSelectTitle ? levelSelectTitle.name : null}</LevelTitle>
    <SubLevelSelectContainer>
      <LevelDifficulty difficulty={levelSelectTitle?.difficulty}>{levelSelectTitle?.difficulty}</LevelDifficulty>
      <LevelComplete complete={!!levelSelectTitle?.complete}>{getCompletion(levelSelectTitle)}</LevelComplete>
    </SubLevelSelectContainer>
    <LevelSelectGridContainer>
      <LevelSelectContainer>
        <Tile setLevelSelectTitle={setLevelSelectTitle} level={Levels.easy.l0} adjacencies={['NORTH', 'WEST']}   index={1}/>
        <Tile setLevelSelectTitle={setLevelSelectTitle} level={Levels.medium.l0} adjacencies={['NORTH']}  index={2}/>
        <Tile setLevelSelectTitle={setLevelSelectTitle} level={Levels.medium.l1} adjacencies={['NORTH', 'EAST']}  index={3} />
        <Tile setLevelSelectTitle={setLevelSelectTitle} adjacencies={[]}/>
        <Tile setLevelSelectTitle={setLevelSelectTitle} adjacencies={[]}/>
        <Tile setLevelSelectTitle={setLevelSelectTitle} adjacencies={[]}/>
        <Tile setLevelSelectTitle={setLevelSelectTitle} level={Levels.easy.l1} adjacencies={['WEST']}  index={4}/>
        <Tile setLevelSelectTitle={setLevelSelectTitle} level={Levels.medium.l2} adjacencies={[]} land  index={5}/>
        <Tile setLevelSelectTitle={setLevelSelectTitle} level={Levels.hard.l0} adjacencies={['EAST']}  index={6}/>
        <Tile setLevelSelectTitle={setLevelSelectTitle} adjacencies={[]}/>
        <Tile setLevelSelectTitle={setLevelSelectTitle} level={Levels.veryHard.l0} adjacencies={['NORTH', 'WEST', 'SOUTH', 'EAST']}  index={7}/>
        <Tile setLevelSelectTitle={setLevelSelectTitle} adjacencies={[]}/>
        <Tile setLevelSelectTitle={setLevelSelectTitle} level={Levels.veryHard.l1} adjacencies={['SOUTH', 'WEST']}  index={8}/>
        <Tile setLevelSelectTitle={setLevelSelectTitle} level={Levels.veryHard.l2} adjacencies={[]}  land index={9}/>
        <Tile setLevelSelectTitle={setLevelSelectTitle} level={Levels.medium.l3} adjacencies={[]}  land index={10}/>
        <Tile setLevelSelectTitle={setLevelSelectTitle} level={Levels.easy.l2} adjacencies={['NORTH', 'EAST']}  index={11}/>
        <Tile setLevelSelectTitle={setLevelSelectTitle} adjacencies={[]}/>
        <Tile setLevelSelectTitle={setLevelSelectTitle} adjacencies={[]}/>
        <Tile setLevelSelectTitle={setLevelSelectTitle} adjacencies={[]}/>
        <Tile setLevelSelectTitle={setLevelSelectTitle} level={Levels.hard.l1} adjacencies={['SOUTH', 'WEST']}  index={12}/>
        <Tile setLevelSelectTitle={setLevelSelectTitle} level={Levels.easy.l3} adjacencies={[]}  land index={13}/>
        <Tile setLevelSelectTitle={setLevelSelectTitle} level={Levels.medium.l4} adjacencies={['SOUTH', 'EAST']}  index={14}/>
        <Tile setLevelSelectTitle={setLevelSelectTitle} adjacencies={[]}/>
        <Tile setLevelSelectTitle={setLevelSelectTitle} adjacencies={[]}/>
        <Tile setLevelSelectTitle={setLevelSelectTitle} adjacencies={[]}/>
        <Tile setLevelSelectTitle={setLevelSelectTitle} adjacencies={[]}/>
        <Tile setLevelSelectTitle={setLevelSelectTitle} level={Levels.easy.l4} adjacencies={['EAST', 'WEST']}  index={15}/>
        <Tile setLevelSelectTitle={setLevelSelectTitle} adjacencies={[]}/>
        <Tile setLevelSelectTitle={setLevelSelectTitle} adjacencies={[]}/>
        <Tile setLevelSelectTitle={setLevelSelectTitle} adjacencies={[]}/>
        <Tile setLevelSelectTitle={setLevelSelectTitle} adjacencies={[]}/>
        <Tile setLevelSelectTitle={setLevelSelectTitle} level={Levels.veryHard.l3} adjacencies={['NORTH', 'SOUTH', 'WEST']}  index={16}/>
        <Tile setLevelSelectTitle={setLevelSelectTitle} level={Levels.hard.l3} adjacencies={['SOUTH', 'EAST']} index={17}/>
        <Tile setLevelSelectTitle={setLevelSelectTitle} adjacencies={[]}/>
        <Tile setLevelSelectTitle={setLevelSelectTitle} level={Levels.hard.l4}adjacencies={['NORTH', 'SOUTH', 'WEST']} index={18}/>
        <Tile setLevelSelectTitle={setLevelSelectTitle} level={Levels.hard.l2}adjacencies={['NORTH', 'SOUTH', 'EAST']} index={19}/>
      </LevelSelectContainer>
    </LevelSelectGridContainer>
  </Container>
);};

export default LevelSelect;