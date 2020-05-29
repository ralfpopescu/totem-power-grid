import React from 'react';
import styled from 'styled-components';
import { Route, useHistory } from 'react-router-dom';
import OverviewPage from './pages/OverviewPage';
import FireAndWaterPage from './pages/FireAndWaterPage';
import FireAndEarthPage from './pages/FireAndEarthPage';
import WaterAndEarthPage from './pages/WaterAndEarthPage';
import ElecricityPage from './pages/ElectricityPage';
import LightPage from './pages/LightPage';

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

const Interactions = () => {
  const history = useHistory();
  return (
<Container>
  <SubMenu>
    <MenuItem onClick={() => history.push('/faoweiah/rules/interactions/overview')} style={{ marginRight: '16px' }}>Overview</MenuItem>
    <MenuItem onClick={() => history.push('/faoweiah/rules/interactions/fireandwater')} style={{ marginRight: '16px' }}>Fire + Water</MenuItem>
    <MenuItem onClick={() => history.push('/faoweiah/rules/interactions/fireandearth')} style={{ marginRight: '16px' }}>Fire + Earth</MenuItem>
    <MenuItem onClick={() => history.push('/faoweiah/rules/interactions/waterandearth')} style={{ marginRight: '16px' }}>Water + Earth</MenuItem>
    <MenuItem onClick={() => history.push('/faoweiah/rules/interactions/electric')} style={{ marginRight: '16px' }}>Electricity</MenuItem>
    <MenuItem onClick={() => history.push('/faoweiah/rules/interactions/light')} style={{ marginRight: '16px' }}>Light</MenuItem>
  </SubMenu>
  <ContentContainer>
    <Route path="/faoweiah/rules/interactions/overview">
      <OverviewPage />
    </Route>
    <Route path="/faoweiah/rules/interactions/fireandwater">
      <FireAndWaterPage />
    </Route>
    <Route path="/faoweiah/rules/interactions/fireandearth">
      <FireAndEarthPage />
    </Route>
    <Route path="/faoweiah/rules/interactions/waterandearth">
      <WaterAndEarthPage />
    </Route>
    <Route path="/faoweiah/rules/interactions/electric">
      <ElecricityPage />
    </Route>
    <Route path="/faoweiah/rules/interactions/light">
      <LightPage />
    </Route>
  </ContentContainer>
</Container>
);};

export default Interactions;