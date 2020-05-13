import React from 'react'
import styled from 'styled-components'
import { connect } from "react-redux";
import { addTotem } from "../../../../redux/actions";
import Totem from '../Totem'

const TileContainer = styled.div`
border: 2px solid rgb(214,129,137);
border-radius: 5px;
margin: 10px;
color: #fff;
font-size: 8px;
padding: 10px;
background-color: black;
display: flex;
flex-direction: column;
`

const Tile = ({ index, addTotem, tile, totemSelection }) => {
  return (
<TileContainer onClick={() => addTotem({ totemType: totemSelection, index })}>
    {tile && tile.totem && <Totem totemType={tile.totem} />}
  </TileContainer>
)}

const mapStateToProps = state => {
  return { totemSelection: state.totemSelection }
};

export default connect(
  mapStateToProps,
  { addTotem }
)(Tile);