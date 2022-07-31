import { LotrSdk } from './index';

test('Lotr SDK', () => {
  const sdk = new LotrSdk();

  expect(sdk).toHaveProperty('getBook');
});
