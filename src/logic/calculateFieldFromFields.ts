import type { FieldType } from './fieldTypes'

const calculateFieldFromFields = (fields: Array<FieldType>): FieldType => {
  if(fields.includes('BURNING') && fields.includes('FLOODED')) {
    return 'STEAMY'
  }
  if(fields.includes('BURNING') && fields.includes('EARTH')) {
    return 'SMOKEY'
  }
  if(fields.includes('ELECTRIC_CURRENT')) {
    return 'ELECTRIC_CURRENT'
  }
  return fields[0]
}

export default calculateFieldFromFields