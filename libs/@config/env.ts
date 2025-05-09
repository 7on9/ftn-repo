import { join } from 'path';
import { DataSourceOptions } from 'typeorm';

const stringToBoolean = (value: string | boolean) => {
  return Boolean(JSON.parse(`${value}`));
};

export type IEnvConfig = {
  DBS: Array<DataSourceOptions>;
  CONNECTORS?: {
    SSO: {
      baseUrl: string;
    };
  };
} & NodeJS.ProcessEnv;

export function configEnv(): IEnvConfig {
  const {
    PORT,
    TZ,
    REQUEST_TIMEOUT = 3 * 60 * 1000,
    DB_PRIMARY_HOST,
    DB_PRIMARY_PORT,
    DB_PRIMARY_USERNAME,
    DB_PRIMARY_PASSWORD,
    DB_PRIMARY_DATABASE,
    DB_PRIMARY_SYNCHRONIZE = false,
    DB_PRIMARY_SSL = false,
    DB_PRIMARY_SSL_REJECT_UNAUTHORIZED = true,
    // SWAGGER CONFIG
    SWAGGER_TITLE = 'BASE API',
    SWAGGER_DESCRIPTION = 'The BASE API',
    SWAGGER_VERSION = '1.0',
    JWT_SECRET,
    JWT_EXPIRY,
    JWT_REFRESH_TOKEN_SECRET,
    JWT_REFRESH_TOKEN_EXPIRY,

    DISPLAY_TIMEZONE,
  } = process.env;
  return {
    PORT: Number(PORT) || 3000,
    TZ,
    REQUEST_TIMEOUT: Number(REQUEST_TIMEOUT),
    SWAGGER_TITLE,
    SWAGGER_DESCRIPTION,
    SWAGGER_VERSION,
    JWT_SECRET,
    JWT_EXPIRY,
    JWT_REFRESH_TOKEN_SECRET,
    JWT_REFRESH_TOKEN_EXPIRY,
    DBS: [
      {
        name: 'default',
        type: 'postgres',
        host: DB_PRIMARY_HOST,
        port: Number(DB_PRIMARY_PORT),
        username: DB_PRIMARY_USERNAME,
        password: DB_PRIMARY_PASSWORD,
        database: DB_PRIMARY_DATABASE,
        synchronize: stringToBoolean(DB_PRIMARY_SYNCHRONIZE),
        ssl: stringToBoolean(DB_PRIMARY_SSL)
          ? { rejectUnauthorized: stringToBoolean(DB_PRIMARY_SSL_REJECT_UNAUTHORIZED) }
          : undefined,
        entities: [join(__dirname, '../entities/primary/**/**{.ts,.js}')],
        // subscribers: [join(__dirname, '../@subscribers/primary/**/**{.ts,.js}')],
        logging: [
          'log',
          'error',
          'info',
          // "query"
        ],
      },
    ],
  } as IEnvConfig;
}
