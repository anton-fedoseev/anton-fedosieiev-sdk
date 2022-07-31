import { HasId, ApiResponse } from './base';

export type Character = HasId & {
  height: string;
  race: string;
  gender: string;
  birth: string;
  spouse: string;
  death: string;
  realm: string;
  hair: string;
  name: string;
  wikiUrl: string;
}

export type MoviesListResponse = ApiResponse<Character>;
