import React from 'react';
import styled from 'styled-components'
import Tile from './Tile'

const LevelSelectContainer = styled.div`
display: grid;
grid-template-rows: repeat(8, 120px);
grid-template-columns: repeat(8, 120px);
`

const LevelSelect = () => (
  <LevelSelectContainer>
    <Tile adjacencies={['NORTH', 'WEST']}/>
    <Tile adjacencies={['NORTH']}/>
    <Tile adjacencies={['NORTH', 'EAST']}/>
  </LevelSelectContainer>
)

export default LevelSelect