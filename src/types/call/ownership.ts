import { EntityWithOwnership } from '../common';

export interface OwnershipTransferOwnershipCallParsedArgs {
  transferToAccountId: string;
  entity: EntityWithOwnership;
}

export interface OwnershipAcceptPendingOwnershipCallParsedArgs {
  entity: EntityWithOwnership;
}

export interface OwnershipRejectPendingOwnershipCallParsedArgs {
  entity: EntityWithOwnership;
}
