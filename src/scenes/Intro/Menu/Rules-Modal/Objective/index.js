import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
height: 100%;
width: 100%;
font-size: 20px;
color: white;
display: flex;
flex-direction: column;
`;

const Objective = () => (
<Container>
  <div style={{ marginBottom: '30px' }}>
  The game board represents an unpowered power grid which needs to be hooked up to the village structures above. 
You are given a set of blue prints which show huts, the villagers’ homes, and power lamps, 
the sources of light for the village.
</div>
<div style={{ marginBottom: '30px' }}>
 The huts will be either <span style={{ color: 'red' }}>red </span> 
 or <span style={{ color: 'yellow' }}>yellow</span>, depending on whether the villager wants 
 <span style={{ color: 'red' }}> fire</span> or <span style={{ color: 'yellow' }}>electricity </span> 
 to power their home. The objective is to provide fire or electric power to the correct homes, 
 and light power to the power lamps. 
 </div>
 <div>
If you activate the power grid with power running to an empty square, disaster will occur. 
If you forget a villager’s home or a power lamp, you will also have some dissatisfied village people. 
Careful to get the configuration exactly correct!
</div>
</Container>
);

export default Objective;