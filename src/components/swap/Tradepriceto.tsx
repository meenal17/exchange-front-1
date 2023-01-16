import React from 'react'
import { Price } from '@pancakeswap-libs/sdk'
// import { useContext } from 'react'
import { RotateCw } from 'react-feather'
import { Text } from 'rebass'
// import { ThemeContext } from 'styled-components'
import { StyledBalanceMaxMini } from './styleds'

interface TradePriceProps {
  price?: Price
  showInverted: boolean
  setShowInverted: (showInverted: boolean) => void
}

export default function TradePriceto({ price, showInverted, setShowInverted }: TradePriceProps) {
  // const theme = useContext(ThemeContext)

  const formattedPrice = showInverted ? price?.toSignificant(6) : price?.invert()?.toSignificant(6)

  const show = Boolean(price?.baseCurrency && price?.quoteCurrency)
  const label = showInverted
    ? `1 ${price?.quoteCurrency?.symbol} =  ${formattedPrice ?? '-'} ${price?.baseCurrency?.symbol}`
    : `1 ${price?.baseCurrency?.symbol} = ${formattedPrice ?? '-'}  ${price?.quoteCurrency?.symbol}`


  
  return (
    <Text
      fontWeight={500}
      fontSize={13}
      color="#dad8d8"
      style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}
    >
      {show ? (
        <>
         {label}  
        <StyledBalanceMaxMini onClick={() => setShowInverted(!showInverted)}>
            <RotateCw size={14} />
          </StyledBalanceMaxMini>
         
        </>
      ) : (
        '-'
      )}
    </Text>
  )
}
