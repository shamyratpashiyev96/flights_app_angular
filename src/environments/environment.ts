import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'FlightsApp',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44381/',
    redirectUri: baseUrl,
    clientId: 'FlightsApp_App',
    responseType: 'code',
    scope: 'offline_access FlightsApp',
    requireHttps: true,
  },
  apis: {
    default: {
      url: 'https://localhost:44381',
      rootNamespace: 'FlightsApp',
    },
  },
} as Environment;
