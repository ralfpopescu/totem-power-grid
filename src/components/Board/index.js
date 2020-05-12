import React from 'react'
import styled from 'styled-components'
import { connect } from "react-redux";

import Tile from './components/Tile'

const BoardContainer = styled.div`
display: grid;
grid-template-rows: repeat(${props => props.dimension}, 100px);
grid-template-columns: repeat(${props => props.dimension}, 100px);
`

const Board = ({ dimension, tiles }) => {
  return (
  <BoardContainer dimension={dimension}>
    {Array(dimension * dimension).fill(1).map((_, index) => (
      <Tile index={index} dimension={dimension} tile={tiles[index]} />
    ))}
  </BoardContainer>
)}

const mapStateToProps = state => {
  return { tiles: state.tiles }
};

export default connect(mapStateToProps)(Board);