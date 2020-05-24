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
    <Tile adjacencies={[]}/>
    <Tile adjacencies={['NORTH', 'WEST', 'SOUTH', 'EAST']}/>
    <Tile adjacencies={[]}/>
    <Tile adjacencies={['SOUTH', 'WEST']}/>
    <Tile adjacencies={[]} land={true} />
    <Tile adjacencies={[]} land={true} />
    <Tile adjacencies={['NORTH', 'EAST']}/>
    <Tile adjacencies={[]}/>
    <Tile adjacencies={[]}/>
    <Tile adjacencies={[]}/>
    <Tile adjacencies={['SOUTH', 'WEST']}/>
    <Tile adjacencies={[]} land={true} />
    <Tile adjacencies={['SOUTH', 'EAST']}/>
    <Tile adjacencies={[]}/>
    <Tile adjacencies={[]}/>
    <Tile adjacencies={[]}/>
    <Tile adjacencies={[]}/>
    <Tile adjacencies={['EAST', 'WEST']}/>
    <Tile adjacencies={[]}/>
    <Tile adjacencies={[]}/>
    <Tile adjacencies={[]}/>
    <Tile adjacencies={[]}/>
    <Tile adjacencies={['NORTH', 'SOUTH', 'WEST']}/>
    <Tile adjacencies={['SOUTH']}/>
    <Tile adjacencies={['NORTH', 'SOUTH', 'EAST']}/>
    <Tile adjacencies={[]}/>
    <Tile adjacencies={[]}/>
  </LevelSelectContainer>
)

export default LevelSelect