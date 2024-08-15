import { SpacePermissionMap, SummarizedContent } from '@subsocial/api/types/dto';
import { Cast } from '@neynar/nodejs-sdk/build/neynar-api/v2';
import { IpfsSpaceContent, IpfsPostContent } from '@subsocial/api/types/ipfs';
import { ReferencedTweetV2, TweetAttachmentV2 } from 'twitter-api-v2';

type ContentSrcDecorated = {
    ipfsSrc?: string | null;
    otherSrc?: string | null;
    none?: boolean;
};
declare enum PostKind {
    Comment = "Comment",
    SharedPost = "SharedPost",
    RegularPost = "RegularPost"
}
declare enum SocialAction {
    CREATE_REGULAR_POST = "CREATE_REGULAR_POST",
    UPDATE_REGULAR_POST = "UPDATE_REGULAR_POST",
    SHARE_REGULAR_POST = "SHARE_REGULAR_POST",
    CREATE_COMMENT = "CREATE_COMMENT",
    UPDATE_COMMENT = "UPDATE_COMMENT",
    SHARE_COMMENT = "SHARE_COMMENT",
    CREATE_REPLY = "CREATE_REPLY",
    UPDATE_REPLY = "UPDATE_REPLY",
    CREATE_SPACE = "CREATE_SPACE",
    UPDATE_SPACE = "UPDATE_SPACE"
}
interface SpacePermissionsScope {
    none: Required<SpacePermissionMap>;
    everyone: Required<SpacePermissionMap>;
    follower: Required<SpacePermissionMap>;
    spaceOwner: Required<SpacePermissionMap>;
}
declare enum ReactionKind {
    Upvote = "Upvote",
    Downvote = "Downvote"
}
declare const socialEventProtVersion: {
    readonly '0.1': "0.1";
};
type SocialEventProtVersion = keyof typeof socialEventProtVersion;
declare enum DataHubClientId {
    POLKAVERSE = "POLKAVERSE",
    GRILLSO = "GRILLSO",
    GRILLAPP = "GRILLAPP",
    OTHER = "OTHER"
}
declare enum OwnableEntityKind {
    Post = "Post",
    Space = "Space",
    Domain = "Domain"
}
interface OwnableEntity {
    kind: OwnableEntityKind;
    id: string;
}
declare enum PostSource {
    NATIVE = "NATIVE",
    FARCASTER_AUTO_CROSS_POST = "FARCASTER_AUTO_CROSS_POST"
}

interface OwnershipTransferCreatedEventParsedParams {
    currentOwnerId: string;
    entity: OwnableEntity;
    newOwnerId: string;
}
interface OwnershipTransferAcceptedEventParsedParams {
    accountId: string;
    entity: OwnableEntity;
}
interface OwnershipTransferRejectedEventParsedParams {
    accountId: string;
    entity: OwnableEntity;
}

