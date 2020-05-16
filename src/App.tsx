import React from 'react';
import styled from 'styled-components'
import Board from './components/Board'
import TotemSelector from './components/TotemSelector'
import { ReactComponent as Shaman } from './top-level-assets/shaman1.svg'

const AppContainer = styled.div`
position: absolute;
background-color: #36454f;
top: 0;
bottom: 0;
right: 0;
left: 0;
border: 1px solid blue;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
`

function App() {
  return (
    <AppContainer>
      <div style={{ width: '200px'}}>
      <Shaman style={{ width: '200px'}} fill="red"/>
      </div>
      <Board />
      <TotemSelector />
    </AppContainer>
  );
}

export default App;
