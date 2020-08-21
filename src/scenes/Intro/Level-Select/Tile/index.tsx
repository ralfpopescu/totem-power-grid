import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { connect } from "react-redux";
import { useCookies } from 'react-cookie';
import useMedia from 'use-media';
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
  levelSelectTitle: LevelSelectTitle | null | undefined;
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

const UnpoweredOverlay = styled.div`
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
background-color: rgba(0, 0, 0, 0.1);
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

type TileContainerProps = { land: boolean | undefined; index?: number | undefined }

const TileContainer = styled.div<TileContainerProps>`
  height: 100%;
  width: 100%;
  display: flex;
  position: relative;
  background-color: ${props => props.land ? '#8cff66' : ''};
  overflow: visible;
  align-items: center;
  justify-content: center;
  animation: island-fade-in ${props => props.index ? props.index * 0.1 : 0.1}s;

  @keyframes island-fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

`;

type LandProps = { adjacencies: Array<Adjancency>; selected: boolean  }

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
  ${props => props.selected ? `border: 1px solid white;`: ''}

`;

type FullLandProps = { selected: boolean  }

const FullLand = styled.div<FullLandProps>`
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
  ${props => props.selected ? `border: 1px solid white;`: ''}

`; 

const Tile = ({ adjacencies, land, level, setLevelSelectTitle, levelSelectTitle, index }: TileProps) => {
  const history = useHistory();
  const [cookies, setCookie] = useCookies(['levelsComplete']);
  const levelNumber = level?.number;

  const isMobile = useMedia('(max-width: 700px)');
  const selected = !!levelSelectTitle && levelSelectTitle.number === levelNumber;

  return (
<TileContainer 
land={land}
index={index}
onMouseEnter={() => setLevelSelectTitle(level && !isMobile ? { 
  difficulty: level?.difficulty, 
  name: level?.name, 
  number: level.number, 
  complete: cookies.levelsComplete?.includes(level?.number),
} 
  : null,
  )} 
onMouseLeave={() => setLevelSelectTitle(null)} 
onClick={e => {
  e.stopPropagation();
  if(levelNumber != null && !isMobile) {
    history.push(`/game/${levelNumber}`);
  } else if(levelSelectTitle && levelSelectTitle.number === levelNumber && isMobile) {
      history.push(`/game/${levelNumber}`);
    } else {
      console.log(level?.name, level?.number);
    setLevelSelectTitle(level ? { 
      difficulty: level?.difficulty, 
      name: level?.name, 
      number: level.number, 
      complete: cookies.levelsComplete?.includes(level?.number),
    } 
      : null,
    );
  }
}}>
  {adjacencies.length > 0 && (
  <Land adjacencies={adjacencies} selected={selected}> 
    {adjacencies.map(adj => <BeachGradient adjacency={adj} />)}
    {!cookies.levelsComplete?.includes(level?.number) && <UnpoweredOverlay />}
    </Land>
    )}
  {adjacencies.length === 0 && land && <FullLand selected={selected}>{!cookies.levelsComplete?.includes(level?.number) && <UnpoweredOverlay />}</FullLand>}
</TileContainer>
);};

export default connect(
  null,
  { setLevel },
)(Tile);