declare const socialEventName: {
    readonly PostCreated: "PostCreated";
    readonly PostDeleted: "PostDeleted";
    readonly PostUpdated: "PostUpdated";
    readonly PostShared: "PostShared";
    readonly PostMoved: "PostMoved";
    readonly PostFollowed: "PostFollowed";
    readonly PostUnfollowed: "PostUnfollowed";
    readonly PostReactionCreated: "PostReactionCreated";
    readonly PostReactionUpdated: "PostReactionUpdated";
    readonly PostReactionDeleted: "PostReactionDeleted";
    readonly SpaceCreated: "SpaceCreated";
    readonly SpaceUpdated: "SpaceUpdated";
    readonly SpaceFollowed: "SpaceFollowed";
    readonly SpaceUnfollowed: "SpaceUnfollowed";
    readonly SpaceOwnershipTransferAccepted: "SpaceOwnershipTransferAccepted";
    readonly SpaceOwnershipTransferCreated: "SpaceOwnershipTransferCreated";
    readonly OwnershipTransferCreated: "OwnershipTransferCreated";
    readonly OwnershipTransferAccepted: "OwnershipTransferAccepted";
    readonly OwnershipTransferRejected: "OwnershipTransferRejected";
    readonly AccountFollowed: "AccountFollowed";
    readonly AccountUnfollowed: "AccountUnfollowed";
    readonly ProfileUpdated: "ProfileUpdated";
    readonly ExtensionDonationCreated: "ExtensionDonationCreated";
    readonly ExtensionEvmNftShared: "ExtensionEvmNftShared";
    readonly ExtensionImageCreated: "ExtensionImageCreated";
    readonly ExtensionSecretBoxCreated: "ExtensionSecretBoxCreated";
    readonly CommentCreated: "CommentCreated";
    readonly CommentDeleted: "CommentDeleted";
    readonly CommentUpdated: "CommentUpdated";
    readonly CommentShared: "CommentShared";
    readonly CommentReactionCreated: "CommentReactionCreated";
    readonly CommentReactionUpdated: "CommentReactionUpdated";
    readonly CommentReactionDeleted: "CommentReactionDeleted";
    readonly CommentReplyCreated: "CommentReplyCreated";
    readonly CommentReplyDeleted: "CommentReplyDeleted";
    readonly CommentReplyUpdated: "CommentReplyUpdated";
    readonly CommentReplyShared: "CommentReplyShared";
    readonly CommentReplyReactionCreated: "CommentReplyReactionCreated";
    readonly CommentReplyReactionUpdated: "CommentReplyReactionUpdated";
    readonly CommentReplyReactionDeleted: "CommentReplyReactionDeleted";
    readonly UserNameRegistered: "UserNameRegistered";
    readonly UserNameUpdated: "UserNameUpdated";
    readonly DomainRegistered: "DomainRegistered";
    readonly DomainMetaUpdated: "DomainMetaUpdated";
    readonly EvmAddressUnlinkedFromAccount: "EvmAddressUnlinkedFromAccount";
    readonly EvmAddressLinkedToAccount: "EvmAddressLinkedToAccount";
    readonly ProxyAdded: "ProxyAdded";
    readonly ProxyRemoved: "ProxyRemoved";
};
type SocialEventNameEnum = typeof socialEventName;
interface PostCreatedEventParsedParams {
    accountId: string;
    postId: string;
}
interface PostUpdatedEventParsedParams {
    accountId: string;
    postId: string;
}
interface PostMovedEventParsedParams {
    accountId: string;
    postId: string;
    fromSpace: string | null | undefined;
    toSpace: string | null | undefined;
}
interface PostFollowedEventParsedParams {
    followerId: string;
    postId: string;
}
interface PostUnfollowedEventParsedParams {
    followerId: string;
    postId: string;
}
interface SpaceCreatedEventParsedParams {
    accountId: string;
    spaceId: string;
}
interface SpaceUpdatedEventParsedParams {
    accountId: string;
    spaceId: string;
}
interface PostReactionCreatedEventParsedParams {
    accountId: string;
    postId: string;
    reactionId: string;
    reactionKind: ReactionKind;
}
interface PostReactionUpdatedEventParsedParams {
    accountId: string;
    postId: string;
    reactionId: string;
    newReactionKind: ReactionKind;
}
interface PostReactionDeletedEventParsedParams {
    accountId: string;
    postId: string;
    reactionId: string;
    reactionKind: ReactionKind;
}
interface ProfileUpdatedEventParsedParams {
    accountId: string;
    spaceId: string | null | undefined;
}
interface SpaceFollowedEventParsedParams {
    followerId: string;
    spaceId: string;
}
interface SpaceUnfollowedEventParsedParams {
    followerId: string;
    spaceId: string;
}
interface SpaceOwnershipTransferCreatedEventParsedParams {
    currentOwnerId: string;
    newOwnerId: string;
    spaceId: string;
}
interface SpaceOwnershipTransferAcceptedEventParsedParams {
    accountId: string;
    spaceId: string;
}
interface AccountFollowedEventParsedParams {
    followerId: string;
    accountId: string;
}
interface AccountUnfollowedEventParsedParams {
    followerId: string;
    accountId: string;
}
interface DomainRegisteredEventParsedParams {
    accountId: string;
    domain: string;
    recipientId?: string;
}
interface DomainMetaUpdatedEventParsedParams {
    accountId: string;
    domain: string;
}
interface EvmAddressLinkedToAccountEventParsedParams {
    substrateAccountId: string;
    ethereumAccountId: string;
}
interface EvmAddressUnlinkedFromAccountEventParsedParams {
    substrateAccountId: string;
    ethereumAccountId: string;
}
interface ProxyAddedEventParsedParams {
    delegatorAccountId: string;
    proxyAccountId: string;
    proxyType: string;
}
interface ProxyRemovedEventParsedParams {
    delegatorAccountId: string;
    proxyAccountId: string;
    proxyType: string;
}
interface CreatorStakingStakedEventParsedParams {
    who: string;
    creatorId: string;
    era: number;
    amount: string;
}
type SocialOnChainEventDataParams<E extends keyof typeof socialEventName> = E extends (typeof socialEventName)['PostCreated'] ? PostCreatedEventParsedParams : E extends (typeof socialEventName)['PostUpdated'] ? PostUpdatedEventParsedParams : E extends (typeof socialEventName)['PostMoved'] ? PostMovedEventParsedParams : E extends (typeof socialEventName)['PostFollowed'] ? PostFollowedEventParsedParams : E extends (typeof socialEventName)['PostUnfollowed'] ? PostUnfollowedEventParsedParams : E extends (typeof socialEventName)['SpaceUpdated'] ? SpaceUpdatedEventParsedParams : E extends (typeof socialEventName)['SpaceCreated'] ? SpaceCreatedEventParsedParams : E extends (typeof socialEventName)['PostReactionCreated'] ? PostReactionCreatedEventParsedParams : E extends (typeof socialEventName)['PostReactionUpdated'] ? PostReactionUpdatedEventParsedParams : E extends (typeof socialEventName)['PostReactionDeleted'] ? PostReactionDeletedEventParsedParams : E extends (typeof socialEventName)['ProfileUpdated'] ? ProfileUpdatedEventParsedParams : E extends (typeof socialEventName)['SpaceFollowed'] ? SpaceFollowedEventParsedParams : E extends (typeof socialEventName)['SpaceUnfollowed'] ? SpaceUnfollowedEventParsedParams : E extends (typeof socialEventName)['SpaceOwnershipTransferCreated'] ? SpaceOwnershipTransferCreatedEventParsedParams : E extends (typeof socialEventName)['SpaceOwnershipTransferAccepted'] ? SpaceOwnershipTransferAcceptedEventParsedParams : E extends (typeof socialEventName)['OwnershipTransferCreated'] ? OwnershipTransferCreatedEventParsedParams : E extends (typeof socialEventName)['OwnershipTransferAccepted'] ? OwnershipTransferAcceptedEventParsedParams : E extends (typeof socialEventName)['OwnershipTransferRejected'] ? OwnershipTransferRejectedEventParsedParams : E extends (typeof socialEventName)['AccountFollowed'] ? AccountFollowedEventParsedParams : E extends (typeof socialEventName)['AccountUnfollowed'] ? AccountUnfollowedEventParsedParams : E extends (typeof socialEventName)['UserNameRegistered'] ? DomainRegisteredEventParsedParams : E extends (typeof socialEventName)['DomainRegistered'] ? DomainRegisteredEventParsedParams : E extends (typeof socialEventName)['UserNameUpdated'] ? DomainMetaUpdatedEventParsedParams : E extends (typeof socialEventName)['DomainMetaUpdated'] ? DomainMetaUpdatedEventParsedParams : E extends (typeof socialEventName)['EvmAddressLinkedToAccount'] ? EvmAddressLinkedToAccountEventParsedParams : E extends (typeof socialEventName)['EvmAddressUnlinkedFromAccount'] ? EvmAddressUnlinkedFromAccountEventParsedParams : E extends (typeof socialEventName)['ProxyAdded'] ? ProxyAddedEventParsedParams : E extends (typeof socialEventName)['ProxyRemoved'] ? ProxyRemovedEventParsedParams : never;
type SocialOnChainEventMetadata = {
    id: string;
    indexInBlock: number;
    blockNumber: number;
    blockHash: string;
    timestamp: string;
};
type SocialOnChainEventData<E extends keyof typeof socialEventName> = {
    name: E;
    metadata: SocialOnChainEventMetadata;
    params: SocialOnChainEventDataParams<E>;
};
type SocialOnChainEventDataApiInput<E extends keyof typeof socialEventName> = {
    name: E;
    metadata: string;
    params: string;
};

declare enum ModerationResourceType {
    POST = "POST",
    CID = "CID",
    ADDRESS = "ADDRESS"
}
declare enum ModeratorRole {
    OWNER = "OWNER",
    ADMIN = "ADMIN",
    MODERATOR = "MODERATOR",
    SPECTATOR = "SPECTATOR"
}

/**
 * === Common calls ===
 */

interface SynthModerationInitModeratorCallParsedArgs {
    withOrganization: boolean;
    ctxPostIds?: string[];
    ctxSpaceIds?: string[];
}
interface SynthModerationAddDefaultCtxToModeratorCallParsedArgs {
    moderatorId: string;
    organizationIds: string[];
    ctxPostIds?: string[];
    ctxSpaceIds?: string[];
    ctxAppIds?: string[];
}
interface SynthModerationAddCtxToOrganizationCallParsedArgs {
    organizationId: string;
    ctxPostIds?: string[];
    ctxSpaceIds?: string[];
}
interface SynthModerationBlockResourceCallParsedArgs {
    resourceId: string;
    reasonId: string;
    ctxPostIds?: string[];
    ctxSpaceIds?: string[];
    ctxAppIds?: string[];
}
interface SynthModerationUnblockResourceCallParsedArgs {
    resourceId: string;
    ctxPostIds?: string[];
    ctxSpaceIds?: string[];
    ctxAppIds?: string[];
}
/**
 * === Force calls ===
 */
