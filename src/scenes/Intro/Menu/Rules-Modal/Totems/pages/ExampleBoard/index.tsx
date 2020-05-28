import React, { useState } from 'react';
import styled from 'styled-components';
import Interval from 'react-interval'
import type { Tiles, LightBeam } from '../../../../../../../redux/reducers'; 
import Tile from './components/Tile';

type BoardContainerProps = { dimension: number; boardScale: number }

const Container = styled.div`
justify-content: center;
align-items: center;
display: flex;
`;

const BoardContainer = styled.div<BoardContainerProps>`
display: grid;
grid-template-rows: repeat(${props => props.dimension}, ${props => props.boardScale}px);
grid-template-columns: repeat(${props => props.dimension}, ${props => props.boardScale}px);
`;

type BoardProps = { 
  dimension: number; 
  tilesFirst: Tiles; 
  tilesSecond: Tiles; 
  lightBeams: Array<LightBeam>; 
  boardScale: number;
}

const ExampleBoard = ({ dimension, tilesFirst, tilesSecond, lightBeams, boardScale }: BoardProps) => {
  const tiles = [tilesFirst, tilesSecond]
  const [tileSwitch, setTileSwitch] = useState(0)
  return (
  <Container>
  <BoardContainer dimension={dimension} boardScale={boardScale}>
    <Interval timeout={1000} enabled={true}
          callback={() => setTileSwitch(tileSwitch ? 0 : 1)} />
    {Array(dimension * dimension).fill(1).map((_, index) => (
      <Tile index={index} tile={tiles[tileSwitch][index]} lightBeam={lightBeams.find(lb => lb.index === index)} 
      boardScale={boardScale} />
    ))}
  </BoardContainer>
  </Container>
)};

export default ExampleBoard;
