import { ApolloQueryResult } from 'apollo-client';
import { FetchResult } from 'apollo-link';
import { ApiClientMethods } from '@vue-storefront/core';

import {
  Cart,
  ProductCategory,
  Product
} from './GraphQL';

export interface BaseSearch {
  limit?: number;
  offset?: number;
  sort?: string[];
}

export enum AttributeType {
  STRING = 'StringAttribute',
  DATE = 'DateAttribute',
  DATETIME = 'DateTimeAttribute',
  TIME = 'TimeAttribute',
  NUMBER = 'NumberAttribute',
  ENUM = 'EnumAttribute',
  LOCALIZED_ENUM = 'LocalizedEnumAttribute',
  LOCALIZED_STRING = 'LocalizedStringAttribute',
  MONEY = 'MoneyAttribute',
  BOOLEAN = 'BooleanAttribute'
}

export interface Filter {
  type: AttributeType;
  name: string;
  value: any;
}

export interface ProductWhereSearch extends BaseSearch {
  catId?: string | string[];
  skus?: string[];
  slug?: string;
  id?: string;
  key?: string;
  filters?: Filter[];
}

export interface CategoryWhereSearch extends BaseSearch {
  catId?: string;
  key?: string;
  slug?: string;
}

export type QueryResponse<K extends string, V> = ApolloQueryResult<Record<K, V>>;
export type MutationResponse<K extends string, V> = FetchResult<Record<K, V>>;
export type CartQueryResponse = QueryResponse<'cart', Cart>;

interface ApiMethods {
  getCart (cartId: string): Promise<CartQueryResponse>;
  getCategory (params): Promise<QueryResponse<'categories', ProductCategory>>;
  getProduct (params): Promise<QueryResponse<'products', Product>>;
}

export type CommercetoolsMethods = ApiClientMethods<ApiMethods>
