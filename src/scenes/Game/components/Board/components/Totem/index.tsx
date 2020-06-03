import React, { memo, MouseEvent } from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import totemTypes from '../../../../../../logic/totemTypes';
import { removeTotem } from "../../../../../../redux/actions";
import type { RemoveTotem } from "../../../../../../redux/actions";
import type { TotemType } from '../../../../../../redux/reducers';
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

&:hover {
  opacity: 0.7;
}

@keyframes fall-in {
  0% {
    {transform: scale(1.5);}
  }
  100% {
    {transform: scale(1);}
  }
}

`;

type TotemProps = { totemType: TotemType; boardScale: number; index: number; removeTotem: RemoveTotem }

const Totem = ({ totemType, boardScale, index, removeTotem }: TotemProps) => (
    <>
    {totemType && <TotemIcon totemType={totemType} boardScale={boardScale} onClick={(e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
      e.stopPropagation();
      removeTotem({ index });
      }}/>}
    </>
);

const MemoizedTotem = memo(Totem);

export default connect(
  null,
  { removeTotem },
)(MemoizedTotem);