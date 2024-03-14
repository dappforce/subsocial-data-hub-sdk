import { EntityWithOwnership } from './common';

export interface OwnershipTransferCreatedEventParsedParams {
  currentOwnerId: string;
  entity: EntityWithOwnership;
  newOwnerId: string;
}

export interface OwnershipTransferAcceptedEventParsedParams {
  accountId: string;
  entity: EntityWithOwnership;
}

export interface OwnershipTransferRejectedEventParsedParams {
  accountId: string;
  entity: EntityWithOwnership;
}
