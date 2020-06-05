import React from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { connect } from "react-redux";
import { useCookies } from 'react-cookie';
import { ReactComponent as VillageIcon } from './assets/tipi.svg';
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
  index?: number;
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

const Village = ({ powered }: { powered: boolean | undefined }) => (
  <VillageIcon style={{ height: '28px', width: '28px', fill: powered ? 'rgb(240, 217, 70)' : 'rgb(110, 58, 2' }}/>
);

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

`;

type LandProps = { adjacencies: Array<Adjancency> }

const Land = styled.div<LandProps>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom 0;
  background-color: #8cff66;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${props => getBorderRadiusFromAdjacencies(props.adjacencies)};
  overflow: hidden;
  cursor: pointer;


  &:hover {
    background-color: #c0ff85;
  }
`;

const FullLand = styled.div`
background-color: #8cff66;
position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom 0;
display: flex;
cursor: pointer;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #c0ff85;
  }
`; 

const Tile = ({ adjacencies, land, level, setLevel, setLevelSelectTitle, index }: TileProps) => {
  const history = useHistory();
  const [cookies, setCookie] = useCookies(['levelsComplete']);

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
    <Village powered={cookies.levelsComplete?.includes(level?.number)}/>
    </Land>
    )}
  {adjacencies.length === 0 && land && <FullLand><Village powered={cookies.levelsComplete?.includes(level?.number)}/></FullLand>}
</TileContainer>
);};

export default connect(
  null,
  { setLevel },
)(Tile);