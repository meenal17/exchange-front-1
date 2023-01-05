import React, { createContext, useEffect, useState, useCallback } from 'react'
import BigNumber from 'bignumber.js'
import multicall from '../utils/multicall'
import erc20 from '../constants/abis/erc20.json'
import { getBalanceNumber } from '../utils/formatBalance'
import { useBlock } from '../hooks/useBlock'

export interface PriceContext {
  htPrice: number
  pippiPrice: number
}

export const Context = createContext<PriceContext>({
  htPrice: 0,
  pippiPrice: 0,
})

const PriceProvider: React.FC = ({ children }) => {
  const block = useBlock()
  const [price, setPrice] = useState({
    htPrice: 0,
    pippiPrice: 0,
  })

  const fetchBalance = useCallback(async () => {
    const calls = [
      {
         // bnb
         address:'0xae13d989dac2f0debff460ac112a837c89baa7cd',
         name: 'balanceOf',
         // todo: replace address
         params: ['0xc84869a250a2394c77999010d59cb074A32A7857']
      }
    ]
    try {
      const [busd, bnb0, cake, bnb1] = await multicall(erc20, calls)
      
      const htPrice =
        getBalanceNumber(new BigNumber(busd), 6) /
        getBalanceNumber(new BigNumber(bnb0))
      const cakebnb =
        getBalanceNumber(new BigNumber(bnb1)) /
        getBalanceNumber(new BigNumber(cake))
      const pippiPrice = cakebnb * htPrice
  

      setPrice({
        htPrice,
        pippiPrice,
      })
      console.log(pippiPrice,"pippiPrice");
      

    } 
    
    catch (error) {
      // console.log('error..', error)
    }
  }, [])

  useEffect(() => {
    fetchBalance()
  }, [setPrice, block, fetchBalance])

  return <Context.Provider value={{ ...price }}>{children}</Context.Provider>
}

export default PriceProvider