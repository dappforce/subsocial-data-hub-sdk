import { SpacePermissionMap } from '@subsocial/api/types/dto';

export type ContentSrcDecorated = {
  ipfsSrc?: string | null;
  otherSrc?: string | null;
  none?: boolean;
};

export enum PostKind {
  Comment = 'Comment',
  SharedPost = 'SharedPost',
  RegularPost = 'RegularPost'
}

export interface SpacePermissionsScope {
  none: Required<SpacePermissionMap>;
  everyone: Required<SpacePermissionMap>;
  follower: Required<SpacePermissionMap>;
  spaceOwner: Required<SpacePermissionMap>;
}

export enum ReactionKind {
  Upvote = 'Upvote',
  Downvote = 'Downvote'
}

export const socialEventProtVersion = {
  '0.1': '0.1'
} as const;

export type SocialEventProtVersion = keyof typeof socialEventProtVersion;

export enum DataHubClientId {
  POLKAVERSE = 'POLKAVERSE',
  GRILLSO = 'GRILLSO',
  GRILLAPP = 'GRILLAPP',
  OTHER = 'OTHER'
}

export interface EntityWithOwnership {
  Post: string | null;
  Space: string | null;
  Domain: string | null;
}
