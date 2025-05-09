/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv {
    PORT: number;
    REQUEST_TIMEOUT: number;
    // Swagger Config
    SWAGGER_TITLE: string;
    SWAGGER_DESCRIPTION: string;
    SWAGGER_VERSION: string;
    // DB Config
    DB_PRIMARY_HOST: string;
    DB_PRIMARY_PORT: number;
    DB_PRIMARY_USERNAME: string;
    DB_PRIMARY_PASSWORD: string;
    DB_PRIMARY_DATABASE: string;
    DB_PRIMARY_SYNCHRONIZE: boolean;
    DB_PRIMARY_SSL: boolean;
    DB_PRIMARY_SSL_REJECT_UNAUTHORIZED: boolean;
    // JWT HS256 config
    JWT_SECRET: string;
    JWT_EXPIRY: string;
    JWT_REFRESH_TOKEN_SECRET: string;
    JWT_REFRESH_TOKEN_EXPIRY: string;
    DISPLAY_TIMEZONE: string;
  }
}
