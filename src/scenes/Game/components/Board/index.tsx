import React from 'react'
import styled from 'styled-components'
import { connect } from "react-redux";
import type { State, Tiles, LightBeam } from '../../../../redux/reducers' 

import Tile from './components/Tile'

const boardScale = 70

type BoardContainerProps = { dimension: number }

const Container = styled.div`
padding: ${boardScale / 5}px;
justify-content: center;
align-items: center;
display: flex;
`

const BoardContainer = styled.div<BoardContainerProps>`
display: grid;
grid-template-rows: repeat(${props => props.dimension}, ${boardScale}px);
grid-template-columns: repeat(${props => props.dimension}, ${boardScale}px);
`

type BoardProps = { dimension: number, tiles: Tiles, lightBeams: Array<LightBeam> }

const Board = ({ dimension, tiles, lightBeams }: BoardProps) => {
  return (
    <Container>
  <BoardContainer dimension={dimension}>
    {Array(dimension * dimension).fill(1).map((_, index) => (
      <Tile index={index} tile={tiles[index]} lightBeam={lightBeams.find(lb => lb.index === index)} boardScale={boardScale} />
    ))}
  </BoardContainer>
  </Container>
)}

const mapStateToProps = (state: State) => {
  return { tiles: state.tiles, dimension: state.dimension, lightBeams: state.lightBeams }
};

export default connect(mapStateToProps)(Board);