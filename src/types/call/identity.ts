import { IdentityProvider } from '../identity';

export interface SynthCreateLinkedIdentityCallParsedArgs {
  id: string;
  provider: IdentityProvider;
}

export interface SynthInitLinkedIdentityCallParsedArgs {
  session: string;
  id?: string;
  externalProvider?: {
    id: string;
    provider: IdentityProvider;
  };
}

export interface SynthDeleteLinkedIdentityCallParsedArgs {
  id: string;
  provider: IdentityProvider;
}
