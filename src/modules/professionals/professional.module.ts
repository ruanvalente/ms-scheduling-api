import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfissionalController } from './controller/profissional.controller';
import { Professional } from './entities/professional.entity';
import { ProfessionalService } from './services/profissional.service';

@Module({
  imports: [TypeOrmModule.forFeature([Professional])],
  providers: [ProfessionalService],
  controllers: [ProfissionalController],
})
export class ProfessionalModule {}
