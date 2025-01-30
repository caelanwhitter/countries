import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

import { CountriesService } from './countries.service';

@Controller('countries')
export class AdminAssignmentNotificationRulesController {
  constructor(private readonly countriesService: CountriesService) {}

  @Get()
  public async getAll(): Promise<any[]> {
    return this.countriesService.getAll();
  }

  @Get(':id')
  public async getById(@Param('id', ParseIntPipe) id: number): Promise<any> {
    await this.countriesService.getById(id);
  }
}
