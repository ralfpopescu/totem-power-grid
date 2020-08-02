import React from 'react';
import styled from 'styled-components';
import useMedia from 'use-media';

const LandscapeContainer = styled.div`
position: absolute;
top: 0;
bottom: 0;
right: 0;
left: 0;
align-items: bottom;
display: flex;
flex-direction: row;
overflow: hidden;
transform: rotateY(180deg);
`;

type TriangleProps = { height: number; leftWidth: number; rightWidth: number; layer: number }

const greens = ['#8cff66', '#ABFF90', '#BBFFD9'];

const generateKeyFrame = (height: number, leftWidth: number, rightWidth: number, layer: number) => `
animation:  mountainEntry${height}${leftWidth}${rightWidth}${layer} 0.4s ease-in-out;

@keyframes mountainEntry${height}${leftWidth}${rightWidth}${layer} {
  0% {
    border-left: ${leftWidth || 100}px solid transparent;
    border-right: ${rightWidth || 100}px solid transparent;
    border-bottom: 0px solid ${greens[layer || 0]};
  }
  100% {
    border-left: ${leftWidth || 100}px solid transparent;
    border-right: ${rightWidth || 100}px solid transparent;
    border-bottom: ${height || 100}px solid ${greens[layer || 0]};
  }
`;


const Triangle = styled.div<TriangleProps>`
width: 0;
height: 0;
border-left: ${props => props.leftWidth || 100}px solid transparent;
border-right: ${props => props.rightWidth || 100}px solid transparent;
border-bottom: ${props => props.height || 100}px solid ${props => greens[props.layer || 0]};
align-self: flex-end;
${props => generateKeyFrame(props.height, props.leftWidth, props.rightWidth, props.layer)}
`;

const Layer = styled.div`
position: absolute;
top: 0;
bottom: 0;
right: 0;
left: 0;
align-items: bottom;
display: flex;`;

const MountainRow1 = styled.div`
display: flex;
width: 100%;
flex-direction: row;
align-self: flex-end;
`;

const MountainRow2 = styled.div`
display: flex;
width: 100%;
flex-direction: row;
align-self: flex-end;
`;

const Ocean = styled.div`
height: 150px;
width: 100%;
align-self: flex-end;
background-color: ${props => props.theme.ocean.primary};

@media only screen and (max-width: ${props => props.theme.media.mobile}px) {
  height: 50px;
}

`;


const Landscape = () => {
  const isMobile = useMedia('(max-width: 700px)');
  const scale = isMobile ? 4 : 1;
  
  return (
<LandscapeContainer>
  <Layer>
    <Ocean />
  </Layer>
  <Layer>
    <MountainRow2>
      <Triangle height={100 / scale} leftWidth={80 / scale} rightWidth={200 / scale} layer={2}/>
      <Triangle height={100 / scale} leftWidth={80 / scale} rightWidth={100 / scale} layer={2}/>
      <Triangle height={200 / scale} leftWidth={200 / scale} rightWidth={300 / scale} layer={2}/>
      <Triangle height={100 / scale} leftWidth={250 / scale} rightWidth={150 / scale} layer={2}/>
    </MountainRow2>
  </Layer>
<Layer>
    <MountainRow2>
      <Triangle height={250 / scale} leftWidth={500 / scale} rightWidth={200 / scale} layer={1}/>
      <Triangle height={200 / scale} leftWidth={200 / scale} rightWidth={300 / scale} layer={1}/>
      <Triangle height={100 / scale} leftWidth={250 / scale} rightWidth={150 / scale} layer={1}/>
    </MountainRow2>
  </Layer>
  <Layer>
    <MountainRow1>
      <Triangle height={200 / scale} leftWidth={300 / scale} rightWidth={400 / scale} layer={0}/>
      <Triangle height={100 / scale} leftWidth={400 / scale} rightWidth={300 / scale} layer={0}/>
      <Triangle height={100 / scale} leftWidth={250 / scale} rightWidth={150 / scale} layer={0}/>
    </MountainRow1>
  </Layer>
  
</LandscapeContainer>
);};

export default Landscape;


