import { Controller, Post } from '@nestjs/common';
import { SeedService } from '../services/seed.service';

@Controller('api/v1/seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @Post()
  async runSeed() {
    await this.seedService.seed();
    return { message: 'Seed executed' };
  }
}
