import { describe, expect, test } from '@jest/globals';
import { getDeterministicId } from '../src/utils';
import { verifyEthSignature } from '../src/utils/verifyEthSignature';

describe('VerifyEthSignature Unit', () => {
  test('should return isValid "true"', () => {
    const msg = 'Hello world';
    const sig =
      '0x1a7d9a9e261fc62f2b77aa56a4f3d32db64b63a618a3a9f706ac3fb8a455e7853beded2d1dbf84e1cd7736d1f0cb223547b0257f149a595cd9e7597d5b37344c1b';
    const address = '0x369f1B5Ee01063a879cF7a6de3b8F6638A7dbceF';
    const verifyResult = verifyEthSignature({ msg, sig, address });

    expect(verifyResult.address).toEqual(address);
    expect(verifyResult.isValid).toBe(true);
  });
});
