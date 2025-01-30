import { Exclude, Expose, Transform } from 'class-transformer';

@Exclude()
export class CountryInfoMapper {
  @Expose()
  @Transform(({ obj }) => obj.name.common)
  name: string;

  @Expose()
  @Transform(({ obj }) => obj.capital?.[0] || '')
  capital: string;

  @Expose()
  @Transform(({ obj }) => obj.continents?.[0] || '')
  continent: string;

  @Expose()
  region: string;

  @Expose()
  @Transform(({ obj }) => obj.subregion || '')
  sub_region: string;

  @Expose()
  population: number;

  @Expose()
  area: number;

  @Expose()
  timezones: string[];

  @Expose()
  @Transform(({ obj }) => {
    const lat = obj.latlng?.[0] || 0;
    const lng = obj.latlng?.[1] || 0;

    return `(${lat},${lng})`;
  })
  location: string;

  @Expose()
  @Transform(({ obj }) => Object.keys(obj.languages || {}))
  languages: string[];

  @Expose()
  @Transform(({ obj }) => Object.keys(obj.currencies || {}))
  currencies: string[];

  @Expose()
  @Transform(({ obj }) => obj.flags.png)
  flag: string;
}
