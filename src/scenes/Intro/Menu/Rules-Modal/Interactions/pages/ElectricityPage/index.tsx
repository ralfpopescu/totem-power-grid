import React from 'react';
import styled from 'styled-components';
import ExampleBoard from '../../../ExampleBoard';
import type { TotemType, FieldType, Direction } from '../../../../../../../redux/reducers';

const stateFirst = {
  tiles: {
    '0': { totem: null, fields: ['FLOODED' as FieldType] },
    '1': { totem: null, fields: [] },
    '2': { totem: null, fields: [] },
    '3': { totem: null, fields: ['BURNING' as FieldType, 'FLOODED' as FieldType] },
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
    '0': { totem: null, fields: ['FLOODED' as FieldType, 'ELECTRIC_CURRENT' as FieldType] },
    '1': { totem: null, fields: [] },
    '2': { totem: null, fields: [] },
    '3': { totem: null, fields: ['BURNING' as FieldType, 'FLOODED' as FieldType, 'ELECTRIC_CURRENT' as FieldType] },
    '4': { totem: null, fields: ['FLOODED' as FieldType, 'ELECTRIC_CURRENT' as FieldType] },
    '5': { totem: { type: 'ELECTRIC' as TotemType, direction: 'WEST' as Direction, id: '1' }, fields: [] },
    '6': { totem: null, fields: ['FLOODED' as FieldType, 'ELECTRIC_CURRENT' as FieldType] },
    '7': { totem: null, fields: [] },
    '8': { totem: null, fields: [] },
  },
  lightBeams: [],
};

const Container = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
`;

const Text = styled.div`
display: flex;
flex-direction: column;
flex-grow: 1;
padding: 36px;
`;

const FireAndWaterPage = () => (
  <Container>
    <Text>
      <span style={{ marginBottom: '16px'}}>
      Electricity will be conducted by adjacent water tiles.
      </span>
      <span>
      Steam will conduct water, but it will NOT provide power to the village above.
      </span>
    </Text>
    <ExampleBoard stateFirst={stateFirst} stateSecond={stateSecond} dimension={3} boardScale={70}/>
  </Container>
);

export default FireAndWaterPage;