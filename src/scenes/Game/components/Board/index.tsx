import React from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import useMedia from 'use-media';
import type { State, Tiles, LightBeam } from '../../../../redux/reducers'; 

import Tile from './components/Tile';

const boardScale = 70;
const mobileScale = 1.6;

type BoardContainerProps = { dimension: number; boardScale: number }
type ContainerProps = { boardScale: number }

const Container = styled.div<ContainerProps>`
padding: ${props => props.boardScale / 5}px;
justify-content: center;
align-items: center;
display: flex;
`;

const BoardContainer = styled.div<BoardContainerProps>`
display: grid;
grid-template-rows: repeat(${props => props.dimension}, ${props => props.boardScale}px);
grid-template-columns: repeat(${props => props.dimension}, ${props => props.boardScale}px);
`;

type BoardProps = { dimension: number; tiles: Tiles; lightBeams: Array<LightBeam> }

const Board = ({ dimension, tiles, lightBeams }: BoardProps) => {
  const isMobile = useMedia('(max-width: 700px)');
  return (
    <Container boardScale={isMobile ? boardScale / mobileScale : boardScale}>
  <BoardContainer dimension={dimension} boardScale={isMobile ? boardScale / mobileScale : boardScale}>
    {Array(dimension * dimension).fill(1).map((_, index) => (
      <Tile index={index} tile={tiles[index]} lightBeam={lightBeams.find(lb => lb.index === index)} boardScale={isMobile ? boardScale / mobileScale : boardScale} />
    ))}
  </BoardContainer>
  </Container>
);};

const mapStateToProps = (state: State) => ({ tiles: state.tiles, dimension: state.level.dimension, lightBeams: state.lightBeams });

export default connect(mapStateToProps)(Board);