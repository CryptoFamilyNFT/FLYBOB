import { IAccount } from "../entities/IAccount";
import { IChain } from "../entities/IChain";
import { ILink } from "../entities/ILink";
import { IToast } from "../entities/IToast";

export interface IEtherContext extends IAccount, IChain, ILink, IToast {
    loaded: boolean;
    reload: boolean;
}
