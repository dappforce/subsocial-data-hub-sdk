import { OwnershipEntity } from './common';

export interface OwnershipTransferCreatedEventParsedParams {
  currentOwnerId: string;
  entity: OwnershipEntity;
  newOwnerId: string;
}

export interface OwnershipTransferAcceptedEventParsedParams {
  accountId: string;
  entity: OwnershipEntity;
}

export interface OwnershipTransferRejectedEventParsedParams {
  accountId: string;
  entity: OwnershipEntity;
}
