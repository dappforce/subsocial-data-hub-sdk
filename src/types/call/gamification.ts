export enum GamificationTaskName {
  JOIN_TELEGRAM_CHANNEL = 'JOIN_TELEGRAM_CHANNEL',
  JOIN_TWITTER = 'JOIN_TWITTER'
}

export enum GamificationTaskPeriodicity {
  ONETIME = 'ONETIME',
  DAILY = 'DAILY',
  WEEKLY = 'WEEKLY'
}

export enum GamificationTaskValidityTimeRange {
  DAY = 'DAY',
  WEEK = 'WEEK',
  INFINITE = 'INFINITE'
}

export interface GamificationTapEnergyState {
  value: number;
  timestamp: string;
}

export interface GamificationTapsState {
  tapsCount?: number;
}

export interface SynthGamificationAddTappingActivityStatesCallParsedArgs {
  tapsState?: GamificationTapsState;
  energyState?: GamificationTapEnergyState;
}

export interface SynthGamificationUpdateTaskStatusCallParsedArgs {
  taskName: GamificationTaskName;
  externalProviderId: string;
}
