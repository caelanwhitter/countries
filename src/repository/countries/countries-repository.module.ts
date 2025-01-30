import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CountriesRepositoryService } from './countries-repository.service';
import { CountryInfoEntity } from './entities/country-info.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CountryInfoEntity])],
  providers: [CountriesRepositoryService],
  exports: [CountriesRepositoryService],
})
export class CountriesRepositoryModule {}
