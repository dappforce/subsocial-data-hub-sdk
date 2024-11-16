import { SocialProfileActionPermissions } from './socialProfile';

export enum AccessRoleName {
  OWNER = 'OWNER',
  EDITOR = 'EDITOR',
  FOLLOWER = 'FOLLOWER',
  MODERATOR = 'MODERATOR',
  GUEST = 'GUEST'
}

export enum AccessPermissionName {
  CREATE_POST = 'CREATE_POST',
  EDIT_POST = 'EDIT_POST',
  REPLY_POST = 'REPLY_POST',
  SHARE_POST = 'SHARE_POST',
  EDIT_SPACE = 'EDIT_SPACE',
  EDIT_SPACE_PERMISSION_CONFIGS = 'EDIT_SPACE_PERMISSION_CONFIGS',
  TRANSFER_POST_OWNERSHIP = 'TRANSFER_POST_OWNERSHIP',
  TRANSFER_SPACE_OWNERSHIP = 'TRANSFER_SPACE_OWNERSHIP'
}

export enum AccessPermissionContext {
  SPACE = 'SPACE',
  POST = 'POST'
}

export interface SynthAccessSetUserRoleCallParsedArgs {
  roleName: AccessRoleName;
  context: AccessPermissionContext;
  address: string;
  spaceId?: string;
}

export interface SynthAccessSetRolePermissionCallParsedArgs {
  context: AccessPermissionContext;
  spaceId?: string;
  roleName: AccessRoleName;
  permissionName: AccessPermissionName;
  allowed: boolean;
}
