import { ApiBase } from './base';

import {
  MoviesListResponse,
  ChaptersListResponse,
  AuthRequestParams,
} from '../types';

export class CharacterService extends ApiBase {
  path = '/character';

  async getCharactersList(params: AuthRequestParams) {
    const response = await this._makeRequest<MoviesListResponse>(this.path, params);
  
    return response;
  };

  async getCharacter({ id, token }: AuthRequestParams) {
    const response = await this._makeRequest<MoviesListResponse>(`${this.path}/${id}`, { token });

    return response;
  }

  async getCharacterQuotes({ id, ...rest }: AuthRequestParams) {
    const response = await this._makeRequest<ChaptersListResponse>(`${this.path}/${id}/quote`, rest);

    return response;
  }
}
