const Solution = require('./index.js');

describe('Valid Anagram', () => {
  const solution = new Solution();

  test('returns true', () => {
    expect(solution.isAnagram('racecar', 'carrace')).toBe(true);
  });

  test('returns false', () => {
    expect(solution.isAnagram('jar', 'jam')).toBe(false);
  });
});
