export const contractAddresses = {
  weth: {
    56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    97: '0xae13d989dac2f0debff460ac112a837c89baa7cd'
  }
}

const multicall = {
  97: '0x8F3273Fb89B075b1645095ABaC6ed17B2d4Bc576',
  56: '0xfF6FD90A470Aaa0c1B8A54681746b07AcdFedc9B'
}

const chainId =97

interface AddressProps {
  97: string // Address of the contract
}
export const getAddress = (obj: AddressProps) => {
  return obj[chainId] ? obj[chainId] : obj
}

export const getMulticallAddress = () => {
  return multicall[chainId]
}

export const getPipiAddress = () => {
  return getAddress(contractAddresses.weth)
}
