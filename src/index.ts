import {
  BookService,
  MovieService,
  CharacterService,
  QuoteService,
  ChapterService,
} from './apiServices';
import { NO_TOKEN_RESPONSE } from './constants';
import { UserRequestParams } from './types';

type InitParams = {
  apiKey?: string;
};

export class LotrSdk {
  readonly _apiKey: string | undefined;
  readonly _bookService: BookService;
  readonly _movieService: MovieService;
  readonly _characterService: CharacterService;
  readonly _quotesService: QuoteService;
  readonly _chaptersService: ChapterService;

  constructor({ apiKey }: InitParams = {}) {
    this._apiKey = apiKey;
    this._bookService = new BookService();
    this._movieService = new MovieService();
    this._characterService = new CharacterService();
    this._quotesService = new QuoteService();
    this._chaptersService = new ChapterService();
  }



  // BOOKS METHODS
  async getBooksList(params: UserRequestParams = {}) {
    return this._bookService.getBooksList(params);
  }

  async getBook(id: string) {
    const response = await this._bookService.getBook({ id });

    return response.docs[0];
  }

  async getBookChapters(id: string, params: UserRequestParams = {}) {
    return this._bookService.getBookChapters({ id, ...params });
  }



  // MOVIE METHODS
  async getMoviesList(params: UserRequestParams = {}) {
    if (!this._apiKey) {
      return NO_TOKEN_RESPONSE;
    }

    return this._movieService.getMoviesList({ token: this._apiKey, ...params });
  }

  async getMovie(id: string) {
    if (!this._apiKey) {
      return NO_TOKEN_RESPONSE;
    }

    const response = await this._movieService.getMovie({ id, token: this._apiKey });

    return response.docs[0];
  }

  async getMovieQuotes(id: string, params: UserRequestParams = {}) {
    if (!this._apiKey) {
      return NO_TOKEN_RESPONSE;
    }

    return this._movieService.getMovieQuotes({ id, token: this._apiKey, ...params });
  }



  // CHARACTER METHODS
  async getCharactersList(params: UserRequestParams = {}) {
    if (!this._apiKey) {
      return NO_TOKEN_RESPONSE;
    }

    return this._characterService.getCharactersList({ token: this._apiKey, ...params });
  }

  async getCharacter(id: string) {
    if (!this._apiKey) {
      return NO_TOKEN_RESPONSE;
    }

    const response = await this._characterService.getCharacter({ id, token: this._apiKey });

    return response.docs[0];
  }

  async getCharacterQuotes(id: string, params: UserRequestParams = {}) {
    if (!this._apiKey) {
      return NO_TOKEN_RESPONSE;
    }

    return this._characterService.getCharacterQuotes({ id, token: this._apiKey, ...params });
  }



  // QUOTES DIRECT METHODS
  async getQuotesList(params: UserRequestParams = {}) {
    if (!this._apiKey) {
      return NO_TOKEN_RESPONSE;
    }

    return this._quotesService.getQuotesList({ token: this._apiKey, ...params });
  }

  async getQuote(id: string) {
    if (!this._apiKey) {
      return NO_TOKEN_RESPONSE;
    }

    const response = await this._quotesService.getQuote({ id, token: this._apiKey });

    return response.docs[0];
  }



  // CHAPTERS DIRECT METHODS
  async getChaptersList(params: UserRequestParams = {}) {
    if (!this._apiKey) {
      return NO_TOKEN_RESPONSE;
    }

    return this._chaptersService.getChaptersList({ token: this._apiKey, ...params });
  }

  async getChapter(id: string) {
    if (!this._apiKey) {
      return NO_TOKEN_RESPONSE;
    }

    const response = await this._chaptersService.getChapter({ id, token: this._apiKey });

    return response.docs[0];
  }
}

export * from './types';
