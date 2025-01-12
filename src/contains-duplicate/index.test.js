import Solution from './index';

describe('Contains Duplicate', () => {
  const solution = new Solution();

  test('returns true', () => {
    expect(solution.hasDuplicate([1, 2, 3, 3])).toBe(true);
  });

  test('returns false', () => {
    expect(solution.hasDuplicate([1, 2, 3, 4])).toBe(false);
  });
});
