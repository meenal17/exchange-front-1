import { ChainId } from '@pancakeswap-libs/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xfF6FD90A470Aaa0c1B8A54681746b07AcdFedc9B', // TODO
  [ChainId.TESTNET]: '0x8F3273Fb89B075b1645095ABaC6ed17B2d4Bc576'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
