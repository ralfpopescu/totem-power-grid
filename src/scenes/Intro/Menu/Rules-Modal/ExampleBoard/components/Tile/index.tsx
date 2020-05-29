import React from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import { addTotem, changeTotemDirection } from "../../../../../../../redux/actions";
import type { State, TotemType, Direction, LightBeam } from '../../../../../../../redux/reducers';
import type { ExampleTile } from '../../index';
import Totem from '../Totem';
import Field from '../Field';
import Arrow from './icons/arrow';
import { getThemeFromFields } from '../../../../../../../logic/totemColor';


const TileContainer = styled.div`
font-size: 8px;
display: inline-grid;
grid-template-columns: 1fr 5fr 1fr;
grid-template-rows: 1fr 5fr 1fr;
`;

type MainContainerProps = { lit: boolean; tile: ExampleTile }

const MainItemContainer = styled.div<MainContainerProps>`
background-color: ${props => {
  if(!props.tile.totem) return  getThemeFromFields(props.theme, props.tile.fields).primary;
}};
display: flex;
position: relative;
justify-content: center;
  align-items: center;
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 2;
   padding: 10px;
   border: ${props => props.tile.totem ? '': `2px solid ${props.lit ? "white" : "black"}`};
border-radius: 5px;
box-shadow: ${props => props.lit && "0px 0px 20px 20px #888888"};
transition: all 0.1s ease;

cursor: pointer;


&:hover {
  opacity: 0.7;
}

`;

const RightZone = styled.div`
  display: flex;
  grid-column-start: 3;
  grid-row-start: 2;
  align-self: center;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
cursor: pointer;


  &:hover {
    fill: lightgrey;
  }
`;

const LeftZone = styled.div`
  display: flex;
  grid-column-start: 1;
  grid-row-start: 2;
  align-self: center;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
cursor: pointer;


  &:hover {
    fill: lightgrey;
  }
`;

const TopZone = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column-start: 2;
  grid-row-start: 1;
  align-self: center;
  width: 100%;
  height: 100%;
cursor: pointer;


  &:hover {
    fill: lightgrey;
  }
`;

const BottomZone = styled.div`
  display: flex;
  grid-column-start: 2;
  grid-row-start: 3;
  align-self: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
cursor: pointer;


  &:hover {
    fill: lightgrey;
  }
`;

type TileProps = { 
  index: number; 
  tile: ExampleTile; 
  lightBeam: LightBeam | undefined | null;
  boardScale: number;
}

const arrowStyle = { width: '20px', height: '20px '};

const activeStyle = (totemDirection: Direction, arrowDirection: Direction) => 
totemDirection === arrowDirection ? { fill: 'white' } : {};

const Tile = ({ index, lightBeam, tile, boardScale }: TileProps) => (
<TileContainer>
  {index}
   <MainItemContainer lit={!!lightBeam} tile={tile}>
      {tile && tile?.totem && <Totem totemType={tile?.totem.type} boardScale={boardScale}/>}
      {tile && tile?.fields.length > 0 && <Field fields={tile?.fields} />}
    </MainItemContainer>
    <RightZone>
      {tile.totem?.direction && <Arrow style={{ ...arrowStyle, transform: 'rotate(180deg)', ...activeStyle(tile.totem?.direction, 'EAST')}} 
      onClick={() => changeTotemDirection({ totemIndex: index, direction: 'EAST' as Direction})} />}
    </RightZone >
    <LeftZone>
    {tile.totem?.direction && <Arrow style={{ ...arrowStyle, ...activeStyle(tile.totem?.direction, 'WEST')}} 
    onClick={() => changeTotemDirection({ totemIndex: index, direction: 'WEST' as Direction})} />}
      </LeftZone>
    <TopZone>
    {tile.totem?.direction && <Arrow style={{ ...arrowStyle, transform: 'rotate(90deg)', ...activeStyle(tile.totem?.direction, 'NORTH')}}
    onClick={() => changeTotemDirection({ totemIndex: index, direction: 'NORTH' as Direction})}/>}
    </TopZone>
    <BottomZone>
    {tile.totem?.direction && <Arrow style={{ ...arrowStyle, transform: 'rotate(270deg)', ...activeStyle(tile.totem?.direction, 'SOUTH')}}
    onClick={() => changeTotemDirection({ totemIndex: index, direction: 'SOUTH' as Direction})}/>}
    </BottomZone>
  </TileContainer>
);

export default Tile;