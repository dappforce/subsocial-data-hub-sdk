import { OwnableEntity } from './common';

export interface OwnershipTransferCreatedEventParsedParams {
  currentOwnerId: string;
  entity: OwnableEntity;
  newOwnerId: string;
}

export interface OwnershipTransferAcceptedEventParsedParams {
  accountId: string;
  entity: OwnableEntity;
}

export interface OwnershipTransferRejectedEventParsedParams {
  accountId: string;
  entity: OwnableEntity;
}
