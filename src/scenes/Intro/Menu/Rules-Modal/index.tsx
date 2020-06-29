import React from 'react';
import styled from 'styled-components';
import { Route, useHistory, useRouteMatch } from 'react-router-dom';
import Modal from '../../../../shared/Modal';
import Objective from './Objective';
import Totems from './Totems';
import Interactions from './Interactions';


type ModalProps = { isOpen: boolean; close: () => void }

const modalStyle = { content: { 
top: '50px',
left: '50px',
right: '50px',
bottom: '50px',
display: 'flex',
backgroundColor: '#33bbff', 
borderRadius: '40px',
border: 'none',
flexDirection: 'column' as any,
},
overlay: { backgroundColor: 'rgb(6, 5, 61, 0.5)' }};

const ModalContainer = styled.div`
display: grid;
grid-template-rows: 80px 1fr;
height: 100%;
width: 100%;
align-item: center;
height: 500px;
justify-content: center;
`;

const TabsContainer = styled.div`
grid-row-start: 1;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
flex-grow: 1;
`;

type TabProps = { active: boolean }

const Tab = styled.div<TabProps>`
font-size: 40px;
cursor: pointer;
transform: scale(${props => props.active ? 1.2 : 1});
text-decoration: ${props => props.active ? 'underline' : 'none'};

&:hover {
  opacity: 0.7;
}
`;

const CloseButton = styled.button`
margin-top: 50px;
outline: none;
font-family: 'Chelsea Market';
padding: 16px;
width: 200px;
border: none;
color: ${props => props.theme.ocean.primary};
border-radius: 12px;
cursor: pointer;
place-self: center;
margin-bottom: 32px;

&:hover {
  transform: scale(1.05);
}
`;

const RulesModal = ({ isOpen, close }: ModalProps) => {
  const history = useHistory();
  const objectiveRouteMatch = useRouteMatch('/faoweiah/rules/objective');
  const totemsRouteMatch = useRouteMatch('/faoweiah/rules/totems');
  const interactionsRouteMatch = useRouteMatch('/faoweiah/rules/interactions');

  return (
  <Modal isOpen={isOpen} close={close}>
    <ModalContainer>
      <TabsContainer>
        <Tab style={{ marginRight: '50px'}} onClick={() => history.push('/faoweiah/rules/objective')} active={!!objectiveRouteMatch}>
          Objective
        </Tab>
        <Tab style={{ marginRight: '50px'}} onClick={() => history.push('/faoweiah/rules/totems/overview')} active={!!totemsRouteMatch}>
          Totems
        </Tab>
        <Tab onClick={() => history.push('/faoweiah/rules/interactions/overview')} active={!!interactionsRouteMatch}>
          Interactions
        </Tab>
        </TabsContainer>
      <Route path="/faoweiah/rules/objective">
        <Objective />
      </Route>
      <Route path="/faoweiah/rules/totems">
        <Totems />
      </Route>
      <Route path="/faoweiah/rules/interactions">
        <Interactions />
      </Route>
    </ModalContainer>
  </Modal>
);};

export default RulesModal;
