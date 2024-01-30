/* eslint-disable @typescript-eslint/no-unused-vars */

import { IEtherContext } from "./IEtherContext";
import { IAccount } from "../entities/IAccount";
import { IWalletInfo } from "../entities/IWalletInfo";
import { IToast } from "../entities/IToast";
import { BigNumber, Contract, ethers } from "ethers";
import AddressFactory from "../common/AddressFactory";
import BobPassABI from './abi/BobPassABI.json'
import { TopScore } from "../containers/Menu/TopScore";

// @ts-ignore
const { ethereum } = window;

type Listener = (...args: Array<any>) => void;

export default class EtherHelper {

    public static getChainId(): number { return process.env.REACT_APP_CHAINID ? Number(process.env.REACT_APP_CHAINID) : 25; }

    private static initProvider(): ethers.providers.Web3Provider {
        const chainid = this.getChainId();
        const provider = new ethers.providers.JsonRpcProvider(AddressFactory.getRpcUrl(chainid)) as ethers.providers.Web3Provider;
        if (process.env.REACT_APP_WEB && process.env.REACT_APP_WEB === "1") return provider;
        return ethereum ? new ethers.providers.Web3Provider(ethereum) : provider;
    }

    public static initialAccount(): IAccount {
        return {
            balance: undefined,
            croAmount: 0,
            connected: false
        } as IAccount;
    }

    public static initialToast(): IToast {
        return {
            toastId: undefined,
            toastDescription: '',
            toastStatus: "success",
            toastTitle: '',
            toastLink: undefined
        } as IToast;
    }


    public static async getURI(collectionAddress: string, tokenId: number, context: IEtherContext) {
        try {
            const provider = EtherHelper.initProvider();
            const signer = provider.getSigner(context.addressSigner);
            let uri_solved

            const collectionContract = new ethers.Contract(
                collectionAddress,
                ['function tokenURI(uint256 tokenId) view returns (string)'],
                provider
            );

            const uri = await collectionContract.tokenURI(tokenId);
            console.log(uri)

            const uriWO = uri.slice(8)
            console.log(uri)
            if (uriWO.slice(0, 3) === 'cdn') {
                uri_solved = uri
            } else {
                uri_solved = 'https://ipfs.filebase.io/ipfs/' + uri.slice(7);
            }

            if (collectionAddress === '0xA5353D17cC3F30DC07D6B0C5510a15Ce382B14A4') {
                uri_solved = uri
            }

            console.log('URI del token NFT:', uri_solved);

            const response = await fetch(uri_solved);

            if (!response.ok) {
                throw new Error(`Errore durante il recupero dell'URI risolto: ${response.status}`);
            }

            const tokenData = await response.json();
            return tokenData;
        } catch (error) {
            console.error('Errore durante il recupero dei dati NFT:', error);
            throw error; // Puoi propagare l'errore per gestirlo nella funzione chiamante, se necessario.
        }
    }

    public static async connect(context: IEtherContext): Promise<IEtherContext> {
        try {
            console.log("EtherHelper.connect");
            const provider = EtherHelper.initProvider();

            if (!context.chainId) context = await this.getNetwork(provider, context);

            let accounts = await provider.send("eth_requestAccounts", []);
            // return this.querySignerInfo({...context, addressSigner: accounts[0], connected: true});
            return this.queryProviderInfo({ ...context, addressSigner: accounts[0], connected: true }).then(this.querySignerInfo)

        } catch (error) {
            console.log("EtherHelper.connect FAILED: ", JSON.stringify(error))
        }

        return context;
    }

    public static async getNetwork(provider: ethers.providers.Web3Provider, context: IEtherContext): Promise<IEtherContext> {
        const network = await provider.getNetwork();
        const chainId = network.chainId ? BigNumber.from(network.chainId).toNumber() : 25;

        return {
            ...context,
            chainId: chainId,
            chainSymbol: network.ensAddress ? await provider.getCode(network.ensAddress) : "CRO"
        };
    }

    public static async disconnect(context: IEtherContext): Promise<IEtherContext> {
        this.disconnectListeners(); // TODO correct place?
        return this.queryProviderInfo({ loaded: false, reload: true });
    }

