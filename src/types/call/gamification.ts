export enum GamificationTaskName {
  JOIN_TELEGRAM_GROUP = 'JOIN_TELEGRAM_GROUP',
  JOIN_TELEGRAM_CHANNEL = 'JOIN_TELEGRAM_CHANNEL'
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
