const Solution = require('./index.js');

describe('Two Sum', () => {
  const solution = new Solution();

  test('returns [0, 1]', () => {
    expect(solution.twoSum([3,4,5,6], 7)).toStrictEqual([0, 1]);
  });

  test('returns [0, 2]', () => {
    expect(solution.twoSum([4,5,6], 10)).toStrictEqual([0, 2]);
  });

  test('returns [0, 1]', () => {
    expect(solution.twoSum([5,5], 10)).toStrictEqual([0, 1]);
  });
});
