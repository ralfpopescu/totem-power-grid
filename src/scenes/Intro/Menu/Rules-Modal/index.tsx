import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import { Route, useHistory, useRouteMatch } from 'react-router-dom';
import Objective from './Objective';
import Totems from './Totems';
import Interactions from './Interactions';


type ModalProps = { isOpen: boolean; close: () => void }

const modalStyle = { content: { 
  backgroundColor: '#33bbff', 
top: '100px',
left: '100px',
right: '100px',
bottom: '100px',
display: 'flex',
borderRadius: '40px',
border: 'none',
},
overlay: { backgroundColor: 'rgb(6, 5, 61, 0.5)' }};

const ModalContainer = styled.div`
display: grid;
grid-template-rows: 80px 1fr;
height: 100%;
width: 100%;
align-item: center;
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

const RulesModal = ({ isOpen, close }: ModalProps) => {
  const history = useHistory();
  const objectiveRouteMatch = useRouteMatch('/faoweiah/rules/objective');
  const totemsRouteMatch = useRouteMatch('/faoweiah/rules/totems');
  const interactionsRouteMatch = useRouteMatch('/faoweiah/rules/interactions');

  return (
  <Modal isOpen={isOpen} onRequestClose={close} style={modalStyle}>
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
