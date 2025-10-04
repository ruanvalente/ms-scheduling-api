import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserRole } from 'src/modules/users/entities/enum/user.role.enum';
import { SchedulingStatus } from 'src/modules/schedulings/entities/enum/scheduling-status.enum';
import { Professional } from 'src/modules/professionals/entities/professional.entity';
import { User } from 'src/modules/users/entities/user.entity';
import { Scheduling } from 'src/modules/schedulings/entities/scheduling.entity';

@Injectable()
export class SeedService {
  private readonly logger = new Logger(SeedService.name);

  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    @InjectRepository(Professional)
    private professionalRepo: Repository<Professional>,
    @InjectRepository(Scheduling)
    private schedulingRepo: Repository<Scheduling>,
  ) {}

  async seed() {
    if (process.env.NODE_ENV !== 'development') {
      this.logger.warn('Seed only runs in development mode');
      return;
    }

    // Seed Users
    const admin = this.userRepo.create({
      name: 'Admin User',
      email: 'admin@example.com',
      password: 'hashedpassword',
      role: UserRole.ADMIN,
    });
    const client = this.userRepo.create({
      name: 'Client User',
      email: 'client@example.com',
      password: 'hashedpassword',
      role: UserRole.USER,
    });
    const professionalUser = this.userRepo.create({
      name: 'Professional User',
      email: 'pro@example.com',
      password: 'hashedpassword',
      role: UserRole.PROFESSIONAL,
    });
    await this.userRepo.save([admin, client, professionalUser]);

    // Seed Professional
    const professional = this.professionalRepo.create({
      user: professionalUser,
      specialty: 'doctor',
      neighborhood: 'Downtown',
      hourlyPrice: 150.0,
      availability: [{ day: 'Monday', hours: ['09:00', '17:00'] }],
    });
    await this.professionalRepo.save(professional);

    // Seed Scheduling
    const scheduling = this.schedulingRepo.create({
      client: client,
      professional: professional,
      dateTime: new Date(),
      status: SchedulingStatus.PENDING,
    });
    await this.schedulingRepo.save(scheduling);

    this.logger.log('Seed completed!');
  }
}
