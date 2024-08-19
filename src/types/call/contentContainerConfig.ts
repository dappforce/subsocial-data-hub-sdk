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
  rewardPoolTokenName?: string;
  rewardPoolTokensAmount?: string;
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
  postBlockOneTimePenaltyPointsAmount?: string;
  addressBlockOneTimePenaltyPointsAmount?: string;
  accessThresholdPointsAmount?: string;
  accessThresholdExternalTokenName?: string;
  accessThresholdExternalTokenAddress?: string;
  accessThresholdExternalTokenAmount?: string;
  likeThresholdExternalTokenAmount?: string;
  metadata?: ContentContainerConfigMetadata;
}

export interface SynthCreateContentContainerConfigCallParsedArgs
  extends ContentContainerConfigOptionalProps {
  rootPostId: string;
  slug: string;
  containerType: ContentContainerType;
}

export interface SynthUpdateContentContainerConfigCallParsedArgs
  extends ContentContainerConfigOptionalProps {
  id: string;
  slug?: string;
  containerType?: ContentContainerType;
}
