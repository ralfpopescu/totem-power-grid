import React from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import type { TotemType } from '../../../../logic/totemTypes';
import totemColor from '../../../../logic/totemColor';
import { changeTotemSelection } from '../../../../redux/actions';
import type { State } from '../../../../redux/reducers';
import type { ChangeTotemSelection } from '../../../../redux/actions';
import { ReactComponent as Fire } from '../../../../assets/fire.svg';
import { ReactComponent as Water } from '../../../../assets/water.svg';
import { ReactComponent as Electric } from '../../../../assets/electric.svg';
import { ReactComponent as Earth } from '../../../../assets/earth.svg';
import { ReactComponent as Light } from '../../../../assets/light.svg';

const typesArray: Array<TotemType> = ['FIRE', 'ELECTRIC', 'LIGHT', 'WATER', 'EARTH'];

const SelectorContainer = styled.div`
display: grid;
grid-template-columns: repeat(6, 50px);
padding: 20px;
`;

const angle = 360 / typesArray.length;
const circleSize = 200;
const itemSize = 36;
const degreeOff = 360 / (36 / 2);

type CircleContainerProps = { rotation: number }

const CircleContainer = styled.div<CircleContainerProps>`
  position: relative;
  width:  ${circleSize}px;
  height: ${circleSize}px;
  padding: 0;
  border: 1px solid black;
  transform: rotate(${props => props.rotation * angle}deg);
  transition: all 0.5s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
`;

type CircleItemProps = { number: number;  totemType: TotemType; totemSelection: TotemType }

const getRotationOfItem = (number: number) => {
  if(number === typesArray.length - 1) {
    return 180 + 20;
  }
  return (number - 1) * angle + 340;
};

const getActiveIndexFromTotemSelection = (totemType: TotemType) => {
  if(totemType === 'FIRE') {
    return 4;
  }
  if(totemType === 'EARTH') {
    return 0;
  }
  if(totemType === 'ELECTRIC') {
    return 3;
  }
  if(totemType === 'WATER') {
    return 1;
  }
  if(totemType === 'LIGHT') {
    return 2;
  }
  return 0;
};

const CircleItem = styled.div<CircleItemProps>`
  fill: ${props => totemColor(props.totemType)};
  display: flex;
  position: absolute;
  top:  50%; 
  left: 50%;
  width:  $item-size;
  height: $item-size;
  border: 2px solid ${({ totemSelection, totemType }) => totemSelection === totemType ? "lightblue": "black" };
  border-radius: 40%;
  width: 36px;
  height: 36px;
  margin: -14px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  transform: rotate(${props => props.number * angle - 20}deg) translate(${circleSize/2}px) rotate(-${props => getRotationOfItem(props.number)}deg) rotate(${props => props.number * angle}deg);
`;

type SelectorProps = { totemType: TotemType; totemSelection: TotemType }

const Selector = styled.div<SelectorProps>`
fill: ${props => totemColor(props.totemType)};
padding: 10px;
width: 28px;
height: 28px;
border: 2px solid ${({ totemSelection, totemType }) => totemSelection === totemType ? "lightblue": "black" };
border-radius: 40%;
cursor: pointer;
align-items: center;
justify-content: center;
`;

const iconStyle = { height: '28px', width: '28px'};

const GetIcon = (totemType: TotemType) => {
  if(totemType === 'FIRE') {
    return <Fire style={iconStyle} />;
  }
  if(totemType === 'EARTH') {
    return <Earth style={iconStyle} />;
  }
  if(totemType === 'ELECTRIC') {
    return <Electric style={iconStyle} />;
  }
  if(totemType === 'WATER') {
    return <Water style={iconStyle} />;
  }
  if(totemType === 'LIGHT') {
    return <Light style={iconStyle} />;
  }
};

type TotemSelectorProps = { totemSelection: TotemType; changeTotemSelection: ChangeTotemSelection }

const TotemSelector = ({ totemSelection, changeTotemSelection }: TotemSelectorProps) => (
  <CircleContainer rotation={getActiveIndexFromTotemSelection(totemSelection)}>
  {typesArray.map((totemType: TotemType, index: number) => (
  <CircleItem totemType={totemType} totemSelection={totemSelection} onClick={() => changeTotemSelection({ totemType })} number={index}>
    {GetIcon(totemType)}
    </CircleItem>
  ))}
  {totemSelection}
  </CircleContainer>
);

const mapStateToProps = (state: State) => ({ totemSelection: state.totemSelection });

export default connect(
  mapStateToProps,
  { changeTotemSelection },
)(TotemSelector);
