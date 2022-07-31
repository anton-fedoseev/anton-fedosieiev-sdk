import { HasId, ApiResponse } from './base';

export type Book = HasId & {
  name: string;
}

export type BooksListResponse = ApiResponse<Book>;
