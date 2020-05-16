import React from 'react'
import styled from 'styled-components'
import { connect } from "react-redux";
import { addTotem } from "../../../../redux/actions";
import type { AddTotem } from "../../../../redux/actions";
import type { State, TotemType, Tile as TileState } from '../../../../redux/reducers'
import Totem from '../Totem'
import Field from '../Field'


type TileContainerProps = { lit: boolean }

const TileContainer = styled.div<TileContainerProps>`
border: 2px solid rgb(214,129,137);
border-radius: 5px;
margin: 10px;
color: #fff;
font-size: 8px;
padding: 10px;
background-color: #29353d;
display: flex;
flex-direction: column;
box-shadow: ${props => props.lit && "0px 0px 8px 8px #888888"};
cursor: pointer;

&:hover {
  opacity: 0.7;
}
`

type TileProps = { index: number, addTotem: AddTotem, tile: TileState, totemSelection: TotemType }

const Tile = ({ index, addTotem, tile, totemSelection }: TileProps) => {
  return (
<TileContainer onClick={() => addTotem({ totemType: totemSelection, index })} lit={false} >
    {tile && tile.totem && <Totem totemType={tile.totem} />}
    {tile && tile.fields && <Field fields={tile.fields} />}
  </TileContainer>
)}

const mapStateToProps = (state: State) => {
  return { totemSelection: state.totemSelection }
};

export default connect(
  mapStateToProps,
  { addTotem }
)(Tile);