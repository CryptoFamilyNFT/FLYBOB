import { BigNumber } from "ethers";

export interface RaffleStruct {
    pausedRf?: boolean;
    poolIdRf?: number;
    players?: string[];
    maxTickets?: number;
    ticketPrice?: number;
    numFreeTickets?: number;
    nftContract?: string;
    name?: string;
    tokenId?: number;
    rank?: number;
    lastOpenTimestampRf?: number;
    lastWinTimestampRf?: number;
    recentWinner?: string;
}

export interface FreeTicketStruct {
    amount?: BigNumber;
    lastClaimedRaffle?: BigNumber;
}

export interface PoolStructRaffle {
    poolIdRaffle?: BigNumber;
    totalFunds?: string;
    totalFundsClaimed?: string;
    endTime?: BigNumber;
    isEnabled?: boolean;
    isOnlyHolders?: boolean;
    isFreeTickets?: boolean;
    rafflFundsPerc?: BigNumber;
    isRaffleActive?: boolean;
    historyRaffle?: RaffleStruct[];
  }
