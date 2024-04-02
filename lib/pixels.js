function sumArray(array) {
  return array.reduce(
    (acc, next) => acc + next,
    0
  )
}

export function stripRed(rgb) {
  // TODO: set the red value in the rgb array to 0
  // e.g. [10, 105, 39] => [0, 105, 39]
  rgb[0] = 0
  return rgb
}

export function stripGreen(rgb) {
  // TODO: set the green value in the rgb array to 0
  // e.g. [10, 105, 39] => [10, 0, 39]
  rgb[1] = 0
  return rgb
}

export function stripBlue(rgb) {
  // TODO: set the blue value in the rgb array to 0
  // e.g. [10, 105, 39] => [10, 105, 0]
  rgb[2] = 0
  return rgb
}

export function invert(rgb) {
  // TODO: set each value in the array to (255 - value)
  // e.g. [50, 100, 210] => [205, 155, 45]
  return rgb.map(value => 255 - value)
}

export function grayScale(rgb) {
  // TODO: set each value of the rgb array to the average
  // e.g. [4, 5, 12] => [7, 7, 7]
  //
  // The `sumArray()` helper function has been imported at the top of this file
  // for you convenience! It calculates the sum of an array.
  let average = sumArray(rgb) / 3
  return rgb.map(_ => average)
}

export function blackAndWhite(rgb) {
  // TODO: calculate the average of r, g, b
  // if it's smaller than 255/2, set all values to 0
  // otherwise set all values to 255
}

export function colorChannel(rgb, color) {
  // TODO: get the color channel
  // if color is 'r', set all values in the array to the R value
  // similar for 'g' and 'b'
  // e.g. [107, 43, 198], 'g' => [43, 43, 43]
}

export function sepia(rgb) {
  // TODO: google "sepia tone rgb formula" and implement it
}

export function adjustBrightness(rgb, brightness) {
  // TODO: add the value of 'brightness' to every element in rgb
  // but make sure the value stays between 0 and 255!
}
