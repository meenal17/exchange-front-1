import { Trade, TradeType } from '@pancakeswap-libs/sdk'
import React, { useContext, useMemo,useState } from 'react'
// import { Repeat } from 'react-feather'
import { Text } from 'rebass'
import { ThemeContext } from 'styled-components'
import { Field } from '../../state/swap/actions'
import { TYPE } from '../Shared'
import {
  computeSlippageAdjustedAmounts,
  computeTradePriceBreakdown,
  warningSeverity
} from '../../utils/prices'
import { useI18n } from 'i18n/i18n-react'
import { ButtonError } from '../Button'
import { AutoColumn } from '../Column'
import QuestionHelper from '../QuestionHelper'
import {  RowBetween, RowFixed } from '../Row'
import FormattedPriceImpact from './FormattedPriceImpact'
import { SwapCallbackError } from './styleds'
import {useWalletModalTogglecustome} from '../../state/application/hooks'
import TradePrice from '../../components/swap/TradePrice'
export default function SwapModalFooter({
  trade,
  onConfirm,
  allowedSlippage,
  swapErrorMessage,
  disabledConfirm
}: {
  trade: Trade
  allowedSlippage: number
  onConfirm: () => void
  swapErrorMessage: string | undefined
  disabledConfirm: boolean
}) {
  const i18n = useI18n()
  // const [showInverted, setShowInverted] = useState<boolean>(false)
  const toggleWalletModalcustome = useWalletModalTogglecustome()
  const theme = useContext(ThemeContext)
  const slippageAdjustedAmounts = useMemo(() => computeSlippageAdjustedAmounts(trade, allowedSlippage), [
    allowedSlippage,
    trade
  ])
  const [showInverted, setShowInverted] = useState<boolean>(false)
  const { priceImpactWithoutFee } = useMemo(() => computeTradePriceBreakdown(trade), [trade])
  const severity = warningSeverity(priceImpactWithoutFee)

  return (
    <>
      <AutoColumn gap="0px">
        <RowBetween align="center">
          <Text fontWeight={400} fontSize={14} color={theme.colors.text2}>
            Price
          </Text>

          <Text
            fontWeight={500}
            fontSize={14}
            color={theme.colors.text1}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
              textAlign: 'right',
              paddingLeft: '10px'
            }}
          >
          <TradePrice
                          price={trade?.executionPrice}
                          showInverted={showInverted}
                          setShowInverted={setShowInverted}
                        />
            
          </Text>
        </RowBetween>

        <RowBetween>
          <RowFixed>
            <TYPE.black fontSize={14} fontWeight={400} color={theme.colors.text2}>
              {trade.tradeType === TradeType.EXACT_INPUT
                ? i18n(828, 'Min received')
                : i18n(830, 'Min received')}
            </TYPE.black>
           
          </RowFixed>
          <RowFixed>
            <TYPE.black fontSize={14}>
              {trade.tradeType === TradeType.EXACT_INPUT
                ? slippageAdjustedAmounts[Field.OUTPUT]?.toSignificant(4) ?? '-'
                : slippageAdjustedAmounts[Field.INPUT]?.toSignificant(4) ?? '-'}
            </TYPE.black>
            <TYPE.black fontSize={14} marginLeft={'4px'}>
              {trade.tradeType === TradeType.EXACT_INPUT
                ? trade.outputAmount.currency.symbol
                : trade.inputAmount.currency.symbol}
            </TYPE.black>
          </RowFixed>
        </RowBetween>
        <RowBetween>
          <RowFixed>
            <TYPE.black color={theme.colors.text2} fontSize={14} fontWeight={400}>
            Slippage
            </TYPE.black>
           
          </RowFixed>
          <TYPE.black>
          {allowedSlippage / 100}% <i className="fa fa-pencil" aria-hidden="true" style={{cursor:"pointer"}} onClick={toggleWalletModalcustome}></i>
          </TYPE.black>
        
        </RowBetween>
        <RowBetween>
          <RowFixed>
            <TYPE.black color={theme.colors.text2} fontSize={14} fontWeight={400}>
              {i18n(836, 'Price Impact')}
            </TYPE.black>
            <QuestionHelper
              text={i18n(
                834,
                'The difference between the market price and estimated price due to trade size.'
              )}
            />
          </RowFixed>
          <FormattedPriceImpact priceImpact={priceImpactWithoutFee} />
        </RowBetween>
      
      </AutoColumn>

      <div style={{display:"flex",justifyContent:"center",textAlign:"center"}}>
        <ButtonError
          onClick={onConfirm}
          disabled={disabledConfirm}
          error={severity > 2}
          style={{ margin: '10px 0 0 0' }}
          id="confirm-swap-or-send"
        >
          <Text fontSize={20} fontWeight={500}>
            {severity > 2 ? 'Swap Anyway' : 'Confirm Swap'}
          </Text>
        </ButtonError>

        {swapErrorMessage ? <SwapCallbackError error={swapErrorMessage} /> : null}
      </div>
    </>
  )
}
