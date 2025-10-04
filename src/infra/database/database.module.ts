import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Professional } from '../..//modules/professionals/entities/professional.entity';
import { Scheduling } from '../..//modules/schedulings/entities/scheduling.entity';
import { User } from '../../modules/users/entities/user.entity';
import { EnvironmentConfigModule } from '../config/env/environment-config.module';
import { EnvironmentConfigService } from '../config/env/environment-config.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [EnvironmentConfigModule],
      inject: [EnvironmentConfigService],
      useFactory: (configService: EnvironmentConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        entities: [User, Professional, Scheduling],
        synchronize: true,
      }),
    }),
    TypeOrmModule.forFeature([User, Professional, Scheduling]),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
