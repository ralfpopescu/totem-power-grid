import React, { useState } from 'react';
import styled from 'styled-components'
import Tile from './Tile'

const LevelSelectContainer = styled.div`
display: grid;
grid-template-rows: repeat(6, 120px);
grid-template-columns: repeat(6, 120px);
overflow: visible;
`

const Container = styled.div`
display: grid;
grid-template-rows: 80px 40px 40px 1fr;
grid-row-start: 4;
height: 100%;
width: 100%:
`

const FaOweiah = styled.div`
grid-row-start: 1;
font-size: 30px;
place-self: center;
`

const LevelTitle = styled.div`
grid-row-start: 2;
font-size: 20px;
place-self: center;
`

const getDifficultyColor = (difficulty: string | undefined) => {
  if(!difficulty) {
    return 'black'
  }
  if(difficulty.toLowerCase() === 'very hard') {
    return 'red'
  }
  if(difficulty.toLowerCase() === 'hard') {
    return 'orange'
  }
  if(difficulty.toLowerCase() === 'medium') {
    return 'yellow'
  }
  if(difficulty.toLowerCase() === 'easy') {
    return 'green'
  }
  return 'black'
}

type LevelDifficultyProps = { difficulty: string | undefined }

const LevelDifficulty = styled.div<LevelDifficultyProps>`
grid-row-start: 3;
font-size: 20px;
place-self: center;
color: ${props => getDifficultyColor(props.difficulty)}
`


type Level = { name: string, number: number, difficulty: string }

const LevelSelect = () => {
  const [level, setLevel] = useState<Level | null>()
  return (
  <Container>
    <FaOweiah>Fa'Owei-ah</FaOweiah>
    <LevelTitle>{level ? level.name : null}</LevelTitle>
    <LevelDifficulty difficulty={level?.difficulty}>{level?.difficulty}</LevelDifficulty>
    <LevelSelectContainer>
      <Tile setLevel={setLevel} adjacencies={['NORTH', 'WEST']} level={{ name: 'Fisherman’s Dream', difficulty: 'hard', number: 0 }} />
      <Tile setLevel={setLevel} adjacencies={['NORTH']} level={{ name: 'Jami\'s Coconut Farm', difficulty: 'easy', number: 1 }}/>
      <Tile setLevel={setLevel} adjacencies={['NORTH', 'EAST']} level={{ name: 'Kaka Wawa', difficulty: 'easy', number: 2 }}/>
      <Tile setLevel={setLevel} adjacencies={[]}/>
      <Tile setLevel={setLevel} adjacencies={[]}/>
      <Tile setLevel={setLevel} adjacencies={[]}/>
      <Tile setLevel={setLevel} adjacencies={['WEST']} level={{ name: 'Capitol Village', difficulty: 'very hard', number: 3 }}/>
      <Tile setLevel={setLevel} adjacencies={[]} land={true} level={{ name: 'N\'eva Eva', difficulty: 'easy', number: 4 }}/>
      <Tile setLevel={setLevel} adjacencies={['EAST']} level={{ name: 'Here Be Surfers', difficulty: 'medium', number: 5 }}/>
      <Tile setLevel={setLevel} adjacencies={[]}/>
      <Tile setLevel={setLevel} adjacencies={['NORTH', 'WEST', 'SOUTH', 'EAST']} level={{ name: 'Penthouse Island', difficulty: 'very hard', number: 5 }}/>
      <Tile setLevel={setLevel} adjacencies={[]}/>
      <Tile setLevel={setLevel} adjacencies={['SOUTH', 'WEST']}/>
      <Tile setLevel={setLevel} adjacencies={[]} land={true} />
      <Tile setLevel={setLevel} adjacencies={[]} land={true} />
      <Tile setLevel={setLevel} adjacencies={['NORTH', 'EAST']}/>
      <Tile setLevel={setLevel} adjacencies={[]}/>
      <Tile setLevel={setLevel} adjacencies={[]}/>
      <Tile setLevel={setLevel} adjacencies={[]}/>
      <Tile setLevel={setLevel} adjacencies={['SOUTH', 'WEST']}/>
      <Tile setLevel={setLevel} adjacencies={[]} land={true} />
      <Tile setLevel={setLevel} adjacencies={['SOUTH', 'EAST']}/>
      <Tile setLevel={setLevel} adjacencies={[]}/>
      <Tile setLevel={setLevel} adjacencies={[]}/>
      <Tile setLevel={setLevel} adjacencies={[]}/>
      <Tile setLevel={setLevel} adjacencies={[]}/>
      <Tile setLevel={setLevel} adjacencies={['EAST', 'WEST']}/>
      <Tile setLevel={setLevel} adjacencies={[]}/>
      <Tile setLevel={setLevel} adjacencies={[]}/>
      <Tile setLevel={setLevel} adjacencies={[]}/>
      <Tile setLevel={setLevel} adjacencies={[]}/>
      <Tile setLevel={setLevel} adjacencies={['NORTH', 'SOUTH', 'WEST']}/>
      <Tile setLevel={setLevel} adjacencies={['SOUTH', 'EAST']}/>
      <Tile setLevel={setLevel} adjacencies={[]}/>
      <Tile setLevel={setLevel} adjacencies={['NORTH', 'SOUTH', 'WEST']}/>
      <Tile setLevel={setLevel} adjacencies={['NORTH', 'SOUTH', 'EAST']}/>
    </LevelSelectContainer>
  </Container>
)}

export default LevelSelect