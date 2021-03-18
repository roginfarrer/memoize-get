import { memoizeGet } from '../src';

test('memoize', () => {
  const obj = {
    colors: {
      blue: ['#0cf', '#0be', '#09d', '#07c'],
    },
  };
  const _get = jest.fn(() => true);
  const memoizedGet = memoizeGet(_get);
  expect(memoizedGet(obj, 'colors.blue.3')).toStrictEqual(true);
  expect(memoizedGet(obj, 'colors.blue.3')).toStrictEqual(true);
  expect(memoizedGet(obj, 'colors.blue.3')).toStrictEqual(true);
  expect(_get).toHaveBeenCalledTimes(1);
});
