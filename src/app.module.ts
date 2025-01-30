import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './core/core.module';
import { TaskSchedulerModule } from './task-scheduler/task-scheduler.module';

@Module({
  imports: [CoreModule, TaskSchedulerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
