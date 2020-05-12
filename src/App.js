import React from 'react';
import styled from 'styled-components'
import Board from './components/Board'
import TotemSelector from './components/TotemSelector'

const AppContainer = styled.div`
position: absolute;
top: 0;
bottom: 0;
right: 0;
left: 0;
border: 1px solid blue;
display: grid;
grid-template-columns: 1fr 1fr;
`

function App() {
  return (
    <AppContainer>
      <Board dimension={8} />
      <TotemSelector />
    </AppContainer>
  );
}

export default App;
