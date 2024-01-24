/**
 * Returns the sum of the first and last elements of the array.
 *
 * e.g. [4, 1, 9, 5, 2] => 6
 *
 * @param {number[]} nums - An array of numbers.
 * @returns {number} The sum of the first and last elements.
 */
export function firstAddLast(nums) {
  return nums[0] + nums[nums.length - 1]
}
