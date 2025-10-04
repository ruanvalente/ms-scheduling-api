import { Controller, Get } from '@nestjs/common';
import { SchedulingService } from '../services/profissional.service';

@Controller('api/v1/schedulings')
export class SchedulingController {
  constructor(private readonly schedulingService: SchedulingService) {}

  @Get()
  async findAll() {
    return this.schedulingService.findAllSchedulings();
  }
}
