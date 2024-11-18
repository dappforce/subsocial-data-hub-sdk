import { DataHubClientId } from '../common';

export interface SynthSocialProfileAddReferrerIdCallParsedArgs {
  refId: string;
  clientId: DataHubClientId;
  timestamp?: string;
}

export type SocialProfileActionPermissions = {
  createCommentRootPostIds?: string[];
};

export interface SynthSocialProfileSetActionPermissionsCallParsedArgs {
  address: string;
  allow?: SocialProfileActionPermissions;
  forbid?: SocialProfileActionPermissions;
}

export interface SynthSocialProfileSyncExternalTokenBalanceCallParsedArgs {
  externalTokenId: string;
}
