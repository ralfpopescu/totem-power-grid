import type { FieldType } from './fieldTypes'

const calculateFieldFromFields = (fields: Array<FieldType>): FieldType => {
  console.log(fields)
  if(fields.includes('BURNING') && fields.includes('FLOODED')) {
    return 'STEAMY'
  }
  return fields[0]
}

export default calculateFieldFromFields