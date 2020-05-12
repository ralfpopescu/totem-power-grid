import React from 'react'
import styled from 'styled-components'
import totemTypes from '../../logic/totemTypes'
import totemColor from '../../logic/totemColor'
import { changeTotemSelection } from '../../redux/actions'
import { connect } from "react-redux";

const { FIRE, WATER, ELECTRIC, LIGHT, WIND, EARTH } = totemTypes

const typesArray = [FIRE, ELECTRIC, LIGHT, WATER, WIND, EARTH]

const SelectorContainer = styled.div`
display: grid;
grid-template-columns: repeat(${props => props.dimension}, 100px);
height: 300px;
padding: 20px;
`

const Selector = styled.div`
background-color: ${props => totemColor(props.totemType)};
padding: 10px;
width: 20px;
height: 20px;
border: 2px solid ${({ totemSelection, totemType }) => totemSelection === totemType ? "lightblue": "black" };
cursor: pointer;
`

const TotemSelector = ({ totemSelection, changeTotemSelection }) => (
  <SelectorContainer>
  {typesArray.map(totemType => (
  <Selector totemType={totemType} totemSelection={totemSelection} onClick={() => changeTotemSelection({ totemType })}/>
  ))}
  </SelectorContainer>
)

const mapStateToProps = state => {
  return { totemSelection: state.totemSelection }
};

export default connect(
  mapStateToProps,
  { changeTotemSelection }
)(TotemSelector);
