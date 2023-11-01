type GetDeterministicIdInput = {
    uuid: string;
    timestamp: string;
    account: string;
};

declare function getDeterministicId({ uuid, timestamp, account }: GetDeterministicIdInput): string;

export { GetDeterministicIdInput, getDeterministicId };
