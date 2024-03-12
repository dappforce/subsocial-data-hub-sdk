import {
  ContentSrcDecorated,
  PostKind,
  ReactionKind,
  SpacePermissionsScope
} from '../common';
import {
  SynthModerationAddCtxToOrganizationCallParsedArgs,
  SynthModerationAddDefaultCtxToModeratorCallParsedArgs,
  SynthModerationBlockResourceCallParsedArgs,
  SynthModerationForceAddCtxToOrganizationCallParsedArgs,
  SynthModerationForceAddDefaultCtxToModeratorCallParsedArgs,
  SynthModerationForceAddOrganizationModeratorCallParsedArgs,
  SynthModerationForceBlockResourceCallParsedArgs,
  SynthModerationForceInitModeratorCallParsedArgs,
  SynthModerationForceInitOrganizationCallParsedArgs,
  SynthModerationForceUnblockResourceCallParsedArgs,
  SynthModerationInitModeratorCallParsedArgs,
  SynthModerationUnblockResourceCallParsedArgs
} from './moderation';
import {
  SynthCreateLinkedIdentityCallParsedArgs,
  SynthDeleteLinkedIdentityCallParsedArgs
} from './identity';
import { socialCallName } from './constants';
import {
  SynthActiveStakingCreateSuperLikeCallParsedArgs,
  SynthActiveStakingDeleteSuperLikeCallParsedArgs
} from './activeStaking';
import { SynthSocialProfileAddReferrerIdCallParsedArgs } from './socialProfile';

export interface CreatePostCallParsedArgs extends ContentSrcDecorated {
  forced: boolean;
  forcedData?: {
    account: string;
    block: number;
    time: string; // should be Date
    owner: string;
    hidden: boolean;
  } | null;
  postKind: PostKind;
  originalPost?: string | null;
  parentPostId?: string | null;
  rootPostId?: string | null;
  spaceId?: string | null | undefined;
}

export interface UpdatePostCallParsedArgs extends ContentSrcDecorated {
  postId: string | null | undefined;
  spaceId: string | null | undefined;
  hidden: boolean | null | undefined;
}

export interface MovePostCallParsedArgs {
  postId: string;
  toSpace: string | null | undefined;
}

export interface CreateSpaceCallParsedArgs extends ContentSrcDecorated {
  permissions: SpacePermissionsScope;
  forced: boolean;
  forcedData: {
    account: string;
    block: number;
    time: string; // should be Date
    owner: string;
    hidden: boolean;
  } | null;
}

export interface UpdateSpaceCallParsedArgs extends ContentSrcDecorated {
  permissions: SpacePermissionsScope;
  hidden: boolean;
}

export interface PostReactionCreateCallParsedArgs {
  postId: string;
  reactionKind: ReactionKind;
  forced: boolean;
  forcedData: {
    account: string;
    block: number;
    time: Date;
  } | null;
}

export interface PostReactionUpdateCallParsedArgs {
  postId: string;
  reactionId: string;
  newReactionKind: ReactionKind;
}

export interface PostReactionDeleteCallParsedArgs {
  postId: string;
  reactionId: string;
  forced: boolean;
  forcedData: {
    account: string;
  } | null;
}

export interface LinkEvmAddressCallParsedArgs {
  evmAddress: string;
  evmSignature: string;
}

export interface UnlinkEvmAddressCallParsedArgs {
  evmAddress: string;
}

export interface UnfollowPostCallParsedArgs {
  postId: string;
}
export interface FollowPostCallParsedArgs {
  postId: string;
}

export interface UnfollowSpaceCallParsedArgs {
  spaceId: string;
}
export interface FollowSpaceCallParsedArgs {
  spaceId: string;
}

export interface UnfollowSpaceCallParsedArgs {
  spaceId: string;
}
export interface FollowSpaceCallParsedArgs {
  spaceId: string;
}

export interface UnfollowAccountCallParsedArgs {
  accountId: string;
}
export interface FollowAccountCallParsedArgs {
  accountId: string;
}
export interface AddProxyCallParsedArgs {
  proxyAccountId: string;
  proxyType: string;
}
export interface RemoveProxyCallParsedArgs {
  proxyAccountId: string;
  proxyType: string;
}

export interface SynthCreatePostTxFailedCallParsedArgs {
  reason?: string;
  optimisticId: string;
  timestamp: string;
}

export interface SynthCreatePostTxRetryCallParsedArgs {
  success: boolean;
  reason?: string;
  optimisticId: string;
  timestamp: string;
}

export interface SynthUpdatePostTxFailedCallParsedArgs {
  reason?: string;
  optimisticId?: string;
  persistentId: string;
  timestamp: string;
}

export interface SynthUpdatePostTxRetryCallParsedArgs {
  success: boolean;
  reason?: string;
  optimisticId?: string;
  persistentId: string;
  timestamp: string;
}

export interface SynthAddPostViewCallParsedArgs {
  viewerId: string;
  duration: number;
  postId?: string;
  postPersistentId?: string;
  timestamp?: string;
}

export type SocialCallNameEnum = typeof socialCallName;

