import React from 'react';
import styled from 'styled-components';
import ExampleBoard from '../../../ExampleBoard';
import type { TotemType, FieldType } from '../../../../../../../redux/reducers';

const stateFirst = {
  tiles: {
    '0': { totem: null, fields: ['BURNING' as FieldType] },
    '1': { totem: null, fields: [] },
    '2': { totem: null, fields: [] },
    '3': { totem: { type: 'FIRE' as TotemType, id: '1', direction: null }, fields: []},
    '4': { totem: null, fields: ['BURNING' as FieldType] },
    '5': { totem: null, fields: [] },
    '6': { totem: null, fields: ['BURNING' as FieldType] },
    '7': { totem: null, fields: [] },
    '8': { totem: null, fields: [] },
  },
  lightBeams: [],
};
const stateSecond = {
  tiles: {
    '0': { totem: null, fields: ['BURNING' as FieldType] },
    '1': { totem: null, fields: [] },
    '2':  { totem: null, fields: ['EARTH' as FieldType] },
    '3': { totem: { type: 'FIRE' as TotemType, id: '1', direction: null }, fields: []},
    '4': { totem: null, fields: ['BURNING' as FieldType, 'EARTH' as FieldType] },
    '5': { totem: { type: 'EARTH' as TotemType, id: '1', direction: null }, fields: []},
    '6': { totem: null, fields: ['BURNING' as FieldType] },
    '7': { totem: null, fields: [] },
    '8': { totem: null, fields: ['EARTH' as FieldType] },
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

const FireAndWaterPage = () => (
  <Container>
    <Text>
      <span style={{ marginBottom: '16px'}}>
      When earth combines with fire, it creates smoke.
      </span>
      <span>
      Smoke neutralizes the fires power, and blocks beams of light.
      </span>
    </Text>
    <ExampleBoard stateFirst={stateFirst} stateSecond={stateSecond} dimension={3} boardScale={70}/>
  </Container>
);

export default FireAndWaterPage;