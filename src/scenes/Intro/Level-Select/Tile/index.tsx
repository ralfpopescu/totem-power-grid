import React from 'react';
import styled from 'styled-components'

type Adjancency = 'NORTH' | 'SOUTH' | 'EAST' | 'WEST'

type TileProps = { adjacencies: Array<Adjancency> }

const TileContainer = styled.div<TileProps>`
  padding-top: ${props => props.adjacencies.includes('NORTH') && '20px'};
  padding-right: ${props => props.adjacencies.includes('EAST') && '20px'};
  padding-bottom: ${props => props.adjacencies.includes('SOUTH') && '20px'};
  padding-left: ${props => props.adjacencies.includes('WEST') && '20px'};
  height: 100%;
  width: 100%;
  background-color: #33bbff;
  overflow: hidden;
`

const Land = styled.div<TileProps>`
  border-top: ${props => props.adjacencies.includes('NORTH') && '6px solid #ffe6cc'};
  border-right: ${props => props.adjacencies.includes('EAST') && '6px solid #ffe6cc'};
  border-bottom: ${props => props.adjacencies.includes('SOUTH') && '6px solid #ffe6cc'};
  border-left: ${props => props.adjacencies.includes('WEST') && '6px solid #ffe6cc'};
  height: 100%;
  width: 100%;
  background-color: #8cff66;
`

const Tile = ({ adjacencies }: TileProps) => (
<TileContainer adjacencies={adjacencies}>
  <Land adjacencies={adjacencies} />
</TileContainer>
)

export default Tile