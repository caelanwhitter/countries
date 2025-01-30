import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';
dotenv.config();

//TypeORM Migrations Config
export const typeOrmConfig = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || '',
  port: parseInt(process.env.DB_PORT, 10) || 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [process.env.DB_ENTITIES] || [''],
  schema: process.env.DB_SCHEMA,
  migrations: [process.env.DB_MIGRATIONS] || [''],
  migrationsTableName: process.env.DB_MIGRATIONS_TABLE_NAME,
  useUTC: true,
  synchronize: false,
  migrationsRun: false,
  // logging: ['query'],
});
