import React from 'react'
import styled from 'styled-components'
import { connect } from "react-redux";
import { addTotem } from "../../../../redux/actions";
import type { AddTotem } from "../../../../redux/actions";
import type { State, TotemType, Direction, Tile as TileState } from '../../../../redux/reducers'
import Totem from '../Totem'
import Field from '../Field'
import Arrow from './icons/arrow'


type TileContainerProps = { lit: boolean }

const TileContainer = styled.div<TileContainerProps>`
font-size: 8px;
display: inline-grid;
box-shadow: ${props => props.lit && "0px 0px 8px 8px #888888"};

grid-template-columns: 1fr 5fr 1fr;
grid-template-rows: 1fr 5fr 1fr;


`

const MainItemContainer = styled.div`
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

type TileProps = { index: number, addTotem: AddTotem, tile: TileState, totemSelection: TotemType }

const arrowStyle = { width: '20px', height: '20px '}

const activeStyle = (totemDirection: Direction, arrowDirection: Direction) => 
totemDirection === arrowDirection ? { fill: 'white' } : {}

const Tile = ({ index, addTotem, tile, totemSelection }: TileProps) => {
  return (
<TileContainer lit={false} >
   <MainItemContainer onClick={() => addTotem({ totemType: totemSelection, index })} >
     {console.log(tile)}
      {tile && tile.totem && <Totem totemType={tile.totem.type} />}
      {tile && tile.fields.length > 0 && <Field fields={tile.fields} />}
    </MainItemContainer>
    <RightZone>
      {tile.totem?.direction && <Arrow style={{ ...arrowStyle, transform: 'rotate(180deg)', ...activeStyle(tile.totem?.direction, 'EAST')}}/>}
    </RightZone >
    <LeftZone>
    {tile.totem?.direction && <Arrow style={{ ...arrowStyle, ...activeStyle(tile.totem?.direction, 'WEST')}}/>}
      </LeftZone>
    <TopZone>
    {tile.totem?.direction && <Arrow style={{ ...arrowStyle, transform: 'rotate(90deg)', ...activeStyle(tile.totem?.direction, 'NORTH')}}/>}
    </TopZone>
    <BottomZone>
    {tile.totem?.direction && <Arrow style={{ ...arrowStyle, transform: 'rotate(270deg)', ...activeStyle(tile.totem?.direction, 'SOUTH')}}/>}
    </BottomZone>
  </TileContainer>
)}

const mapStateToProps = (state: State) => {
  return { totemSelection: state.totemSelection }
};

export default connect(
  mapStateToProps,
  { addTotem }
)(Tile);