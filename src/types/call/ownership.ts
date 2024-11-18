import { OwnableEntity } from '../common';

export interface OwnershipTransferOwnershipCallParsedArgs {
  transferToAccountId: string;
  entity: OwnableEntity;
}

export interface OwnershipAcceptPendingOwnershipCallParsedArgs {
  entity: OwnableEntity;
}

export interface OwnershipRejectPendingOwnershipCallParsedArgs {
  entity: OwnableEntity;
}
