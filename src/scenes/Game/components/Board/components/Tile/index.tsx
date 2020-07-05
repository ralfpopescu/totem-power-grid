import React, { memo, useState } from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import useMedia from 'use-media';
import { addTotem, changeTotemDirection, setHoveredTotemId } from "../../../../../../redux/actions";
import type { AddTotem, ChangeTotemDirection, SetHoveredTotemId } from "../../../../../../redux/actions";
import type { State, TotemType, Direction, LightBeam, Tile as TileState } from '../../../../../../redux/reducers';
import Totem from '../Totem';
import Field from '../Field';
import Arrow from './icons/arrow';
import DirectionPickerModal from './DirectionPickerModal';
import { getThemeFromFields } from '../../../../../../logic/totemColor';


type TileContainerProps = { index: number }

const TileContainer = styled.div<TileContainerProps>`
font-size: 8px;
display: inline-grid;
grid-template-columns: 1fr 5fr 1fr;
grid-template-rows: 1fr 5fr 1fr;
animation: tile-entry ${props => props.index * 0.03}s ease-in-out;

@keyframes tile-entry {
  0% {
    opacity: 0;
    {transform: scale(1.5);}
  }
  100% {
    opacity: 1;
    {transform: scale(1);}
  }
`;

type MainContainerProps = { lit: boolean; tile: TileState; boardScale: number; isTotemHovered: boolean }

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
   padding: ${props => props.boardScale / 12}px;
   border: ${props => props.isTotemHovered ? '2' : '0'}px solid #1d5bbf;
border-radius: 5px;
box-shadow: ${props => props.lit && "0px 0px 10px 10px #ffffff"};
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
  addTotem: AddTotem; 
  changeTotemDirection: ChangeTotemDirection; 
  tile: TileState; 
  lightBeam: LightBeam | undefined | null;
  totemSelection: TotemType;
  boardScale: number; 
  setHoveredTotemId: SetHoveredTotemId;
  hoveredTotemId: string | null;
}

const arrowStyle = (boardScale: number) => ({ width: `${boardScale/8}px`, height: `${boardScale/8}px`, zIndex: 1 });

const activeStyle = (totemDirection: Direction, arrowDirection: Direction) => 
totemDirection === arrowDirection ? { fill: 'white' } : {};

const Tile = ({ 
  index, 
  addTotem, 
  lightBeam,
  changeTotemDirection, 
  tile, 
  totemSelection, 
  boardScale, 
  hoveredTotemId,
  setHoveredTotemId }: TileProps) => {
    const [directionPickerModalOpen, setDirectionPickerModalOpen] = useState<boolean>(false);
    const isMobile = useMedia('(max-width: 700px)');

    return (
<TileContainer index={index}>
  {index}
   <MainItemContainer onClick={() => {
     if((totemSelection === 'ELECTRIC' || totemSelection === 'LIGHT') && isMobile) {
      setDirectionPickerModalOpen(true);
     } else {
     addTotem({ totemType: totemSelection, index });
     }
    }} 
     lit={!!lightBeam} tile={tile} boardScale={boardScale}
     onMouseEnter={() => {
       if(tile.totem?.id != null) {
        setHoveredTotemId({ totemId: tile.totem?.id });
       }
      }} 
      onMouseLeave={() => setHoveredTotemId({ totemId: null })}
      isTotemHovered={hoveredTotemId != null && (hoveredTotemId === tile.totem?.id 
        || tile.fields.map(f => f.appliedBy).includes(hoveredTotemId))}
      >
      {tile && tile.totem && <Totem totemType={tile.totem.type} boardScale={boardScale} index={index} />}
      {tile && tile.fields.length > 0 && !tile.totem && <Field fields={tile.fields} boardScale={boardScale} />}
    </MainItemContainer>
    <RightZone>
      {tile.totem?.direction && <Arrow style={{ ...arrowStyle(boardScale), transform: 'rotate(180deg)', ...activeStyle(tile.totem?.direction, 'EAST')}} 
      onClick={() => changeTotemDirection({ totemIndex: index, direction: 'EAST' as Direction})} />}
    </RightZone >
    <LeftZone>
    {tile.totem?.direction && <Arrow style={{ ...arrowStyle(boardScale), ...activeStyle(tile.totem?.direction, 'WEST')}} 
    onClick={() => changeTotemDirection({ totemIndex: index, direction: 'WEST' as Direction})} />}
      </LeftZone>
    <TopZone>
    {tile.totem?.direction && <Arrow style={{ ...arrowStyle(boardScale), transform: 'rotate(90deg)', ...activeStyle(tile.totem?.direction, 'NORTH')}}
    onClick={() => changeTotemDirection({ totemIndex: index, direction: 'NORTH' as Direction})}/>}
    </TopZone>
    <BottomZone>
    {tile.totem?.direction && <Arrow style={{ ...arrowStyle(boardScale), transform: 'rotate(270deg)', ...activeStyle(tile.totem?.direction, 'SOUTH')}}
    onClick={() => changeTotemDirection({ totemIndex: index, direction: 'SOUTH' as Direction})}/>}
    </BottomZone>
    <DirectionPickerModal 
      isOpen={directionPickerModalOpen} 
      close={() => setDirectionPickerModalOpen(false)} 
      totemType={totemSelection} 
      index={index} 
      boardScale={boardScale} 
      />
  </TileContainer>
);};

const mapStateToProps = (state: State) => ({ 
  totemSelection: state.totemSelection, 
  hoveredTotemId: state.hoveredTotemId, 
});

const MemoizedTile = memo(Tile);

export default connect(
  mapStateToProps,
  { addTotem, changeTotemDirection, setHoveredTotemId },
)(MemoizedTile);