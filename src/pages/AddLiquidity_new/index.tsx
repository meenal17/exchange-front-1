import { BigNumber } from '@ethersproject/bignumber'
import { TransactionResponse } from '@ethersproject/providers'
import { Currency, ETHER, TokenAmount, CurrencyAmount, Fraction, Percent } from '@pancakeswap-libs/sdk'
import React, { useCallback, useContext, useState } from 'react'
import { Plus } from 'react-feather'
import ReactGA from 'react-ga'
import { RouteComponentProps } from 'react-router-dom'
import { Text } from 'rebass'
import { ThemeContext } from 'styled-components'
import { ButtonError, ButtonLight, ButtonPrimary } from '../../components/Button'
import { BlueCard } from '../../components/Card'
import { AutoColumn, ColumnCenter } from '../../components/Column'
import TransactionConfirmationModal, { ConfirmationModalContent } from '../../components/TransactionConfirmationModal'
import CurrencyInputPanel from '../../components/CurrencyInputPanel'
// import DoubleCurrencyLogo from '../../components/DoubleLogo'
import { AddRemoveTabs } from '../../components/NavigationTabs'
// import { MinimalPositionCard } from '../../components/PositionCard'
import  { RowBetween,RowFixed} from '../../components/Row'
import TradePriceto from '../../components/swap/Tradepriceto'
import { ROUTER_ADDRESS } from '../../constants'
import { PairState } from '../../data/Reserves'
import { useActiveWeb3React } from '../../hooks'
import { useCurrency } from '../../hooks/Tokens'
import { ApprovalState, useApproveCallback } from '../../hooks/useApproveCallback'
import { useWalletModalToggle } from '../../state/application/hooks'
import { Field } from '../../state/mint/actions'
import { useDerivedMintInfo, useMintActionHandlers, useMintState } from '../../state/mint/hooks'

import { useTransactionAdder } from '../../state/transactions/hooks'
import { useIsExpertMode, useUserDeadline, useUserSlippageTolerance } from '../../state/user/hooks'
import { TYPE } from '../../components/Shared'
import { calculateGasMargin, calculateSlippageAmount, getRouterContract } from '../../utils'
import { maxAmountSpend } from '../../utils/maxAmountSpend'
import { wrappedCurrency } from '../../utils/wrappedCurrency'
// import AppBody from '../AppBody'
import { Dots, Wrapper } from '../Pool_new/styleds'
import styled from 'styled-components'
// import { ConfirmAddModalBottom } from './ConfirmAddModalBottom'
// import { Currency, CurrencyAmount, Fraction, Percent } from '@pancakeswap-libs/sdk'
// import CurrencyLogo from '../../components/CurrencyLogo'
import { currencyId } from '../../utils/currencyId'
import { useI18n } from 'i18n/i18n-react'
// import { PoolPriceBar } from './PoolPriceBar'
import Pool from 'pages/Pool_new'
import { JSBI } from '@pancakeswap-libs/sdk'
// import  Globe from "../Globe";
import Particle from '../particle/Particle'
import Settings from '../../components/Settings/index'
import AccountButton from '../../components/Header/AccountButton'
export const AppBody2 = styled.div`
  background: #121111;
  position: relative;
  // width: 100%;
  width: 420px;
  box-shadow: 0px 0px 10px 0px rgb(82 220 174);
  border: 1px solid grey;
  border-radius: 12px;
  padding: 1rem;
  margin-bottom: 10px;
  margin-top: 10px;
  min-height: 263px;
  /* height: 300px; */
  max-height: 551px;
  overflow: auto;
  margin-left: 20px;

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  &::-webkit-scrollbar-thumb {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background: grey;
  }

  ${({ theme }) => theme.mediaWidth.upToMedium`
