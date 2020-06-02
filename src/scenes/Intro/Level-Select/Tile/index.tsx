import React from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { connect } from "react-redux";
import { ReactComponent as Village } from './assets/tipi.svg';
import type { Level } from '../../../../levels';
import type { LevelSelectTitle } from "..";
import { setLevel } from '../../../../redux/actions';
import type { SetLevel } from '../../../../redux/actions';

type Adjancency = 'NORTH' | 'SOUTH' | 'EAST' | 'WEST'

type TileProps = { 
  adjacencies: Array<Adjancency>; 
  land?: boolean | undefined; 
  level?: Level | undefined; 
  setLevelSelectTitle: (level: LevelSelectTitle | null) => void; 
  setLevel: SetLevel;
}

type BeachGradientProps = { adjacency: Adjancency }

const BeachGradient = styled.div<BeachGradientProps>`
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
background: linear-gradient(${({adjacency}) => {
  if(adjacency === 'EAST') {
    return '270';
  }
  if(adjacency === 'WEST') {
    return '90';
  }
  if(adjacency === 'NORTH') {
    return '180';
  }
  if(adjacency === 'SOUTH') {
    return '0';
  }
}}deg, rgba(255,239,196,1) 0%, rgba(255,254,199,1) 11%, rgba(97,255,90,0) 43%);
`;

const getCorners = (adjacencies: Array<Adjancency>) => {
  const corners = [];
  if(adjacencies.includes('NORTH') && adjacencies.includes('WEST')) {
    corners.push('NORTHWEST');
  }
  if(adjacencies.includes('NORTH') && adjacencies.includes('EAST')) {
    corners.push('NORTHEAST');
  }
  if(adjacencies.includes('SOUTH') && adjacencies.includes('WEST')) {
    corners.push('SOUTHWEST');
  }
  if(adjacencies.includes('SOUTH') && adjacencies.includes('EAST')) {
    corners.push('SOUTHEAST');
  }
  return corners;
};

const getBorderRadiusFromAdjacencies = (adjacencies: Array<Adjancency>) => {
  const radiusAmount = 50;
 const corners = getCorners(adjacencies);
 const borderRadiusString = `${corners.includes('NORTHWEST') ? `${radiusAmount}` : 0}px ${corners.includes('NORTHEAST') ? `${radiusAmount}` : 0}px ${corners.includes('SOUTHEAST') ? `${radiusAmount}` : 0}px ${corners.includes('SOUTHWEST') ? `${radiusAmount}` : 0}px`;
 return borderRadiusString;
};

type TileContainerProps = { land: boolean | undefined }

const TileContainer = styled.div<TileContainerProps>`
  height: 100px;
  width: 100px;
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

`;

type LandProps = { adjacencies: Array<Adjancency> }

const Land = styled.div<LandProps>`
  position: relative;
  height: 100px;
  width: 100px;
  background-color: #8cff66;
  border-radius: ${props => getBorderRadiusFromAdjacencies(props.adjacencies)};
  overflow: hidden;

  &:hover {
    opacity: 0.8;
  }
`;

const FullLand = styled.div`
background-color: #8cff66;
height: 100%
width: 100%:
border: 1px solid black; 
`; 

const Tile = ({ adjacencies, land, level, setLevel, setLevelSelectTitle }: TileProps) => {
  const history = useHistory();
  return (
<TileContainer 
land={land}
onMouseEnter={() => setLevelSelectTitle(level ? { difficulty: level?.difficulty, name: level?.name, number: level.number } : null)} 
onMouseLeave={() => setLevelSelectTitle(null)} 
onClick={() => {
  if(level != null) {
    setLevel({ level });
    history.push(`/game/${level.number}`);
  }
}}>
  {adjacencies.length > 0 && (
  <Land adjacencies={adjacencies} > 
    {adjacencies.map(adj => <BeachGradient adjacency={adj} />)}
    </Land>
    )}
  {adjacencies.length === 0 && land && <FullLand />}
</TileContainer>
);};

export default connect(
  null,
  { setLevel },
)(Tile);