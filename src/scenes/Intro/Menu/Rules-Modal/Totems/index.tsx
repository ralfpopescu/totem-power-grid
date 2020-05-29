import React from 'react';
import styled from 'styled-components';
import { Route, useHistory } from 'react-router-dom';
import IntroPage from './pages/IntroPage';
import FireTotemPage from './pages/FireTotemPage';
import WaterTotemPage from './pages/WaterTotemPage';
import EarthTotemPage from './pages/EarthTotemPage';
import ElectricTotemPage from './pages/ElectricTotemPage';
import LightTotemPage from './pages/LightTotemPage';

const Container = styled.div`
display: flex;
flex-direction: column;
height: 100%;
width: 100%;
`;

const ContentContainer = styled.div`
display: flex;
`;

const SubMenu = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
margin-bottom: 20px;
`;

const MenuItem = styled.div`
font-size: 20px;
height: 20px;
cursor: pointer;

&:hover {
  opacity: 0.7;
}

`;

const Totems = () => {
  const history = useHistory();
  return (
<Container>
  <SubMenu>
    <MenuItem onClick={() => history.push('/faoweiah/rules/totems/overview')} style={{ marginRight: '16px' }}>Overview</MenuItem>
    <MenuItem onClick={() => history.push('/faoweiah/rules/totems/fire')} style={{ marginRight: '16px' }}>Fire</MenuItem>
    <MenuItem onClick={() => history.push('/faoweiah/rules/totems/water')} style={{ marginRight: '16px' }}>Water</MenuItem>
    <MenuItem onClick={() => history.push('/faoweiah/rules/totems/earth')} style={{ marginRight: '16px' }}>Earth</MenuItem>
    <MenuItem onClick={() => history.push('/faoweiah/rules/totems/electric')} style={{ marginRight: '16px' }}>Electric</MenuItem>
    <MenuItem onClick={() => history.push('/faoweiah/rules/totems/light')} style={{ marginRight: '16px' }}>Light</MenuItem>
  </SubMenu>
  <ContentContainer>
    <Route path="/faoweiah/rules/totems/overview">
      <IntroPage />
    </Route>
    <Route path="/faoweiah/rules/totems/fire">
      <FireTotemPage />
    </Route>
    <Route path="/faoweiah/rules/totems/water">
      <WaterTotemPage />
    </Route>
    <Route path="/faoweiah/rules/totems/earth">
      <EarthTotemPage />
    </Route>
    <Route path="/faoweiah/rules/totems/electric">
      <ElectricTotemPage />
    </Route>
    <Route path="/faoweiah/rules/totems/light">
      <LightTotemPage />
    </Route>
  </ContentContainer>
</Container>
);};

export default Totems;