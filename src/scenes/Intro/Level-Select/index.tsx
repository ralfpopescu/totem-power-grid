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
grid-template-rows: 100px 100px 100px 1fr;
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

const LevelDifficulty = styled.div`
grid-row-start: 3;
font-size: 20px;
place-self: center;
`


type Level = { name: string, number: number, difficulty: string }

const LevelSelect = () => {
  const [level, setLevel] = useState<Level | null>()
  return (
  <Container>
    <FaOweiah>Fa'Owei-ah</FaOweiah>
    <LevelTitle>{level ? level.name : null}</LevelTitle>
    <LevelDifficulty>{level ? level.difficulty : null}</LevelDifficulty>
    <LevelSelectContainer>
      <Tile setLevel={setLevel} adjacencies={['NORTH', 'WEST']} level={{ name: 'f', difficulty: 'hard', number: 0 }} />
      <Tile setLevel={setLevel} adjacencies={['NORTH']}/>
      <Tile setLevel={setLevel} adjacencies={['NORTH', 'EAST']}/>
      <Tile setLevel={setLevel} adjacencies={[]}/>
      <Tile setLevel={setLevel} adjacencies={[]}/>
      <Tile setLevel={setLevel} adjacencies={[]}/>
      <Tile setLevel={setLevel} adjacencies={['WEST']}/>
      <Tile setLevel={setLevel} adjacencies={[]} land={true} />
      <Tile setLevel={setLevel} adjacencies={['EAST']}/>
      <Tile setLevel={setLevel} adjacencies={[]}/>
      <Tile setLevel={setLevel} adjacencies={['NORTH', 'WEST', 'SOUTH', 'EAST']}/>
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