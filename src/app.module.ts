import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './core/core.module';
import { CountriesModule } from './countries/countries.module';
import { TaskSchedulerModule } from './task-scheduler/task-scheduler.module';

@Module({
  imports: [CoreModule, TaskSchedulerModule, CountriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