interface SynthModerationForceInitModeratorCallParsedArgs {
    address: string;
    withOrganization: boolean;
    ctxPostIds?: string[];
    ctxSpaceIds?: string[];
}
interface SynthModerationForceAddDefaultCtxToModeratorCallParsedArgs {
    address: string;
    moderatorId?: string;
    organizationIds: string[];
    ctxPostIds?: string[];
    ctxSpaceIds?: string[];
    ctxAppIds?: string[];
}
interface SynthModerationForceInitOrganizationCallParsedArgs {
    ownerAccountAddress: string;
    ctxPostIds?: string[];
    ctxSpaceIds?: string[];
    ctxAppIds?: string[];
    name?: string;
    description?: string;
}
interface SynthModerationForceAddOrganizationModeratorCallParsedArgs {
    organizationId?: string;
    moderatorId?: string;
    organizationOwnerSubstrateAddress?: string;
    moderatorSubstrateAddress?: string;
    role: ModeratorRole;
    defaultCtxPostIds?: string[];
    defaultCtxSpaceIds?: string[];
    defaultCtxAppIds?: string[];
}
interface SynthModerationForceAddCtxToOrganizationCallParsedArgs {
    organizationId?: string;
    organizationOwnerSubstrateAddress?: string;
    ctxPostIds?: string[];
    ctxSpaceIds?: string[];
    ctxAppIds?: string[];
}
interface SynthModerationForceBlockResourceCallParsedArgs {
    address: string;
    resourceId: string;
    reasonId: string;
    ctxPostIds?: string[];
    ctxSpaceIds?: string[];
    ctxAppIds?: string[];
}
interface SynthModerationForceUnblockResourceCallParsedArgs {
    address: string;
    resourceId: string;
    ctxPostIds?: string[];
    ctxSpaceIds?: string[];
    ctxAppIds?: string[];
}

declare enum IdentityProvider {
    TWITTER = "TWITTER",
    EMAIL = "EMAIL",
    FACEBOOK = "FACEBOOK",
    GOOGLE = "GOOGLE",
    POLKADOT = "POLKADOT",
    EVM = "EVM",
    SOLANA = "SOLANA",
    FARCASTER = "FARCASTER",
    TELEGRAM = "TELEGRAM"
}

interface SynthCreateLinkedIdentityCallParsedArgs {
    id: string;
    provider: IdentityProvider;
}
interface LinkedIdentityExternalProviderDetails {
    id: string;
    provider: IdentityProvider;
    username?: string;
    farcasterCustodyAddress?: string;
    farcasterVerifiedEthAddresses?: string[];
    farcasterVerifiedSolAddresses?: string[];
    farcasterSignerUuid?: string;
    evmProofMsg?: string;
    evmProofMsgSig?: string;
    solProofMsg?: string;
    solProofMsgSig?: string;
}
interface SynthInitLinkedIdentityCallParsedArgs {
    externalProvider?: LinkedIdentityExternalProviderDetails;
}
interface SynthAddLinkedIdentityExternalProviderCallParsedArgs {
    externalProvider: LinkedIdentityExternalProviderDetails;
}
interface SynthUpdateLinkedIdentityExternalProviderCallParsedArgs {
    entityId: string;
    externalProvider: LinkedIdentityExternalProviderDetails;
}
interface SynthDeleteLinkedIdentityCallParsedArgs {
    id: string;
    provider: IdentityProvider;
}

declare const socialCallName: {
    readonly create_post: "create_post";
    readonly force_create_post: "force_create_post";
    readonly update_post: "update_post";
    readonly move_post: "move_post";
    readonly follow_post: "follow_post";
    readonly unfollow_post: "unfollow_post";
    readonly create_space: "create_space";
    readonly update_space: "update_space";
    readonly force_create_space: "force_create_space";
    readonly create_space_as_profile: "create_space_as_profile";
    readonly set_profile: "set_profile";
    readonly reset_profile: "reset_profile";
    readonly force_set_space_as_profile: "force_set_space_as_profile";
    readonly create_post_reaction: "create_post_reaction";
    readonly force_create_post_reaction: "force_create_post_reaction";
    readonly update_post_reaction: "update_post_reaction";
    readonly delete_post_reaction: "delete_post_reaction";
    readonly force_delete_post_reaction: "force_delete_post_reaction";
    readonly follow_account: "follow_account";
    readonly force_follow_account: "force_follow_account";
    readonly unfollow_account: "unfollow_account";
    readonly link_eth_address: "link_eth_address";
    readonly link_evm_address: "link_evm_address";
    readonly unlink_evm_address: "unlink_evm_address";
    readonly create_resource_discussion: "create_resource_discussion";
    readonly link_post_to_resource: "link_post_to_resource";
    readonly follow_space: "follow_space";
    readonly force_follow_space: "force_follow_space";
    readonly unfollow_space: "unfollow_space";
    readonly transfer_space_ownership: "transfer_space_ownership";
    readonly accept_pending_ownership: "accept_pending_ownership";
    readonly reject_pending_ownership: "reject_pending_ownership";
    readonly ownership_transfer_ownership: "ownership_transfer_ownership";
    readonly ownership_accept_pending_ownership: "ownership_accept_pending_ownership";
    readonly ownership_reject_pending_ownership: "ownership_reject_pending_ownership";
    readonly register_domain: "register_domain";
    readonly force_register_domain: "force_register_domain";
    readonly set_domain_content: "set_domain_content";
    readonly set_inner_value: "set_inner_value";
    readonly force_set_inner_value: "force_set_inner_value";
    readonly set_outer_value: "set_outer_value";
    readonly set_payment_beneficiary: "set_payment_beneficiary";
    readonly add_proxy: "add_proxy";
    readonly remove_proxy: "remove_proxy";
    readonly synth_create_post_tx_failed: "synth_create_post_tx_failed";
    readonly synth_create_post_tx_retry: "synth_create_post_tx_retry";
    readonly synth_update_post_tx_failed: "synth_update_post_tx_failed";
    readonly synth_update_post_tx_retry: "synth_update_post_tx_retry";
    readonly synth_create_linked_identity: "synth_create_linked_identity";
    readonly synth_delete_linked_identity: "synth_delete_linked_identity";
    readonly synth_init_linked_identity: "synth_init_linked_identity";
    readonly synth_add_linked_identity_external_provider: "synth_add_linked_identity_external_provider";
    readonly synth_update_linked_identity_external_provider: "synth_update_linked_identity_external_provider";
    readonly synth_moderation_init_moderator: "synth_moderation_init_moderator";
    readonly synth_moderation_force_init_moderator: "synth_moderation_force_init_moderator";
    readonly synth_moderation_add_default_ctx_to_moderator: "synth_moderation_add_default_ctx_to_moderator";
    readonly synth_moderation_force_add_default_ctx_to_moderator: "synth_moderation_force_add_default_ctx_to_moderator";
    readonly synth_moderation_add_ctx_to_organization: "synth_moderation_add_ctx_to_organization";
    readonly synth_moderation_force_add_ctx_to_organization: "synth_moderation_force_add_ctx_to_organization";
    readonly synth_moderation_block_resource: "synth_moderation_block_resource";
    readonly synth_moderation_force_block_resource: "synth_moderation_force_block_resource";
    readonly synth_moderation_unblock_resource: "synth_moderation_unblock_resource";
    readonly synth_moderation_force_unblock_resource: "synth_moderation_force_unblock_resource";
    readonly synth_moderation_force_init_organization: "synth_moderation_force_init_organization";
    readonly synth_moderation_force_add_organization_moderator: "synth_moderation_force_add_organization_moderator";
    readonly synth_active_staking_create_super_like: "synth_active_staking_create_super_like";
    readonly synth_active_staking_delete_super_like: "synth_active_staking_delete_super_like";
    readonly synth_active_staking_create_farcaster_frame_like: "synth_active_staking_create_farcaster_frame_like";
    readonly synth_gamification_add_tapping_activity_states: "synth_gamification_add_tapping_activity_states";
    readonly synth_gamification_claim_entrance_daily_reward: "synth_gamification_claim_entrance_daily_reward";
    readonly synth_gamification_claim_task: "synth_gamification_claim_task";
    readonly synth_social_profile_add_referrer_id: "synth_social_profile_add_referrer_id";
    readonly synth_social_profile_set_action_permissions: "synth_social_profile_set_action_permissions";
    readonly synth_set_post_approve_status: "synth_set_post_approve_status";
    readonly synth_add_post_view: "synth_add_post_view";
    readonly synth_add_post_views_batch: "synth_add_post_views_batch";
    readonly synth_farcaster_create_post_from_cast: "synth_farcaster_create_post_from_cast";
    readonly synth_farcaster_create_super_like_from_reaction: "synth_farcaster_create_super_like_from_reaction";
    readonly synth_create_content_container_config: "synth_create_content_container_config";
    readonly synth_update_content_container_config: "synth_update_content_container_config";
};

