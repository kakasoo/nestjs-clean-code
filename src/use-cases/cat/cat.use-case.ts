import { Injectable } from '@nestjs/common';
import { IDataServices } from 'src/core/abstracts/data-services.abstract';
import { Cat } from 'src/core/entities/cat.entity';

@Injectable()
export class CatUseCases {
  constructor(private readonly dataServices: IDataServices) {}

  async getAllCats(): Promise<Cat[]> {
    const cats = await this.dataServices.cats.getAll();
    return cats;
  }

  async getCatById(id: string): Promise<Cat> {
    const cat = await this.dataServices.cats.get(id);
    return cat;
  }

  async createCat(cat: Cat): Promise<Cat> {
    try {
      const createdCat = await this.dataServices.cats.create(cat);
      return createdCat;
    } catch (e) {
      throw e;
    }
  }

  async updateCat(catId: string, cat: Cat): Promise<boolean> {
    try {
      const isSucess = await this.dataServices.cats.update(catId, cat);
      return isSucess;
    } catch (e) {
      return false;
    }
  }
}
