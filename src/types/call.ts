import {
  ContentSrcDecorated,
  PostKind,
  ReactionKind,
  SpacePermissionsScope
} from './common';
import { IdentityProvider } from './identity';

export const socialCallName = {
  create_post: 'create_post',
  force_create_post: 'force_create_post',
  update_post: 'update_post',
  move_post: 'move_post',
  follow_post: 'follow_post',
  unfollow_post: 'unfollow_post',

  create_space: 'create_space',
  force_create_space: 'force_create_space',
  create_space_as_profile: 'create_space_as_profile',
  update_space: 'update_space',

  create_post_reaction: 'create_post_reaction',
  force_create_post_reaction: 'force_create_post_reaction',
  update_post_reaction: 'update_post_reaction',
  delete_post_reaction: 'delete_post_reaction',
  force_delete_post_reaction: 'force_delete_post_reaction',

  follow_account: 'follow_account',
  force_follow_account: 'force_follow_account',
  unfollow_account: 'unfollow_account',
  link_eth_address: 'link_eth_address',
  link_evm_address: 'link_evm_address',
  unlink_evm_address: 'unlink_evm_address',
  create_resource_discussion: 'create_resource_discussion',
  link_post_to_resource: 'link_post_to_resource',
  follow_space: 'follow_space',
  force_follow_space: 'force_follow_space',
  unfollow_space: 'unfollow_space',
  accept_pending_ownership: 'accept_pending_ownership',
  reject_pending_ownership: 'reject_pending_ownership',
  register_domain: 'register_domain',
  force_register_domain: 'force_register_domain',
  set_domain_content: 'set_domain_content',
  set_inner_value: 'set_inner_value',
  force_set_inner_value: 'force_set_inner_value',
  set_outer_value: 'set_outer_value',
  set_payment_beneficiary: 'set_payment_beneficiary',
  add_proxy: 'add_proxy',
  remove_proxy: 'remove_proxy',

  synth_create_post_tx_failed: 'synth_create_post_tx_failed',
  synth_create_post_tx_retry: 'synth_create_post_tx_retry',
  synth_update_post_tx_failed: 'synth_update_post_tx_failed',
  synth_update_post_tx_retry: 'synth_update_post_tx_retry',

  synth_create_linked_identity: 'synth_create_linked_identity',
  synth_delete_linked_identity: 'synth_delete_linked_identity',

  synth_moderation_init_moderator: 'synth_moderation_init_moderator',
  synth_moderation_force_init_moderator:
    'synth_moderation_force_init_moderator',

  synth_moderation_add_default_ctx_to_moderator:
    'synth_moderation_add_default_ctx_to_moderator',
  synth_moderation_force_add_default_ctx_to_moderator:
    'synth_moderation_force_add_default_ctx_to_moderator',

  synth_moderation_add_ctx_to_organization:
    'synth_moderation_add_ctx_to_organization',
  synth_moderation_force_add_ctx_to_organization:
    'synth_moderation_force_add_ctx_to_organization',
  synth_moderation_block_resource: 'synth_moderation_block_resource',
  synth_moderation_force_block_resource:
    'synth_moderation_force_block_resource',
  synth_moderation_unblock_resource: 'synth_moderation_unblock_resource',
  synth_moderation_force_unblock_resource:
    'synth_moderation_force_unblock_resource'
} as const;

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

export interface SynthCreateLinkedIdentityCallParsedArgs {
  id: string;
  provider: IdentityProvider;
}

export interface SynthDeleteLinkedIdentityCallParsedArgs {
  id: string;
  provider: IdentityProvider;
}

export interface SynthModerationForceInitModeratorCallParsedArgs {
  address: string;
  withOrganization: boolean;
  ctxPostIds?: string[];
  ctxSpaceIds?: string[];
}

export interface SynthModerationInitModeratorCallParsedArgs {
  withOrganization: boolean;
  ctxPostIds?: string[];
  ctxSpaceIds?: string[];
}

export interface SynthModerationAddDefaultCtxToModeratorCallParsedArgs {
  moderatorId: string;
  organizationIds: '*' | string[];
  ctxPostIds?: string[];
  ctxSpaceIds?: string[];
}

export interface SynthModerationForceAddDefaultCtxToModeratorCallParsedArgs {
  address: string;
  moderatorId: string;
  organizationIds: '*' | string[];
  ctxPostIds?: string[];
  ctxSpaceIds?: string[];
}

export interface SynthModerationAddCtxToOrganizationCallParsedArgs {
  organisationId: string;
  ctxPostIds?: string[];
  ctxSpaceIds?: string[];
}

export interface SynthModerationForceAddCtxToOrganizationCallParsedArgs {
  address: string;
  organisationId: string;
  ctxPostIds?: string[];
  ctxSpaceIds?: string[];
}

export interface SynthModerationBlockResourceCallParsedArgs {
  resourceId: string;
  ctxPostIds?: string[];
  ctxSpaceIds?: string[];
}

export interface SynthModerationForceBlockResourceCallParsedArgs {
  address: string;
  resourceId: string;
  ctxPostIds?: string[];
  ctxSpaceIds?: string[];
}

export interface SynthModerationUnblockResourceCallParsedArgs {
  resourceId: string;
  ctxPostIds?: string[];
  ctxSpaceIds?: string[];
}

export interface SynthModerationForceUnblockResourceCallParsedArgs {
  address: string;
  resourceId: string;
  ctxPostIds?: string[];
  ctxSpaceIds?: string[];
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
