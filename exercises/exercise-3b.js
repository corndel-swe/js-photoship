/**
 * Removes all other file types from the array and keeps only
 * .png and .jpg files.
 *
 * e.g. ['bird.jpg', 'notes.txt', 'car.png'] => ['bird.jpg', 'car.png']
 *
 * @param {string[]} filenames - An array of filenames
 * @returns {string[]} An array of only .jpg and .png files
 */
export function imageFiles(filenames) {
  return filenames.filter(f => {
    const ext = f.split('.')[1]
    return ['jpg', 'png'].includes(ext)
  })
}
