import * as crypto from 'node:crypto';

/**
 * Generates a hash formatted similarly to a UUID version 4.
 *
 * This function takes predefined parameters to produce a string that mimics
 * the structure of a UUID version 4, consisting of 32 hexadecimal digits
 * arranged in 5 groups (8-4-4-4-12) and separated by hyphens. The 13th character
 * is fixed to '4'  to emulate the UUID version and 17th character is fixed to
 * "A". However, it's important to note that the output is not a valid UUID v4
 * since it is derived from non-random, user-defined input, thus lacking the
 * randomness inherent to genuine UUID v4.
 *
 * @param {string} predefinedStr - A predefined string to be included in the hash.
 * @param {number} unixTimestamp - A Unix timestamp to be included in the hash.
 * @returns {string} A string formatted in the UUID v4 style but generated from
 *                   the provided parameters.
 */
export function getPseudoUuidV4(
  predefinedStr: string,
  unixTimestamp: number
): string {
  let hash = crypto
    .createHash('md5')
    .update(`${predefinedStr}${unixTimestamp}`)
    .digest('hex');

  hash = hash.substring(0, 12) + '4' + hash.substring(13);
  hash = hash.substring(0, 16) + 'A' + hash.substring(17);

  return `${hash.substring(0, 8)}-${hash.substring(8, 12)}-${hash.substring(
    12,
    16
  )}-${hash.substring(16, 20)}-${hash.substring(20, 32)}`;
}
