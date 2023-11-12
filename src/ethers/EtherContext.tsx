import React from "react";
import { EtherContextRepository } from "./EtherContextRepository";

export const EtherContext = React.createContext<EtherContextRepository | null>(null);

export type { EtherContextRepository };
