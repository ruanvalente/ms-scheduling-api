import { Module } from '@nestjs/common';
import { DatabaseModule } from './infra/database/database.module';
import { SeedModule } from './infra/database/seed/seed.module';
import { ProfessionalModule } from './modules/professionals/professional.module';
import { SchedulingModule } from './modules/schedulings/schedulings.module';
import { UserModule } from './modules/users/user.module';

@Module({
  imports: [
    DatabaseModule,
    UserModule,
    ProfessionalModule,
    SchedulingModule,
    ...(process.env.NODE_ENV === 'development' ? [SeedModule] : []),
  ],
})
export class AppModule {}
