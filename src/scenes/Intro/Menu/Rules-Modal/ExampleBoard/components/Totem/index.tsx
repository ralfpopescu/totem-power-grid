import React from 'react';
import styled from 'styled-components';
import totemTypes from '../../../../../../../logic/totemTypes';
import type { TotemType } from '../../../../../../../redux/reducers';
import { ReactComponent as TotemImage } from './totem.svg';

const { FIRE, WATER, ELECTRIC, LIGHT, WIND, EARTH } = totemTypes;

const totemColor = (totemType: TotemType) => {
  switch(totemType) {
    case FIRE:
      return 'red';
    case WATER:
      return 'blue';
    case ELECTRIC:
      return 'yellow'; 
    case LIGHT:
      return 'white';
      case WIND:
      return 'grey';
      case EARTH:
      return 'brown';
    default:
      return 'black';
  }
};

type TotemIconProps = { totemType: TotemType; boardScale: number }

const TotemIcon = styled(TotemImage)<TotemIconProps>`
fill: ${props => totemColor(props.totemType)};
width: ${props => props.boardScale / 3}px;
height: ${props => props.boardScale / 3}px;
animation: fall-in 0.2s ease-in-out 1;

@keyframes fall-in {
  0% {
    {transform: scale(1.5);}
  }
  100% {
    {transform: scale(1);}
  }
}

`;

type TotemProps = { totemType: TotemType; boardScale: number }

const Totem = ({ totemType, boardScale }: TotemProps) => (
    <>
    {totemType && <TotemIcon totemType={totemType} boardScale={boardScale} />}
    </>
);

export default Totem;