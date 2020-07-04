import React from 'react';
import styled from 'styled-components';
import { Route, useHistory, useRouteMatch } from 'react-router-dom';
import IntroPage from './pages/IntroPage';
import FireTotemPage from './pages/FireTotemPage';
import WaterTotemPage from './pages/WaterTotemPage';
import EarthTotemPage from './pages/EarthTotemPage';
import ElectricTotemPage from './pages/ElectricTotemPage';
import LightTotemPage from './pages/LightTotemPage';

const Container = styled.div`
display: flex;
flex-direction: column;
`;

const ContentContainer = styled.div`
margin-top: 20px;
padding: 40px;
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
margin-bottom: 20px;
margin-top: 20px;
`;

type MenuItemProps = { active: boolean }

const MenuItem = styled.div<MenuItemProps>`
font-size: 28px;
height: 20px;
cursor: pointer;
transform: scale(${props => props.active ? 1.2 : 1});
text-decoration: ${props => props.active ? 'underline' : 'none'};
margin-right: 56px;

&:hover {
  opacity: 0.7;
}


@media only screen and (max-width: ${props => props.theme.media.mobile}px) {
  font-size: 12px;
  margin-right: 20px;
}
`;

const Totems = () => {
  const history = useHistory();
  const overviewRouteMatch = useRouteMatch('/faoweiah/rules/totems/overview');
  const fireRouteMatch = useRouteMatch('/faoweiah/rules/totems/fire');
  const waterRouteMatch = useRouteMatch('/faoweiah/rules/totems/water');
  const earthRouteMatch = useRouteMatch('/faoweiah/rules/totems/earth');
  const electricRouteMatch = useRouteMatch('/faoweiah/rules/totems/electric');
  const lightRouteMatch = useRouteMatch('/faoweiah/rules/totems/light');


  return (
<Container>
  <SubMenu>
    <MenuItem onClick={() => history.push('/faoweiah/rules/totems/overview')} active={!!overviewRouteMatch}>Overview</MenuItem>
    <MenuItem onClick={() => history.push('/faoweiah/rules/totems/fire')} active={!!fireRouteMatch}>Fire</MenuItem>
    <MenuItem onClick={() => history.push('/faoweiah/rules/totems/water')} active={!!waterRouteMatch}>Water</MenuItem>
    <MenuItem onClick={() => history.push('/faoweiah/rules/totems/earth')} active={!!earthRouteMatch}>Earth</MenuItem>
    <MenuItem onClick={() => history.push('/faoweiah/rules/totems/electric')} active={!!electricRouteMatch}>Electric</MenuItem>
    <MenuItem onClick={() => history.push('/faoweiah/rules/totems/light')} style={{ marginRight: '0' }} active={!!lightRouteMatch}>Light</MenuItem>
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