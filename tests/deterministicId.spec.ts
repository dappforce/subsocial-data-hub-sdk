import { describe, expect, test } from '@jest/globals';
import { getDeterministicId } from '../src/utils';

describe('DeterministicId Unit', () => {
  test('should return id', () => {
    const uuid = 'd7f3b474-0250-46ca-a5d3-1045928646b1';
    const timestamp = '1698784096287';
    const account = '3oL3YaPAHfVx9wLXWQf4jYSKKSvqJ7onx7VeH1Sn3rupKyVJ';
    const id = getDeterministicId({
      uuid,
      timestamp,
      account
    });

    expect(id).toEqual('0x82b9f0bc655dc1d7d1aa05b42a87c1cf');
  });
});
