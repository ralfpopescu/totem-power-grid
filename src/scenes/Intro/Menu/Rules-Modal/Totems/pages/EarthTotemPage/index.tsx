import React from 'react';
import styled from 'styled-components';
import ExampleBoard from '../../../ExampleBoard';
import type { TotemType, FieldType } from '../../../../../../../redux/reducers';

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
  },
  lightBeams: [],
};
const stateSecond = {
  tiles: {
    '0': { totem: null, fields: [] },
    '1': { totem: null, fields: ['EARTH' as FieldType] },
    '2': { totem: null, fields: [] },
    '3': { totem: null, fields: ['EARTH' as FieldType] },
    '4': { totem: { type: 'EARTH' as TotemType, id: '1', direction: null }, fields: []},
    '5': { totem: null, fields: ['EARTH' as FieldType] },
    '6': { totem: null, fields: [] },
    '7': { totem: null, fields: ['EARTH' as FieldType] },
    '8': { totem: null, fields: [] },
  },
  lightBeams: [],
};

const Container = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
`;

const Text = styled.div`
font-size: 16px;
display: flex;
flex-direction: column;
flex-grow: 1;
padding: 36px;
`;

const EarthTotemPage = () => (
  <Container>
    <Text>
      <span style={{ marginBottom: '16px'}}>
      Earth totems create mounds of earth in adjacent spaces.
      </span>
      <span>
      Like water tiles, these earth tiles do not provide any power, but interact with other tiles.
      </span>
    </Text>
    <ExampleBoard stateFirst={stateFirst} stateSecond={stateSecond} dimension={3} boardScale={70}/>
  </Container>
);

export default EarthTotemPage;