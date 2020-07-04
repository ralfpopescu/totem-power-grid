import React from 'react';
import ExampleBoard from '../../../ExampleBoard';
import type { TotemType, FieldType } from '../../../../../../../redux/reducers';
import Page from '../../../Page';

const { Text, Container } = Page;

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