import { FILTER_COMPARISON } from '../constants';

export type ApiResponse<T> = {
  docs: [T];
  total: number;
  limit?: number;
  offset?: number;
  page?: number;
  pages?: number;
};

export type HasId = {
  _id: string;
};

export type Sort = {
  property: string;
  direction: 'asc' | 'desc';
};

export type Pagination = {
  limit: number;
  page?: number;
  offset?: number;
};

export type Filter = {
  property: string;
  value?: string | string[] | RegExp;
  exclude?: boolean;
  exists?: boolean;
  comparisonRule?: typeof FILTER_COMPARISON.LESS_THAN
    | typeof FILTER_COMPARISON.LESS_THAN_EQUAL
    | typeof FILTER_COMPARISON.GREATER_THAN
    | typeof FILTER_COMPARISON.GREATER_THAN_EQUAL;
};

export type UserRequestParams = {
  pagination?: Pagination;
  sort?: Sort;
  filter?: Filter;
};

export type RequestParams = UserRequestParams & {
  id?: string;
  token?: string;
}

export type AuthRequestParams = RequestParams & {
  token: string;
};
