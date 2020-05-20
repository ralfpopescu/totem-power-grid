import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Hut } from './assets/buildings.svg'
import { ReactComponent as LightPostIcon } from './assets/light.svg'

type SolutionTileProps = { tileSolution: 'BURNING' | 'ELECTRIC_CURRENT' | null, hasLightBeam: boolean }

const LightPost = () => (
  <LightPostIcon style={{ height: '30px', width: '30px', fill: 'white' }}/>
)

const Container = styled.div`
display: flex;
flex-direction: row;
border: 1px solid black;
align-items: center;
justify-content: center;
`

const SolutionTile = ({ tileSolution, hasLightBeam }: SolutionTileProps) => {
  let fill = null
  if(tileSolution === 'BURNING') {
    fill = 'red'
  }
  if(tileSolution === 'ELECTRIC_CURRENT') {
    fill = 'yellow'
  }
  return (
    <Container>
      {fill && <Hut style={{fill, height: '30px', width: '30px' }}/>}
      {hasLightBeam && <LightPost />}
    </Container>
  )
}

export default SolutionTile