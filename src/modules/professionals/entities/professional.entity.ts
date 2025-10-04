import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
  CreateDateColumn,
} from 'typeorm';
import { Scheduling } from '../../schedulings/entities/scheduling.entity';
import { User } from '../../users/entities/user.entity';

@Entity('professionals')
export class Professional {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, { eager: true })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  specialty: string;

  @Column()
  neighborhood: string;

  @Column('decimal', { precision: 10, scale: 2 })
  hourlyPrice: number;

  @Column('json', { nullable: true })
  availability: any;

  @OneToMany(() => Scheduling, (scheduling) => scheduling.professional)
  schedulings: Scheduling[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
