import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cat } from './model/cat.model';
import { Owner, OwnerDocument } from './model/owner.model';
import { IDataServices } from 'src/core/abstracts/data-services.abstract';
import { MongoGenericRepository } from './mongo-generic-repository';

@Injectable()
export class MongoDataServices implements IDataServices, OnApplicationBootstrap {
  cats: MongoGenericRepository<Cat>;
  owners: MongoGenericRepository<Owner>;

  constructor(
    @InjectModel(Cat.name)
    private CatRepository: Model<Cat>,
    @InjectModel(Owner.name)
    private OwnerRepository: Model<OwnerDocument>,
  ) {}

  onApplicationBootstrap() {
    this.cats = new MongoGenericRepository<Cat>(this.CatRepository);
    this.owners = new MongoGenericRepository<Owner>(this.OwnerRepository, ['Cat']);
  }
}
