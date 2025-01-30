import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCountryInfoTable1738247518336 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'country_info',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'capital',
            type: 'varchar',
          },
          {
            name: 'continent',
            type: 'varchar',
          },
          {
            name: 'region',
            type: 'varchar',
          },
          {
            name: 'sub_region',
            type: 'varchar',
          },
          {
            name: 'population',
            type: 'int',
          },
          {
            name: 'area',
            type: 'decimal',
            precision: 10,
            scale: 2,
          },
          {
            name: 'timezones',
            type: 'varchar',
            isArray: true,
          },
          {
            name: 'location',
            type: 'point',
          },
          {
            name: 'languages',
            type: 'varchar',
            isArray: true,
          },
          {
            name: 'currencies',
            type: 'varchar',
            isArray: true,
          },
          {
            name: 'flag',
            type: 'varchar',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('country_info');
  }
}