    public static async mint(context: IEtherContext, amount: number): Promise<IEtherContext> {
        try {
            if (!context.connected) return context;
            const provider = EtherHelper.initProvider();
            const signer = provider.getSigner(context.addressSigner)

            const BobPass = new Contract('0x41C7874A2fE9D1ea126bfBD44597A1f96546152e', BobPassABI, signer)

            const tx = await BobPass.connect(signer).mint(amount)
            let transactionResult = await tx.wait();
            console.log('EtherHelper.mint Transaction Hash: ', JSON.stringify(transactionResult.transactionHash));
            context = {
                ...context, toastId: `mint_${transactionResult.transactionHash}`, toastStatus: 'success', toastTitle: 'Bob Mint', toastDescription: `Successfully minted your Bob Invitations`,
            }
        } catch (e) {
            context = { ...context, toastId: `mintError_${Date.now()}`, toastStatus: 'error', toastTitle: 'Bob Invitations Mint', toastDescription: `FAILED to mint: ${(e as Error)?.message.split(';')[0]}` };
            console.log("EtherProvider.mint Error: ", JSON.stringify(e))
        }
        console.log("mint")
        return await this.querySignerInfo({ ...context }).then(this.queryProviderInfo);
    }

    public static async querySignerInfo(context: IEtherContext): Promise<IEtherContext> {
        if (!context.addressSigner) return context;
        const provider = EtherHelper.initProvider();
        const chainId = EtherHelper.getChainId()

        // const provider = new ethers.providers.Web3Provider(ethereum);

        if (!context.chainId) context = await this.getNetwork(provider, context);

        const signer = provider.getSigner(context.addressSigner);

        function toNumberSafe(bn: BigNumber): number {
            try {
                return bn.toNumber();
            } catch (error) {
                console.error('Error converting BigNumber to number:', error);
                return 0; // o un valore predefinito appropriato in caso di errore
            }
        }

        const croBalancePromise = signer
            .getBalance()
            .then((result: BigNumber) => context.balance = Number(ethers.utils.formatEther(result)))
            .catch((error: any) => console.log("EtherHelper.queryProviderInfo.croBalance: ", JSON.stringify(error)));
        // context.nfts = [];
        const userAddress: string = context.addressSigner || '';

        await Promise.all([croBalancePromise]);

        return context;
    }

    public static async BobBalanceOf(context: IEtherContext) {
        const provider = EtherHelper.initProvider();
        const signer = provider.getSigner(context.addressSigner);
        const BobPass = new Contract('0x41C7874A2fE9D1ea126bfBD44597A1f96546152e', BobPassABI, signer)

        if (context.connected) {
            try {
                const balance = await BobPass.balanceOf(context.addressSigner ?? '').then((i: { toNumber: () => any; }) => i.toNumber())
                console.log("balance and tokenIds: ", balance)

                const tokenIds = [];
                for (let i = 0; i < balance; i++) {
                    const tokenId = await BobPass.tokenOfOwnerByIndex(context.addressSigner ?? '', i);
                    tokenIds.push(tokenId.toNumber());
                }

                console.log("balance and tokenIds: ", balance, tokenIds);
                return tokenIds;
            } catch (e) {
                console.log("Can't fetch balanceOf owner:", e)
            }
        }
    }

    public static async getTokenURI(context: IEtherContext, tokenId: number) {
        if (context.connected) {
            const provider = EtherHelper.initProvider();
            const signer = provider.getSigner(context.addressSigner);
            const BobPass = new Contract('0x41C7874A2fE9D1ea126bfBD44597A1f96546152e', BobPassABI, signer);

            const URIpath = await BobPass.tokenURI(tokenId);
            const response = await fetch(URIpath);
            const tokenData = await response.json();
            return tokenData;
        }
    }

    /*
    ------------------ BobPassABI —-------------------------------------------------------------------------------------------------------------------
    */

    public static async getBobId(context: IEtherContext) {
        if (context.connected) {
            const provider = EtherHelper.initProvider();
            const signer = provider.getSigner(context.addressSigner);
            const BobPass = new Contract('0x41C7874A2fE9D1ea126bfBD44597A1f96546152e', BobPassABI, signer);
            try {
                if (context.connected) {
                    try {
                        const balance = await BobPass.balanceOf(context.addressSigner ?? '').then((i: { toNumber: () => any; }) => i.toNumber())
                        console.log("balance and tokenIds: ", balance)

                        const tokenIds = [];
                        for (let i = 0; i < balance; i++) {
                            const tokenId = await BobPass.tokenOfOwnerByIndex(context.addressSigner ?? '', i);
                            tokenIds.push(tokenId.toNumber());
                        }

                        console.log("balance and tokenIds: ", balance, tokenIds);
                        return tokenIds;
                    } catch (e) {
                        console.log("Can't fetch balanceOf owner:", e)
                    }
                }
            } catch (e) {
                console.log("ERROR.EtherHelper.getHustlerId: ", JSON.stringify(e))
            }
        }
    }

