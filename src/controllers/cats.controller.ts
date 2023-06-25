import { Controller, Get, Inject, Post, Put } from '@nestjs/common';
import { CatFactoryService } from 'src/use-cases/cat/cat-factory.service';
import { CAT_FACTORY_SERVICE, CAT_USE_CASES } from 'src/use-cases/cat/cat-use-cases.module';
import { CatUseCases } from 'src/use-cases/cat/cat.use-case';

@Controller('api/cats')
export class CatsController {
  constructor(
    @Inject(CAT_USE_CASES) private readonly catUseCases: CatUseCases,
    @Inject(CAT_FACTORY_SERVICE) private readonly catFactoryService: CatFactoryService,
  ) {}

  @Put(':id')
  async updateCat() {}

  @Get(':id')
  async getOne() {}

  @Get()
  async getAll() {}

  @Post()
  async createCat() {}
}
