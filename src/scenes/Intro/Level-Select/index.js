import React from 'react';
import styled from 'styled-components'
import Tile from './Tile'

const LevelSelectContainer = styled.div`
display: grid;
grid-template-rows: repeat(6, 120px);
grid-template-columns: repeat(6, 120px);
overflow: visible;
`

const LevelSelect = () => (
  <LevelSelectContainer>
    <Tile adjacencies={['NORTH', 'WEST']}/>
    <Tile adjacencies={['NORTH']}/>
    <Tile adjacencies={['NORTH', 'EAST']}/>
    <Tile adjacencies={[]}/>
    <Tile adjacencies={[]}/>
    <Tile adjacencies={[]}/>
    <Tile adjacencies={['WEST']}/>
    <Tile adjacencies={[]} land={true} />
    <Tile adjacencies={['EAST']}/>
  </LevelSelectContainer>
)

export default LevelSelect