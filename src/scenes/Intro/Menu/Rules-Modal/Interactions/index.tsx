import React from 'react';
import styled from 'styled-components';
import { Route, useHistory, useRouteMatch } from 'react-router-dom';
import OverviewPage from './pages/OverviewPage';
import FireAndWaterPage from './pages/FireAndWaterPage';
import FireAndEarthPage from './pages/FireAndEarthPage';
import WaterAndEarthPage from './pages/WaterAndEarthPage';
import ElecricityPage from './pages/ElectricityPage';
import LightPage from './pages/LightPage';

const Container = styled.div`
display: flex;
flex-direction: column;
`;

const ContentContainer = styled.div`
font-size: 20px;

@media only screen and (max-width: ${props => props.theme.media.mobile}px) {
  font-size: 12px;
  margin-top: 0px;
  padding 0px;
}
`;

const SubMenu = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
margin-bottom: 120px;
margin-top: 20px;

@media only screen and (max-width: ${props => props.theme.media.mobile}px) {
  margin-bottom: 0px;
}
`;

type MenuItemProps = { active: boolean }

const MenuItem = styled.div<MenuItemProps>`
font-size: 28px;
height: 20px;
cursor: pointer;
transform: scale(${props => props.active ? 1.2 : 1});
text-decoration: ${props => props.active ? 'underline' : 'none'};
margin-right: 40px;

&:hover {
  opacity: 0.7;
}

@media only screen and (max-width: ${props => props.theme.media.mobile}px) {
  font-size: 10px;
  margin-right: 16px;
}
`;

const Interactions = () => {
  const history = useHistory();
  const overviewRouteMatch = useRouteMatch('/faoweiah/rules/interactions/overview');
  const fireAndWaterRouteMatch = useRouteMatch('/faoweiah/rules/interactions/fireandwater');
  const fireAndEarthRouteMatch = useRouteMatch('/faoweiah/rules/interactions/fireandearth');
  const waterAndEarthRouteMatch = useRouteMatch('/faoweiah/rules/interactions/waterandearth');
  const electricRouteMatch = useRouteMatch('/faoweiah/rules/interactions/electric');
  const lightRouteMatch = useRouteMatch('/faoweiah/rules/interactions/light');

  return (
<Container>
  <SubMenu>
    <MenuItem onClick={() => history.push('/faoweiah/rules/interactions/overview')} active={!!overviewRouteMatch}>Overview</MenuItem>
    <MenuItem onClick={() => history.push('/faoweiah/rules/interactions/fireandwater')} active={!!fireAndWaterRouteMatch}>Fire + Water</MenuItem>
    <MenuItem onClick={() => history.push('/faoweiah/rules/interactions/fireandearth')} active={!!fireAndEarthRouteMatch}>Fire + Earth</MenuItem>
    <MenuItem onClick={() => history.push('/faoweiah/rules/interactions/waterandearth')} active={!!waterAndEarthRouteMatch}>Water + Earth</MenuItem>
    <MenuItem onClick={() => history.push('/faoweiah/rules/interactions/electric')} active={!!electricRouteMatch}>Electricity</MenuItem>
    <MenuItem onClick={() => history.push('/faoweiah/rules/interactions/light')} style={{ marginRight: 0}}active={!!lightRouteMatch}>Light</MenuItem>
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