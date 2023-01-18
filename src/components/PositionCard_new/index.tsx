import { JSBI, Pair, Percent } from '@pancakeswap-libs/sdk'
import { darken } from 'polished'
import React, { useState } from 'react'
import { ChevronsDown, ChevronsUp } from 'react-feather'
import { Link } from 'react-router-dom'
import { Text } from 'rebass'
import styled from 'styled-components'
import { useTotalSupply } from '../../data/TotalSupply'

import { useActiveWeb3React } from '../../hooks'
import { useTokenBalance } from '../../state/wallet/hooks'
import { currencyId } from '../../utils/currencyId'
import { unwrappedToken } from '../../utils/wrappedCurrency'
import { ButtonSecondary, ButtonOutlined } from '../Button'

import Card, { GreyCard } from '../Card'
import { AutoColumn } from '../Column'
import CurrencyLogo from '../CurrencyLogo'
import DoubleCurrencyLogo from '../DoubleLogo'
import { RowBetween, RowFixed } from '../Row'
// import { Dots } from '../swap/styleds'
export const FixedHeightRow = styled(RowBetween)`
  height: 24px;
`

export const MyRowfixed = styled.div`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  -ms-flex-align: center;
  width: -moz-fit-content;
  justify-content: space-between;
`
export const Childcard = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  padding: 20px 0 0;
  ${({ theme }) => theme.mediaWidth.upToMedium`
white-space: nowrap;
 padding:unset;
`};
`
export const HoverCard = styled(Card)`
  // border: 1px solid ${({ theme }) => theme.colors.bg2};
  border:1px solid transparent!important;
  background:linear-gradient(88deg,#09393657,#181616);
  margin-top:10px;
  :hover {
    border: 1px solid ${({ theme }) => darken(0.06, theme.colors.bg2)};
  }
`

interface PositionCardProps {
  pair: Pair
  showUnwrapped?: boolean
  border?: string
}

export function MinimalPositionCard({ pair, showUnwrapped = false, border }: PositionCardProps) {
  const { account } = useActiveWeb3React()

  const currency0 = showUnwrapped ? pair.token0 : unwrappedToken(pair.token0)
  const currency1 = showUnwrapped ? pair.token1 : unwrappedToken(pair.token1)

  const [showMore, setShowMore] = useState(false)
  const [lf, setLF] = useState(true)
  const userPoolBalance = useTokenBalance(account ?? undefined, pair.liquidityToken)
  const totalPoolTokens = useTotalSupply(pair.liquidityToken)

  const [token0Deposited, token1Deposited] =
    !!pair &&
    !!totalPoolTokens &&
    !!userPoolBalance &&
    // this condition is a short-circuit in the case where useTokenBalance updates sooner than useTotalSupply
    JSBI.greaterThanOrEqual(totalPoolTokens.raw, userPoolBalance.raw)
      ? [
          pair.getLiquidityValue(pair.token0, totalPoolTokens, userPoolBalance, false),
          pair.getLiquidityValue(pair.token1, totalPoolTokens, userPoolBalance, false)
        ]
      : [undefined, undefined]

  function myFunction() {
    var x = document.getElementById('postiondivto')?.style
    var y = document.getElementById('innercardto')?.style
    if (x?.height === '145px') {
      x?.setProperty('height', '0px')
      y?.setProperty('visibility', 'hidden')
      setLF(false)
    } else {
      x?.setProperty('height', '145px')
      y?.setProperty('visibility', 'visible')
      setLF(true)
    }
  }

  return (
    <>
      {account ? (
        <>
          <div id="postiondivto" style={{ height: '145px' }}>
            <span onClick={myFunction}>
              {lf ? <ChevronsDown className="iconjn" /> : <ChevronsUp className="iconjn" />}
            </span>

            {userPoolBalance && (
              <GreyCard id="innercard" border={border}>
                <AutoColumn gap="12px">
                  <FixedHeightRow>
                    <RowFixed>
                      <Text fontWeight={500} fontSize={16}>
                        Your position
                      </Text>
                    </RowFixed>
                  </FixedHeightRow>
                  <FixedHeightRow onClick={() => setShowMore(!showMore)}>
                    <RowFixed>
                      <DoubleCurrencyLogo currency0={currency0} currency1={currency1} margin={true} size={20} />
                      <Text fontWeight={500} fontSize={17}>
                        {currency0.symbol}/{currency1.symbol}
                      </Text>
                    </RowFixed>
                    <RowFixed>
                      <Text fontWeight={500} fontSize={20} style={{ color: '#fff' }}>
                        {userPoolBalance ? userPoolBalance.toSignificant(4) : '-'}
                      </Text>
                    </RowFixed>
                  </FixedHeightRow>
                  <AutoColumn gap="4px">
                    <FixedHeightRow>
                      <Text color="#fff" fontSize={16} fontWeight={500}>
                        {currency0.symbol}:
                      </Text>
                      {token0Deposited ? (
                        <RowFixed>
                          <Text color="#fff" fontSize={16} fontWeight={500} marginLeft={'6px'}>
                            {token0Deposited?.toSignificant(6)}
                          </Text>
                        </RowFixed>
                      ) : (
                        '-'
                      )}
                    </FixedHeightRow>
                    <FixedHeightRow>
                      <Text color="#fff" fontSize={16} fontWeight={500}>
                        {currency1.symbol}:
                      </Text>
                      {token1Deposited ? (
                        <RowFixed>
                          <Text color="#fff" fontSize={16} fontWeight={500} marginLeft={'6px'}>
                            {token1Deposited?.toSignificant(6)}
                          </Text>
                        </RowFixed>
                      ) : (
                        '-'
                      )}
                    </FixedHeightRow>
                  </AutoColumn>
                </AutoColumn>
              </GreyCard>
            )}
          </div>
        </>
      ) : null}
    </>
  )
}

export default function FullPositionCard({ pair, border }: PositionCardProps) {
  const { account } = useActiveWeb3React()

  const currency0 = unwrappedToken(pair.token0)
  const currency1 = unwrappedToken(pair.token1)

  // const [showMore, setShowMore] = useState(false)

  const userPoolBalance = useTokenBalance(account ?? undefined, pair.liquidityToken)
  const totalPoolTokens = useTotalSupply(pair.liquidityToken)

  const poolTokenPercentage =
    !!userPoolBalance && !!totalPoolTokens && JSBI.greaterThanOrEqual(totalPoolTokens.raw, userPoolBalance.raw)
      ? new Percent(userPoolBalance.raw, totalPoolTokens.raw)
      : undefined

  const [token0Deposited, token1Deposited] =
    !!pair &&
    !!totalPoolTokens &&
    !!userPoolBalance &&
    // this condition is a short-circuit in the case where useTokenBalance updates sooner than useTotalSupply
    JSBI.greaterThanOrEqual(totalPoolTokens.raw, userPoolBalance.raw)
      ? [
          pair.getLiquidityValue(pair.token0, totalPoolTokens, userPoolBalance, false),
          pair.getLiquidityValue(pair.token1, totalPoolTokens, userPoolBalance, false)
        ]
      : [undefined, undefined]

  return (
    <HoverCard border={border}>
      <AutoColumn gap="12px">
        <AutoColumn gap="8px">
          <FixedHeightRow>
            <MyRowfixed>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <CurrencyLogo currency={currency0} />
                <CurrencyLogo currency={currency1} style={{ marginLeft: '-6px', marginRight: '10px' }} />

                {currency0.symbol}
                <span style={{ fontSize: '25px', padding: '3px' }}>/</span>
                {currency1.symbol}
              </div>

              <div style={{ marginTop: '10px' }}>
                <ButtonSecondary
                  as={Link}
                  to={`/add/${currencyId(currency0)}/${currencyId(currency1)}`}
                  style={{ padding: '7px 16px' }}
                >
                  Add
                </ButtonSecondary>

                <ButtonOutlined
                  as={Link}
                  to={`/remove/${currencyId(currency0)}/${currencyId(currency1)}`}
                  style={{ marginLeft: '10px', padding: '5px 16px' }}
                >
                  <span className="customtextstyle">Remove</span>
                </ButtonOutlined>
              </div>
            </MyRowfixed>
          </FixedHeightRow>
          <Childcard>
            <div>
              <div style={{ marginTop: '10px' }}>
                {token0Deposited ? <div className="fontss">{token0Deposited?.toSignificant(6)}</div> : '-'}
                <div className="sub-font">Pooled {currency0.symbol}</div>
              </div>
            </div>

            <div>
              <div style={{ marginTop: '10px' }}>
                {token1Deposited ? <div className="fontss">{token1Deposited?.toSignificant(6)}</div> : '-'}
                <div className="sub-font">Pooled {currency1.symbol}</div>
              </div>
            </div>
            {/* <FixedHeightRow>
              <Text fontSize={16} fontWeight={500}>
                Your pool tokens:
              </Text>
              <Text fontSize={16} fontWeight={500}>
                {userPoolBalance ? userPoolBalance.toSignificant(4) : '-'}
              </Text>
            </FixedHeightRow> */}
            <div>
              <div style={{ marginTop: '10px' }}>
                <div className="fontss">{poolTokenPercentage ? poolTokenPercentage.toFixed(2) + '%' : '-'}</div>
                <div className="sub-font">Pool share</div>
              </div>
            </div>
          </Childcard>
        </AutoColumn>
      </AutoColumn>
    </HoverCard>
  )
}
