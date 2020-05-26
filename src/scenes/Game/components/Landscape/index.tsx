import React from 'react';
import styled from 'styled-components'

const LandscapeContainer = styled.div`
position: absolute;
top: 0;
bottom: 0;
right: 0;
left: 0;
align-items: bottom;
display: flex;
flex-direction: row;
`

type TriangleProps = { height?: number, leftWidth?: number, rightWidth?: number, layer?: number }

const greens = ['#8cff66', '#ABFF90', '#BBFFD9']


const Triangle = styled.div<TriangleProps>`
width: 0;
height: 0;
border-left: ${props => props.leftWidth || 100}px solid transparent;
border-right: ${props => props.rightWidth || 100}px solid transparent;
border-bottom: ${props => props.height || 100}px solid ${props => greens[props.layer || 0]};
align-self: flex-end;
`

const Layer = styled.div`
position: absolute;
top: 0;
bottom: 0;
right: 0;
left: 0;
align-items: bottom;
display: flex;`

const MountainRow1 = styled.div`
display: flex;
width: 100%;
flex-direction: row;
align-self: flex-end;
`

const MountainRow2 = styled.div`
display: flex;
width: 100%;
flex-direction: row;
align-self: flex-end;
`

const Ocean = styled.div`
height: 150px;
width: 100%;
align-self: flex-end;
background-color: ${props => props.theme.ocean.primary};
`


const Landscape = () => (
<LandscapeContainer>
  <Layer>
    <Ocean />
  </Layer>
  <Layer>
    <MountainRow2>
      <Triangle height={100} leftWidth={80} rightWidth={200} layer={2}/>
      <Triangle height={100} leftWidth={80} rightWidth={100} layer={2}/>
      <Triangle height={200} leftWidth={200} rightWidth={300} layer={2}/>
      <Triangle height={100} leftWidth={250} rightWidth={150} layer={2}/>
    </MountainRow2>
  </Layer>
<Layer>
    <MountainRow2>
      <Triangle height={250} leftWidth={500} rightWidth={200} layer={1}/>
      <Triangle height={200} leftWidth={200} rightWidth={300} layer={1}/>
      <Triangle height={100} leftWidth={250} rightWidth={150} layer={1}/>
    </MountainRow2>
  </Layer>
  <Layer>
    <MountainRow1>
      <Triangle height={200} leftWidth={300} rightWidth={400} layer={0}/>
      <Triangle height={100} leftWidth={400} rightWidth={300} layer={0}/>
      <Triangle height={100} leftWidth={250} rightWidth={150} layer={0}/>
    </MountainRow1>
  </Layer>
  
</LandscapeContainer>
)

export default Landscape


