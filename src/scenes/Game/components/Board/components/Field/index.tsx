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


const BurningIcon = styled(Fire)<FieldProps>`
height: ${props => props.boardScale / 3}px;
width: ${props => props.boardScale / 3}px;
position: relative;
animation: pop 0.2s ease-in-out 1;
fill: ${props => getThemeFromFields(props.theme, props.fields).secondary};

@keyframes pop{
  50%  {transform: scale(1.3);}
}
`;

const FloodedIcon = styled(Water)<FieldProps>`
height: ${props => props.boardScale / 3}px;
width: ${props => props.boardScale / 3}px;
position: relative;
animation: pop 0.2s ease-in-out 1;
fill: ${props => getThemeFromFields(props.theme, props.fields).secondary};

@keyframes pop{
  50%  {transform: scale(1.3);}
}
`;


const EarthIcon = styled(Earth)<FieldProps>`
height: ${props => props.boardScale / 3}px;
width: ${props => props.boardScale / 3}px;
position: relative;
animation: pop 0.2s ease-in-out 1;
fill: ${props => getThemeFromFields(props.theme, props.fields).secondary};

@keyframes pop{
  50%  {transform: scale(1.3);}
}
`;


const SmokeIcon = styled(Smoke)<FieldProps>`
height: ${props => props.boardScale / 3}px;
width: ${props => props.boardScale / 3}px;
position: relative;
animation: pop 0.2s ease-in-out 1;
fill: ${props => getThemeFromFields(props.theme, props.fields).secondary};

@keyframes pop{
  50%  {transform: scale(1.3);}
}
`;


const ElectricIcon = styled(Electric)<FieldProps>`
height: ${props => props.boardScale / 3}px;
width: ${props => props.boardScale / 3}px;
position: relative;
animation: pop 0.2s ease-in-out 1;
fill: ${props => getThemeFromFields(props.theme, props.fields).secondary};

@keyframes pop{
  50%  {transform: scale(1.3);}
}
`;

const SteamyIcon = styled(Air)<FieldProps>`
height: ${props => props.boardScale / 3}px;
width: ${props => props.boardScale / 3}px;
position: relative;
animation: pop 0.2s ease-in-out 1;
fill: ${props => getThemeFromFields(props.theme, props.fields).secondary};

@keyframes pop{
  50%  {transform: scale(1.3);}
}
`;




const getFieldIconFromFields = (fields: Array<Field>, boardScale: number): any => {
  const calculatedFieldType = calculateFieldFromFields(fields);
  if(calculatedFieldType === 'BURNING') {
    return <BurningIcon fields={fields} boardScale={boardScale} />;
  }
  if(calculatedFieldType === 'FLOODED') {
    return <FloodedIcon fields={fields} boardScale={boardScale} />;
  }
  if(calculatedFieldType === 'STEAMY') {
    return <SteamyIcon fields={fields} boardScale={boardScale} />;
  }
  if(calculatedFieldType === 'EARTH') {
    return <EarthIcon fields={fields} boardScale={boardScale} />;
  }
  if(calculatedFieldType === 'SMOKEY') {
    return <SmokeIcon fields={fields} boardScale={boardScale} />;
  }
  if(calculatedFieldType === 'ELECTRIC_CURRENT') {
    return <ElectricIcon fields={fields} boardScale={boardScale} />;
  }
  return styled.div``;
};

type IconContainerProps = { boardScale: number }

const IconContainer = styled.div<IconContainerProps>`
height: ${props => props.boardScale / 3}px;
width: ${props => props.boardScale / 3}px;
position: relative;

`;

const FieldComponent = ({ fields, boardScale }: FieldProps) => (
  <IconContainer boardScale={boardScale}>
     {getFieldIconFromFields(fields, boardScale)}
  </IconContainer>
  );

const MemoizedField = memo(FieldComponent);

export default MemoizedField;
