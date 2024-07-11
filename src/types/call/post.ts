import { ContentSrcDecorated, PostKind, ReactionKind } from '../common';

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

export interface UnfollowPostCallParsedArgs {
  postId: string;
}
export interface FollowPostCallParsedArgs {
  postId: string;
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

export interface SynthAddPostViewsBatchCallParsedArgs {
  views: SynthAddPostViewCallParsedArgs[];
}


export interface SynthSetPostApprovedStatusCallParsedArgs {
  postId: string;
  approvedInRootPost: boolean;
}

