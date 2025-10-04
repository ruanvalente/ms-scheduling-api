import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../../modules/users/entities/user.entity';
import { Professional } from '../../../modules/professionals/entities/professional.entity';
import { Scheduling } from '../../../modules/schedulings/entities/scheduling.entity';
import { SeedController } from './controller/seed.controller';
import { SeedService } from './services/seed.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Professional, Scheduling])],
  providers: [SeedService],
  controllers: [SeedController],
})
export class SeedModule {}
