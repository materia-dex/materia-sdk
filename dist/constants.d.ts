import JSBI from 'jsbi';
export declare type BigintIsh = JSBI | bigint | string;
export declare enum ChainId {
    MAINNET = 1,
    ROPSTEN = 3,
    RINKEBY = 4,
    GÖRLI = 5,
    KOVAN = 42
}
export declare enum TradeType {
    EXACT_INPUT = 0,
    EXACT_OUTPUT = 1
}
export declare enum Rounding {
    ROUND_DOWN = 0,
    ROUND_HALF_UP = 1,
    ROUND_UP = 2
}
export declare const ChainName: {
    1: string;
    3: string;
    4: string;
    5: string;
    42: string;
};
export declare const DEFAULT_CHAIN_ID = ChainId.ROPSTEN;
export declare const INFURA_PROJECT_KEY = "b038585ef8b84eb7a116e796d9403896";
export declare const INFURA_ADDRESS: string;
export declare const PROXY_ADDRESS = "0x93c2504a7fc50808Ff9AF73ac68a6479f04D6806";
export declare const FACTORY_ADDRESS = "0x9Be8177C4395Cc27de34aeB8F231FA39513C155D";
export declare const ERC20_WRAPPER_V1_ADDRESS = "0x651A6837457f1f7179a590deC647Ec5D647B8231";
export declare const INIT_CODE_HASH = "0xf79c9250dcc326869d68244ec72bf9db8eef77e832de86e4ddb5d4aa37376d68";
export declare const MINIMUM_LIQUIDITY: JSBI;
export declare const ZERO: JSBI;
export declare const ONE: JSBI;
export declare const TWO: JSBI;
export declare const THREE: JSBI;
export declare const FIVE: JSBI;
export declare const TEN: JSBI;
export declare const _100: JSBI;
export declare const _997: JSBI;
export declare const _1000: JSBI;
export declare const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
export declare enum SolidityType {
    uint8 = "uint8",
    uint256 = "uint256"
}
export declare const SOLIDITY_TYPE_MAXIMA: {
    uint8: JSBI;
    uint256: JSBI;
};
export declare const SWAP_ACTION_EXACT_TOKENS_FOR_ETH_SUPPORTING_FEE_ON_TRANSFER_TOKENS = 1;
export declare const SWAP_ACTION_EXACT_TOKENS_FOR_ETH = 2;
export declare const SWAP_ACTION_EXACT_TOKENS_FOR_TOKENS_SUPPORTING_FEE_ON_TRANSFER_TOKENS = 3;
export declare const SWAP_ACTION_EXACT_TOKENS_FOR_TOKENS = 4;
export declare const SWAP_ACTION_TOKENS_FOR_EXACT_ETH = 5;
export declare const SWAP_ACTION_TOKENS_FOR_EXACT_TOKENS = 6;
export declare const ADD_LIQUIDITY_ACTION_SAFE_TRANSFER_TOKEN = 7;
export declare const REMOVE_LIQUIDITY_ACTION_TOKEN = 8;
export declare const REMOVE_LIQUIDITY_ACTION_ETH = 9;
export declare const REMOVE_LIQUIDITY_ACTION_ETH_SUPPORTING_FEE_ON_TRANSFER_TOKENS = 10;
