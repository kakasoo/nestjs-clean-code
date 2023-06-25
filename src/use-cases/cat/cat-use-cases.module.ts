import { Module } from '@nestjs/common';
import { CatFactoryService } from './cat-factory.service';
import { CatUseCases } from './cat.use-case';

export const CAT_FACTORY_SERVICE = Symbol('CAT_FACTORY_SERVICE');
export const CAT_USE_CASES = Symbol('CAT_USE_CASES');

@Module({
  controllers: [],
  providers: [
    { provide: CAT_FACTORY_SERVICE, useClass: CatFactoryService },
    { provide: CAT_USE_CASES, useClass: CatUseCases },
  ],
  exports: [CAT_FACTORY_SERVICE, CAT_USE_CASES],
})
export class CatModule {}
