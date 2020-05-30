import type { AnyStyledComponent } from 'styled-components';
import styled from 'styled-components';
import React from 'react';
import type { FieldType  } from '../../../../../../../redux/reducers';
import calculateFieldFromFields from '../../../../../../../logic/calculateFieldFromFields';
import { getThemeFromFields } from '../../../../../../../logic/totemColor';
import { ReactComponent as Fire } from './fieldIcons/fire.svg';
import { ReactComponent as Air } from './fieldIcons/air.svg';
import { ReactComponent as Earth } from './fieldIcons/earth.svg';
import { ReactComponent as Water } from './fieldIcons/water.svg';
import { ReactComponent as Smoke } from './fieldIcons/smoke.svg';
import { ReactComponent as Electric } from './fieldIcons/electric.svg';

type FieldProps = { fields: Array<FieldType> }

const attachAppliedByForType = (fieldTypes: Array<FieldType>) => fieldTypes.map(ft => ({ type: ft, appliedBy: '1' }));

const Icon = (IconComponent: AnyStyledComponent, fields: Array<FieldType>) => styled(IconComponent)`
height: 40px;
width: 40px;
position: relative;
animation: pop 0.2s ease-in-out 1;
fill: ${props => getThemeFromFields(props.theme, attachAppliedByForType(fields)).secondary};

@keyframes pop{
  50%  {transform: scale(1.3);}
}
`;


const getFieldIconFromFields = (fields: Array<FieldType>): AnyStyledComponent => {
  const calculatedFieldType = calculateFieldFromFields(attachAppliedByForType(fields));
  if(calculatedFieldType === 'BURNING') {
    return Icon(Fire as AnyStyledComponent, fields);
  }
  if(calculatedFieldType === 'FLOODED') {
    return Icon(Water as AnyStyledComponent, fields);
  }
  if(calculatedFieldType === 'STEAMY') {
    return Icon(Air as AnyStyledComponent, fields);
  }
  if(calculatedFieldType === 'EARTH') {
    return Icon(Earth as AnyStyledComponent, fields);
  }
  if(calculatedFieldType === 'SMOKEY') {
    return Icon(Smoke as AnyStyledComponent, fields);
  }
  if(calculatedFieldType === 'ELECTRIC_CURRENT') {
    return Icon(Electric as AnyStyledComponent, fields);
  }
  return styled.div``;
};

const IconContainer = styled.div`
height: 40px;
width: 40px;
position: relative;

`;

const Field = ({ fields }: FieldProps) => {
  const IconComponent = getFieldIconFromFields(fields);
  return (
  <IconContainer>
   <IconComponent />
  </IconContainer>
  );
};

export default Field;