interface SynthActiveStakingConfirmationDataCallParsedArgs {
    msg: string;
    sig: string;
}
interface SynthActiveStakingCreateSuperLikeCallParsedArgs {
    postId: string;
    multiplier?: number;
    blockHash?: string;
    confirmation?: SynthActiveStakingConfirmationDataCallParsedArgs;
}
interface SynthActiveStakingDeleteSuperLikeCallParsedArgs {
    postId: string;
    multiplier?: number;
    blockHash?: string;
    confirmation?: SynthActiveStakingConfirmationDataCallParsedArgs;
}
interface ContentlessActionTapEnergyState {
    value: number;
    timestamp: string;
}
interface SynthActiveStakingCreateContentlessActionCallParsedArgs {
    tapsCount?: number;
    energyState?: ContentlessActionTapEnergyState;
}
interface SynthActiveStakingCreateFarcasterFrameLikeCallParsedArgs {
    frameId: number;
    frameStepIndex: number;
    actorFid?: number;
}

interface SynthSocialProfileAddReferrerIdCallParsedArgs {
    refId: string;
    clientId: DataHubClientId;
    timestamp?: string;
}
type SocialProfileActionPermissions = {
    createCommentRootPostIds?: string[];
};
interface SynthSocialProfileSetActionPermissionsCallParsedArgs {
    address: string;
    allow?: SocialProfileActionPermissions;
    forbid?: SocialProfileActionPermissions;
}

interface OwnershipTransferOwnershipCallParsedArgs {
    transferToAccountId: string;
    entity: OwnableEntity;
}
interface OwnershipAcceptPendingOwnershipCallParsedArgs {
    entity: OwnableEntity;
}
interface OwnershipRejectPendingOwnershipCallParsedArgs {
    entity: OwnableEntity;
}

declare enum GamificationTaskName {
    JOIN_TELEGRAM_CHANNEL = "JOIN_TELEGRAM_CHANNEL",
    JOIN_TWITTER = "JOIN_TWITTER",
    INVITE_REFERRALS = "INVITE_REFERRALS"
}
declare enum GamificationTaskPeriodicity {
    ONETIME = "ONETIME",
    DAILY = "DAILY",
    WEEKLY = "WEEKLY"
}
declare enum GamificationTaskValidityTimeRange {
    DAY = "DAY",
    WEEK = "WEEK",
    INFINITE = "INFINITE"
}
interface GamificationTapEnergyState {
    value: number;
    timestamp: string;
}
interface GamificationTapsState {
    tapsCount?: number;
}
interface SynthGamificationAddTappingActivityStatesCallParsedArgs {
    tapsState?: GamificationTapsState;
    energyState?: GamificationTapEnergyState;
}
interface SynthGamificationClaimTaskCallParsedArgs {
    taskTag: string;
}

interface CreatePostCallParsedArgs extends ContentSrcDecorated {
    forced: boolean;
    forcedData?: {
        account: string;
        block: number;
        time: string;
        owner: string;
        hidden: boolean;
    } | null;
    postKind: PostKind;
    originalPost?: string | null;
    parentPostId?: string | null;
    rootPostId?: string | null;
    spaceId?: string | null | undefined;
}
interface UpdatePostCallParsedArgs extends ContentSrcDecorated {
    postId: string | null | undefined;
    spaceId: string | null | undefined;
    hidden: boolean | null | undefined;
}
interface MovePostCallParsedArgs {
    postId: string;
    toSpace: string | null | undefined;
}
interface PostReactionCreateCallParsedArgs {
    postId: string;
    reactionKind: ReactionKind;
    forced: boolean;
    forcedData: {
        account: string;
        block: number;
        time: Date;
    } | null;
}
interface PostReactionUpdateCallParsedArgs {
    postId: string;
    reactionId: string;
    newReactionKind: ReactionKind;
}
interface PostReactionDeleteCallParsedArgs {
    postId: string;
    reactionId: string;
    forced: boolean;
    forcedData: {
        account: string;
    } | null;
}
interface UnfollowPostCallParsedArgs {
    postId: string;
}
interface FollowPostCallParsedArgs {
    postId: string;
}
interface SynthCreatePostTxFailedCallParsedArgs {
    reason?: string;
    optimisticId: string;
    timestamp: string;
}
interface SynthCreatePostTxRetryCallParsedArgs {
    success: boolean;
    reason?: string;
    optimisticId: string;
    timestamp: string;
}
interface SynthUpdatePostTxFailedCallParsedArgs {
    reason?: string;
    optimisticId?: string;
    persistentId: string;
    timestamp: string;
}
interface SynthUpdatePostTxRetryCallParsedArgs {
    success: boolean;
    reason?: string;
    optimisticId?: string;
    persistentId: string;
    timestamp: string;
}
interface SynthAddPostViewCallParsedArgs {
    viewerId: string;
    duration: number;
    postId?: string;
    postPersistentId?: string;
    timestamp?: string;
}
interface SynthAddPostViewsBatchCallParsedArgs {
    views: SynthAddPostViewCallParsedArgs[];
}
interface SynthSetPostApprovedStatusCallParsedArgs {
    postId: string;
    approvedInRootPost: boolean;
}

declare enum ContentContainerType {
    PUBLIC_CHANNEL = "PUBLIC_CHANNEL",
    COMMUNITY_CHANNEL = "COMMUNITY_CHANNEL",
    CONTEST = "CONTEST"
}
interface ContentContainerConfigMetadata {
    title?: string;
    description?: string;
    image?: string;
    coverImage?: string;
    rewardPoolTokenName?: string;
    rewardPoolTokensAmount?: string;
    winnersNumber?: number;
}
interface ContentContainerConfigOptionalProps {
    hidden?: boolean;
    isExpirable?: boolean;
    expirationWindowFrom?: string;
    expirationWindowTo?: string;
    openAt?: string;
    closedAt?: string;
    isPostModerationPenalty?: boolean;
    isCreatorModerationPenalty?: boolean;
    isDeductionRewardsOnModeration?: boolean;
    postBlockOneTimePenaltyPointsAmount?: string;
    addressBlockOneTimePenaltyPointsAmount?: string;
    accessThresholdPointsAmount?: string;
    accessThresholdExternalTokenName?: string;
    accessThresholdExternalTokenAddress?: string;
    accessThresholdExternalTokenAmount?: string;
    metadata?: ContentContainerConfigMetadata;
}
interface SynthCreateContentContainerConfigCallParsedArgs extends ContentContainerConfigOptionalProps {
    rootPostId: string;
    slug: string;
    containerType: ContentContainerType;
}
interface SynthUpdateContentContainerConfigCallParsedArgs extends ContentContainerConfigOptionalProps {
    id: string;
    slug?: string;
    containerType?: ContentContainerType;
}

