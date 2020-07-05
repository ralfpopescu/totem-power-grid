import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
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
import type { Theme } from '../../../../App';

const typesArray: Array<TotemType> = ['FIRE', 'ELECTRIC', 'LIGHT', 'WATER', 'EARTH'];

const angle = 360 / typesArray.length;
const circleSize = 200;
const itemSize = 36;
const degreeOff = 360 / (36 / 2);
const mobileScale = 1.5;

type CircleContainerProps = { rotation: number }

const SelectorContainer = styled.div`
position: relative;
  width:  ${circleSize}px;
  height: ${circleSize}px;
  display: flex;

  @media only screen and (max-width: ${props => props.theme.media.mobile}px) {
    width:  ${circleSize / mobileScale}px;
    height: ${circleSize / mobileScale}px;
  }
`;

const TotemSelectionNameContainer = styled.div`
position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: ${props => props.theme.media.mobile}px) {
    font-size: 16px;
  }
`;

const CircleContainer = styled.div<CircleContainerProps>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width:  ${circleSize}px;
  height: ${circleSize}px;
  padding: 0;
  transform: rotate(${props => props.rotation * angle}deg);
  transition: all 0.5s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: ${props => props.theme.media.mobile}px) {
    width:  ${circleSize / mobileScale}px;
    height: ${circleSize / mobileScale}px;
  }
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
  border-radius: 40%;
  width: 36px;
  height: 36px;
  margin: -14px;
  cursor: pointer;
  align-items: center;
  transition: all 0.5s ease-in-out;
  justify-content: center;
  transform: rotate(${props => props.number * angle - 20}deg) translate(${circleSize/2}px) rotate(-${props => getRotationOfItem(props.number)}deg) rotate(${props => props.number * angle}deg) ${({ totemSelection, totemType }) => totemSelection === totemType ? "scale(1.5)": "" };

  @media only screen and (max-width: ${props => props.theme.media.mobile}px) {
    width:  ${36 / mobileScale}px;
    height: ${36 / mobileScale}px;
    transform: rotate(${props => props.number * angle - 20}deg) translate(${circleSize / 2 / mobileScale / 1.2}px) rotate(-${props => getRotationOfItem(props.number)}deg) rotate(${props => props.number * angle}deg) ${({ totemSelection, totemType }) => totemSelection === totemType ? "scale(1.5)": "" };
  }
`;


const iconStyle = { height: '28px', width: '28px'};

const GetIcon = (totemType: TotemType, theme: Theme) => {
  if(totemType === 'FIRE') {
    return <Fire style={{ ...iconStyle, fill: theme.BURNING.secondary }} />;
  }
  if(totemType === 'EARTH') {
    return <Earth style={{ ...iconStyle, fill: theme.EARTH.secondary }} />;
  }
  if(totemType === 'ELECTRIC') {
    return <Electric style={{ ...iconStyle, fill: theme.ELECTRIC_CURRENT.secondary }} />;
  }
  if(totemType === 'WATER') {
    return <Water style={{ ...iconStyle, fill: theme.FLOODED.secondary }} />;
  }
  if(totemType === 'LIGHT') {
    return <Light style={{ ...iconStyle, fill: theme.BRIGHT.secondary }} />;
  }
};

type TotemSelectorProps = { totemSelection: TotemType; changeTotemSelection: ChangeTotemSelection }

const TotemSelector = ({ totemSelection, changeTotemSelection }: TotemSelectorProps) => {
  const theme = useContext(ThemeContext);
  return (
  <SelectorContainer>
    <TotemSelectionNameContainer>
      {totemSelection}
    </TotemSelectionNameContainer>
    <CircleContainer rotation={getActiveIndexFromTotemSelection(totemSelection)}>
    {typesArray.map((totemType: TotemType, index: number) => (
    <CircleItem totemType={totemType} totemSelection={totemSelection} onClick={() => changeTotemSelection({ totemType })} number={index} style={{ backgroundColor: theme[totemType].primary }}>
      {GetIcon(totemType, theme)}
      </CircleItem>
    ))}
    </CircleContainer>
  </SelectorContainer>
);};

const mapStateToProps = (state: State) => ({ totemSelection: state.totemSelection });

export default connect(
  mapStateToProps,
  { changeTotemSelection },
)(TotemSelector);
