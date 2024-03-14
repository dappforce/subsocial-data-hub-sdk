import {
  socialEventName,
  SocialEventNameEnum,
  SocialOnChainEventData,
  SocialOnChainEventDataApiInput
} from './event';
import {
  SocialCallData,
  SocialCallDataApiInput,
  socialCallName,
  SocialCallNameEnum
} from './call';
import { IpfsContent, ipfsContentSection, IpfsContentSection } from './ipfs';
import { SocialEventProtVersion } from './common';

export * from './event';
export * from './call';
export * from './ipfs';
export * from './common';
export * from './contentExtension';
export * from './subscription';
export * from './identity';
export * from './moderation';
export * from './ownership';

export enum SocialEventDataType {
  persistent = 'persistent',
  optimistic = 'optimistic',
  offChain = 'offChain'
}

export type SocialEventProtocolMetadata = {
  protVersion: SocialEventProtVersion;
};

export type SocialEventDataSignature = {
  providerAddr: string;
  sig: string;
};

export type SocialEventData =
  | (SocialEventProtocolMetadata &
      SocialEventDataSignature & {
        dataType: SocialEventDataType.optimistic;
      } & {
        callData: SocialCallData<keyof typeof socialCallName>;
        content?: Partial<IpfsContent<keyof typeof ipfsContentSection>>;
      })
  | (SocialEventProtocolMetadata &
      SocialEventDataSignature & {
        dataType: SocialEventDataType.persistent;
      } & {
        eventData: SocialOnChainEventData<keyof typeof socialEventName> | null;
        callData: SocialCallData<keyof typeof socialCallName>;
      })
  | (SocialEventProtocolMetadata &
      SocialEventDataSignature & { dataType: SocialEventDataType.offChain } & {
        callData: SocialCallData<keyof typeof socialCallName>;
        content?: Partial<IpfsContent<keyof typeof ipfsContentSection>>;
      });

export type SocialEventDataApiInput =
  | (SocialEventProtocolMetadata &
      SocialEventDataSignature & {
        dataType: SocialEventDataType.optimistic;
      } & {
        callData: SocialCallDataApiInput<keyof typeof socialCallName>;
        content?: string;
      })
  | (SocialEventProtocolMetadata &
      SocialEventDataSignature & {
        dataType: SocialEventDataType.persistent;
      } & {
        eventData: SocialOnChainEventDataApiInput<
          keyof typeof socialEventName
        > | null;
        callData: SocialCallDataApiInput<keyof typeof socialCallName>;
      })
  | (SocialEventProtocolMetadata &
      SocialEventDataSignature & { dataType: SocialEventDataType.offChain } & {
        callData: SocialCallDataApiInput<keyof typeof socialCallName>;
        content?: string;
      });

export type SocialEventDataGeneric<
  T extends SocialEventDataType,
  C extends keyof SocialCallNameEnum,
  E extends keyof SocialEventNameEnum | undefined = undefined
> = T extends SocialEventDataType.optimistic
  ? SocialEventProtocolMetadata &
      SocialEventDataSignature & {
        dataType: SocialEventDataType.optimistic;
        callData: SocialCallData<C>;
        content?: Partial<IpfsContent<keyof typeof ipfsContentSection>>;
      }
  : T extends SocialEventDataType.persistent
  ? SocialEventProtocolMetadata &
      SocialEventDataSignature & {
        dataType: SocialEventDataType.persistent;
        eventData: E extends keyof SocialEventNameEnum
          ? SocialOnChainEventData<E>
          : never;
        callData: SocialCallData<C>;
      }
  : T extends SocialEventDataType.offChain
  ? SocialEventProtocolMetadata &
      SocialEventDataSignature & {
        dataType: SocialEventDataType.offChain;
        callData: SocialCallData<C>;
        content?: Partial<IpfsContent<keyof typeof ipfsContentSection>>;
      }
  : never;
