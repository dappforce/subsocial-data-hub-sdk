export type GetDeterministicIdInput = {
  uuid: string;
  timestamp: string;
  account: string;
};

export interface VerifyEthSigInput {
  /** The message to verify */
  msg: string;
  /** The signature to verify */
  sig: string;
  /** Maybe signer of the message */
  address: string;
}
export interface VerifyEthSigResult {
  /** The validity for this result, false if invalid */
  isValid: boolean;
  /** The extracted address */
  address: string;
}
