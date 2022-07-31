import { ApiBase } from './base';

import {
  MoviesListResponse,
  ChaptersListResponse,
  AuthRequestParams,
} from '../types';

export class MovieService extends ApiBase {
  path = '/movie';

  async getMoviesList(params: AuthRequestParams) {
    const response = await this._makeRequest<MoviesListResponse>(this.path, params);
  
    return response;
  };

  async getMovie({ id, token }: AuthRequestParams) {
    const response = await this._makeRequest<MoviesListResponse>(`${this.path}/${id}`, { token });

    return response;
  }

  async getMovieQuotes({ id, ...rest }: AuthRequestParams) {
    const response = await this._makeRequest<ChaptersListResponse>(`${this.path}/${id}/quote`, rest);

    return response;
  }
}

