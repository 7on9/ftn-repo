import { configEnv } from '@libs/@config/env';
import { EMediaType, createHttpClient } from '@libs/@core/network';

export const optionalApiConnector = createHttpClient({
  baseURL: '',
  timeout: 2 * 60 * 1000,
  beforeRequest: config => {
    if (!config) return {} as any;
  },
  handleError: err => {
    return err;
  },
  handleResponse: async res => {
    return res.data;
  },
});

export const geoApiConnector = createHttpClient({
  baseURL: 'https://provinces.open-api.vn',
  timeout: 2 * 60 * 1000,
  beforeRequest: config => {
    if (!config) return {} as any;
    config.headers['Content-Type'] = EMediaType.APPLICATION_JSON;
    config.headers['Accept'] = EMediaType.APPLICATION_JSON;
    return config;
  },
  handleError: err => {
    return err;
  },
  handleResponse: async res => {
    return res.data;
  },
});
