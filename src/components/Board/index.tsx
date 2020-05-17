import React from 'react'
import styled from 'styled-components'
import { connect } from "react-redux";
import type { State, Tiles, LightBeam } from '../../redux/reducers' 

import Tile from './components/Tile'


type BoardContainerProps = { dimension: number }

const BoardContainer = styled.div<BoardContainerProps>`
display: grid;
grid-template-rows: repeat(${props => props.dimension}, 120px);
grid-template-columns: repeat(${props => props.dimension}, 120px);
`

type BoardProps = { dimension: number, tiles: Tiles, lightBeams: Array<LightBeam> }

const Board = ({ dimension, tiles, lightBeams }: BoardProps) => {
  return (
  <BoardContainer dimension={dimension}>
    {Array(dimension * dimension).fill(1).map((_, index) => (
      <Tile index={index} tile={tiles[index]} lightBeam={lightBeams.find(lb => lb.index === index)}/>
    ))}
  </BoardContainer>
)}

const mapStateToProps = (state: State) => {
  return { tiles: state.tiles, dimension: state.dimension, lightBeams: state.lightBeams }
};

export default connect(mapStateToProps)(Board);