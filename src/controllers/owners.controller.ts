import { Controller, Inject } from '@nestjs/common';
import { OwnerFactoryService } from 'src/use-cases/owner/owner-factory.service';
import { OWNER_FACTORY_SERVICE, OWNER_USE_CASES } from 'src/use-cases/owner/owner-use-cases.module';
import { OwnerUseCases } from 'src/use-cases/owner/owner.use-case';

@Controller('api/owners')
export class OwnersController {
  constructor(
    @Inject(OWNER_USE_CASES)
    private readonly ownerUsecases: OwnerUseCases,
    @Inject(OWNER_FACTORY_SERVICE)
    private readonly ownerFactoryService: OwnerFactoryService,
  ) {}
}
