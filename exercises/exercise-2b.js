/**
 * An array of numbers representing filesize in KB is passed in.
 * Files with size less than 1000KB should be filtered out.
 * The remaining files should be converted to MB.
 * Assume 1MB = 1000KB.
 *
 * e.g. [1400, 500, 2100] => [1.4, 2.1]
 *
 * @param {number[]} files - An array of numbers
 * @returns {Array} The array in MB, with small files removed
 */
export function filterConvertFiles(files) {
  return files.filter(f => f >= 1000).map(f => f / 1000)
}