    private static async getBobBalanceOf(context: IEtherContext) {
        if (context.connected) {
            const provider = EtherHelper.initProvider();
            const signer = provider.getSigner(context.addressSigner);
            const BobPass = new Contract('0x41C7874A2fE9D1ea126bfBD44597A1f96546152e', BobPassABI, signer);

            try {
                const response = await BobPass.balanceOf(context.addressSigner || '');
                const tokenData = response;
                return tokenData;
            } catch (e) {
                console.log("ERROR.EtherHelper.getHustlerBalanceOf: ", JSON.stringify(e))
            }
        }
    }


    public static async getBobTokenURI(context: IEtherContext, tokenId: number) {
        if (context.connected) {
            const provider = EtherHelper.initProvider();
            const signer = provider.getSigner(context.addressSigner);
            const BobPass = new Contract('0x41C7874A2fE9D1ea126bfBD44597A1f96546152e', BobPassABI, signer);

            const URIpath = await BobPass.tokenURI(tokenId);

            const solvedURI =  'https://dweb.link/ipfs/' + URIpath.slice(7) 
            const response = await fetch(solvedURI);
            const tokenData = await response.json();
            return tokenData;
        }
    }

    public static isBOBHolders(context: IEtherContext) {
        if (context.connected === true) {
            if (context.BobTokenIds?.length || 0 >= 1) {
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    }

    /*
    ------------------—-------------------------------------------------------------------------------------------------------------------
    */

    public static async queryBobInfo(context: IEtherContext): Promise<IEtherContext> {
        if (context.loaded && !context.reload) return context;
        const today = new Date();

        const provider = EtherHelper.initProvider();
        const signer = provider.getSigner(context.addressSigner)
        const BobPass = new Contract('0x41C7874A2fE9D1ea126bfBD44597A1f96546152e', BobPassABI, signer);

        const isBOBHolders = EtherHelper.isBOBHolders(context)
        context.isBobHolder = isBOBHolders

        if (!context.chainId) context = await this.getNetwork(provider, context);

        await Promise.all([isBOBHolders]);

        return context;
    }


    public static async queryProviderInfo(context: IEtherContext): Promise<IEtherContext> {
        if (context.loaded && !context.reload) return context;


        const provider = EtherHelper.initProvider();
        const signer = provider.getSigner(context.addressSigner);
        const BobPass = new Contract('0x41C7874A2fE9D1ea126bfBD44597A1f96546152e', BobPassABI, signer)

        const tokenIds = EtherHelper.BobBalanceOf(context)
            .then((result) => context.BobTokenIds = result ?? [])
            .catch((e) => JSON.stringify(e))

        const score = TopScore(context.addressSigner ?? '')
             .then((result) => context.score = result ?? [])
             .catch((e) => console.log(e))

        if (!context.chainId) context = await this.getNetwork(provider, context);

        await Promise.all([tokenIds, score]);
        await Promise.all([this.queryBobInfo(context)])

        return context;
    }

    public static async queryOwnerProviderInfo(context: IEtherContext): Promise<IEtherContext> {

        const provider = EtherHelper.initProvider();

        /*
        if (!context.chainId) context = await this.getNetwork(provider, context);
        await Promise.all([isTokenPausedPromise, isRewardsPausedPromise, isAutoSwapEnabledPromise,
            rewardsBalancePromise, taxTokensromise, liqTokensPromise, thresholdPromise]);
        */

        return context;
    }

    //#endregion


    public static connectChainListener(chainChanged: Listener) {
        ethereum?.on('chainChanged', chainChanged);
    }

    public static connectAccountListener(accountsChanged: Listener) {
        ethereum?.on('accountsChanged', accountsChanged);
    }

    public static connectErrorListener(error: Listener) {
        ethereum?.on("error", error);
    }

    public static async getBlockTimeStamp(): Promise<number> {
        const provider = EtherHelper.initProvider();
        const block = await provider.getBlock("latest");
        return block.timestamp * 1000;
    }

    public static disconnectListeners() {
        ethereum?.removeAllListeners();
    }
}