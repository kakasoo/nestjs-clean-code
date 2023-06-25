import { Model } from 'mongoose';
import { IGenericRepository } from 'src/core/abstracts/generic-repository.abstact';

export class MongoGenericRepository<T> implements IGenericRepository<T> {
  private _repository: Model<T>;
  private _populateOnFind: string[];

  constructor(repository: Model<T>, populateOnFind: string[] = []) {
    this._repository = repository;
    this._populateOnFind = populateOnFind;
  }

  async getAll(): Promise<T[]> {
    const all = await this._repository.find().populate(this._populateOnFind).exec();
    return all;
  }

  async get(id: string): Promise<T> {
    return (await this._repository.findById(id).populate(this._populateOnFind).exec()) as T;
  }

  async create(item: T): Promise<T> {
    const created = await this._repository.create(item);
    return created;
  }

  async update(id: string, item: T): Promise<boolean> {
    await this._repository.findByIdAndUpdate(id, item);
    return true;
  }
}
