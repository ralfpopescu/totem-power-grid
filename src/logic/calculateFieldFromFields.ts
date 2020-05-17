import type { FieldType } from './fieldTypes'

const calculateFieldFromFields = (fields: Array<FieldType>): FieldType => {
  if(fields.includes('BURNING') && fields.includes('FLOODED')) {
    return 'STEAMY'
  }
  if(fields.includes('BURNING') && fields.includes('EARTH')) {
    return 'SMOKEY'
  }
  return fields[0]
}

export default calculateFieldFromFields