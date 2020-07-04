import React from 'react';
import styled from 'styled-components';

type CProps = { color: string }

const C = styled.span`
color: ${props => props.color};
`;

const IntroPage = () => (
  <div style={{ padding: '40px'}}>
    There are 5 kinds of totems: <C color="red">fire</C>,  <C color="blue">water</C>, <C color="brown">earth</C>, <C color="yellow">electric</C>, and <C color="lightblue">light</C>. 
    <div style={{ marginTop: '20px' }}>Each one has a unique effect on the tiles surrounding it.
    <div style={{ marginTop: '20px' }}>Place a totem on the grid by clicking a tile. Click the totem to remove it.
    </div>
    </div>
  </div>
);

export default IntroPage;