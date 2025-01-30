import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('country_info')
export class CountryInfoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  capital: string;

  @Column()
  continent: string;

  @Column()
  region: string;

  @Column()
  sub_region: string;

  @Column()
  population: number;

  @Column('decimal', { precision: 10, scale: 2 })
  area: number;

  @Column('varchar', { array: true })
  timezones: string[];

  @Column('point', {
    transformer: {
      to: (value: string) => value,
      from: (value: string) => value,
    },
  })
  location: string;

  @Column('varchar', { array: true })
  languages: string[];

  @Column('varchar', { array: true })
  currencies: string[];

  @Column()
  flag: string;
}
