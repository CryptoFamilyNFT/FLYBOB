export interface IAccount {
    balance?: number;
    croAmount?: number;
    connected?: boolean;
    addressSigner?: string;
    //whitelisted?: boolean;
    isBobHolder?: boolean;
    BobTokenIds?: any[];
    score?: number;
  }