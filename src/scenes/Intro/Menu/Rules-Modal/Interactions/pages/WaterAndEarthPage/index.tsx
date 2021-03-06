import React from 'react';
import styled from 'styled-components';
import ExampleBoard from '../../../ExampleBoard';
import type { TotemType, FieldType } from '../../../../../../../redux/reducers';
import Page from '../../../Page';

const { Text, Container } = Page;

const stateFirst = {
  tiles: {
    '0': { totem: null, fields: ['FLOODED' as FieldType] },
    '1': { totem: null, fields: [] },
    '2': { totem: null, fields: [] },
    '3': { totem: { type: 'WATER' as TotemType, id: '1', direction: null }, fields: []},
    '4': { totem: null, fields: ['FLOODED' as FieldType] },
    '5': { totem: null, fields: [] },
    '6': { totem: null, fields: ['FLOODED' as FieldType] },
    '7': { totem: null, fields: [] },
    '8': { totem: null, fields: [] },
  },
  lightBeams: [],
};
const stateSecond = {
  tiles: {
    '0': { totem: null, fields: ['FLOODED' as FieldType] },
    '1': { totem: null, fields: ['FLOODED' as FieldType] },
    '2':  { totem: null, fields: ['EARTH' as FieldType] },
    '3': { totem: { type: 'WATER' as TotemType, id: '1', direction: null }, fields: []},
    '4': { totem: null, fields: ['EARTH' as FieldType] },
    '5': { totem: { type: 'EARTH' as TotemType, id: '1', direction: null }, fields: []},
    '6': { totem: null, fields: ['FLOODED' as FieldType] },
    '7': { totem: null,fields: ['FLOODED' as FieldType] },
    '8': { totem: null, fields: ['EARTH' as FieldType] },
  },
  lightBeams: [],
};

const FireAndWaterPage = () => (
  <Container>
    <Text>
      <span style={{ marginBottom: '16px'}}>
      Earth will displace water to the adjacent tiles.
      </span>
      <span style={{ marginBottom: '16px'}}>
      If water gets displaced onto another earth tile, it will continue to get displaced by that one!
      </span>
    </Text>
    <ExampleBoard stateFirst={stateFirst} stateSecond={stateSecond} dimension={3} boardScale={70}/>
  </Container>
);

export default FireAndWaterPage;