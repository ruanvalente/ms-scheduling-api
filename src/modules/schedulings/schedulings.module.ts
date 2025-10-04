import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SchedulingController } from './controller/scheduling.controller';
import { Scheduling } from './entities/scheduling.entity';
import { SchedulingService } from './services/profissional.service';

@Module({
  imports: [TypeOrmModule.forFeature([Scheduling])],
  providers: [SchedulingService],
  controllers: [SchedulingController],
})
export class SchedulingModule {}
