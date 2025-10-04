import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Professional } from '../../professionals/entities/professional.entity';
import { SchedulingStatus } from './enum/scheduling-status.enum';

@Entity('schedulings')
export class Scheduling {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'client_id' })
  client: User;

  @ManyToOne(() => Professional)
  @JoinColumn({ name: 'professional_id' })
  professional: Professional;

  @Column({ type: 'timestamp' })
  dateTime: Date;

  @Column({
    type: 'enum',
    enum: SchedulingStatus,
    default: SchedulingStatus.PENDING,
  })
  status: SchedulingStatus;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
