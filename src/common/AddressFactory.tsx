export default class AddressFactory {

    static getDeployerAddress(chainId: Number): string {
        switch (chainId) {
          case 25:
            return "0xC1ec8665C40B8cAB988C3E126d96d28Bbcdd550a"; // Mainnet
          case 5:
          case 338:
            return "0x60fE283F72f309F0900e43bcd4Ce74FfA0e81935"; //Testnet
          default:
            return "";
        }
      }

      static getHyenaLottery(chainId: number): string {
        switch (chainId) {
          case 25:
            return "0xA24480744F01616e261D129a4dA268DeEB640ed9";
          case 5:
          case 338: // CRO TEST
            return "";
          default:
            return "";
        }
      }

      static getHyenaCasino(chainId: number): string {
        switch (chainId) {
          case 25:
            return "0x62f0a7C28588E2DFd2f8ddac0Dd394E9A46130Eb";
          case 5:
          case 338: // CRO TEST
            return "";
          default:
            return "";
        }
      }

      static getHustlers(chainId: number): string {
        switch (chainId) {
          case 25:
            return "0xA5353D17cC3F30DC07D6B0C5510a15Ce382B14A4";
          case 5:
          case 338: // CRO TEST
            return "";
          default:
            return "";
        }
      }

      static getHyenaRaffle(chainId: number): string {
        switch (chainId) {
          case 25:
            return "0x6De751fc359a32eDd3cd4164f8750f303f4BCE03";
          case 5:
          case 338: // CRO TEST
            return "";
          default:
            return "";
        }
      }

      static getHyenaAddress(chainId: Number): string {
        switch (chainId) {
          case 25:
            return "0x257f30fbD890840FA00c2e0f043cF5Ad9A631546";
          case 5:
          case 338: // CRO TEST
            return "0x2e38789FAe68D645D651A3cC5e27aD73004Ae71D";
          default:
            // Account #0 Private Key: 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80
            return "";
        }
      }

    static getRpcUrl(chainId: Number | undefined): string | undefined {
        switch (chainId) {
            case 25:
                return 'https://evm.cronos.org/';
            case 338:
                return 'https://evm-t3.cronos.org';
            default:
                return 'https://evm.cronos.org';
        }
    }

    static getRoyaltiesAddress(chainId: Number): string {
      switch (chainId) {
        case 25:
          return "0xf966c9722bc8b320ec738db2e2d10ba2ef075756"; // Mainnet
        case 5:
        case 338:
          return "0x36c911fce2be145c338f10184832c95be7dd5f43"; //Testnet
        default:
          return "";
      }
    }

    static formatAddress(address: string): string {
        return address && address.length > 20 ? `${address.substring(0, 7)}...${address.substring(address.length - 5)}` : '';
    }
}
