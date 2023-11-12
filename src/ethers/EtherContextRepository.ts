import { IEtherContext } from "./IEtherContext";

export type EtherContextRepository = {
    context: IEtherContext;
    saveContext: (context: IEtherContext) => void;
};
