import { Currency, Pair } from '@pancakeswap-libs/sdk'
import React, { useState, useContext, useCallback } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { darken } from 'polished'
import { useCurrencyBalance } from '../../state/wallet/hooks'
import CurrencySearchModal from '../SearchModal/CurrencySearchModal'
import CurrencyLogo from '../CurrencyLogo'
import DoubleCurrencyLogo from '../DoubleLogo'
// import { RowBetween } from '../Row'
// import { TYPE } from '../Shared'
import { Input as NumericalInput } from '../NumericalInput'
import { ReactComponent as DropDown } from '../../assets/images/dropdown.svg'

import { useActiveWeb3React } from '../../hooks'
import TranslatedText from '../../components/TranslatedText'
import { useI18n } from 'i18n/i18n-react'

const InputRow = styled.div<{ selected: boolean }>`
  ${({ theme }) => theme.flexRowNoWrap}
  align-items: center;
  padding: ${({ selected }) => (selected ? '0.75rem 0.5rem 0.75rem 1rem' : '0.75rem 0.75rem 0.75rem 1rem')};
`

const CurrencySelect = styled.button<{ selected: boolean }>`
  align-items: center;
  height: 2.2rem;
  font-size: 20px;
  font-weight: 500;
  background-color: ${({ selected, theme }) => (selected ? theme.colors.newb1 : theme.colors.newb1)};
  color: ${({ selected, theme }) => (selected ? theme.colors.text1 : theme.colors.white)};
  border-radius: 12px;
  box-shadow: ${({ selected }) => (selected ? 'none' : '0px 6px 10px rgba(0, 0, 0, 0.075)')};
  outline: none;
  cursor: pointer;
  user-select: none;
  border: none;
  padding: 0 0.5rem;

  :focus,
  :hover {
    background-color: ${({ selected, theme }) => (selected ? theme.colors.bg0 : darken(0.05, theme.colors.primary1))};
  }
`

// const LabelRow = styled.div`
//   ${({ theme }) => theme.flexRowNoWrap}
//   align-items: end;
//   color: ${({ theme }) => theme.colors.text1};
//   font-size: 0.75rem;
//   // line-height: 1rem;
//   // padding: 0.75rem 1rem 0 1rem;
//   span:hover {
//     cursor: pointer;
//     color: ${({ theme }) => darken(0.2, theme.colors.text2)};
//   }
// `

const Aligner = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const StyledDropDown = styled(DropDown)<{ selected: boolean }>`
  margin: 0 0.25rem 0 0.5rem;
  height: 35%;

  path {
    stroke: ${({ selected, theme }) => (selected ? theme.colors.text1 : theme.colors.white)};
    stroke-width: 1.5px;
  }
`

const InputPanel = styled.div<{ hideInput?: boolean }>`
  ${({ theme }) => theme.flexColumnNoWrap}
  position: relative;
  border-radius: ${({ hideInput }) => (hideInput ? '8px' : '20px')};
  // background-color: ${({ theme }) => theme.colors.bg0};
  background:linear-gradient(88deg,#09393657,#181616);
  z-index: 1;
`

const Container = styled.div<{ hideInput: boolean }>`
  border-radius: ${({ hideInput }) => (hideInput ? '8px' : '20px')};
  // border: 1px solid ${({ theme }) => theme.colors.bg0};
  // background-color: ${({ theme }) => theme.colors.bg1};
  // background:linear-gradient(88deg,#09393657,#121111);

`

const StyledTokenName = styled.span<{ active?: boolean }>`
  ${({ active }) => (active ? '  margin: 0 0.25rem 0 0.75rem;' : '  margin: 0 0.25rem 0.2rem 0.25rem;')}
  font-size:  ${({ active }) => (active ? '20px' : '16px')};

`

const StyledBalanceMax = styled.button`
  height: 28px;
  // background-color: ${({ theme }) => theme.colors.primary5};
  background:transparent;
  border 1px solid transparent;
  border-radius: 0.5rem;
  font-size:21px;

  font-weight: 600;
  cursor: pointer;
  margin-right: 0.5rem;
  color: ${({ theme }) => theme.colors.text1};
  :hover {
    border 1px solid transparent;
    // border: 1px solid ${({ theme }) => theme.colors.primary1};
  }
  :focus {
    border 1px solid transparent;
    outline: none;
  }

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    margin-right: 0.5rem;
  `};