export type SocialCallDataArgs<E extends keyof typeof socialCallName> =
  E extends (typeof socialCallName)['create_post']
    ? CreatePostCallParsedArgs
    : E extends (typeof socialCallName)['update_post']
    ? UpdatePostCallParsedArgs
    : E extends (typeof socialCallName)['move_post']
    ? MovePostCallParsedArgs
    : E extends (typeof socialCallName)['create_space']
    ? CreateSpaceCallParsedArgs
    : E extends (typeof socialCallName)['update_space']
    ? UpdateSpaceCallParsedArgs
    : E extends (typeof socialCallName)['create_post_reaction']
    ? PostReactionCreateCallParsedArgs
    : E extends (typeof socialCallName)['update_post_reaction']
    ? PostReactionUpdateCallParsedArgs
    : E extends (typeof socialCallName)['delete_post_reaction']
    ? PostReactionDeleteCallParsedArgs
    : E extends (typeof socialCallName)['link_evm_address']
    ? LinkEvmAddressCallParsedArgs
    : E extends (typeof socialCallName)['unlink_evm_address']
    ? UnlinkEvmAddressCallParsedArgs
    : E extends (typeof socialCallName)['follow_post']
    ? FollowPostCallParsedArgs
    : E extends (typeof socialCallName)['unfollow_post']
    ? UnfollowPostCallParsedArgs
    : E extends (typeof socialCallName)['follow_space']
    ? FollowSpaceCallParsedArgs
    : E extends (typeof socialCallName)['unfollow_space']
    ? UnfollowSpaceCallParsedArgs
    : E extends (typeof socialCallName)['follow_account']
    ? FollowAccountCallParsedArgs
    : E extends (typeof socialCallName)['unfollow_account']
    ? UnfollowAccountCallParsedArgs
    : E extends (typeof socialCallName)['add_proxy']
    ? AddProxyCallParsedArgs
    : E extends (typeof socialCallName)['remove_proxy']
    ? RemoveProxyCallParsedArgs
    : E extends (typeof socialCallName)['synth_create_post_tx_failed']
    ? SynthCreatePostTxFailedCallParsedArgs
    : E extends (typeof socialCallName)['synth_create_post_tx_retry']
    ? SynthCreatePostTxRetryCallParsedArgs
    : E extends (typeof socialCallName)['synth_update_post_tx_failed']
    ? SynthUpdatePostTxFailedCallParsedArgs
    : E extends (typeof socialCallName)['synth_update_post_tx_retry']
    ? SynthUpdatePostTxRetryCallParsedArgs
    : E extends (typeof socialCallName)['synth_create_linked_identity']
    ? SynthCreateLinkedIdentityCallParsedArgs
    : E extends (typeof socialCallName)['synth_delete_linked_identity']
    ? SynthDeleteLinkedIdentityCallParsedArgs
    : E extends (typeof socialCallName)['synth_moderation_init_moderator']
    ? SynthModerationInitModeratorCallParsedArgs
    : E extends (typeof socialCallName)['synth_moderation_add_ctx_to_organization']
    ? SynthModerationAddCtxToOrganizationCallParsedArgs
    : E extends (typeof socialCallName)['synth_moderation_block_resource']
    ? SynthModerationBlockResourceCallParsedArgs
    : E extends (typeof socialCallName)['synth_moderation_unblock_resource']
    ? SynthModerationUnblockResourceCallParsedArgs
    : E extends (typeof socialCallName)['synth_moderation_force_init_moderator']
    ? SynthModerationForceInitModeratorCallParsedArgs
    : E extends (typeof socialCallName)['synth_moderation_force_add_ctx_to_organization']
    ? SynthModerationForceAddCtxToOrganizationCallParsedArgs
    : E extends (typeof socialCallName)['synth_moderation_add_default_ctx_to_moderator']
    ? SynthModerationAddDefaultCtxToModeratorCallParsedArgs
    : E extends (typeof socialCallName)['synth_moderation_force_add_default_ctx_to_moderator']
    ? SynthModerationForceAddDefaultCtxToModeratorCallParsedArgs
    : E extends (typeof socialCallName)['synth_moderation_force_block_resource']
    ? SynthModerationForceBlockResourceCallParsedArgs
    : E extends (typeof socialCallName)['synth_moderation_force_unblock_resource']
    ? SynthModerationForceUnblockResourceCallParsedArgs
    : E extends (typeof socialCallName)['synth_moderation_force_init_organization']
    ? SynthModerationForceInitOrganizationCallParsedArgs
    : E extends (typeof socialCallName)['synth_moderation_force_add_organization_moderator']
    ? SynthModerationForceAddOrganizationModeratorCallParsedArgs
    : E extends (typeof socialCallName)['synth_active_staking_create_super_like']
    ? SynthActiveStakingCreateSuperLikeCallParsedArgs
    : E extends (typeof socialCallName)['synth_active_staking_delete_super_like']
    ? SynthActiveStakingDeleteSuperLikeCallParsedArgs
    : E extends (typeof socialCallName)['synth_social_profile_add_referrer_id']
    ? SynthSocialProfileAddReferrerIdCallParsedArgs
    : E extends (typeof socialCallName)['synth_add_post_view']
    ? SynthAddPostViewCallParsedArgs
    : undefined;

export type SocialCallData<C extends keyof typeof socialCallName> = {
  name: C;
  signer: string;
  timestamp?: number;
  uuid?: string;
  proxy?: string;
  args?: SocialCallDataArgs<C>;
};

export type SocialCallDataApiInput<C extends keyof typeof socialCallName> = {
  name: C;
  signer: string;
  timestamp?: number;
  uuid?: string;
  proxy?: string;
  args?: string;
};
