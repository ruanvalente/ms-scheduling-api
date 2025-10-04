import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Professional } from '../entities/professional.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProfessionalService {
  constructor(
    @InjectRepository(Professional)
    private readonly userRepository: Repository<Professional>,
  ) {}

  async findAllProfissionals(): Promise<Professional[]> {
    return this.userRepository.find();
  }
}
