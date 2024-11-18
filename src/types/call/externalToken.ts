export enum ExternalTokenChain {
  ETHEREUM = 'ETHEREUM',
  SOLANA = 'SOLANA'
}

export type ExternalTokenMethodAliases = {
  balanceOf: string;
};

export interface ExternalToken {
  name: string;
  symbol: string;
  chain: ExternalTokenChain;
  address: string;
  contractAbi: string;
  contractMethods: ExternalTokenMethodAliases;
  decimals: number;
}

export interface SynthCreateExternalTokenCallParsedArgs {
  tokenDetails: ExternalToken;
}
