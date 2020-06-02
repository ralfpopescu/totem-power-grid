import React, { useState } from 'react';
import styled from 'styled-components';
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
font-size: 20px;
place-self: center;
`;

const getDifficultyColor = (difficulty: string | undefined) => {
  if(!difficulty) {
    return 'black';
  }
  if(difficulty.toLowerCase() === 'very hard') {
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


export type LevelSelectTitle = { name: string; number: number; difficulty: string }

const LevelSelect = () => {
  const [levelSelectTitle, setLevelSelectTitle] = useState<LevelSelectTitle | null>();
  return (
  <Container>
    <FaOweiah>Fa'Owei-ah</FaOweiah>
    <LevelTitle>{levelSelectTitle ? levelSelectTitle.name : null}</LevelTitle>
    <LevelDifficulty difficulty={levelSelectTitle?.difficulty}>{levelSelectTitle?.difficulty}</LevelDifficulty>
    <LevelSelectGridContainer>
      <LevelSelectContainer>
        <Tile setLevelSelectTitle={setLevelSelectTitle} adjacencies={['NORTH', 'WEST']}  level={Levels.l0}/>
        <Tile setLevelSelectTitle={setLevelSelectTitle} adjacencies={['NORTH']} level={Levels.l1}/>
        <Tile setLevelSelectTitle={setLevelSelectTitle} adjacencies={['NORTH', 'EAST']} />
        <Tile setLevelSelectTitle={setLevelSelectTitle} adjacencies={[]}/>
        <Tile setLevelSelectTitle={setLevelSelectTitle} adjacencies={[]}/>
        <Tile setLevelSelectTitle={setLevelSelectTitle} adjacencies={[]}/>
        <Tile setLevelSelectTitle={setLevelSelectTitle} adjacencies={['WEST']} />
        <Tile setLevelSelectTitle={setLevelSelectTitle} adjacencies={[]} land />
        <Tile setLevelSelectTitle={setLevelSelectTitle} adjacencies={['EAST']} />
        <Tile setLevelSelectTitle={setLevelSelectTitle} adjacencies={[]}/>
        <Tile setLevelSelectTitle={setLevelSelectTitle} adjacencies={['NORTH', 'WEST', 'SOUTH', 'EAST']} />
        <Tile setLevelSelectTitle={setLevelSelectTitle} adjacencies={[]}/>
        <Tile setLevelSelectTitle={setLevelSelectTitle} adjacencies={['SOUTH', 'WEST']}/>
        <Tile setLevelSelectTitle={setLevelSelectTitle} adjacencies={[]} land />
        <Tile setLevelSelectTitle={setLevelSelectTitle} adjacencies={[]} land />
        <Tile setLevelSelectTitle={setLevelSelectTitle} adjacencies={['NORTH', 'EAST']}/>
        <Tile setLevelSelectTitle={setLevelSelectTitle} adjacencies={[]}/>
        <Tile setLevelSelectTitle={setLevelSelectTitle} adjacencies={[]}/>
        <Tile setLevelSelectTitle={setLevelSelectTitle} adjacencies={[]}/>
        <Tile setLevelSelectTitle={setLevelSelectTitle} adjacencies={['SOUTH', 'WEST']}/>
        <Tile setLevelSelectTitle={setLevelSelectTitle} adjacencies={[]} land />
        <Tile setLevelSelectTitle={setLevelSelectTitle} adjacencies={['SOUTH', 'EAST']}/>
        <Tile setLevelSelectTitle={setLevelSelectTitle} adjacencies={[]}/>
        <Tile setLevelSelectTitle={setLevelSelectTitle} adjacencies={[]}/>
        <Tile setLevelSelectTitle={setLevelSelectTitle} adjacencies={[]}/>
        <Tile setLevelSelectTitle={setLevelSelectTitle} adjacencies={[]}/>
        <Tile setLevelSelectTitle={setLevelSelectTitle} adjacencies={['EAST', 'WEST']}/>
        <Tile setLevelSelectTitle={setLevelSelectTitle} adjacencies={[]}/>
        <Tile setLevelSelectTitle={setLevelSelectTitle} adjacencies={[]}/>
        <Tile setLevelSelectTitle={setLevelSelectTitle} adjacencies={[]}/>
        <Tile setLevelSelectTitle={setLevelSelectTitle} adjacencies={[]}/>
        <Tile setLevelSelectTitle={setLevelSelectTitle} adjacencies={['NORTH', 'SOUTH', 'WEST']}/>
        <Tile setLevelSelectTitle={setLevelSelectTitle} adjacencies={['SOUTH', 'EAST']}/>
        <Tile setLevelSelectTitle={setLevelSelectTitle} adjacencies={[]}/>
        <Tile setLevelSelectTitle={setLevelSelectTitle} adjacencies={['NORTH', 'SOUTH', 'WEST']}/>
        <Tile setLevelSelectTitle={setLevelSelectTitle} adjacencies={['NORTH', 'SOUTH', 'EAST']}/>
      </LevelSelectContainer>
    </LevelSelectGridContainer>
  </Container>
);};

export default LevelSelect;