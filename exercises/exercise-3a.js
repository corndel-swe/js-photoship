/**
 * The input is a string in the format "Lastname,Firstname"
 * This function returns a new string in the format "Firstname Lastname"
 *
 * e.g. "Doe,Jane" => "Jane Doe"
 *
 * @param {string} lastfirst - The name in format "Doe,Jane"
 * @returns {string} The name in format "Jane Doe"
 */
export function nameTag(lastfirst) {
  const parts = lastfirst.split(',')
  return parts[1] + ' ' + parts[0]
}
