export class Guard {
  static isEmpty(value: unknown): boolean {

    if(typeof value === 'undefined' || typeof value === null) {
      return true
    }

    if(typeof value === 'number' || typeof value === 'boolean') {
      return false
    }

    return false
  }
}
