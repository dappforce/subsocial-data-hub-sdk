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