interface CreateSpaceCallParsedArgs extends ContentSrcDecorated {
    permissions?: SpacePermissionsScope;
    forced: boolean;
    forcedData: {
        account: string;
        block: number;
        time: string;
        owner: string;
        hidden: boolean;
    } | null;
}
interface CreateSpaceAsProfileCallParsedArgs extends ContentSrcDecorated {
}
interface UpdateSpaceCallParsedArgs extends ContentSrcDecorated {
    spaceId?: string;
    permissions?: SpacePermissionsScope;
    hidden?: boolean;
}
interface SetProfileCallParsedArgs {
    spaceId: string;
}
interface LinkEvmAddressCallParsedArgs {
    evmAddress: string;
    evmSignature: string;
}
interface UnlinkEvmAddressCallParsedArgs {
    evmAddress: string;
}
interface UnfollowSpaceCallParsedArgs {
    spaceId: string;
}
interface UnfollowSpaceCallParsedArgs {
    spaceId: string;
}
interface FollowSpaceCallParsedArgs {
    spaceId: string;
}
interface FollowSpaceCallParsedArgs {
    spaceId: string;
}
interface UnfollowAccountCallParsedArgs {
    accountId: string;
}
interface FollowAccountCallParsedArgs {
    accountId: string;
}
interface AddProxyCallParsedArgs {
    proxyAccountId: string;
    proxyType: string;
}
interface RemoveProxyCallParsedArgs {
    proxyAccountId: string;
    proxyType: string;
}
interface SynthFarcasterCreatePostFromCastCallParsedArgs {
    cast: Cast;
}
interface SynthFarcasterCreateSuperLikeFromReactionCallParsedArgs {
    castHash: string;
    reactorFid: number;
    timestamp: number;
    hash?: string;
    id?: string;
}
type SocialCallNameEnum = typeof socialCallName;
type SocialCallDataArgs<E extends keyof typeof socialCallName> = E extends (typeof socialCallName)['create_post'] ? CreatePostCallParsedArgs : E extends (typeof socialCallName)['update_post'] ? UpdatePostCallParsedArgs : E extends (typeof socialCallName)['move_post'] ? MovePostCallParsedArgs : E extends (typeof socialCallName)['create_space'] ? CreateSpaceCallParsedArgs : E extends (typeof socialCallName)['update_space'] ? UpdateSpaceCallParsedArgs : E extends (typeof socialCallName)['create_space_as_profile'] ? CreateSpaceAsProfileCallParsedArgs : E extends (typeof socialCallName)['set_profile'] ? SetProfileCallParsedArgs : E extends (typeof socialCallName)['create_post_reaction'] ? PostReactionCreateCallParsedArgs : E extends (typeof socialCallName)['update_post_reaction'] ? PostReactionUpdateCallParsedArgs : E extends (typeof socialCallName)['delete_post_reaction'] ? PostReactionDeleteCallParsedArgs : E extends (typeof socialCallName)['link_evm_address'] ? LinkEvmAddressCallParsedArgs : E extends (typeof socialCallName)['unlink_evm_address'] ? UnlinkEvmAddressCallParsedArgs : E extends (typeof socialCallName)['follow_post'] ? FollowPostCallParsedArgs : E extends (typeof socialCallName)['unfollow_post'] ? UnfollowPostCallParsedArgs : E extends (typeof socialCallName)['follow_space'] ? FollowSpaceCallParsedArgs : E extends (typeof socialCallName)['unfollow_space'] ? UnfollowSpaceCallParsedArgs : E extends (typeof socialCallName)['follow_account'] ? FollowAccountCallParsedArgs : E extends (typeof socialCallName)['unfollow_account'] ? UnfollowAccountCallParsedArgs : E extends (typeof socialCallName)['add_proxy'] ? AddProxyCallParsedArgs : E extends (typeof socialCallName)['remove_proxy'] ? RemoveProxyCallParsedArgs : E extends (typeof socialCallName)['ownership_transfer_ownership'] ? OwnershipTransferOwnershipCallParsedArgs : E extends (typeof socialCallName)['ownership_accept_pending_ownership'] ? OwnershipAcceptPendingOwnershipCallParsedArgs : E extends (typeof socialCallName)['ownership_reject_pending_ownership'] ? OwnershipRejectPendingOwnershipCallParsedArgs : E extends (typeof socialCallName)['synth_create_post_tx_failed'] ? SynthCreatePostTxFailedCallParsedArgs : E extends (typeof socialCallName)['synth_create_post_tx_retry'] ? SynthCreatePostTxRetryCallParsedArgs : E extends (typeof socialCallName)['synth_update_post_tx_failed'] ? SynthUpdatePostTxFailedCallParsedArgs : E extends (typeof socialCallName)['synth_update_post_tx_retry'] ? SynthUpdatePostTxRetryCallParsedArgs : E extends (typeof socialCallName)['synth_create_linked_identity'] ? SynthCreateLinkedIdentityCallParsedArgs : E extends (typeof socialCallName)['synth_delete_linked_identity'] ? SynthDeleteLinkedIdentityCallParsedArgs : E extends (typeof socialCallName)['synth_init_linked_identity'] ? SynthInitLinkedIdentityCallParsedArgs : E extends (typeof socialCallName)['synth_add_linked_identity_external_provider'] ? SynthAddLinkedIdentityExternalProviderCallParsedArgs : E extends (typeof socialCallName)['synth_update_linked_identity_external_provider'] ? SynthUpdateLinkedIdentityExternalProviderCallParsedArgs : E extends (typeof socialCallName)['synth_moderation_init_moderator'] ? SynthModerationInitModeratorCallParsedArgs : E extends (typeof socialCallName)['synth_moderation_add_ctx_to_organization'] ? SynthModerationAddCtxToOrganizationCallParsedArgs : E extends (typeof socialCallName)['synth_moderation_block_resource'] ? SynthModerationBlockResourceCallParsedArgs : E extends (typeof socialCallName)['synth_moderation_unblock_resource'] ? SynthModerationUnblockResourceCallParsedArgs : E extends (typeof socialCallName)['synth_moderation_force_init_moderator'] ? SynthModerationForceInitModeratorCallParsedArgs : E extends (typeof socialCallName)['synth_moderation_force_add_ctx_to_organization'] ? SynthModerationForceAddCtxToOrganizationCallParsedArgs : E extends (typeof socialCallName)['synth_moderation_add_default_ctx_to_moderator'] ? SynthModerationAddDefaultCtxToModeratorCallParsedArgs : E extends (typeof socialCallName)['synth_moderation_force_add_default_ctx_to_moderator'] ? SynthModerationForceAddDefaultCtxToModeratorCallParsedArgs : E extends (typeof socialCallName)['synth_moderation_force_block_resource'] ? SynthModerationForceBlockResourceCallParsedArgs : E extends (typeof socialCallName)['synth_moderation_force_unblock_resource'] ? SynthModerationForceUnblockResourceCallParsedArgs : E extends (typeof socialCallName)['synth_moderation_force_init_organization'] ? SynthModerationForceInitOrganizationCallParsedArgs : E extends (typeof socialCallName)['synth_moderation_force_add_organization_moderator'] ? SynthModerationForceAddOrganizationModeratorCallParsedArgs : E extends (typeof socialCallName)['synth_active_staking_create_super_like'] ? SynthActiveStakingCreateSuperLikeCallParsedArgs : E extends (typeof socialCallName)['synth_active_staking_delete_super_like'] ? SynthActiveStakingDeleteSuperLikeCallParsedArgs : E extends (typeof socialCallName)['synth_active_staking_create_farcaster_frame_like'] ? SynthActiveStakingCreateFarcasterFrameLikeCallParsedArgs : E extends (typeof socialCallName)['synth_gamification_add_tapping_activity_states'] ? SynthGamificationAddTappingActivityStatesCallParsedArgs : E extends (typeof socialCallName)['synth_gamification_claim_entrance_daily_reward'] ? {} : E extends (typeof socialCallName)['synth_gamification_claim_task'] ? SynthGamificationClaimTaskCallParsedArgs : E extends (typeof socialCallName)['synth_social_profile_add_referrer_id'] ? SynthSocialProfileAddReferrerIdCallParsedArgs : E extends (typeof socialCallName)['synth_social_profile_set_action_permissions'] ? SynthSocialProfileSetActionPermissionsCallParsedArgs : E extends (typeof socialCallName)['synth_set_post_approve_status'] ? SynthSetPostApprovedStatusCallParsedArgs : E extends (typeof socialCallName)['synth_add_post_view'] ? SynthAddPostViewCallParsedArgs : E extends (typeof socialCallName)['synth_add_post_views_batch'] ? SynthAddPostViewsBatchCallParsedArgs : E extends (typeof socialCallName)['synth_farcaster_create_post_from_cast'] ? SynthFarcasterCreatePostFromCastCallParsedArgs : E extends (typeof socialCallName)['synth_farcaster_create_super_like_from_reaction'] ? SynthFarcasterCreateSuperLikeFromReactionCallParsedArgs : E extends (typeof socialCallName)['synth_create_content_container_config'] ? SynthCreateContentContainerConfigCallParsedArgs : E extends (typeof socialCallName)['synth_update_content_container_config'] ? SynthUpdateContentContainerConfigCallParsedArgs : undefined;
type SocialCallData<C extends keyof typeof socialCallName> = {
    name: C;
    signer: string;
    timestamp?: number;
    uuid?: string;
    proxy?: string;
    args?: SocialCallDataArgs<C>;
};
type SocialCallDataApiInput<C extends keyof typeof socialCallName> = {
    name: C;
    signer: string;
    timestamp?: number;
    uuid?: string;
    proxy?: string;
    args?: string;
};

