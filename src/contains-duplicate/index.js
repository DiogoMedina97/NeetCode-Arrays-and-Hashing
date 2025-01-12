class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
    const uniqueNums = new Set(nums);
    return nums.length !== uniqueNums.size;
  }
}

module.exports = Solution;
