export class Guard {
  static isEmpty(value: unknown): boolean {

    if(typeof value === 'undefined' || typeof value === null) {
      return true
    }

    if(typeof value === 'number' || typeof value === 'boolean') {
      return false
    }

    if(value instanceof Date) {
      return false
    }

    if(Array.isArray(value)) {
      if(value.length === 0) {
        return true
      }
      if(value.every(item => Guard.isEmpty(item))) {
        return true
      }

    }

    if(value === '') {
      return true
    }

    return false
  }

  static lengthIsBetween(
    value: number | string | Array<unknown>,
    min: number,
    max: number
  ): boolean {
    if (Guard.isEmpty(value)) {
      throw new Error("Cannot checked length of a value. Provide value is Empty")
    }

    const valueLength = typeof value === 'number' ? Number(value).toString().length : value.length

    if(valueLength >= min && valueLength <= max) {
      return true
    }
    return false
  }

}
