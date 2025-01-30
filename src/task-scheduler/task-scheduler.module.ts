import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';

import { CountriesRepositoryModule } from '../repository/countries/countries-repository.module';
import { TaskSchedulerService } from './task-scheduler.service';

@Module({
  imports: [ScheduleModule.forRoot(), HttpModule, CountriesRepositoryModule],
  providers: [TaskSchedulerService],
})
export class TaskSchedulerModule {}
