import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { OwnersController } from './controllers/owners.controller';
import { CatsController } from './controllers/cats.controller';
import { CatModule } from './use-cases/cat/cat-use-cases.module';
import { OwnerModule } from './use-cases/owner/owner-use-cases.module';

@Module({
  imports: [CatModule, OwnerModule],
  controllers: [AppController, CatsController, OwnersController],
  providers: [],
})
export class AppModule {}
