import { Controller, Get } from '@nestjs/common';
import { ProfessionalService } from '../services/profissional.service';

@Controller('api/v1/profissionals')
export class ProfissionalController {
  constructor(private readonly profissionalService: ProfessionalService) {}

  @Get()
  async findAll() {
    return this.profissionalService.findAllProfissionals();
  }
}
