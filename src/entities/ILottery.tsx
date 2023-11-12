import { ethers } from "ethers";

export interface LotteryEnterEvent {
    player?: string;
  }

  export interface OwnershipTransferredEvent {
    previousOwner?: string;
    newOwner?: string;
  }

  export interface WinnerPickedEvent {
    player?: string;
    prize?: ethers.BigNumber;
  }

  export interface LotteryStruct {
    paused?: boolean;
    poolId?: number;
    players?: string[];
    lastOpenTimestamp?: Date;
    lastWinTimestamp?: Date;
    recentWinner?: string;
  }

  export interface PoolStruct {
    onlyHolders?: boolean;
    maxTickets?: number;
    ticketPrice?: number;
    winnerPerc?: number;
    maxTime?: number;
    isLotteryActive?: boolean;
    history?: LotteryStruct[];
  }

