import { ApiBase } from './base';

import {
  QuotesListResponse,
  AuthRequestParams,
} from '../types';

export class QuoteService extends ApiBase {
  path = '/quote';

  async getQuotesList(params: AuthRequestParams) {
    const response = await this._makeRequest<QuotesListResponse>(this.path, params);
  
    return response;
  };

  async getQuote({ id, token }: AuthRequestParams) {
    const response = await this._makeRequest<QuotesListResponse>(`${this.path}/${id}`, { token });

    return response;
  }
}
