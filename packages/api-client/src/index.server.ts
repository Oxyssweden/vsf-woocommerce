import client from './helpers/client';
import { apiClientFactory } from '@vue-storefront/core';
import getProduct from './api/getProduct';
import getCategory from './api/getCategory';

require('dotenv').config();

const defaultSettings = {};

const onCreate = (settings) => {
  return {
    config: {
      ...defaultSettings,
      ...settings
    },
    client
  };
};

const { createApiClient } = apiClientFactory<any, any>({
  onCreate,
  api: {
    getProduct,
    getCategory
  }
});

export {
  createApiClient
};