margin-left:unset;
margin:25px 0px 25px 0px;
`};
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
width:320px;
margin:25px 0px 25px 0px;
`};
`

export const Appbody1 = styled.div`
  background: ${({ theme }) => theme.colors.newbg3};
  background: #121111;
  position: relative;
  float: left;
  width: 420px;
  margin-right: 20px;
  box-shadow: 0px 0px 10px 0px rgb(82 220 174);
  border: 1px solid grey;
  border-radius: 12px;
  padding: 1rem;
  /* border: 1px solid #6a7c76; */
  margin-bottom: 10px;
  margin-top: 10px;

  ${({ theme }) => theme.mediaWidth.upToMedium`
   float:unset;
   margin-right:unset;
`};
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
width:320px;
`};
`
export const Mycard = styled.div`

// background:linear-gradient(88deg,#09393657,#181616);
 border-radius:none;
margin: 8px 0px;
width: 100%;
// border-radius: 16px;
padding: 1rem;
// padding:0px;


  ${({ theme }) => theme.mediaWidth.upToMedium`
  //  float:unset;
  //  margin-right:unset;
`};
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
// width:320px;
`};
`



export const LayoutWrapper = styled.div`
  // display: -webkit-box;
  // display: -webkit-flex;
  // display: -ms-flexbox;
  // display: flex;
  // -webkit-flex-direction: unset !important;
  // -ms-flex-direction: initial !important;
  // flex-direction: initial !important;
  // width: 100%;

  // -webkit-align-items: center;
  // -webkit-box-align: center;
  // // -ms-flex-align: center;
  // // align-items: center;
  // -webkit-flex: 1;
  // -ms-flex: 1;
  // flex: 1;
  // overflow-y: auto;
  // overflow-x: hidden;
  // justify-content: center;
  // z-index: 10;
  // z-index: 1;
  // gap: 47px;
  ${({ theme }) => theme.mediaWidth.upToMedium`
  // display: -webkit-box;
  // display: -webkit-flex;
  // display: -ms-flexbox;
  // display: flex;
  // -webkit-flex-direction: column !important;
  // -ms-flex-direction: column !important;
  // flex-direction: column !important;
  // width: 100%;
  
  // -webkit-align-items: center;
  // -webkit-box-align: center;
  // -ms-flex-align: center;
  // align-items: center;
  // -webkit-flex: 1;
  // -ms-flex: 1;
  // flex: 1;
  // overflow-y: auto;
  // overflow-x: hidden;
  // justify-content: center;
  // z-index: 10;
  // z-index: 1;
  // gap: 47px;
  `};
