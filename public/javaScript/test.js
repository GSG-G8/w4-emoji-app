/* eslint-disable no-undef */
const testA = require('./logic');

test('basic test in here', () => {
  const actual = testA(5);
  const expected = 10;
  expect(actual).toEqual(expected);
});
