class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    if (s.length !== t.length) return false;

    const count = {};
    for (let i = 0; i < s.length; i++) {
      count[s.charAt(i)] = (count[s.charAt(i)] || 0) + 1
      count[t.charAt(i)] = (count[t.charAt(i)] || 0) - 1
    }

    return Object.values(count).every((v) => v === 0);
  }
}

module.exports = Solution;