`
export function ConfirmAddModalBottom({
  noLiquidity,
  price,
  currencies,
  parsedAmounts,
  poolTokenPercentage,
  onAdd
}: {
  noLiquidity?: boolean
  price?: Fraction
  currencies: { [field in Field]?: Currency }
  parsedAmounts: { [field in Field]?: CurrencyAmount }
  poolTokenPercentage?: Percent
  onAdd: () => void
}) {
  return (
    <>
      {noLiquidity?<><RowBetween>
        <TYPE.body>{currencies[Field.CURRENCY_A]?.symbol} Deposited</TYPE.body>
        <RowFixed>
          {/* <CurrencyLogo currency={currencies[Field.CURRENCY_A]} style={{ marginRight: '8px' }} /> */}
          <TYPE.body>{parsedAmounts[Field.CURRENCY_A]?.toSignificant(6)}</TYPE.body>
        </RowFixed>
      </RowBetween>
      <RowBetween>
        <TYPE.body>{currencies[Field.CURRENCY_B]?.symbol} Deposited</TYPE.body>
        <RowFixed>
          {/* <CurrencyLogo currency={currencies[Field.CURRENCY_B]} style={{ marginRight: '8px' }} /> */}
          <TYPE.body>{parsedAmounts[Field.CURRENCY_B]?.toSignificant(6)}</TYPE.body>
        </RowFixed>
      </RowBetween>
      <RowBetween>
        <TYPE.body>Price</TYPE.body>
        <TYPE.body>
          {`1 ${currencies[Field.CURRENCY_A]?.symbol} = ${price?.toSignificant(4)} ${
            currencies[Field.CURRENCY_B]?.symbol
          }`}
        </TYPE.body>
      </RowBetween>
      <RowBetween style={{ justifyContent: 'flex-end' }}>
        <TYPE.body>
          {`1 ${currencies[Field.CURRENCY_B]?.symbol} = ${price?.invert().toSignificant(4)} ${
            currencies[Field.CURRENCY_A]?.symbol
          }`}
        </TYPE.body>
      </RowBetween>
      <RowBetween>
        <TYPE.body>Pool Share:</TYPE.body>
        <TYPE.body>{noLiquidity ? '100' : poolTokenPercentage?.toSignificant(4)}%</TYPE.body>
      </RowBetween></>:<>
      
      </>}
      <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <ButtonPrimary style={{ margin: '20px 0 0 0' }} onClick={onAdd}>
        <Text fontWeight={500} fontSize={20}>
          {noLiquidity ? 'Create Pool & Supply' : 'Confirm Supply'}
        </Text>
      </ButtonPrimary>
      </div> 
    </>
  )
}
export default function AddLiquidity({
  match: {
    params: { currencyIdA, currencyIdB }
  },
  history
}: RouteComponentProps<{ currencyIdA?: string; currencyIdB?: string }>) {
  const i18n = useI18n()
  const { account, chainId, library } = useActiveWeb3React()
  const theme = useContext(ThemeContext)

  const currencyA = useCurrency(currencyIdA)
  const currencyB = useCurrency(currencyIdB)

  // const oneCurrencyIsWETH = Boolean(
  //   chainId &&
  //     ((currencyA && currencyEquals(currencyA, WETH[chainId])) ||
  //       (currencyB && currencyEquals(currencyB, WETH[chainId])))
  // )

  const toggleWalletModal = useWalletModalToggle() // toggle wallet when disconnected

  const expertMode = useIsExpertMode()

  // mint state
  const { independentField, typedValue, otherTypedValue } = useMintState()
  const {
    dependentField,
    currencies,

    pairState,
    currencyBalances,
    parsedAmounts,
    price,
    noLiquidity,
    liquidityMinted,
    poolTokenPercentage,
    error
  } = useDerivedMintInfo(currencyA ?? undefined, currencyB ?? undefined)
  const { onFieldAInput, onFieldBInput } = useMintActionHandlers(noLiquidity)

  const isValid = !error

  // modal and loading
  const [showConfirm, setShowConfirm] = useState<boolean>(false)
  const [attemptingTxn, setAttemptingTxn] = useState<boolean>(false) // clicked confirm
  const [showInverted, setShowInverted] = useState<boolean>(false)
  // txn values
  const [deadline] = useUserDeadline() // custom from users settings
  const [allowedSlippage] = useUserSlippageTolerance() // custom from users
  const [txHash, setTxHash] = useState<string>('')

  // get formatted amounts
  const formattedAmounts = {
    [independentField]: typedValue,
    [dependentField]: noLiquidity ? otherTypedValue : parsedAmounts[dependentField]?.toSignificant(6) ?? ''
  }

  // get the max amounts user can add
  const maxAmounts: { [field in Field]?: TokenAmount } = [Field.CURRENCY_A, Field.CURRENCY_B].reduce(
    (accumulator, field) => {
      return {
        ...accumulator,
        [field]: maxAmountSpend(currencyBalances[field])
      }
    },
    {}
  )

  const atMaxAmounts: { [field in Field]?: TokenAmount } = [Field.CURRENCY_A, Field.CURRENCY_B].reduce(
    (accumulator, field) => {
      return {
        ...accumulator,
        [field]: maxAmounts[field]?.equalTo(parsedAmounts[field] ?? '0')
      }
    },
    {}
  )

  // check whether the user has approved the router on the tokens
  const [approvalA, approveACallback] = useApproveCallback(parsedAmounts[Field.CURRENCY_A], ROUTER_ADDRESS)
  const [approvalB, approveBCallback] = useApproveCallback(parsedAmounts[Field.CURRENCY_B], ROUTER_ADDRESS)

  const addTransaction = useTransactionAdder()

  async function onAdd() {
    if (!chainId || !library || !account) return
    const router = getRouterContract(chainId, library, account)

    const { [Field.CURRENCY_A]: parsedAmountA, [Field.CURRENCY_B]: parsedAmountB } = parsedAmounts
    if (!parsedAmountA || !parsedAmountB || !currencyA || !currencyB) {
      return
    }

    const amountsMin = {
      [Field.CURRENCY_A]: calculateSlippageAmount(parsedAmountA, noLiquidity ? 0 : allowedSlippage)[0],
      [Field.CURRENCY_B]: calculateSlippageAmount(parsedAmountB, noLiquidity ? 0 : allowedSlippage)[0]
    }

    const deadlineFromNow = Math.ceil(Date.now() / 1000) + deadline

    let estimate,
      method: (...args: any) => Promise<TransactionResponse>,
      args: Array<string | string[] | number>,
      value: BigNumber | null
    if (currencyA === ETHER || currencyB === ETHER) {
      const tokenBIsETH = currencyB === ETHER
      estimate = router.estimateGas.addLiquidityETH
      method = router.addLiquidityETH
      args = [
        wrappedCurrency(tokenBIsETH ? currencyA : currencyB, chainId)?.address ?? '', // token
        (tokenBIsETH ? parsedAmountA : parsedAmountB).raw.toString(), // token desired
        amountsMin[tokenBIsETH ? Field.CURRENCY_A : Field.CURRENCY_B].toString(), // token min
        amountsMin[tokenBIsETH ? Field.CURRENCY_B : Field.CURRENCY_A].toString(), // eth min
        account,
        deadlineFromNow
      ]
      value = BigNumber.from((tokenBIsETH ? parsedAmountB : parsedAmountA).raw.toString())
    } else {
      estimate = router.estimateGas.addLiquidity
      method = router.addLiquidity
      args = [
        wrappedCurrency(currencyA, chainId)?.address ?? '',
        wrappedCurrency(currencyB, chainId)?.address ?? '',
        parsedAmountA.raw.toString(),
        parsedAmountB.raw.toString(),
        amountsMin[Field.CURRENCY_A].toString(),
        amountsMin[Field.CURRENCY_B].toString(),
        account,
        deadlineFromNow
      ]
      value = null
    }

    setAttemptingTxn(true)
    // const aa = await estimate(...args, value ? { value } : {})
    await estimate(...args, value ? { value } : {})
      .then(estimatedGasLimit =>
        method(...args, {
          ...(value ? { value } : {}),
          gasLimit: calculateGasMargin(estimatedGasLimit)
        }).then(response => {
          setAttemptingTxn(false)

          addTransaction(response, {
            summary:
              'Add ' +
              parsedAmounts[Field.CURRENCY_A]?.toSignificant(3) +
              ' ' +
              currencies[Field.CURRENCY_A]?.symbol +
              ' and ' +
              parsedAmounts[Field.CURRENCY_B]?.toSignificant(3) +
              ' ' +
              currencies[Field.CURRENCY_B]?.symbol
          })

          setTxHash(response.hash)

          ReactGA.event({
            category: 'Liquidity',
            action: 'Add',
            label: [currencies[Field.CURRENCY_A]?.symbol, currencies[Field.CURRENCY_B]?.symbol].join('/')
          })
        })
      )
      .catch(error => {
        console.log(error)
        setAttemptingTxn(false)
        // we only care if the error is something _other_ than the user rejected the tx
        if (error?.code !== 4001) {
          console.error(error)
        }
      })
  }

  const modalHeader = () => {
    return noLiquidity ? (
      <AutoColumn gap="20px">
        {/* <LightCard mt="20px" borderRadius="20px">
          <RowFlat>
            <Text fontSize="48px" fontWeight={500} lineHeight="42px" marginRight={10}>
              {currencies[Field.CURRENCY_A]?.symbol + '/' + currencies[Field.CURRENCY_B]?.symbol}
            </Text>
            <DoubleCurrencyLogo
              currency0={currencies[Field.CURRENCY_A]}
              currency1={currencies[Field.CURRENCY_B]}
              size={30}
            />
          </RowFlat>
        </LightCard> */}
      </AutoColumn>
    ) : (
      <AutoColumn gap="20px">
        <RowBetween>
          <TYPE.body>Price</TYPE.body>
          <TYPE.body>
          <TradePriceto
                         price={price}
                        showInverted={showInverted}
                        setShowInverted={setShowInverted}
                      />
          </TYPE.body>
        </RowBetween>
    
        <RowBetween>
          <TYPE.body> Lp Token Recived</TYPE.body>
          <TYPE.body>{liquidityMinted?.toSignificant(6)}</TYPE.body>
        </RowBetween> 
       
        <RowBetween>
          <TYPE.body>Pool Share</TYPE.body>
          <TYPE.body>{noLiquidity ?'100': poolTokenPercentage?.toSignificant(4)}%</TYPE.body>
        </RowBetween>
        <RowBetween>
          <TYPE.body>Price impact</TYPE.body>
          <TYPE.body>{allowedSlippage / 100}%</TYPE.body>
        </RowBetween>

        {/* <RowFlat style={{ marginTop: '20px' }}>
          <Text fontSize="15px" fontWeight={500} lineHeight="42px" marginRight={10}>
            Lp Token Recived{liquidityMinted?.toSignificant(6)}
          </Text> */}
        {/* <DoubleCurrencyLogo
            currency0={currencies[Field.CURRENCY_A]}
            currency1={currencies[Field.CURRENCY_B]}
            size={30}
          /> */}
        {/* </RowFlat> */}
        {/* <RowBetween>
        <TYPE.body>Share of Pool:</TYPE.body>
        <TYPE.body>{noLiquidity ? '100' : poolTokenPercentage?.toSignificant(4)}%</TYPE.body>
      </RowBetween> */}
        {/* <Row>
          <Text fontSize="15px">
            {currencies[Field.CURRENCY_A]?.symbol + '/' + currencies[Field.CURRENCY_B]?.symbol + ' Pool Tokens'}
          </Text>
        </Row> */}
        {/* <Text fontSize={15}padding={'8px 0 0 0 '}>
        Price impact  {allowedSlippage /
            100}% 
        </Text> */}
      </AutoColumn>
    )
  }

  const modalBottom = () => {
    return (
      <ConfirmAddModalBottom
        price={price}
        currencies={currencies}
        parsedAmounts={parsedAmounts}
        noLiquidity={noLiquidity}
        onAdd={onAdd}
        //  poolTokenPercentage={poolTokenPercentage}
      />
    )
  }

  const pendingText = `Supplying ${parsedAmounts[Field.CURRENCY_A]?.toSignificant(6)} ${
    currencies[Field.CURRENCY_A]?.symbol
  } and ${parsedAmounts[Field.CURRENCY_B]?.toSignificant(6)} ${currencies[Field.CURRENCY_B]?.symbol}`

  const handleCurrencyASelect = useCallback(
    (currencyA: Currency) => {
      const newCurrencyIdA = currencyId(currencyA)
      if (newCurrencyIdA === currencyIdB) {
        history.push(`/add/${currencyIdB}/${currencyIdA}`)
      } else {
        history.push(`/add/${newCurrencyIdA}/${currencyIdB}`)
      }
    },
    [currencyIdB, history, currencyIdA]
  )
  const handleCurrencyBSelect = useCallback(
    (currencyB: Currency) => {
      const newCurrencyIdB = currencyId(currencyB)
      if (currencyIdA === newCurrencyIdB) {
        if (currencyIdB) {
          history.push(`/add/${currencyIdB}/${newCurrencyIdB}`)
        } else {
          history.push(`/add/${newCurrencyIdB}`)
        }
      } else {
        history.push(`/add/${currencyIdA ? currencyIdA : 'ETH'}/${newCurrencyIdB}`)
      }
    },
    [currencyIdA, history, currencyIdB]
  )

  const handleDismissConfirmation = useCallback(() => {
    setShowConfirm(false)
    // if there was a tx hash, we want to clear the input
    if (txHash) {
      onFieldAInput('')
    }
    setTxHash('')
  }, [onFieldAInput, txHash])

  return (
    <>
      <Particle />
      <div className="settingmy">
        <Settings />
        <AccountButton />
      </div>

      <LayoutWrapper style={{ width: '', minHeight: '65vh' }}>
        <Appbody1>
          <AddRemoveTabs adding={true} />
          <Wrapper className='ff'>
            <TransactionConfirmationModal


              isOpen={showConfirm}
              onDismiss={handleDismissConfirmation}
              attemptingTxn={attemptingTxn}
              hash={txHash}
             
              
              content={() => (
                <ConfirmationModalContent
                  title={noLiquidity ? 'You are creating a pool' : 'You will receive'}
                  onDismiss={handleDismissConfirmation}
                  topContent={modalHeader}
                  bottomContent={modalBottom}
                  
                />
              )}
              pendingText={pendingText}
             
            />
            <AutoColumn gap="20px">
              {noLiquidity && (
                <ColumnCenter>
                  <BlueCard>
                    <AutoColumn gap="10px">
                      <TYPE.link fontWeight={600} color={'cardBg'}>
                        You are the first liquidity provider.
                      </TYPE.link>
                      <TYPE.link fontWeight={400} color={'cardBg'}>
                        The ratio of tokens you add will set the price of this pool.
                      </TYPE.link>
                      <TYPE.link fontWeight={400} color={'cardBg'}>
                        Once you are happy with the rate click supply to review.
                      </TYPE.link>
                    </AutoColumn>
                  </BlueCard>
                </ColumnCenter>
              )}
              <CurrencyInputPanel
                value={formattedAmounts[Field.CURRENCY_A]}
                onUserInput={onFieldAInput}
                onMax={() => {
                  onFieldAInput(maxAmounts[Field.CURRENCY_A]?.toExact() ?? '')
                }}
                onTwentyper={() => {
                  const balance = maxAmounts[Field.CURRENCY_A]?.raw
                  // JSBI.multiply(JSBI.BigInt(String(balance)), JSBI.BigInt(20));
                  onFieldAInput(
                    (
                      Number(
                        JSBI.divide(
                          JSBI.multiply(JSBI.BigInt(String(balance)), JSBI.BigInt(25)),
                          JSBI.BigInt(100)
                        ).toString()
                      ) / 1e18
                    ).toString() ?? ''
                  )
                }}
                onThirtyper={() => {
                  const balance = maxAmounts[Field.CURRENCY_A]?.raw
                  onFieldAInput(
                    (
                      Number(
                        JSBI.divide(
                          JSBI.multiply(JSBI.BigInt(String(balance)), JSBI.BigInt(30)),
                          JSBI.BigInt(100)
                        ).toString()
                      ) / 1e18
                    ).toString() ?? ''
                  )
                }}
                onCurrencySelect={handleCurrencyASelect}
                showMaxButton={!atMaxAmounts[Field.CURRENCY_A]}
                currency={currencies[Field.CURRENCY_A]}
                id="add-liquidity-input-tokena"
                showCommonBases={false}
              />
              <ColumnCenter>
                <div className="plusico">
                  <Plus size="16" color={theme.colors.plus} />
                </div>
              </ColumnCenter>
              <CurrencyInputPanel
                value={formattedAmounts[Field.CURRENCY_B]}
                onUserInput={onFieldBInput}
                onCurrencySelect={handleCurrencyBSelect}
                onMax={() => {
                  onFieldBInput(maxAmounts[Field.CURRENCY_B]?.toExact() ?? '')
                }}
                onTwentyper={() => {
                  const balance = maxAmounts[Field.CURRENCY_A]?.raw
                  // JSBI.multiply(JSBI.BigInt(String(balance)), JSBI.BigInt(20));
                  onFieldAInput(
                    (
                      Number(
                        JSBI.divide(
                          JSBI.multiply(JSBI.BigInt(String(balance)), JSBI.BigInt(25)),
                          JSBI.BigInt(100)
                        ).toString()
                      ) / 1e18
                    ).toString() ?? ''
                  )
                }}
                onThirtyper={() => {
                  const balance = maxAmounts[Field.CURRENCY_A]?.raw
                  onFieldAInput(
                    (
                      Number(
                        JSBI.divide(
                          JSBI.multiply(JSBI.BigInt(String(balance)), JSBI.BigInt(50)),
                          JSBI.BigInt(100)
                        ).toString()
                      ) / 1e18
                    ).toString() ?? ''
                  )
                }}
                showMaxButton={!atMaxAmounts[Field.CURRENCY_B]}
                currency={currencies[Field.CURRENCY_B]}
                id="add-liquidity-input-tokenb"
                showCommonBases={false}
              />
              {currencies[Field.CURRENCY_A] && currencies[Field.CURRENCY_B] && pairState !== PairState.INVALID && (
                <>
                  <Mycard>
                    {/* <RowBetween padding="1rem"> */}
                      {/* <TYPE.subHeader fontWeight={500} fontSize={14}>
                        {noLiquidity ? 'Initial prices' : 'Prices'} and pool share
                      </TYPE.subHeader> */}
                    {/* </RowBetween>{' '} */}
                   
                      <AutoColumn gap="20px">
                        <RowBetween>
                          <TYPE.body>Price:</TYPE.body>
                          <TYPE.body>
                          <TradePriceto
                         price={price}
                        showInverted={showInverted}
                        setShowInverted={setShowInverted}
                      />
                            {/* {`1 ${currencies[Field.CURRENCY_A]?.symbol} = ${price?.toSignificant(4)} ${
                              currencies[Field.CURRENCY_B]?.symbol
                            }`} */}
                          </TYPE.body>
                        </RowBetween>
                      
                       
                        <RowBetween>
                          <TYPE.body> Lp Token Recived:</TYPE.body>
                          <TYPE.body>{noLiquidity ?"0.00":<>{liquidityMinted?.toSignificant(6)}</>}</TYPE.body>
                        </RowBetween>
                        
                        <RowBetween>
                          <TYPE.body>Pool Share:</TYPE.body>
                          <TYPE.body>{noLiquidity ? '100' : poolTokenPercentage?.toSignificant(4)}%</TYPE.body>
                        </RowBetween>
                        <RowBetween>
                          <TYPE.body>Price impact:</TYPE.body>
                          <TYPE.body>{allowedSlippage / 100}%</TYPE.body>
                        </RowBetween>
                      </AutoColumn>
                      {/* <PoolPriceBar
                        currencies={currencies}
                        poolTokenPercentage={poolTokenPercentage}
                        noLiquidity={noLiquidity}
                        price={price}
                      /> */}
                    </Mycard>
                 
                </>
              )}

              {!account ? (
                <ButtonLight onClick={toggleWalletModal}>{i18n(204, 'Connect Wallet')}</ButtonLight>
              ) : (
                <AutoColumn gap={'md'}>
                  {(approvalA === ApprovalState.NOT_APPROVED ||
                    approvalA === ApprovalState.PENDING ||
                    approvalB === ApprovalState.NOT_APPROVED ||
                    approvalB === ApprovalState.PENDING) &&
                    isValid && (
                      <RowBetween>
                        {approvalA !== ApprovalState.APPROVED && (
                          <ButtonPrimary
                            onClick={approveACallback}
                            disabled={approvalA === ApprovalState.PENDING}
                            width={approvalB !== ApprovalState.APPROVED ? '48%' : '100%'}
                          >
                            {approvalA === ApprovalState.PENDING ? (
                              <Dots>Approving {currencies[Field.CURRENCY_A]?.symbol}</Dots>
                            ) : (
                              'Approve ' + currencies[Field.CURRENCY_A]?.symbol
                            )}
                          </ButtonPrimary>
                        )}
                        {approvalB !== ApprovalState.APPROVED && (
                          <ButtonPrimary
                            onClick={approveBCallback}
                            disabled={approvalB === ApprovalState.PENDING}
                            width={approvalA !== ApprovalState.APPROVED ? '48%' : '100%'}
                          >
                            {approvalB === ApprovalState.PENDING ? (
                              <Dots>Approving {currencies[Field.CURRENCY_B]?.symbol}</Dots>
                            ) : (
                              'Approve ' + currencies[Field.CURRENCY_B]?.symbol
                            )}
                          </ButtonPrimary>
                        )}
                      </RowBetween>
                    )}
                  <ButtonError
                    onClick={() => {
                      expertMode ? onAdd() : setShowConfirm(true)
                    }}
                    disabled={!isValid || approvalA !== ApprovalState.APPROVED || approvalB !== ApprovalState.APPROVED}
                    error={!isValid && !!parsedAmounts[Field.CURRENCY_A] && !!parsedAmounts[Field.CURRENCY_B]}
                  >
                    <Text fontSize={20} fontWeight={500}>
                      {error ?? 'Supply'}
                    </Text>
                  </ButtonError>
                </AutoColumn>
              )}
            </AutoColumn>
          </Wrapper>
          {/* {pair && !noLiquidity && pairState !== PairState.INVALID ? (
       
       <AutoColumn style={{ minWidth: '20rem', marginTop: '1rem' }}>
        <MinimalPositionCard showUnwrapped={oneCurrencyIsWETH} pair={pair} />
      </AutoColumn>
     
    ) : null} */}
        </Appbody1>

        <AppBody2>
          <div className="poolcardsd">My Pools</div>

          <Pool />
        </AppBody2>
      </LayoutWrapper>
    </>
  )
}