declare const ContentExtensionId: {
    readonly "subsocial-donations": "subsocial-donations";
    readonly "subsocial-evm-nft": "subsocial-evm-nft";
    readonly "subsocial-image": "subsocial-image";
    readonly "subsocial-secret-box": "subsocial-secret-box";
    readonly "subsocial-decoded-promo": "subsocial-decoded-promo";
    readonly "subsocial-pinned-posts": "subsocial-pinned-posts";
};
type DonationsProperties = {
    chain: string;
    from: string;
    to: string;
    token: string;
    amount: string;
    decimals: number;
    txHash: string;
};
type EvmNftProperties = {
    chain: string;
    collectionId: string;
    nftId: string;
    url: string;
};
type ImageProperties = {
    image: string;
};
type SecretBoxProperties = {
    message: string;
    nonce: string;
    recipient: string;
};
type PinnedPostsProperties = {
    ids: string[];
};
type ContentExtensionData = ({
    id: (typeof ContentExtensionId)["subsocial-donations"];
} & {
    properties: DonationsProperties;
}) | ({
    id: (typeof ContentExtensionId)["subsocial-evm-nft"];
} & {
    properties: EvmNftProperties;
}) | ({
    id: (typeof ContentExtensionId)["subsocial-image"];
} & {
    properties: ImageProperties;
}) | ({
    id: (typeof ContentExtensionId)["subsocial-secret-box"];
} & {
    properties: SecretBoxProperties;
}) | ({
    id: (typeof ContentExtensionId)["subsocial-decoded-promo"];
} & {
    properties: SecretBoxProperties;
}) | ({
    id: (typeof ContentExtensionId)["subsocial-pinned-posts"];
} & {
    properties: PinnedPostsProperties;
});
type ExtensionPropertiesAll = Partial<DonationsProperties & EvmNftProperties & ImageProperties & SecretBoxProperties & PinnedPostsProperties>;

declare enum InReplyToKind {
    Post = "Post"
}
type PostTweetDetailsIPFS = {
    id: string;
    created_at: string;
    username: string;
    author_id: string;
    edit_history_tweet_ids: string[];
    conversation_id: string;
    in_reply_to_user_id: string;
    referenced_tweets: ReferencedTweetV2[];
    attachments: TweetAttachmentV2;
    lang: string;
};
type SpaceContentWithInterests = {
    interests?: string[];
};
type SpaceContentWithAppId = {
    appId?: string;
};
type SpaceContentWithProfileSource = {
    profileSource?: string;
};
type PostContentWithTweet = {
    tweet?: PostTweetDetailsIPFS;
};
type PostContentWithAppId = {
    appId?: string;
};
type PostContentWithExtensions = {
    extensions?: ContentExtensionData[];
};
type PostContentWithOptimisticId = {
    optimisticId?: string;
};
type PostContentWithInReplyTo = {
    inReplyTo?: {
        id: string;
        kind: InReplyToKind;
    };
};
type IpfsSpaceContentSummarized = IpfsSpaceContent & SummarizedContent & SpaceContentWithInterests & SpaceContentWithAppId & SpaceContentWithProfileSource;
type IpfsPostContentSummarized = IpfsPostContent & SummarizedContent & PostContentWithTweet & PostContentWithAppId & PostContentWithExtensions & PostContentWithInReplyTo & PostContentWithOptimisticId;
declare const ipfsContentSection: {
    readonly post: "post";
    readonly space: "space";
};
type IpfsContentSection = typeof ipfsContentSection;
type IpfsContent<T extends keyof typeof ipfsContentSection> = T extends typeof ipfsContentSection.post ? IpfsPostContentSummarized : T extends typeof ipfsContentSection.space ? IpfsSpaceContentSummarized : never;
declare const supportedIpfsContentMap: Map<"post" | "space", Set<string>>;

