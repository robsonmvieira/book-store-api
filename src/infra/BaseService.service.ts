import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { Base } from "@cross/base.entity";
import { Repository } from "typeorm";

@Injectable()
export abstract class BaseService<T extends Base> {

  constructor(protected repo: Repository<T>) {
  }

  async findAll (): Promise<T[]> {
    const resource = await this.repo.find()

    if (!resource) {
      throw new InternalServerErrorException('Não foi possível efetuar a busca. Tente mais tarde')
    }
    return resource
  }
}
