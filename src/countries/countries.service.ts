import { Injectable } from '@nestjs/common';

import { CountriesRepositoryService } from '../repository/countries/countries-repository.service';

@Injectable()
export class CountriesService {
  constructor(
    private readonly countriesRepository: CountriesRepositoryService,
  ) {}

  public async getAll(): Promise<any[]> {
    return this.countriesRepository.getAll();
  }

  public async getById(id: number): Promise<any> {
    return this.countriesRepository.getById(id);
  }
}