declare enum DataHubSubscriptionEventEnum {
    POST_CREATED = "POST_CREATED",
    POST_STATE_UPDATED = "POST_STATE_UPDATED",
    POST_FOLLOWED = "POST_FOLLOWED",
    POST_FOLLOW_STATE_UPDATED = "POST_FOLLOW_STATE_UPDATED",
    EVM_ADDRESS_LINKED_TO_ACCOUNT = "EVM_ADDRESS_LINKED_TO_ACCOUNT",
    EVM_ADDRESS_LINK_TO_ACCOUNT_STATE_UPDATED = "EVM_ADDRESS_LINK_TO_ACCOUNT_STATE_UPDATED",
    LINKED_IDENTITY_CREATED = "LINKED_IDENTITY_CREATED",
    LINKED_IDENTITY_STATE_UPDATED = "LINKED_IDENTITY_STATE_UPDATED",
    LINKED_IDENTITY_SESSION_CREATED = "LINKED_IDENTITY_SESSION_CREATED",
    LINKED_IDENTITY_SESSION_STATE_UPDATED = "LINKED_IDENTITY_SESSION_STATE_UPDATED",
    LINKED_IDENTITY_EXTERNAL_PROVIDER_CREATED = "LINKED_IDENTITY_EXTERNAL_PROVIDER_CREATED",
    LINKED_IDENTITY_EXTERNAL_PROVIDER_STATE_UPDATED = "LINKED_IDENTITY_EXTERNAL_PROVIDER_STATE_UPDATED",
    MODERATION_MODERATOR_CREATED = "MODERATION_MODERATOR_CREATED",
    MODERATION_MODERATOR_STATE_UPDATED = "MODERATION_MODERATOR_STATE_UPDATED",
    MODERATION_BLOCKED_RESOURCE_CREATED = "MODERATION_BLOCKED_RESOURCE_CREATED",
    MODERATION_BLOCKED_RESOURCE_STATE_UPDATED = "MODERATION_BLOCKED_RESOURCE_STATE_UPDATED",
    MODERATION_ORGANIZATION_CREATED = "MODERATION_ORGANIZATION_CREATED",
    MODERATION_ORGANIZATION_STATE_UPDATED = "MODERATION_ORGANIZATION_STATE_UPDATED",
    ACTIVE_STAKING_SUPER_LIKE_CREATED = "ACTIVE_STAKING_SUPER_LIKE_CREATED",
    ACTIVE_STAKING_SUPER_LIKE_STATE_UPDATED = "ACTIVE_STAKING_SUPER_LIKE_STATE_UPDATED",
    SOCIAL_PROFILE_BALANCES_CREATED = "SOCIAL_PROFILE_BALANCES_CREATED",
    SOCIAL_PROFILE_BALANCES_STATE_UPDATED = "SOCIAL_PROFILE_BALANCES_STATE_UPDATED",
    SERVICE_ACCOUNT_INFO_EVENT = "SERVICE_ACCOUNT_INFO_EVENT",
    SERVICE_ACCOUNT_SUCCESS_EVENT = "SERVICE_ACCOUNT_SUCCESS_EVENT",
    SERVICE_ACCOUNT_ERROR_EVENT = "SERVICE_ACCOUNT_ERROR_EVENT",
    SERVICE_ACCOUNT_WARNING_EVENT = "SERVICE_ACCOUNT_WARNING_EVENT"
}
declare enum ServiceMessageStatusCode {
    INFO = "INFO",
    PROCESSED = "PROCESSED",
    CREATED = "CREATED",
    UPDATED = "UPDATED",
    MOVED = "MOVED",
    WARNING = "WARNING",
    UNAUTHORIZED = "UNAUTHORIZED",
    FORBIDDEN = "FORBIDDEN",
    ENTITY_ALREADY_EXISTS = "ENTITY_ALREADY_EXISTS",
    ENTITY_NOT_FOUND = "ENTITY_NOT_FOUND",
    TOO_MANY_REQUESTS = "TOO_MANY_REQUESTS",
    SERVICE_UNAVAILABLE = "SERVICE_UNAVAILABLE",
    INTERNAL_SERVER_ERROR = "INTERNAL_SERVER_ERROR",
    UNPROCESSABLE_ENTITY = "UNPROCESSABLE_ENTITY",
    PAYMENT_REQUIRED = "PAYMENT_REQUIRED",
    INSUFFICIENT_BALANCE = "INSUFFICIENT_BALANCE",
    BAD_REQUEST = "BAD_REQUEST",
    INVALID_SIGNER = "INVALID_SIGNER",
    INVALID_PROXY_FOR_SIGNER = "INVALID_PROXY_FOR_SIGNER",
    DAILY_TAPS_MAX_LIMIT_REACHED = "DAILY_TAPS_MAX_LIMIT_REACHED",
    INVALID_TAPS_VALUE = "INVALID_TAPS_VALUE",
    DAILY_SUPER_LIKES_MAX_LIMIT_REACHED = "DAILY_SUPER_LIKES_MAX_LIMIT_REACHED",
    EXPIRED_ENTRANCE_DAILY_REWARD_CLAIM_FORBIDDEN = "EXPIRED_ENTRANCE_DAILY_REWARD_CLAIM_FORBIDDEN",
    FUTURE_ENTRANCE_DAILY_REWARD_CLAIM_FORBIDDEN = "FUTURE_ENTRANCE_DAILY_REWARD_CLAIM_FORBIDDEN",
    GAMIFICATION_TASK_CLAIM_FAILED_NOT_COMPLETED = "GAMIFICATION_TASK_CLAIM_FAILED_NOT_COMPLETED",
    GAMIFICATION_TASK_CLAIM_FAILED_INVALID_DATA = "GAMIFICATION_TASK_CLAIM_FAILED_INVALID_DATA",
    GAMIFICATION_TASK_CLAIM_FAILED_DUPLICATED_CLAIM = "GAMIFICATION_TASK_CLAIM_FAILED_DUPLICATED_CLAIM",
    GAMIFICATION_TASK_CLAIM_SUCCESS_COMPLETED = "GAMIFICATION_TASK_CLAIM_SUCCESS_COMPLETED"
}
type SubscriptionServiceMessageMeta = {
    code: ServiceMessageStatusCode;
    msg?: string;
    extension?: Record<any, any>;
};
type SubscriptionServiceMessageToTargetMeta = {
    targetAddress: string;
    code: ServiceMessageStatusCode;
    callId?: string;
    callName?: keyof typeof socialCallName;
    msg?: string;
    extension?: Record<any, any>;
};
type SubscriptionServiceMessage = {
    event: DataHubSubscriptionEventEnum;
    meta: SubscriptionServiceMessageMeta;
};
type SubscriptionServiceMessageToTarget = {
    event: DataHubSubscriptionEventEnum;
    meta: SubscriptionServiceMessageToTargetMeta;
};
type SubscriptionServiceAccountToken = {
    sig: string;
    msg: {
        address?: string;
        proxy?: string;
        signer?: string;
        timestamp: string;
    };
};

declare enum SocialEventDataType {
    persistent = "persistent",
    optimistic = "optimistic",
    offChain = "offChain"
}
type SocialEventProtocolMetadata = {
    protVersion: SocialEventProtVersion;
};
type SocialEventDataSignature = {
    providerAddr: string;
    sig: string;
};
type SocialEventData = (SocialEventProtocolMetadata & SocialEventDataSignature & {
    dataType: SocialEventDataType.optimistic;
} & {
    callData: SocialCallData<keyof typeof socialCallName>;
    content?: Partial<IpfsContent<keyof typeof ipfsContentSection>>;
}) | (SocialEventProtocolMetadata & SocialEventDataSignature & {
    dataType: SocialEventDataType.persistent;
} & {
    eventData: SocialOnChainEventData<keyof typeof socialEventName> | null;
    callData: SocialCallData<keyof typeof socialCallName>;
}) | (SocialEventProtocolMetadata & SocialEventDataSignature & {
    dataType: SocialEventDataType.offChain;
} & {
    callData: SocialCallData<keyof typeof socialCallName>;
    content?: Partial<IpfsContent<keyof typeof ipfsContentSection>>;
});
type SocialEventDataApiInput = (SocialEventProtocolMetadata & SocialEventDataSignature & {
    dataType: SocialEventDataType.optimistic;
} & {
    callData: SocialCallDataApiInput<keyof typeof socialCallName>;
    content?: string;
}) | (SocialEventProtocolMetadata & SocialEventDataSignature & {
    dataType: SocialEventDataType.persistent;
} & {
    eventData: SocialOnChainEventDataApiInput<keyof typeof socialEventName> | null;
    callData: SocialCallDataApiInput<keyof typeof socialCallName>;
}) | (SocialEventProtocolMetadata & SocialEventDataSignature & {
    dataType: SocialEventDataType.offChain;
} & {
    callData: SocialCallDataApiInput<keyof typeof socialCallName>;
    content?: string;
});
type SocialEventDataGeneric<T extends SocialEventDataType, C extends keyof SocialCallNameEnum, E extends keyof SocialEventNameEnum | undefined = undefined> = T extends SocialEventDataType.optimistic ? SocialEventProtocolMetadata & SocialEventDataSignature & {
    dataType: SocialEventDataType.optimistic;
    callData: SocialCallData<C>;
    content?: Partial<IpfsContent<keyof typeof ipfsContentSection>>;
} : T extends SocialEventDataType.persistent ? SocialEventProtocolMetadata & SocialEventDataSignature & {
    dataType: SocialEventDataType.persistent;
    eventData: E extends keyof SocialEventNameEnum ? SocialOnChainEventData<E> : never;
    callData: SocialCallData<C>;
} : T extends SocialEventDataType.offChain ? SocialEventProtocolMetadata & SocialEventDataSignature & {
    dataType: SocialEventDataType.offChain;
    callData: SocialCallData<C>;
    content?: Partial<IpfsContent<keyof typeof ipfsContentSection>>;
} : never;

