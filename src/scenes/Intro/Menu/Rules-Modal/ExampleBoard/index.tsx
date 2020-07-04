import React, { useState } from 'react';
import styled from 'styled-components';
import Interval from 'react-interval';
import type { Direction, FieldType, Totem } from '../../../../../redux/reducers'; 
import Tile from './components/Tile';


export type ExampleTile = {
  totem: Totem | null;
  fields: Array<FieldType>;
}

export type Tiles = { [key: string]: ExampleTile }

export type LightBeam = { index: number; direction: Direction }
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

@media only screen and (max-width: ${props => props.theme.media.mobile}px) {
  grid-template-rows: repeat(${props => props.dimension}, ${props => props.boardScale / 1.5}px);
  grid-template-columns: repeat(${props => props.dimension}, ${props => props.boardScale / 1.5}px);
}
`;

type ExampleState = { lightBeams: Array<LightBeam>; tiles: Tiles }

type BoardProps = { 
  dimension: number; 
  stateFirst: ExampleState; 
  stateSecond: ExampleState; 
  boardScale: number;
}

const ExampleBoard = ({ dimension, stateFirst, stateSecond, boardScale }: BoardProps) => {
  const states = [stateFirst, stateSecond];
  const [stateSwitch, setStateSwitch] = useState(0);
  return (
  <Container>
  <BoardContainer dimension={dimension} boardScale={boardScale}>
    <Interval timeout={1000} enabled
          callback={() => setStateSwitch(stateSwitch ? 0 : 1)} />
    {Array(dimension * dimension).fill(1).map((_, index) => (
      <Tile index={index} tile={states[stateSwitch].tiles[index]} 
      lightBeam={states[stateSwitch].lightBeams.find(lb => lb.index === index)} 
      boardScale={boardScale} />
    ))}
  </BoardContainer>
  </Container>
);};

export default ExampleBoard;
