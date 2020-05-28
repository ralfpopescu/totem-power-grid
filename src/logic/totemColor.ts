import totemTypes from './totemTypes';
import calculateFieldsFromFields from './calculateFieldFromFields';
import type { TotemType } from './totemTypes';
import type { Theme } from '../App';
import type { FieldType } from '../redux/reducers';

const { FIRE, WATER, ELECTRIC, LIGHT, WIND, EARTH } = totemTypes;

export const getThemeFromFields = (theme: Theme, fields: Array<FieldType>) => {
  if(fields.length === 0) {
    return { primary: theme.main.primary, secondary: theme.main.secondary };
  }
  const field = calculateFieldsFromFields(fields);
  return { primary: theme[field].primary, secondary: theme[field].secondary };
};

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


export default totemColor;