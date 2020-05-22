import React from 'react';
import styled from 'styled-components'

const AppContainer = styled.div`
position: absolute;
background-color: #294363;
top: 0;
bottom: 0;
right: 0;
left: 0;
overflow: scroll;
display: grid;
grid-template-columns: 1fr 4fr 1fr;
grid-template-columns: 1fr 4fr 1fr;
`

const TotemPowerGridTitle = styled.div`
font-size: 50px;
color: white;
`

const SideBar = styled.div`
grid-column-start: 1;
grid-row-start: 1;

display: flex;
flex-direction: column;
padding: 10px;
justify-self: center;
align-self: center;
align-items: center;
justify-content: center;
`



const Intro = () => {
  return (
    <AppContainer>
      <TotemPowerGridTitle>TOTEM POWER GRID</TotemPowerGridTitle>
    </AppContainer>
  );
}

export default Intro

