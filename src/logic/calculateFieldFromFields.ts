import type { Field, FieldType } from '../redux/reducers';

const calculateFieldFromFields = (fields: Array<Field>): FieldType => {
  const fieldTypes = fields.map(f => f.type);
  if(fieldTypes.includes('BURNING') && fieldTypes.includes('FLOODED')) {
    return 'STEAMY';
  }
  if(fieldTypes.includes('BURNING') && fieldTypes.includes('EARTH')) {
    return 'SMOKEY';
  }
  if(fieldTypes.includes('FLOODED') && fieldTypes.includes('EARTH')) {
    return 'EARTH';
  }
  if(fieldTypes.includes('ELECTRIC_CURRENT')) {
    return 'ELECTRIC_CURRENT';
  }
  return fieldTypes[0];
};

export default calculateFieldFromFields;