import { ApiBase } from './base';

import {
  ChaptersListResponse,
  AuthRequestParams,
} from '../types';

export class ChapterService extends ApiBase {
  path = '/chapter';

  async getChaptersList(params: AuthRequestParams) {
    const response = await this._makeRequest<ChaptersListResponse>(this.path, params);
  
    return response;
  };

  async getChapter({ id, token }: AuthRequestParams) {
    const response = await this._makeRequest<ChaptersListResponse>(`${this.path}/${id}`, { token });

    return response;
  }
}
