type GetDeterministicIdInput = {
    uuid: string;
    timestamp: string;
    account: string;
};

declare function getDeterministicId({ uuid, timestamp, account }: GetDeterministicIdInput): string;

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
declare function getPseudoUuidV4(predefinedStr: string, unixTimestamp: number): string;

export { GetDeterministicIdInput, getDeterministicId, getPseudoUuidV4 };
