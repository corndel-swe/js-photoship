/**
 * Given an array, swap the first and last element.
 *
 * e.g. ['w', 'x', 'y', 'z'] => ['z', 'x', 'y', 'w']
 *
 * @param {Array} arr - The input array
 * @returns {Array} The array with first and last element swapped
 */
export function swapFirstLast(arr) {
  const first = arr.shift()
  const last = arr.pop()
  arr.push(first)
  arr.unshift(last)
  return arr
}
