import { ETHER, Token } from '@pancakeswap-libs/sdk'
import React, { useMemo } from 'react'
import styled from 'styled-components'

import EthereumLogo from '../../assets/images/binance-logo.png'
import useHttpLocations from '../../hooks/useHttpLocations'
import { WrappedTokenInfo } from '../../state/lists/hooks'
import Logo from '../Logo'
import CoinLogo from '../../components/pancake/CoinLogo'
import Iconjson from '../../constants/token/puddingswap.json'

const getTokenLogoURL = (address: string) =>{
const ad = Iconjson['tokens'].filter((item) => item.address === address)
// console.log("myurl::",ad)
return ad[0]?ad[0]['logoURI']:''
}

const StyledEthereumLogo = styled.img<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);
  border-radius: 24px;
`

const StyledLogo = styled(Logo)<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
`

export default function CurrencyLogo({
  currency,
  size = '24px',
  style
}: {
  currency?: any
  size?: string
  style?: React.CSSProperties
}) {
  const uriLocations = useHttpLocations(currency instanceof WrappedTokenInfo ? currency.logoURI : undefined)

  const srcs: string[] = useMemo(() => {
    if (currency === ETHER) return []

    if (currency instanceof Token) {
      if (currency instanceof WrappedTokenInfo) {
        return [...uriLocations, getTokenLogoURL(currency.address)]
      }

      return [getTokenLogoURL(currency.address)]
    }
    return []
  }, [currency, uriLocations])

  if (currency === ETHER) {
    return <StyledEthereumLogo src={EthereumLogo} size={size} style={style} />
  }
  return (currency as any)?.address ? (
    <CoinLogo
    size={size}
    srcs={[currency.tokenInfo ? currency.tokenInfo.logoURI : getTokenLogoURL((currency as any)?.address)]}
    alt={currency.tokenInfo ? currency.tokenInfo.symbol : currency.symbol}
    style={style}
  />
) : (
  <StyledLogo size={size} srcs={srcs} alt={`${currency?.symbol ?? 'token'} logo`} style={style} />
)
}
