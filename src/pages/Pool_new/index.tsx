import React, { useContext, useMemo } from 'react'
import { ThemeContext } from 'styled-components'
import { Pair } from '@pancakeswap-libs/sdk'
// import { Link } from 'react-router-dom'
// import { SwapPoolTabs } from '../../components/NavigationTabs'

// import Question from '../../components/QuestionHelper'
import FullPositionCard from '../../components/PositionCard_new'
// import { useUserHasLiquidityInAllTokens } from '../../data/V1'
import { useTokenBalancesWithLoadingIndicator } from '../../state/wallet/hooks'
import { TYPE } from '../../components/Shared'
// import { Text } from 'rebass'
import { LightCard } from '../../components/Card'
// import { RowBetween } from '../../components/Row'
// import { ButtonPrimary } from '../../components/Button'
// import { AutoColumn } from '../../components/Column'

import { useActiveWeb3React } from '../../hooks'
import { usePairs } from '../../data/Reserves'
import { toV2LiquidityToken, useTrackedTokenPairs } from '../../state/user/hooks'
// import AppBody from '../AppBody'
import { Dots } from '../../components/swap/styleds'
import TranslatedText from '../../components/TranslatedText'
import { useI18n } from 'i18n/i18n-react'

export default function Pool() {
  const i18n = useI18n()
  const theme = useContext(ThemeContext)
  const { account } = useActiveWeb3React()

  // fetch the user's balances of all tracked V2 LP tokens
  const trackedTokenPairs = useTrackedTokenPairs()
  const tokenPairsWithLiquidityTokens = useMemo(
    () => trackedTokenPairs.map(tokens => ({ liquidityToken: toV2LiquidityToken(tokens), tokens })),
    [trackedTokenPairs]
  )
  const liquidityTokens = useMemo(() => tokenPairsWithLiquidityTokens.map(tpwlt => tpwlt.liquidityToken), [
    tokenPairsWithLiquidityTokens
  ])
  const [v2PairsBalances, fetchingV2PairBalances] = useTokenBalancesWithLoadingIndicator(
    account ?? undefined,
    liquidityTokens
  )

  // fetch the reserves for all V2 pools in which the user has a balance
  const liquidityTokensWithBalances = useMemo(
    () =>
      tokenPairsWithLiquidityTokens.filter(({ liquidityToken }) =>
        v2PairsBalances[liquidityToken.address]?.greaterThan('0')
      ),
    [tokenPairsWithLiquidityTokens, v2PairsBalances]
  )

  const v2Pairs = usePairs(liquidityTokensWithBalances.map(({ tokens }) => tokens))
  const v2IsLoading =
    fetchingV2PairBalances || v2Pairs?.length < liquidityTokensWithBalances.length || v2Pairs?.some(V2Pair => !V2Pair)

  const allV2PairsWithLiquidity = v2Pairs.map(([, pair]) => pair).filter((v2Pair): v2Pair is Pair => Boolean(v2Pair))

  // const hasV1Liquidity = useUserHasLiquidityInAllTokens()

  return (
    <>
      

            {!account ? (
              <LightCard >
                <TYPE.body color={theme.colors.text3} textAlign="center">
                  {i18n(768, 'Connect to a wallet to view your liquidity.')}
                </TYPE.body>
              </LightCard>
            ) : v2IsLoading ? (
              <LightCard >
                <TYPE.body color={theme.colors.text3} textAlign="center">
                  <Dots>Loading</Dots>
                </TYPE.body>
              </LightCard>
            ) : allV2PairsWithLiquidity?.length > 0 ? (
              <>
                {allV2PairsWithLiquidity.map(v2Pair => (
                  <FullPositionCard key={v2Pair.liquidityToken.address} pair={v2Pair} />
                ))}
              </>
            ) : (
              <LightCard padding="40px">
                <TYPE.body color={theme.colors.text3} textAlign="center">
                  <TranslatedText translationId={292}>No liquidity found.</TranslatedText>
                </TYPE.body>
              </LightCard>
            )}

      
    </>
  )
}
