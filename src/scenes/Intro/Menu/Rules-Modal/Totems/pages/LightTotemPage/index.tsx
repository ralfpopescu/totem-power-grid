import React from 'react';
import styled from 'styled-components';
import ExampleBoard from '../../../ExampleBoard';
import type { TotemType, Direction } from '../../../../../../../redux/reducers';

const stateFirst = {
  tiles: {
    '0': { totem: null, fields: [] },
    '1': { totem: null, fields: [] },
    '2': { totem: null, fields: [] },
    '3': { totem: null, fields: [] },
    '4': { totem: null, fields: [] },
    '5': { totem: null, fields: [] },
    '6': { totem: null, fields: [] },
    '7': { totem: null, fields: [] },
    '8': { totem: null, fields: [] },
    '9': { totem: null, fields: [] },
    '10': { totem: null, fields: [] },
    '11': { totem: null, fields: [] },
    '12': { totem: null, fields: [] },
    '13': { totem: null, fields: [] },
    '14': { totem: null, fields: [] },
    '15': { totem: null, fields: [] },
    '16': { totem: null, fields: [] },
    '17': { totem: null, fields: [] },
    '18': { totem: null, fields: [] },
    '19': { totem: null, fields: [] },
    '20': { totem: null, fields: [] },
    '21': { totem: null, fields: [] },
    '22': { totem: null, fields: [] },
    '23': { totem: null, fields: [] },
    '24': { totem: null, fields: [] },
  },
  lightBeams: [],
};
const stateSecond = {
  tiles: {
    '0': { totem: null, fields: [] },
    '1': { totem: null, fields: [] },
    '2': { totem: null, fields: [] },
    '3': { totem: null, fields: [] },
    '4': { totem: null, fields: [] },
    '5': { totem: null, fields: [] },
    '6': { totem: null, fields: [] },
    '7': { totem: null, fields: [] },
    '8': { totem: null, fields: [] },
    '9': { totem: null, fields: [] },
    '10': { totem: null, fields: [] },
    '11': { totem: null, fields: [] },
    '12': { totem: { type: 'LIGHT' as TotemType, direction: 'WEST' as Direction, id: '1'}, fields: [] },
    '13': { totem: null, fields: [] },
    '14': { totem: null, fields: [] },
    '15': { totem: null, fields: [] },
    '16': { totem: null, fields: [] },
    '17': { totem: null, fields: [] },
    '18': { totem: null, fields: [] },
    '19': { totem: null, fields: [] },
    '20': { totem: null, fields: [] },
    '21': { totem: null, fields: [] },
    '22': { totem: null, fields: [] },
    '23': { totem: null, fields: [] },
    '24': { totem: null, fields: [] },
  },
  lightBeams: [{index: 10, direction: 'WEST' as Direction}, {index: 11, direction: 'WEST' as Direction}],
};

const Container = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;

@media only screen and (max-width: ${props => props.theme.media.mobile}px) {
  display: flex;
  flex-direction: column;
}
`;

const Text = styled.div`
display: flex;
flex-direction: column;
flex-grow: 1;
padding: 36px;

@media only screen and (max-width: ${props => props.theme.media.mobile}px) {
  display: flex;
  flex-direction: column;
}
`;

const LightTotemPage = () => (
  <Container>
    <Text>
      <span style={{ marginBottom: '16px'}}>
      Light totems are another directional totem, and they shoot a beam of light in the direction they point.
      </span>
      <span>
      These illuminated tiles will provide energy to the power lamps on your blueprints.
      </span>
    </Text>
    <ExampleBoard stateFirst={stateFirst} stateSecond={stateSecond} dimension={5} boardScale={70}/>
  </Container>
);

export default LightTotemPage;