export { AccountFollowedEventParsedParams, AccountUnfollowedEventParsedParams, AddProxyCallParsedArgs, ContentContainerConfigMetadata, ContentContainerConfigOptionalProps, ContentContainerType, ContentExtensionData, ContentExtensionId, ContentSrcDecorated, ContentlessActionTapEnergyState, CreatePostCallParsedArgs, CreateSpaceAsProfileCallParsedArgs, CreateSpaceCallParsedArgs, CreatorStakingStakedEventParsedParams, DataHubClientId, DataHubSubscriptionEventEnum, DomainMetaUpdatedEventParsedParams, DomainRegisteredEventParsedParams, EvmAddressLinkedToAccountEventParsedParams, EvmAddressUnlinkedFromAccountEventParsedParams, ExtensionPropertiesAll, FollowAccountCallParsedArgs, FollowPostCallParsedArgs, FollowSpaceCallParsedArgs, GamificationTapEnergyState, GamificationTapsState, GamificationTaskName, GamificationTaskPeriodicity, GamificationTaskValidityTimeRange, IdentityProvider, InReplyToKind, IpfsContent, IpfsContentSection, IpfsPostContentSummarized, IpfsSpaceContentSummarized, LinkEvmAddressCallParsedArgs, LinkedIdentityExternalProviderDetails, ModerationResourceType, ModeratorRole, MovePostCallParsedArgs, OwnableEntity, OwnableEntityKind, OwnershipAcceptPendingOwnershipCallParsedArgs, OwnershipRejectPendingOwnershipCallParsedArgs, OwnershipTransferAcceptedEventParsedParams, OwnershipTransferCreatedEventParsedParams, OwnershipTransferOwnershipCallParsedArgs, OwnershipTransferRejectedEventParsedParams, PostContentWithInReplyTo, PostCreatedEventParsedParams, PostFollowedEventParsedParams, PostKind, PostMovedEventParsedParams, PostReactionCreateCallParsedArgs, PostReactionCreatedEventParsedParams, PostReactionDeleteCallParsedArgs, PostReactionDeletedEventParsedParams, PostReactionUpdateCallParsedArgs, PostReactionUpdatedEventParsedParams, PostSource, PostTweetDetailsIPFS, PostUnfollowedEventParsedParams, PostUpdatedEventParsedParams, ProfileUpdatedEventParsedParams, ProxyAddedEventParsedParams, ProxyRemovedEventParsedParams, ReactionKind, RemoveProxyCallParsedArgs, ServiceMessageStatusCode, SetProfileCallParsedArgs, SocialAction, SocialCallData, SocialCallDataApiInput, SocialCallDataArgs, SocialCallNameEnum, SocialEventData, SocialEventDataApiInput, SocialEventDataGeneric, SocialEventDataSignature, SocialEventDataType, SocialEventNameEnum, SocialEventProtVersion, SocialEventProtocolMetadata, SocialOnChainEventData, SocialOnChainEventDataApiInput, SocialOnChainEventDataParams, SocialOnChainEventMetadata, SocialProfileActionPermissions, SpaceCreatedEventParsedParams, SpaceFollowedEventParsedParams, SpaceOwnershipTransferAcceptedEventParsedParams, SpaceOwnershipTransferCreatedEventParsedParams, SpacePermissionsScope, SpaceUnfollowedEventParsedParams, SpaceUpdatedEventParsedParams, SubscriptionServiceAccountToken, SubscriptionServiceMessage, SubscriptionServiceMessageMeta, SubscriptionServiceMessageToTarget, SubscriptionServiceMessageToTargetMeta, SynthActiveStakingConfirmationDataCallParsedArgs, SynthActiveStakingCreateContentlessActionCallParsedArgs, SynthActiveStakingCreateFarcasterFrameLikeCallParsedArgs, SynthActiveStakingCreateSuperLikeCallParsedArgs, SynthActiveStakingDeleteSuperLikeCallParsedArgs, SynthAddLinkedIdentityExternalProviderCallParsedArgs, SynthAddPostViewCallParsedArgs, SynthAddPostViewsBatchCallParsedArgs, SynthCreateContentContainerConfigCallParsedArgs, SynthCreateLinkedIdentityCallParsedArgs, SynthCreatePostTxFailedCallParsedArgs, SynthCreatePostTxRetryCallParsedArgs, SynthDeleteLinkedIdentityCallParsedArgs, SynthFarcasterCreatePostFromCastCallParsedArgs, SynthFarcasterCreateSuperLikeFromReactionCallParsedArgs, SynthGamificationAddTappingActivityStatesCallParsedArgs, SynthGamificationClaimTaskCallParsedArgs, SynthInitLinkedIdentityCallParsedArgs, SynthModerationAddCtxToOrganizationCallParsedArgs, SynthModerationAddDefaultCtxToModeratorCallParsedArgs, SynthModerationBlockResourceCallParsedArgs, SynthModerationForceAddCtxToOrganizationCallParsedArgs, SynthModerationForceAddDefaultCtxToModeratorCallParsedArgs, SynthModerationForceAddOrganizationModeratorCallParsedArgs, SynthModerationForceBlockResourceCallParsedArgs, SynthModerationForceInitModeratorCallParsedArgs, SynthModerationForceInitOrganizationCallParsedArgs, SynthModerationForceUnblockResourceCallParsedArgs, SynthModerationInitModeratorCallParsedArgs, SynthModerationUnblockResourceCallParsedArgs, SynthSetPostApprovedStatusCallParsedArgs, SynthSocialProfileAddReferrerIdCallParsedArgs, SynthSocialProfileSetActionPermissionsCallParsedArgs, SynthUpdateContentContainerConfigCallParsedArgs, SynthUpdateLinkedIdentityExternalProviderCallParsedArgs, SynthUpdatePostTxFailedCallParsedArgs, SynthUpdatePostTxRetryCallParsedArgs, UnfollowAccountCallParsedArgs, UnfollowPostCallParsedArgs, UnfollowSpaceCallParsedArgs, UnlinkEvmAddressCallParsedArgs, UpdatePostCallParsedArgs, UpdateSpaceCallParsedArgs, ipfsContentSection, socialCallName, socialEventName, socialEventProtVersion, supportedIpfsContentMap };
