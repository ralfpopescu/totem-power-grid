import React from 'react'
import styled from 'styled-components'
import { connect } from "react-redux";
import type { State } from '../../redux/reducers' 
import type { Solution as SolutionType } from '../../logic/getSolutionFromState'
import SolutionTile from './SolutionTile'


type SolutionContainerProps = { dimension: number }

const SolutionContainer = styled.div<SolutionContainerProps>`
display: grid;
grid-template-rows: repeat(${props => props.dimension}, 80px);
grid-template-columns: repeat(${props => props.dimension}, 80px);
`

type SolutionProps = { dimension: number, solution: SolutionType }

const Solution = ({ dimension, solution }: SolutionProps) => {
  return (
  <SolutionContainer dimension={dimension}>
    {Array(dimension * dimension).fill(1).map((_, index) => (
      <SolutionTile hasLightBeam={!!solution.lightBeams.find(lb => lb.index === index)} tileSolution={solution.tileSolution[index]} />
    ))}
  </SolutionContainer>
)}

const mapStateToProps = (state: State) => {
  return { dimension: state.dimension }
};

export default connect(mapStateToProps)(Solution);