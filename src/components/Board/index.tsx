import React from 'react'
import styled from 'styled-components'
import { connect } from "react-redux";
import type { State, Tiles } from '../../redux/reducers' 

import Tile from './components/Tile'


type BoardContainerProps = { dimension: number }

const BoardContainer = styled.div<BoardContainerProps>`
display: grid;
grid-template-rows: repeat(${props => props.dimension}, 120px);
grid-template-columns: repeat(${props => props.dimension}, 120px);
`

type BoardProps = { dimension: number, tiles: Tiles }

const Board = ({ dimension, tiles }: BoardProps) => {
  return (
  <BoardContainer dimension={dimension}>
    {Array(dimension * dimension).fill(1).map((_, index) => (
      <Tile index={index} tile={tiles[index]} />
    ))}
  </BoardContainer>
)}

const mapStateToProps = (state: State) => {
  return { tiles: state.tiles, dimension: state.dimension }
};

export default connect(mapStateToProps)(Board);