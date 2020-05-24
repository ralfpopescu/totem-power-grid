import React from 'react';
import styled from 'styled-components'

type Adjancency = 'NORTH' | 'SOUTH' | 'EAST' | 'WEST'

type TileProps = { adjacencies: Array<Adjancency>, land: boolean | undefined }

type BeachGradientProps = { adjacency: Adjancency }

const BeachGradient = styled.div<BeachGradientProps>`
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
background: linear-gradient(${({adjacency}) => {
  if(adjacency === 'EAST') {
    return '270'
  }
  if(adjacency === 'WEST') {
    return '90'
  }
  if(adjacency === 'NORTH') {
    return '180'
  }
  if(adjacency === 'SOUTH') {
    return '0'
  }
}}deg, rgba(255,239,196,1) 0%, rgba(255,254,199,1) 11%, rgba(97,255,90,0) 43%);
`

const getCorners = (adjacencies: Array<Adjancency>) => {
  const corners = []
  if(adjacencies.includes('NORTH') && adjacencies.includes('WEST')) {
    corners.push('NORTHWEST')
  }
  if(adjacencies.includes('NORTH') && adjacencies.includes('EAST')) {
    corners.push('NORTHEAST')
  }
  if(adjacencies.includes('SOUTH') && adjacencies.includes('WEST')) {
    corners.push('SOUTHWEST')
  }
  if(adjacencies.includes('SOUTH') && adjacencies.includes('EAST')) {
    corners.push('SOUTHEAST')
  }
  return corners
}

const getBorderRadiusFromAdjacencies = (adjacencies: Array<Adjancency>) => {
  const radiusAmount = 50
 const corners = getCorners(adjacencies)
 const borderRadiusString = `${corners.includes('NORTHWEST') ? `${radiusAmount}` : 0}px ${corners.includes('NORTHEAST') ? `${radiusAmount}` : 0}px ${corners.includes('SOUTHEAST') ? `${radiusAmount}` : 0}px ${corners.includes('SOUTHWEST') ? `${radiusAmount}` : 0}px`
 console.log(borderRadiusString)
 return borderRadiusString
}

const TileContainer = styled.div<TileProps>`
  height: 120px;
  width: 120px;
  display: flex;
  position: relative;
  background-color: ${props => props.land ? '#8cff66' : ''};
  overflow: visible;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

`

const Land = styled.div<TileProps>`
  position: relative;
  height: 120px;
  width: 120px;
  background-color: #8cff66;
  border-radius: ${props => getBorderRadiusFromAdjacencies(props.adjacencies)};
  overflow: hidden;

  &:hover {
    opacity: 0.8;
  }
`

const FullLand = styled.div`
background-color: #8cff66;
height: 100%
width: 100%:
border: 1px solid black; 

`

const Tile = ({ adjacencies, land }: TileProps) => (
<TileContainer adjacencies={adjacencies} land={land} >
  {adjacencies.length > 0 && (
  <Land adjacencies={adjacencies} land={land}>
    {adjacencies.map(adj => <BeachGradient adjacency={adj} />)}
    </Land>
    )}
  {adjacencies.length === 0 && land && <FullLand />}
</TileContainer>
)

export default Tile