import { IdentityProvider } from '../identity';

export interface SynthCreateLinkedIdentityCallParsedArgs {
  id: string;
  provider: IdentityProvider;
}

export interface LinkedIdentityExternalProviderDetails {
  id: string;
  provider: IdentityProvider;
  username?: string;
  farcasterCustodyAddress?: string;
  farcasterVerifiedEthAddresses?: string[];
  farcasterVerifiedSolAddresses?: string[];
  farcasterSignerUuid?: string;
  evmProofMsg?: string;
  evmProofMsgSig?: string;
  solProofMsg?: string;
  solProofMsgSig?: string;
}

export interface SynthInitLinkedIdentityCallParsedArgs {
  externalProvider?: LinkedIdentityExternalProviderDetails;
  synthetic?: boolean;
}

export interface SynthAddLinkedIdentityExternalProviderCallParsedArgs {
  externalProvider: LinkedIdentityExternalProviderDetails;
}

export interface SynthUpdateLinkedIdentityExternalProviderCallParsedArgs {
  entityId: string;
  externalProvider: LinkedIdentityExternalProviderDetails;
}

export interface SynthDeleteLinkedIdentityCallParsedArgs {
  id: string;
  provider: IdentityProvider;
}
