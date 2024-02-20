import { DataHubClientId } from '../common';

export interface SynthAddRefIdToSocialProfileCallParsedArgs {
  refId: string;
  clientId: DataHubClientId;
  timestamp?: string;
}
