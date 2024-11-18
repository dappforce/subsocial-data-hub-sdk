import { blake2AsHex, decodeAddress } from '@polkadot/util-crypto';
import { stringToU8a, u8aToHex } from '@polkadot/util';
import { GetDeterministicIdInput } from './types';

export function isValidUUIDv4(maybeUuid: string): boolean {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
    maybeUuid
  );
}

export function getDeterministicId({
  uuid,
  timestamp,
  account
}: GetDeterministicIdInput): string {
  if (!isValidUUIDv4(uuid))
    throw new Error('Not valid uuid has been provided. Must be UUID v4.');
  const pubKey = u8aToHex(decodeAddress(account), undefined, false);
  const u8aKey = stringToU8a(pubKey + timestamp + uuid.replace(/-/g, ''));
  return blake2AsHex(u8aKey, 128, null, true);
}
