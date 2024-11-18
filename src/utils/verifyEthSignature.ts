import { VerifyEthSigInput, VerifyEthSigResult } from './types';
import { verifyMessage } from 'ethers';

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
export function verifyEthSignature({
  msg,
  sig,
  address
}: VerifyEthSigInput): VerifyEthSigResult {
  if (!msg || !sig || !address)
    throw new Error('Message, signature and address are required.');

  if (
    typeof msg !== 'string' ||
    typeof sig !== 'string' ||
    typeof address !== 'string'
  )
    throw new Error('Message, signature and address must be a string.');

  const extractedAddress = verifyMessage(msg, sig);

  return {
    isValid: extractedAddress === address,
    address: extractedAddress
  };
}
