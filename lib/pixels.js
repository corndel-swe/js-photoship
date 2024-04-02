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
  let average = sumArray(rgb) / 3
  if (average < 255/2) {
    average = 0
  } else {
    average = 255
  }
  return rgb.map(_ => average)
}

export function colorChannel(rgb, color) {
  // TODO: get the color channel
  // if color is 'r', set all values in the array to the R value
  // similar for 'g' and 'b'
  // e.g. [107, 43, 198], 'g' => [43, 43, 43]
  if (color === "r") {
    let value = rgb[0]
    return rgb.map(_ => value)
  } else if (color === "g") {
    let value = rgb[1]
    return rgb.map(_ => value)
  } else if (color === "b") {
    let value = rgb[2]
    return rgb.map(_ => value)
  }
  // There are nicer ways of doing this, most notably by using a
  // "switch" statement: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
}

export function sepia(rgb) {
  // Found formula here: https://www.geeksforgeeks.org/image-processing-in-java-colored-image-to-sepia-image-conversion/
  let oldRed = rgb[0]
  let oldGreen = rgb[1]
  let oldBlue = rgb[2]

  let newRed = 0.393*oldRed + 0.769*oldGreen + 0.189*oldBlue
  let newGreen = 0.349*oldRed + 0.686*oldGreen + 0.168*oldBlue
  let newBlue = 0.272*oldRed + 0.534*oldGreen + 0.131*oldBlue

  let newRgb = [newRed, newGreen, newBlue]

  // Clamp values to between 0 and 255
  let clampedRgb = newRgb.map(value => {
    if (value < 0) {
      return 0
    }
    if (value > 255) {
      return 255
    }
    return value
  })

  return clampedRgb
}

export function adjustBrightness(rgb, brightness) {
  // TODO: add the value of 'brightness' to every element in rgb
  // but make sure the value stays between 0 and 255!
}
