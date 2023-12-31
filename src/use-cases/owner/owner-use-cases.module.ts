import { Module } from '@nestjs/common';
import { OwnerFactoryService } from './owner-factory.service';
import { OwnerUseCases } from './owner.use-case';
import { DataServicesModule } from 'src/services/data-services/data-services.module';

export const OWNER_FACTORY_SERVICE = Symbol('OWNER_FACTORY_SERVICE');
export const OWNER_USE_CASES = Symbol('OWNER_USE_CASES');

@Module({
  imports: [DataServicesModule],
  controllers: [],
  providers: [
    { provide: OWNER_FACTORY_SERVICE, useClass: OwnerFactoryService },
    { provide: OWNER_USE_CASES, useClass: OwnerUseCases },
  ],
  exports: [OWNER_FACTORY_SERVICE, OWNER_USE_CASES],
})
export class OwnerModule {}
