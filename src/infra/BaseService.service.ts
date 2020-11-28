/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { Base } from "@cross/base.entity";
import { Repository } from "typeorm";

@Injectable()
export abstract class BaseService<T extends Base> {

  constructor(protected repo: Repository<T>) {
  }

  async create(data: any): Promise<T> {
    const result = await this.repo.save(data)

    if(!result) {
      throw new InternalServerErrorException('Operação não realizada. Tente mais tarde!')
    }
    return result
  }

  async findAll (): Promise<T[]> {
    const resource = await this.repo.find()

    if (!resource) {
      throw new InternalServerErrorException('Não foi possível efetuar a busca. Tente mais tarde')
    }
    return resource
  }

  async findOne (id: string): Promise<T> {
    const result = await this.repo.findOne(id)

    if(!result) {
      throw new NotFoundException("Não foi encontrado o Dado Solicitado")
    }

    return result
  }

  async update (id: string, data: any): Promise<T> {
    const result = await this.repo.findOne(id)

    if(!result) {
      throw new NotFoundException("Não foi encontrado o Dado Solicitado")
    }

    await this.repo.update(id, data)
    const updatedResource = Object.assign(result, data)

    return updatedResource

  }

  async remove(id: string): Promise<boolean> {

    const result = await this.repo.findOne(id)

    if(!result) {
      throw new NotFoundException("Não foi encontrado o Dado Solicitado")
    }

    const wasDeleted = await this.repo.delete(id)

    if (!wasDeleted) {
      throw new InternalServerErrorException("Não foi possível remover o item selecionado. Por favor tente mais tarde")
    }
    return true
  }
}
