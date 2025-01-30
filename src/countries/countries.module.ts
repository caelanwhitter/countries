import { Module } from '@nestjs/common';

import { CountriesRepositoryModule } from '../repository/countries/countries-repository.module';
import { CountriesService } from './countries.service';

@Module({
  imports: [CountriesRepositoryModule],
  providers: [CountriesService],
  exports: [CountriesService],
})
export class CountriesModule {}
