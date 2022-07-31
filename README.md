# Simple LOTR SDK

SDK for [`LOTR API`](https://the-one-api.dev/)

## Install

You can install package using [npm](https://www.npmjs.com/)

`npm i --save simple-lotr-sdk`

```javascript
const lotr = new LotrSdk({ apiKey: '<YOUR_API_KEY>' });

lotr.getMovies().then(res => console.log(res));
```

## Interface

### Public methods

This methods do not require API key

- getBookList(params)
- getBook(id)
- getBookChapters(id, params)

### Private methods

This methods require API key

- getMoviesList(params)
- getMovie(id)
- getMovieQuotes(id, params)
- getCharactersList(params)
- getCharacter(id)
- getCharacterQuotes(id, params)
- getQuotesList(params)
- getQuote(id)
- getChaptersList(params)
- getChapter(id)

### Params

```typescript
type params = {
  pagination?: {
    limit: number;
    page?: number;
    offset?: number;
  };
  sort?: {
    property: string;
    direction: 'asc' | 'desc';
  };
  filter?: {
    property: string;
    value?: string | string[] | RegExp;
    exclude?: boolean;
    exists?: boolean;
    comparisonRule?: 'less than' | 'less than equal' | 'greater than' | 'greater than equal';
  };
};
```
