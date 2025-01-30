import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { plainToInstance } from 'class-transformer';

import { CountriesRepositoryService } from '../repository/countries/countries-repository.service';
import { CountryInfoMapper } from './mapper/country-info.mapper';

@Injectable()
export class TaskSchedulerService {
  constructor(
    private readonly httpService: HttpService,
    private readonly countriesRepository: CountriesRepositoryService,
  ) {}

  @Cron('* * * * *')
  public async getCountries() {
    try {
      const { data } = await this.httpService.axiosRef.get(
        `https://restcountries.com/v3.1/independent?status=true`,
      );
      // let count = 0;
      const tableData = plainToInstance(CountryInfoMapper, data);
      await this.countriesRepository.create(tableData);

      // console.log(count);
      // data.forEach(async country => {
      //   const { data: population } = await this.httpService.axiosRef.get(
      //     `https://api.api-ninjas.com/v1/population?country=${country.name.common}`,
      //     {
      //       headers: {
      //         'X-Api-Key': 'NylrcRTJ6DtRP10QCHGVPA==7ZHXFMVR4g4vi11J',
      //       },
      //     },
      //   );

      // Get only the most recent population data (first object in historical_population array)
      //   if (!population?.historical_population?.[0]) {
      //     console.log(country.name.common);
      //   }
      //   // const currentPopulation = population?.historical_population?.[0] || {};
      //   // console.log(currentPopulation);
      // });
    } catch (err) {
      console.log('error', err);
    }
  }
}
