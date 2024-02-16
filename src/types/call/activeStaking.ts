export interface SynthActiveStakingConfirmationDataCallParsedArgs {
  msg: string;
  sig: string;
}

export interface SynthActiveStakingCreateSuperLikeCallParsedArgs {
  postId: string;
  multiplier?: number;
  blockHash?: string;
  confirmation?: SynthActiveStakingConfirmationDataCallParsedArgs;
}

export interface SynthActiveStakingDeleteSuperLikeCallParsedArgs {
  postId: string;
  multiplier?: number;
  blockHash?: string;
  confirmation?: SynthActiveStakingConfirmationDataCallParsedArgs;
}
