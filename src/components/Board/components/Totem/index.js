import React from 'react'
import styled from 'styled-components'
import totemTypes from '../../../../logic/totemTypes'
import { connect } from "react-redux";
import { addTotem } from "../../../../redux/actions";

const { FIRE, WATER, ELECTRIC, LIGHT, WIND, EARTH } = totemTypes

const totemColor = totemType => {
  console.log("TOTEMTYPE", totemType)
  switch(totemType) {
    case FIRE:
      return 'red'
    case WATER:
      return 'blue'
    case ELECTRIC:
      return 'yellow' 
    case LIGHT:
      return 'white'
      case WIND:
      return 'grey'
      case EARTH:
      return 'brown'
    default:
      return 'black'
  }
}

const TotemContainer = styled.div`
border-radius: 50%;
width: 100%;
height: 100%;
padding: 20px;
color: #fff;
background-color: ${props => totemColor(props.totemType)};
display: flex;
flex-direction: column;
`

const Totem = ({ totemType }) => {
  return (
    <>
    {totemType && <TotemContainer totemType={totemType} />}
    </>
)}

export default connect(
  null,
  { addTotem }
)(Totem);