`


interface CurrencyInputPanelProps {
  value: string
  onUserInput: (value: string) => void
  onMax?: () => void
  showMaxButton: boolean
  label?: string
  onCurrencySelect?: (currency: Currency) => void
  currency?: Currency | null
  disableCurrencySelect?: boolean
  hideBalance?: boolean
  pair?: Pair | null
  hideInput?: boolean
  otherCurrency?: Currency | null
  id: string
  showCommonBases?: boolean
}

export default function CurrencyInputPanel({
  value,
  onUserInput,
  onMax,
  showMaxButton,
  label = '',
  onCurrencySelect,
  currency,
  disableCurrencySelect = false,
  hideBalance = false,
  pair = null, // used for double token logo
  hideInput = false,
  otherCurrency,
  id,
  showCommonBases
}: CurrencyInputPanelProps) {
  const i18n = useI18n()
  label = label || i18n(298, 'Input')
  const [modalOpen, setModalOpen] = useState(false)
  const { account } = useActiveWeb3React()
  const selectedCurrencyBalance = useCurrencyBalance(account ?? undefined, currency ?? undefined)
  const theme = useContext(ThemeContext)

  const handleDismissSearch = useCallback(() => {
    setModalOpen(false)
  }, [setModalOpen])

  return (
    <InputPanel id={id}>
       <div style={{display:"flex" ,justifyContent:"space-between",padding:"8px 8px 0px 8px"}}>
     <div color={theme.colors.text1} style={{fontWeight:"bold",paddingTop:"10",fontSize:"21px"}} >
      {label}
      </div>
      <div color={theme.colors.text1}  style={{fontWeight:"bold",paddingTop:"10"}}>
              {account && currency && showMaxButton && label !== 'To' && (
                <StyledBalanceMax onClick={onMax}>MAX</StyledBalanceMax>
              )}
      </div>
     </div>
      <Container hideInput={hideInput}>
        <InputRow style={hideInput ? { padding: '0', borderRadius: '8px' } : {}} selected={disableCurrencySelect}>
          
          
          <CurrencySelect
            selected={!!currency}
            className="open-currency-select-button"
            onClick={() => {
              if (!disableCurrencySelect) {
                setModalOpen(true)
              }
            }}
          >
            <Aligner>
              {pair ? (
                <DoubleCurrencyLogo currency0={pair.token0} currency1={pair.token1} size={24} margin={true} />
              ) : currency ? (
                <CurrencyLogo currency={currency} size={'24px'} />
              ) : null}
              {pair ? (
                <StyledTokenName className="pair-name-container">
                  {pair?.token0.symbol}:{pair?.token1.symbol}
                </StyledTokenName>
              ) : (
                <StyledTokenName className="token-symbol-container" active={Boolean(currency && currency.symbol)}>
                  {(currency && currency.symbol && currency.symbol.length > 20
                    ? currency.symbol.slice(0, 4) +
                      '...' +
                      currency.symbol.slice(currency.symbol.length - 5, currency.symbol.length)
                    : currency?.symbol) || <TranslatedText translationId={266}>Select a currency</TranslatedText>}
                </StyledTokenName>
              )}
              {!disableCurrencySelect && <StyledDropDown selected={!!currency} />}
            </Aligner>
          </CurrencySelect>
          {!hideInput && (
            <>
              <NumericalInput
                className="token-amount-input"
                value={value}
                onUserInput={val => {
                  onUserInput(val)
                }}
              />
             
            </>
          )}
        </InputRow>
        {!hideInput && (
          <div>
              {account && (
                <div
                  onClick={onMax}
                  color={theme.colors.text2}
                  style={{textAlign:"end", cursor: 'pointer',fontWeight:500,fontSize:14,paddingRight:"18px"}}
                >

                  {!hideBalance && !!currency && selectedCurrencyBalance
                    ? i18n(754, 'Balance:') + ' ' + selectedCurrencyBalance?.toSignificant(6)
                    : ' -'}
                </div>
              )}
          </div>
        )}
        
      </Container>
      {!disableCurrencySelect && onCurrencySelect && (
        <CurrencySearchModal
          isOpen={modalOpen}
          onDismiss={handleDismissSearch}
          onCurrencySelect={onCurrencySelect}
          selectedCurrency={currency}
          otherSelectedCurrency={otherCurrency}
          showCommonBases={showCommonBases}
        />
      )}
    </InputPanel>
  )
}
