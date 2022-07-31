import nodeFetch, { RequestInit } from 'node-fetch';

import { RequestParams } from '../types';
import { BASE_URL } from '../constants';
import { getPaginationParams, getSortParams, getFilterParams } from '../utils';

let fetch: any = nodeFetch;

if ('fetch' in window) {
  fetch = window.fetch;
}

type Params = Omit<RequestParams, 'id'>

export class ApiBase {
  lotrUrl = BASE_URL;

  async _makeRequest<Response>(
    endpoint: string,
    { token, pagination, sort, filter }: Params = {},
  ): Promise<Response> {
    const requestInit: RequestInit = {};
    let queryParams = '';

    if (token) {
      requestInit.headers = {
        Authorization: `Bearer ${token}`,
      };
    }

    if (pagination) {
      queryParams += `${queryParams ? '&' : '?'}${getPaginationParams(pagination)}`;
    }

    if (sort) {
      queryParams += `${queryParams ? '&' : '?'}${getSortParams(sort)}`;
    }

    if (filter) {
      queryParams += `${queryParams ? '&' : '?'}${getFilterParams(filter)}`;
    }

    const result = await fetch(`${this.lotrUrl}${endpoint}${queryParams}`, requestInit);

    const parsedResult: Promise<Response> = await result.json();

    return parsedResult;
  }
}
