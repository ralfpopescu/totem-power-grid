import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Hut } from './assets/buildings.svg'
import { ReactComponent as LightPostIcon } from './assets/light.svg'

type SolutionTileProps = { tileSolution: 'BURNING' | 'ELECTRIC_CURRENT' | null, hasLightBeam: boolean, index: number }

const LightPost = () => (
  <LightPostIcon style={{ height: '30px', width: '30px', fill: 'white' }}/>
)

const Container = styled.div`
position: relative;
display: flex;
flex-direction: row;
border: 1px solid rgba(255,255,255,.4);
align-items: center;
justify-content: center;
background-image: linear-gradient(to right, #2D86F0 , #3F94F8);

`

const BluePrintTexture = styled.div`
display: grid;
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
font-size: 6px;
color: white;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

`

const BluePrintTextureSquare = styled.div`
border: 1px solid rgba(255,255,255,.1);
width: 100%;
height: 100%;
`

const SolutionTile = ({ tileSolution, hasLightBeam, index }: SolutionTileProps) => {
  let fill = null
  if(tileSolution === 'BURNING') {
    fill = 'red'
  }
  if(tileSolution === 'ELECTRIC_CURRENT') {
    fill = 'yellow'
  }
  return (
    <Container>
      <BluePrintTexture>
        <BluePrintTextureSquare>
          {index}
        </BluePrintTextureSquare>
        {Array(24).fill(<BluePrintTextureSquare />)}
      </BluePrintTexture>
      {fill && <Hut style={{fill, height: '30px', width: '30px' }}/>}
      {hasLightBeam && <LightPost />}
    </Container>
  )
}

export default SolutionTile