import { blake2AsHex, decodeAddress } from '@polkadot/util-crypto';
import { stringToU8a, u8aToHex } from '@polkadot/util';
import { GetDeterministicIdInput } from './types';

export function getDeterministicId({
  uuid,
  timestamp,
  account
}: GetDeterministicIdInput): string {
  const pubKey = u8aToHex(decodeAddress(account), undefined, false);
  const u8aKey = stringToU8a(pubKey + timestamp + uuid);
  return blake2AsHex(u8aKey, 128, null, true);
}
