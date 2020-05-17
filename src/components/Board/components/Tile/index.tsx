import React from 'react'
import styled from 'styled-components'
import { connect } from "react-redux";
import { addTotem, changeTotemDirection } from "../../../../redux/actions";
import type { AddTotem, ChangeTotemDirection } from "../../../../redux/actions";
import type { State, TotemType, Direction, LightBeam, Tile as TileState } from '../../../../redux/reducers'
import Totem from '../Totem'
import Field from '../Field'
import Arrow from './icons/arrow'


const TileContainer = styled.div`
font-size: 8px;
display: inline-grid;
grid-template-columns: 1fr 5fr 1fr;
grid-template-rows: 1fr 5fr 1fr;
`

type MainContainerProps = { lit: boolean }

const MainItemContainer = styled.div<MainContainerProps>`
display: flex;
position: relative;
justify-content: center;
  align-items: center;
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 2;
   background-color: #29353d;
   padding: 10px;
   border: 2px solid rgb(214,129,137);
border-radius: 5px;
color: #fff;
box-shadow: ${props => props.lit && "0px 0px 8px 8px #888888"};
transition: all 0.1s ease;

cursor: pointer;


&:hover {
  opacity: 0.7;
}

`

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
`

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
`

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
`

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
`

type TileProps = { 
  index: number, 
  addTotem: AddTotem, 
  changeTotemDirection : ChangeTotemDirection, 
  tile: TileState, 
  lightBeam: LightBeam | undefined | null,
  totemSelection: TotemType }

const arrowStyle = { width: '20px', height: '20px '}

const activeStyle = (totemDirection: Direction, arrowDirection: Direction) => 
totemDirection === arrowDirection ? { fill: 'white' } : {}

const Tile = ({ index, addTotem, lightBeam, changeTotemDirection, tile, totemSelection }: TileProps) => {
  return (
<TileContainer>
   <MainItemContainer onClick={() => addTotem({ totemType: totemSelection, index })} lit={!!lightBeam}>
      {tile && tile.totem && <Totem totemType={tile.totem.type} />}
      {tile && tile.fields.length > 0 && <Field fields={tile.fields} />}
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
)}

const mapStateToProps = (state: State) => {
  return { totemSelection: state.totemSelection }
};

export default connect(
  mapStateToProps,
  { addTotem, changeTotemDirection }
)(Tile);