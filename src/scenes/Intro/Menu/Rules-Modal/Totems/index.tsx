import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import IntroPage from './pages/IntroPage';
import FireTotemPage from './pages/IntroPage';

const Container = styled.div`
display: flex;
background-color: blue;
height: 100%;
width: 100%;
`;

const Totems = () => (
<Container>
  <Route path="/faoweiah/rules/totems/intro">
    <IntroPage />
  </Route>
  <Route path="/faoweiah/rules/totems/firetotems">
    <FireTotemPage />
  </Route>
</Container>
);

export default Totems;