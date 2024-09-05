import { ExternalToken } from './externalToken';

export enum ContentContainerType {
  PUBLIC_CHANNEL = 'PUBLIC_CHANNEL',
  COMMUNITY_CHANNEL = 'COMMUNITY_CHANNEL',
  CONTEST = 'CONTEST'
}

export interface ContentContainerConfigMetadata {
  title?: string;
  description?: string;
  image?: string;
  coverImage?: string;
  isExternalTokenRewardPool?: boolean;
  rewardPoolAmount?: string;
  winnersNumber?: number;
}

export interface ContentContainerConfigOptionalProps {
  hidden?: boolean;
  isExpirable?: boolean;
  expirationWindowFrom?: string;
  expirationWindowTo?: string;
  openAt?: string;
  closedAt?: string;
  isPostModerationPenalty?: boolean;
  isCreatorModerationPenalty?: boolean;
  isDeductionRewardsOnModeration?: boolean;
  createCommentPricePointsAmount?: string;
  postBlockOneTimePenaltyPointsAmount?: string;
  addressBlockOneTimePenaltyPointsAmount?: string;
  accessThresholdPointsAmount?: string;
  externalToken?: Pick<ExternalToken, 'symbol' | 'chain'>;
  accessThresholdExternalTokenAmount?: string;
  likeThresholdExternalTokenAmount?: string;
  metadata?: ContentContainerConfigMetadata;
}

export interface SynthCreateContentContainerConfigCallParsedArgs
  extends ContentContainerConfigOptionalProps {
  rootPostId: string;
  rootSpaceId: string;
  slug: string;
  containerType: ContentContainerType;
}

export interface SynthUpdateContentContainerConfigCallParsedArgs
  extends ContentContainerConfigOptionalProps {
  id: string;
  slug?: string;
  containerType?: ContentContainerType;
}
