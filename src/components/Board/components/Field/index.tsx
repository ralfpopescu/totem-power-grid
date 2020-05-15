import React from 'react'
import styled from 'styled-components'
import type { FieldType  } from '../../../../redux/reducers'
import calculateFieldFromFields from '../../../../logic/calculateFieldFromFields'
import { ReactComponent as Fire } from './fieldIcons/fire.svg'
import { ReactComponent as Air } from './fieldIcons/air.svg'
import { ReactComponent as Earth } from './fieldIcons/earth.svg'
import { ReactComponent as Water } from './fieldIcons/water.svg'
import { ReactComponent as Smoke } from './fieldIcons/smoke.svg'

type FieldProps = { fields: Array<FieldType> }

const getFieldColorFromFieldType = (fieldType: FieldType) => {
  if(fieldType === 'BURNING') {
    return 'red'
  }
  if(fieldType === 'FLOODED') {
    return 'blue'
  }
  if(fieldType === 'STEAMY') {
    return 'grey'
  }
  if(fieldType === 'EARTH') {
    return 'brown'
  }
  if(fieldType === 'SMOKEY') {
    return 'brown'
  }
  return 'black';
}

const iconStyle = { height: '40px', width: '40px' }

const getFieldIconFromFieldType = (fieldType: FieldType) => {
  if(fieldType === 'BURNING') {
    return <Fire style={{ ...iconStyle, fill: getFieldColorFromFieldType(fieldType) }} />
  }
  if(fieldType === 'FLOODED') {
    return <Water style={{ ...iconStyle, fill: getFieldColorFromFieldType(fieldType) }} />
  }
  if(fieldType === 'STEAMY') {
    return <Air style={{  ...iconStyle, fill: getFieldColorFromFieldType(fieldType) }} />
  }
  if(fieldType === 'EARTH') {
    return <Earth style={{  ...iconStyle, fill: getFieldColorFromFieldType(fieldType) }} />
  }
  if(fieldType === 'SMOKEY') {
    return <Smoke style={{  ...iconStyle, fill: getFieldColorFromFieldType(fieldType) }} />
  }
  return 'black';
}

const IconContainer = styled.div`
height: 40px;
width: 40px;
position: relative;
`

const Field = ({ fields }: FieldProps) => {
  const calculatedFieldType = calculateFieldFromFields(fields)
  return (
  <IconContainer>
   {getFieldIconFromFieldType(calculatedFieldType)}
  </IconContainer>
  )
}

export default Field
