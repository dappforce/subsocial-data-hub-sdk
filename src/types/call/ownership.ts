import { OwnershipEntity } from '../common';

export interface OwnershipTransferOwnershipCallParsedArgs {
  transferToAccountId: string;
  entity: OwnershipEntity;
}

export interface OwnershipAcceptPendingOwnershipCallParsedArgs {
  entity: OwnershipEntity;
}

export interface OwnershipRejectPendingOwnershipCallParsedArgs {
  entity: OwnershipEntity;
}
