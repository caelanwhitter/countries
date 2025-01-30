import { ConfigService } from '@nestjs/config';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export default async function (
  configService: ConfigService,
): Promise<PostgresConnectionOptions> {
  return {
    type: configService.get('DB_TYPE'),
    host: configService.get('DB_HOST'),
    port: parseInt(configService.get('DB_PORT'), 10),
    username: configService.get('DB_USER'),
    password: configService.get('DB_PASSWORD'),
    database: configService.get('DB_NAME'),
    entities: [configService.get('DB_ENTITIES')],
    schema: configService.get('DB_SCHEMA'),
    synchronize: false,
    migrationsRun: false,
    // logging: ['query'],
    migrations: ['src/migration/*.ts'],
  };
}
