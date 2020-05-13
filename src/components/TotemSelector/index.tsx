import React from 'react'
import styled from 'styled-components'
import type { TotemType } from '../../logic/totemTypes'
import totemColor from '../../logic/totemColor'
import { changeTotemSelection } from '../../redux/actions'
import type { State } from '../../redux/reducers'
import type { ChangeTotemSelection } from '../../redux/actions'
import { connect } from "react-redux";

const typesArray: Array<TotemType> = ['FIRE', 'ELECTRIC', 'LIGHT', 'WATER', 'WIND', 'EARTH']

const SelectorContainer = styled.div`
display: grid;
grid-template-columns: repeat(6, 100px);
height: 300px;
padding: 20px;
`

type SelectorProps = { totemType: TotemType, totemSelection: TotemType }

const Selector = styled.div<SelectorProps>`
background-color: ${props => totemColor(props.totemType)};
padding: 10px;
width: 20px;
height: 20px;
border: 2px solid ${({ totemSelection, totemType }) => totemSelection === totemType ? "lightblue": "black" };
cursor: pointer;
`

type TotemSelectorProps = { totemSelection: TotemType, changeTotemSelection: ChangeTotemSelection }

const TotemSelector = ({ totemSelection, changeTotemSelection }: TotemSelectorProps) => (
  <SelectorContainer>
  {typesArray.map((totemType: TotemType) => (
  <Selector totemType={totemType} totemSelection={totemSelection} onClick={() => changeTotemSelection({ totemType })}/>
  ))}
  </SelectorContainer>
)

const mapStateToProps = (state: State) => {
  return { totemSelection: state.totemSelection }
};

export default connect(
  mapStateToProps,
  { changeTotemSelection }
)(TotemSelector);
