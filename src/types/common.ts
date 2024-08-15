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

export enum SocialAction {
  CREATE_REGULAR_POST = 'CREATE_REGULAR_POST',
  UPDATE_REGULAR_POST = 'UPDATE_REGULAR_POST',
  SHARE_REGULAR_POST = 'SHARE_REGULAR_POST',

  CREATE_COMMENT = 'CREATE_COMMENT',
  UPDATE_COMMENT = 'UPDATE_COMMENT',
  SHARE_COMMENT = 'SHARE_COMMENT',

  CREATE_REPLY = 'CREATE_REPLY',
  UPDATE_REPLY = 'UPDATE_REPLY',

  CREATE_SPACE = 'CREATE_SPACE',
  UPDATE_SPACE = 'UPDATE_SPACE'
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

export enum OwnableEntityKind {
  Post = 'Post',
  Space = 'Space',
  Domain = 'Domain'
}

export interface OwnableEntity {
  kind: OwnableEntityKind;
  id: string;
}

export enum PostSource {
  NATIVE = 'NATIVE',
  FARCASTER_AUTO_CROSS_POST = 'FARCASTER_AUTO_CROSS_POST'
}

export enum ContentContainerType {
  PUBLIC_CHANNEL = 'PUBLIC_CHANNEL',
  COMMUNITY_CHANNEL = 'COMMUNITY_CHANNEL',
  CONTEST = 'CONTEST'
}
