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

export * from './event';
export * from './call';
export * from './ipfs';
export * from './common';
export * from './contentExtension';
export * from './subscription';

export enum SocialEventDataType {
  persistent = 'persistent',
  optimistic = 'optimistic',
  offChain = 'offChain'
}

export type SocialEventDataSignature = {
  providerAddr: string;
  sig: string;
};

export type SocialEventData =
  | (SocialEventDataSignature & { dataType: SocialEventDataType.optimistic } & {
      callData: SocialCallData<keyof typeof socialCallName>;
      content?: Partial<IpfsContent<keyof typeof ipfsContentSection>>;
    })
  | (SocialEventDataSignature & { dataType: SocialEventDataType.persistent } & {
      eventData: SocialOnChainEventData<keyof typeof socialEventName> | null;
      callData: SocialCallData<keyof typeof socialCallName>;
    })
  | (SocialEventDataSignature & { dataType: SocialEventDataType.offChain } & {
      callData: SocialCallData<keyof typeof socialCallName>;
      content?: Partial<IpfsContent<keyof typeof ipfsContentSection>>;
    });

export type SocialEventDataApiInput =
  | (SocialEventDataSignature & { dataType: SocialEventDataType.optimistic } & {
      callData: SocialCallDataApiInput<keyof typeof socialCallName>;
      content?: string;
    })
  | (SocialEventDataSignature & { dataType: SocialEventDataType.persistent } & {
      eventData: SocialOnChainEventDataApiInput<
        keyof typeof socialEventName
      > | null;
      callData: SocialCallDataApiInput<keyof typeof socialCallName>;
    })
  | (SocialEventDataSignature & { dataType: SocialEventDataType.offChain } & {
      callData: SocialCallDataApiInput<keyof typeof socialCallName>;
      content?: string;
    });

export type SocialEventDataGeneric<
  T extends SocialEventDataType,
  C extends keyof SocialCallNameEnum,
  E extends keyof SocialEventNameEnum | undefined = undefined
> = T extends SocialEventDataType.optimistic
  ? SocialEventDataSignature & {
      dataType: SocialEventDataType.optimistic;
      callData: SocialCallData<C>;
      content?: Partial<IpfsContent<keyof typeof ipfsContentSection>>;
    }
  : T extends SocialEventDataType.persistent
  ? SocialEventDataSignature & {
      dataType: SocialEventDataType.persistent;
      eventData: E extends keyof SocialEventNameEnum
        ? SocialOnChainEventData<E>
        : never;
      callData: SocialCallData<C>;
    }
  : T extends SocialEventDataType.offChain
  ? SocialEventDataSignature & {
      dataType: SocialEventDataType.offChain;
      callData: SocialCallData<C>;
      content?: Partial<IpfsContent<keyof typeof ipfsContentSection>>;
    }
  : never;
