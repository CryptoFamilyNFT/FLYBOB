import React, { ReactNode, useEffect, useState } from 'react';

const ChainAvatar: React.FC<{chainId: number, children?:ReactNode}> = ({chainId, children}) => {
  const [imageSrc, setImageSrc] = useState('');

  useEffect(()=> {
      let src: string = '';
      switch(chainId){ //TODO read from config
        case 1:
        case 5:
        case 31337:
            src='/ethereum-eth-logo.png';
            break;
        case 25:
        case 338:
            src='/crypto-com-coin-cro-logo.png';
            break;
        case 43114:
        case 43113:
            src='/avalanche-avax-logo.png';
        break;
        case 56:
        case 97:
            src='/bnb-bnb-logo.png';
        break;
        case 250:
        case 4002:
            src='/fantom-ftm-logo.png';
        break;
        case 137:
        case 80001:
            src='/polygon-matic-logo.png';
            break;
        default:
            break;
      }
      setImageSrc(src);
  }, [chainId]);

    return ( 
        <img
        src={imageSrc}
        style={{width: 35, height: 35, marginLeft: 5, marginRight: 5}}
        alt=""
      >
        {children}
      </img>
  );
}

export default ChainAvatar;