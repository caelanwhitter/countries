import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CountryInfoEntity } from './entities/country-info.entity';

@Injectable()
export class CountriesRepositoryService {
  constructor(
    @InjectRepository(CountryInfoEntity)
    private readonly countryInfoRepo: Repository<CountryInfoEntity>,
  ) {}

  public async create(
    data: Partial<CountryInfoEntity>,
  ): Promise<CountryInfoEntity> {
    return this.countryInfoRepo.save(data);
  }

  public async getAll(): Promise<CountryInfoEntity[]> {
    return this.countryInfoRepo.find();
  }

  public async getById(id: number): Promise<CountryInfoEntity> {
    return this.countryInfoRepo.findOne({ where: { id } });
  }
}
