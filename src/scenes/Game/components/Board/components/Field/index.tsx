import React, { memo } from 'react';
import styled from 'styled-components';
import type { AnyStyledComponent } from 'styled-components';
import type { Field } from '../../../../../../redux/reducers';
import calculateFieldFromFields from '../../../../../../logic/calculateFieldFromFields';
import { getThemeFromFields } from '../../../../../../logic/totemColor';
import { ReactComponent as Fire } from './fieldIcons/fire.svg';
import { ReactComponent as Air } from './fieldIcons/air.svg';
import { ReactComponent as Earth } from './fieldIcons/earth.svg';
import { ReactComponent as Water } from './fieldIcons/water.svg';
import { ReactComponent as Smoke } from './fieldIcons/smoke.svg';
import { ReactComponent as Electric } from './fieldIcons/electric.svg';

type FieldProps = { fields: Array<Field>; boardScale: number }

const Icon = (IconComponent: AnyStyledComponent, fields: Array<Field>, boardScale: number) => styled(IconComponent)`
height: ${boardScale / 3}px;
width: ${boardScale / 3}px;
position: relative;
animation: pop 0.2s ease-in-out 1;
fill: ${props => getThemeFromFields(props.theme, fields).secondary};

@keyframes pop{
  50%  {transform: scale(1.3);}
}
`;


const getFieldIconFromFields = (fields: Array<Field>, boardScale: number): AnyStyledComponent => {
  const calculatedFieldType = calculateFieldFromFields(fields);
  if(calculatedFieldType === 'BURNING') {
    return Icon(Fire as AnyStyledComponent, fields, boardScale);
  }
  if(calculatedFieldType === 'FLOODED') {
    return Icon(Water as AnyStyledComponent, fields, boardScale);
  }
  if(calculatedFieldType === 'STEAMY') {
    return Icon(Air as AnyStyledComponent, fields, boardScale);
  }
  if(calculatedFieldType === 'EARTH') {
    return Icon(Earth as AnyStyledComponent, fields, boardScale);
  }
  if(calculatedFieldType === 'SMOKEY') {
    return Icon(Smoke as AnyStyledComponent, fields, boardScale);
  }
  if(calculatedFieldType === 'ELECTRIC_CURRENT') {
    return Icon(Electric as AnyStyledComponent, fields, boardScale);
  }
  return styled.div``;
};

type IconContainerProps = { boardScale: number }

const IconContainer = styled.div<IconContainerProps>`
height: ${props => props.boardScale / 3}px;
width: ${props => props.boardScale / 3}px;
position: relative;

`;

const FieldComponent = ({ fields, boardScale }: FieldProps) => {
  const IconComponent = getFieldIconFromFields(fields, boardScale);
  return (
  <IconContainer boardScale={boardScale}>
     <IconComponent />
  </IconContainer>
  );
};

const MemoizedField = memo(FieldComponent);

export default MemoizedField;
