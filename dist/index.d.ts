import { SpacePermissionMap, SummarizedContent } from '@subsocial/api/types/dto';
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
    readonly EvmAddressUnlinkedFromAccount: "EvmAddressUnlinkedFromAccount";
    readonly EvmAddressLinkedToAccount: "EvmAddressLinkedToAccount";
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
    domain: Uint8Array;
    recipientId?: string;
}
interface DomainMetaUpdatedEventParsedParams {
    accountId: string;
    domain: Uint8Array;
}
interface EvmAddressLinkedToAccountEventParsedParams {
    substrateAccountId: string;
    ethereumAccountId: string;
}
interface EvmAddressUnlinkedFromAccountEventParsedParams {
    substrateAccountId: string;
    ethereumAccountId: string;
}
type SocialOnChainEventDataParams<E extends keyof typeof socialEventName> = E extends (typeof socialEventName)['PostCreated'] ? PostCreatedEventParsedParams : E extends (typeof socialEventName)['PostUpdated'] ? PostUpdatedEventParsedParams : E extends (typeof socialEventName)['PostMoved'] ? PostMovedEventParsedParams : E extends (typeof socialEventName)['PostFollowed'] ? PostFollowedEventParsedParams : E extends (typeof socialEventName)['PostUnfollowed'] ? PostUnfollowedEventParsedParams : E extends (typeof socialEventName)['SpaceUpdated'] ? SpaceUpdatedEventParsedParams : E extends (typeof socialEventName)['SpaceCreated'] ? SpaceCreatedEventParsedParams : E extends (typeof socialEventName)['PostReactionCreated'] ? PostReactionCreatedEventParsedParams : E extends (typeof socialEventName)['PostReactionUpdated'] ? PostReactionUpdatedEventParsedParams : E extends (typeof socialEventName)['PostReactionDeleted'] ? PostReactionDeletedEventParsedParams : E extends (typeof socialEventName)['ProfileUpdated'] ? ProfileUpdatedEventParsedParams : E extends (typeof socialEventName)['SpaceFollowed'] ? SpaceFollowedEventParsedParams : E extends (typeof socialEventName)['SpaceUnfollowed'] ? SpaceUnfollowedEventParsedParams : E extends (typeof socialEventName)['SpaceOwnershipTransferCreated'] ? SpaceOwnershipTransferCreatedEventParsedParams : E extends (typeof socialEventName)['SpaceOwnershipTransferAccepted'] ? SpaceOwnershipTransferAcceptedEventParsedParams : E extends (typeof socialEventName)['AccountFollowed'] ? AccountFollowedEventParsedParams : E extends (typeof socialEventName)['AccountUnfollowed'] ? AccountUnfollowedEventParsedParams : E extends (typeof socialEventName)['UserNameRegistered'] ? DomainRegisteredEventParsedParams : E extends (typeof socialEventName)['UserNameUpdated'] ? DomainMetaUpdatedEventParsedParams : E extends (typeof socialEventName)['EvmAddressLinkedToAccount'] ? EvmAddressLinkedToAccountEventParsedParams : E extends (typeof socialEventName)['EvmAddressUnlinkedFromAccount'] ? EvmAddressUnlinkedFromAccountEventParsedParams : never;
type SocialOnChainEventMetadata = {
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

declare const socialCallName: {
    readonly create_post: "create_post";
    readonly force_create_post: "force_create_post";
    readonly update_post: "update_post";
    readonly move_post: "move_post";
    readonly follow_post: "follow_post";
    readonly unfollow_post: "unfollow_post";
    readonly create_space: "create_space";
    readonly force_create_space: "force_create_space";
    readonly create_space_as_profile: "create_space_as_profile";
    readonly update_space: "update_space";
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
    readonly accept_pending_ownership: "accept_pending_ownership";
    readonly reject_pending_ownership: "reject_pending_ownership";
    readonly register_domain: "register_domain";
    readonly force_register_domain: "force_register_domain";
    readonly set_domain_content: "set_domain_content";
    readonly set_inner_value: "set_inner_value";
    readonly force_set_inner_value: "force_set_inner_value";
    readonly set_outer_value: "set_outer_value";
    readonly set_payment_beneficiary: "set_payment_beneficiary";
    readonly synth_create_post_tx_failed: "synth_create_post_tx_failed";
    readonly synth_create_post_tx_retry: "synth_create_post_tx_retry";
    readonly synth_update_post_tx_failed: "synth_update_post_tx_failed";
    readonly synth_update_post_tx_retry: "synth_update_post_tx_retry";
};
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
interface CreateSpaceCallParsedArgs extends ContentSrcDecorated {
    permissions: SpacePermissionsScope;
    forced: boolean;
    forcedData: {
        account: string;
        block: number;
        time: string;
        owner: string;
        hidden: boolean;
    } | null;
}
interface UpdateSpaceCallParsedArgs extends ContentSrcDecorated {
    permissions: SpacePermissionsScope;
    hidden: boolean;
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
interface LinkEvmAddressCallParsedArgs {
    evmAddress: string;
    evmSignature: string;
}
interface UnlinkEvmAddressCallParsedArgs {
    evmAddress: string;
}
interface UnfollowPostCallParsedArgs {
    postId: string;
}
interface FollowPostCallParsedArgs {
    postId: string;
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
type SocialCallNameEnum = typeof socialCallName;
type SocialCallDataArgs<E extends keyof typeof socialCallName> = E extends (typeof socialCallName)['create_post'] ? CreatePostCallParsedArgs : E extends (typeof socialCallName)['update_post'] ? UpdatePostCallParsedArgs : E extends (typeof socialCallName)['move_post'] ? MovePostCallParsedArgs : E extends (typeof socialCallName)['create_space'] ? CreateSpaceCallParsedArgs : E extends (typeof socialCallName)['update_space'] ? UpdateSpaceCallParsedArgs : E extends (typeof socialCallName)['create_post_reaction'] ? PostReactionCreateCallParsedArgs : E extends (typeof socialCallName)['update_post_reaction'] ? PostReactionUpdateCallParsedArgs : E extends (typeof socialCallName)['delete_post_reaction'] ? PostReactionDeleteCallParsedArgs : E extends (typeof socialCallName)['link_evm_address'] ? LinkEvmAddressCallParsedArgs : E extends (typeof socialCallName)['unlink_evm_address'] ? UnlinkEvmAddressCallParsedArgs : E extends (typeof socialCallName)['follow_post'] ? FollowPostCallParsedArgs : E extends (typeof socialCallName)['unfollow_post'] ? UnfollowPostCallParsedArgs : E extends (typeof socialCallName)['follow_space'] ? FollowSpaceCallParsedArgs : E extends (typeof socialCallName)['unfollow_space'] ? UnfollowSpaceCallParsedArgs : E extends (typeof socialCallName)['follow_account'] ? FollowAccountCallParsedArgs : E extends (typeof socialCallName)['unfollow_account'] ? UnfollowAccountCallParsedArgs : E extends (typeof socialCallName)['synth_create_post_tx_failed'] ? SynthCreatePostTxFailedCallParsedArgs : E extends (typeof socialCallName)['synth_create_post_tx_retry'] ? SynthCreatePostTxRetryCallParsedArgs : E extends (typeof socialCallName)['synth_update_post_tx_failed'] ? SynthUpdatePostTxFailedCallParsedArgs : E extends (typeof socialCallName)['synth_update_post_tx_retry'] ? SynthUpdatePostTxRetryCallParsedArgs : undefined;
type SocialCallData<C extends keyof typeof socialCallName> = {
    name: C;
    signer: string;
    txSig: string;
    args?: SocialCallDataArgs<C>;
};
type SocialCallDataApiInput<C extends keyof typeof socialCallName> = {
    name: C;
    signer: string;
    txSig: string;
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
type IpfsSpaceContentSummarized = IpfsSpaceContent & SummarizedContent & SpaceContentWithInterests & SpaceContentWithAppId;
type IpfsPostContentSummarized = IpfsPostContent & SummarizedContent & PostContentWithTweet & PostContentWithAppId & PostContentWithExtensions & PostContentWithInReplyTo & PostContentWithOptimisticId;
declare const ipfsContentSection: {
    readonly post: "post";
    readonly space: "space";
};
type IpfsContentSection = typeof ipfsContentSection;
type IpfsContent<T extends keyof typeof ipfsContentSection> = T extends typeof ipfsContentSection.post ? IpfsPostContentSummarized : T extends typeof ipfsContentSection.space ? IpfsSpaceContentSummarized : never;
declare const supportedIpfsContentMap: Map<"post" | "space", Set<string>>;

declare enum DataHubSubscriptionEventEnum {
    POST_CREATED_OPTIMISTIC = "POST_CREATED_OPTIMISTIC",
    POST_CREATED_PERSISTENT = "POST_CREATED_PERSISTENT",
    POST_UPDATED_OPTIMISTIC = "POST_UPDATED_OPTIMISTIC",
    POST_UPDATED_PERSISTENT = "POST_UPDATED_PERSISTENT",
    POST_FOLLOWED_OPTIMISTIC = "POST_FOLLOWED_OPTIMISTIC",
    POST_FOLLOWED_PERSISTENT = "POST_FOLLOWED_PERSISTENT",
    POST_UNFOLLOWED_OPTIMISTIC = "POST_UNFOLLOWED_OPTIMISTIC",
    POST_UNFOLLOWED_PERSISTENT = "POST_UNFOLLOWED_PERSISTENT",
    EVM_ADDRESS_LINKED_TO_ACCOUNT_OPTIMISTIC = "EVM_ADDRESS_LINKED_TO_ACCOUNT",
    EVM_ADDRESS_LINKED_TO_ACCOUNT_PERSISTENT = "EVM_ADDRESS_LINKED_TO_ACCOUNT",
    EVM_ADDRESS_UNLINKED_TO_ACCOUNT_OPTIMISTIC = "EVM_ADDRESS_UNLINKED_TO_ACCOUNT",
    EVM_ADDRESS_UNLINKED_TO_ACCOUNT_PERSISTENT = "EVM_ADDRESS_UNLINKED_TO_ACCOUNT",
    POST_CREATED = "POST_CREATED",
    POST_STATE_UPDATED = "POST_STATE_UPDATED",
    POST_FOLLOWED = "POST_FOLLOWED",
    POST_FOLLOW_STATE_UPDATED = "POST_FOLLOW_STATE_UPDATED",
    EVM_ADDRESS_LINKED_TO_ACCOUNT = "EVM_ADDRESS_LINKED_TO_ACCOUNT",
    EVM_ADDRESS_LINK_TO_ACCOUNT_STATE_UPDATED = "EVM_ADDRESS_LINK_TO_ACCOUNT_STATE_UPDATED"
}

declare enum SocialEventDataType {
    persistent = "persistent",
    optimistic = "optimistic",
    offChain = "offChain"
}
type SocialEventData = ({
    dataType: SocialEventDataType.optimistic;
} & {
    callData: SocialCallData<keyof typeof socialCallName>;
    content?: Partial<IpfsContent<keyof typeof ipfsContentSection>>;
}) | ({
    dataType: SocialEventDataType.persistent;
} & {
    eventData: SocialOnChainEventData<keyof typeof socialEventName> | null;
    callData: SocialCallData<keyof typeof socialCallName>;
}) | ({
    dataType: SocialEventDataType.offChain;
} & {
    callData: SocialCallData<keyof typeof socialCallName>;
    content?: Partial<IpfsContent<keyof typeof ipfsContentSection>>;
});
type SocialEventDataApiInput = ({
    dataType: SocialEventDataType.optimistic;
} & {
    callData: SocialCallDataApiInput<keyof typeof socialCallName>;
    content?: string;
}) | ({
    dataType: SocialEventDataType.persistent;
} & {
    eventData: SocialOnChainEventDataApiInput<keyof typeof socialEventName> | null;
    callData: SocialCallDataApiInput<keyof typeof socialCallName>;
}) | ({
    dataType: SocialEventDataType.offChain;
} & {
    callData: SocialCallDataApiInput<keyof typeof socialCallName>;
    content?: string;
});
type SocialEventDataGeneric<T extends SocialEventDataType, C extends keyof SocialCallNameEnum, E extends keyof SocialEventNameEnum | undefined = undefined> = T extends SocialEventDataType.optimistic ? {
    dataType: SocialEventDataType.optimistic;
    callData: SocialCallData<C>;
    content?: Partial<IpfsContent<keyof typeof ipfsContentSection>>;
} : T extends SocialEventDataType.persistent ? {
    dataType: SocialEventDataType.persistent;
    eventData: E extends keyof SocialEventNameEnum ? SocialOnChainEventData<E> : never;
    callData: SocialCallData<C>;
} : T extends SocialEventDataType.offChain ? {
    dataType: SocialEventDataType.offChain;
    callData: SocialCallData<C>;
    content?: Partial<IpfsContent<keyof typeof ipfsContentSection>>;
} : never;

export { AccountFollowedEventParsedParams, AccountUnfollowedEventParsedParams, ContentExtensionData, ContentExtensionId, ContentSrcDecorated, CreatePostCallParsedArgs, CreateSpaceCallParsedArgs, DataHubSubscriptionEventEnum, DomainMetaUpdatedEventParsedParams, DomainRegisteredEventParsedParams, EvmAddressLinkedToAccountEventParsedParams, EvmAddressUnlinkedFromAccountEventParsedParams, ExtensionPropertiesAll, FollowAccountCallParsedArgs, FollowPostCallParsedArgs, FollowSpaceCallParsedArgs, InReplyToKind, IpfsContent, IpfsContentSection, IpfsPostContentSummarized, IpfsSpaceContentSummarized, LinkEvmAddressCallParsedArgs, MovePostCallParsedArgs, PostContentWithInReplyTo, PostCreatedEventParsedParams, PostFollowedEventParsedParams, PostKind, PostMovedEventParsedParams, PostReactionCreateCallParsedArgs, PostReactionCreatedEventParsedParams, PostReactionDeleteCallParsedArgs, PostReactionDeletedEventParsedParams, PostReactionUpdateCallParsedArgs, PostReactionUpdatedEventParsedParams, PostTweetDetailsIPFS, PostUnfollowedEventParsedParams, PostUpdatedEventParsedParams, ProfileUpdatedEventParsedParams, ReactionKind, SocialCallData, SocialCallDataApiInput, SocialCallDataArgs, SocialCallNameEnum, SocialEventData, SocialEventDataApiInput, SocialEventDataGeneric, SocialEventDataType, SocialEventNameEnum, SocialOnChainEventData, SocialOnChainEventDataApiInput, SocialOnChainEventDataParams, SocialOnChainEventMetadata, SpaceCreatedEventParsedParams, SpaceFollowedEventParsedParams, SpaceOwnershipTransferAcceptedEventParsedParams, SpaceOwnershipTransferCreatedEventParsedParams, SpacePermissionsScope, SpaceUnfollowedEventParsedParams, SpaceUpdatedEventParsedParams, SynthCreatePostTxFailedCallParsedArgs, SynthCreatePostTxRetryCallParsedArgs, SynthUpdatePostTxFailedCallParsedArgs, SynthUpdatePostTxRetryCallParsedArgs, UnfollowAccountCallParsedArgs, UnfollowPostCallParsedArgs, UnfollowSpaceCallParsedArgs, UnlinkEvmAddressCallParsedArgs, UpdatePostCallParsedArgs, UpdateSpaceCallParsedArgs, ipfsContentSection, socialCallName, socialEventName, supportedIpfsContentMap };
