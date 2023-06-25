import { Cat } from '../entities/cat.entity';
import { Owner } from '../entities/owner.entity';
import { IGenericRepository } from './generic-repository.abstact';

export abstract class IDataServices {
  abstract cats: IGenericRepository<Cat>;
  abstract owners: IGenericRepository<Owner>;
}
