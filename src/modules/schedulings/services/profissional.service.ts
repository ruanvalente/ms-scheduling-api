import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Scheduling } from '../entities/scheduling.entity';

@Injectable()
export class SchedulingService {
  constructor(
    @InjectRepository(Scheduling)
    private readonly schedulingRepository: Repository<Scheduling>,
  ) {}

  async findAllSchedulings(): Promise<Scheduling[]> {
    return this.schedulingRepository.find();
  }
}
