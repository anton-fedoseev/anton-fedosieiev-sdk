import { ApiBase } from './base';

import {
  BooksListResponse,
  ChaptersListResponse,
  RequestParams,
} from '../types';

export class BookService extends ApiBase {
  path = '/book';

  async getBooksList(params: RequestParams) {
    const response = await this._makeRequest<BooksListResponse>(this.path, params);
  
    return response;
  };

  async getBook({ id }: RequestParams) {
    const response = await this._makeRequest<BooksListResponse>(`${this.path}/${id}`);

    return response;
  }

  async getBookChapters({ id, ...rest }: RequestParams) {
    const response = await this._makeRequest<ChaptersListResponse>(`${this.path}/${id}/chapter`, rest);

    return response;
  }
}
