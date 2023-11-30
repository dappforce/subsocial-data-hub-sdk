/**
 * === Common calls ===
 */

export interface SynthModerationInitModeratorCallParsedArgs {
  withOrganization: boolean;
  ctxPostIds?: string[];
  ctxSpaceIds?: string[];
}

export interface SynthModerationAddDefaultCtxToModeratorCallParsedArgs {
  moderatorId: string;
  organizationIds: string[];
  ctxPostIds?: string[];
  ctxSpaceIds?: string[];
  ctxAppIds?: string[];
}

export interface SynthModerationAddCtxToOrganizationCallParsedArgs {
  organizationId: string;
  ctxPostIds?: string[];
  ctxSpaceIds?: string[];
}

export interface SynthModerationBlockResourceCallParsedArgs {
  resourceId: string;
  reasonId: string;
  ctxPostIds?: string[];
  ctxSpaceIds?: string[];
  ctxAppIds?: string[];
}

export interface SynthModerationUnblockResourceCallParsedArgs {
  resourceId: string;
  ctxPostIds?: string[];
  ctxSpaceIds?: string[];
  ctxAppIds?: string[];
}

/**
 * === Force calls ===
 */
export interface SynthModerationForceInitModeratorCallParsedArgs {
  address: string;
  withOrganization: boolean;
  ctxPostIds?: string[];
  ctxSpaceIds?: string[];
}

export interface SynthModerationForceAddDefaultCtxToModeratorCallParsedArgs {
  address: string;
  moderatorId: string;
  organizationIds: string[];
  ctxPostIds?: string[];
  ctxSpaceIds?: string[];
  ctxAppIds?: string[];
}

export interface SynthModerationForceAddCtxToOrganizationCallParsedArgs {
  address: string;
  organizationId: string;
  ctxPostIds?: string[];
  ctxSpaceIds?: string[];
}

export interface SynthModerationForceBlockResourceCallParsedArgs {
  address: string;
  resourceId: string;
  reasonId: string;
  ctxPostIds?: string[];
  ctxSpaceIds?: string[];
  ctxAppIds?: string[];
}

export interface SynthModerationForceUnblockResourceCallParsedArgs {
  address: string;
  resourceId: string;
  ctxPostIds?: string[];
  ctxSpaceIds?: string[];
  ctxAppIds?: string[];
}
