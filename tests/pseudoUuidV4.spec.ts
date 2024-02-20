import { describe, expect, test } from '@jest/globals';
import { getPseudoUuidV4 } from '../src/utils';

describe('DeterministicId Unit', () => {
  test('should return id', () => {
    const string = '1200';
    const timestamp = 1701636176441;
    const pUuid = getPseudoUuidV4(string, timestamp);
    console.log(pUuid);

    expect(pUuid).toEqual('f7bad605-1f07-431a-Abd8-6cb305dfca8a');
  });

  test('should return id 1', () => {
    const string = '3t5YQ8ZiBJyTVtJH4y5QwvyLBsyfkp3rHyNigjZQp2Co9PxS';
    const timestamp = 1707696000;
    // const timestamp = 1707782400;
    const pUuid = getPseudoUuidV4(string, timestamp);
    console.log(pUuid);

    expect(pUuid).toEqual('f7bad605-1f07-431a-Abd8-6cb305dfca8a');
  });
});
