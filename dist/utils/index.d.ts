type GetDeterministicIdInput = {
    uuid: string;
    timestamp: string;
    account: string;
};
interface VerifyEthSigInput {
    /** The message to verify */
    msg: string;
    /** The signature to verify */
    sig: string;
    /** Maybe signer of the message */
    address: string;
}
interface VerifyEthSigResult {
    /** The validity for this result, false if invalid */
    isValid: boolean;
    /** The extracted address */
    address: string;
}

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

/**
 * Verifies the Ethereum signature for a given message.
 *
 * Verifies an Ethereum message signature against a provided address using `
 * ethers`'s `verifyMessage`. It checks if the signature is valid by comparing
 * the recovered address from the signature with the provided address.
 *
 * @param {VerifyEthSigInput} input - An object containing the message (`msg`),
 * signature (`sig`), and address to verify the signature against.
 * @returns {VerifyEthSigResult} An object containing a boolean `isValid` field
 * indicating if the signature is valid for the given message and address,
 * and an `address` field with the recovered address from the signature.
 *
 * @throws {Error} If any of the input parameters (`msg`, `sig`, or `address`) are missing,
 * or if they are not of type string.
 *
 * @example
 * const verificationResult = verifyEthSignature({
 *   msg: 'Hello, world!',
 *   sig: '0x45f...signature',
 *   address: '0x123...address'
 * });
 * console.log(verificationResult.isValid); // true or false
 * console.log(verificationResult.address); // '0x123...recoveredAddress'
 */
declare function verifyEthSignature({ msg, sig, address }: VerifyEthSigInput): VerifyEthSigResult;

export { GetDeterministicIdInput, VerifyEthSigInput, VerifyEthSigResult, getDeterministicId, getPseudoUuidV4, verifyEthSignature };
