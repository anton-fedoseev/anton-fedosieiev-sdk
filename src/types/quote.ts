import { HasId, ApiResponse } from './base';

export type Quote = HasId & {
  dialog: string;
  movie: string;
  character: string;
  id: string;
};

export type QuotesListResponse = ApiResponse<Quote>;
