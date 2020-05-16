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
cursor: pointer;

grid-template-columns: 1fr 5fr 1fr;
grid-template-rows: 1fr 5fr 1fr;

&:hover {
  opacity: 0.7;
}
`

const MainItemContainer = styled.div`
display: flex;
position: relative;
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 2;
   background-color: #29353d;
   padding: 10px;
   border: 2px solid rgb(214,129,137);
border-radius: 5px;
color: #fff;
max-width: 50px;

`

const RightZone = styled.div`
  grid-column-start: 3;
  grid-row-start: 2;
  align-self: center;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`

const LeftZone = styled.div`
  grid-column-start: 1;
  grid-row-start: 2;
  align-self: center;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`

const TopZone = styled.div`
  grid-column-start: 2;
  grid-row-start: 1;
  align-self: center;
  width: 100%;
  height: 100%;
`

const BottomZone = styled.div`
  grid-column-start: 2;
  grid-row-start: 3;
  align-self: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

type TileProps = { index: number, addTotem: AddTotem, tile: TileState, totemSelection: TotemType }

const arrowStyle = { width: '10px', height: '10px '}

const Tile = ({ index, addTotem, tile, totemSelection }: TileProps) => {
  return (
<TileContainer onClick={() => addTotem({ totemType: totemSelection, index })} lit={false} >
   <MainItemContainer>
      {tile && tile.totem && <Totem totemType={tile.totem.type} />}
      {tile && tile.fields && <Field fields={tile.fields} />}
    </MainItemContainer>
    <RightZone>
      {tile.totem?.direction && <Arrow style={{ ...arrowStyle, transform: 'rotate(180deg)'}}/>}
    </RightZone >
    <LeftZone>
    {tile.totem?.direction && <Arrow style={{ ...arrowStyle }}/>}
      </LeftZone>
    <TopZone>
    {tile.totem?.direction && <Arrow style={{ ...arrowStyle, transform: 'rotate(90deg)'}}/>}
    </TopZone>
    <BottomZone>
    {tile.totem?.direction && <Arrow style={{ ...arrowStyle, transform: 'rotate(270deg)'}}/>}
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