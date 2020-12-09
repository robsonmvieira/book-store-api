import { IEncrypter } from "../interfaces/IEncripter";
import { hash, compare } from 'bcryptjs'

export class Encrypter implements IEncrypter {
  async encrypt(password: string): Promise<string> {
    const salt = 10
    const hashedPassword = await hash(password, salt)
    return hashedPassword
  }
  async compare(password: string, hashedPassword: string): Promise<boolean> {

    const isMatch = await compare(password, hashedPassword)

    if(!isMatch) return false

    return true

  }

}
