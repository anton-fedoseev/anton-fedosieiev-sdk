import { HasId, ApiResponse } from './base';

export type Chapter = HasId & {
  chapterName: string;
  book?: string;
};

export type ChaptersListResponse = ApiResponse<Chapter>;
