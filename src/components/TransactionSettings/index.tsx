import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'

// import QuestionHelper from '../QuestionHelper'
// import { TYPE } from '../../components/Shared'
// import { useI18n } from 'i18n/i18n-react'
import { AutoColumn } from '../Column'
import { RowBetween } from '../Row'

import { darken } from 'polished'
// import TranslatedText from '../TranslatedText'

enum SlippageError {
  InvalidInput = 'InvalidInput',
  RiskyLow = 'RiskyLow',
  RiskyHigh = 'RiskyHigh'
}

// enum DeadlineError {
//   InvalidInput = 'InvalidInput'
// }

const FancyButton = styled.button`
  color: #fff;
  align-items: center;
  // height: 2rem;
  border-radius: 8px;
  font-size: 19px;
  font-weight: 600;
  font-family: Inter, sans-serif !important
  width: auto;
 min-width: 4.4rem;
    padding: 5px 14px;
  border: 1px solid #00829a;
  outline: none;
  background:#0d0b0b;
  :hover {
    border: 1px solid #00829a;
  }
  :focus {
    border: 1px solid #00829a;
  }
`

const Option = styled(FancyButton)<{ active: boolean }>`
  margin-right: 8px;
  min-width: 4.4rem;
  padding: 5px 14px;
  :hover {
    cursor: pointer;
  }
  background: ${({ active, theme }) => (active ? theme.colors.mybg : theme.colors.textmy)};
  color: ${({ active, theme }) => (active ? theme.colors.white : theme.colors.text1)};
`

const Input = styled.input`
  background: transparent;
  font-size: 16px;
  width: auto;
  outline: none;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  color: ${({ theme, color }) => (color === 'red' ? theme.colors.red1 : theme.colors.buttonText)};
  text-align: center;
  &::placeholder {
  color:#bbb;
`

const OptionCustom = styled(FancyButton)<{ active?: boolean; warning?: boolean }>`
  max-width: 4.4rem;
  height: 2rem;
  position: relative;
  padding: 0;
  flex: 1;
  border: ${({ theme, active, warning }) =>
    active && `1px solid ${warning ? theme.colors.red1 : theme.colors.primary1}`};
  :hover {
    border: ${({ theme, active, warning }) =>
      active && `1px solid ${warning ? darken(0.1, theme.colors.red1) : darken(0.1, theme.colors.primary1)}`};
  }

  input {
    width: 100%;
    height: 100%;
    border: 0px;
    border-radius: 2rem;
  }
`

// const SlippageEmojiContainer = styled.span`
//   color: #f3841e;
//   width:10px;
//   ${({ theme }) => theme.mediaWidth.upToSmall`
//     display: none;
//   `}
// `

export interface SlippageTabsProps {
  rawSlippage: number
  setRawSlippage: (rawSlippage: number) => void
  deadline: number
  setDeadline: (deadline: number) => void
}

export default function SlippageTabs({ rawSlippage, setRawSlippage, deadline, setDeadline }: SlippageTabsProps) {
  // const i18n = useI18n()
  // const theme = useContext(ThemeContext)

  const inputRef = useRef<HTMLInputElement>()

  const [slippageInput, setSlippageInput] = useState('')
  // const [deadlineInput, setDeadlineInput] = useState('')

  const slippageInputIsValid =
    slippageInput === '' || (rawSlippage / 100).toFixed(2) === Number.parseFloat(slippageInput).toFixed(2)
  // const deadlineInputIsValid = deadlineInput === '' || (deadline / 60).toString() === deadlineInput

  let slippageError: SlippageError | undefined
  if (slippageInput !== '' && !slippageInputIsValid) {
    slippageError = SlippageError.InvalidInput
  } else if (slippageInputIsValid && rawSlippage < 50) {
    slippageError = SlippageError.RiskyLow
  } else if (slippageInputIsValid && rawSlippage > 500) {
    slippageError = SlippageError.RiskyHigh
  } else {
    slippageError = undefined
  }

  // let deadlineError: DeadlineError | undefined
  // if (deadlineInput !== '' && !deadlineInputIsValid) {
  //   deadlineError = DeadlineError.InvalidInput
  // } else {
  //   deadlineError = undefined
  // }

  useEffect(() => {
    setRawSlippage(50)
  }, [])
  function parseCustomSlippage(value: string) {
    setSlippageInput(value)

    try {
      const valueAsIntFromRoundedFloat = Number.parseInt((Number.parseFloat(value) * 100).toString())
      if (!Number.isNaN(valueAsIntFromRoundedFloat) && valueAsIntFromRoundedFloat < 5000) {
        setRawSlippage(valueAsIntFromRoundedFloat)
      }
    } catch {}
  }

  // function parseCustomDeadline(value: string) {
  //   setDeadlineInput(value)

  //   try {
  //     const valueAsInt: number = Number.parseInt(value) * 60
  //     if (!Number.isNaN(valueAsInt) && valueAsInt > 0) {
  //       setDeadline(valueAsInt)
  //     }
  //   } catch {}
  // }

  return (
    <>
      <h3 className="sliph3"> Slippage Tolerance </h3>

      <AutoColumn>
        <RowBetween>
          <Option
            onClick={() => {
              setSlippageInput('')
              setRawSlippage(10)
            }}
            active={rawSlippage === 10}
          >
            0.1%
          </Option>
          <Option
            onClick={() => {
              setSlippageInput('')
              setRawSlippage(50)
            }}
            active={rawSlippage === 50}
          >
            0.5%
          </Option>
          <Option
            onClick={() => {
              setSlippageInput('')
              setRawSlippage(100)
            }}
            active={rawSlippage === 100}
          >
            1%
          </Option>
          <OptionCustom active={![10, 50, 100].includes(rawSlippage)} warning={!slippageInputIsValid} tabIndex={-1}>
            <RowBetween>
              {/* {!!slippageInput &&
              // (slippageError === SlippageError.RiskyLow || slippageError === SlippageError.RiskyHigh) ? (
                <SlippageEmojiContainer>
                  <span role="img" aria-label="warning">
                    ⚠️
                  </span>
                </SlippageEmojiContainer>
              ) : null} */}
              {/* https://github.com/DefinitelyTyped/DefinitelyTyped/issues/30451 */}
              <Input
                ref={inputRef as any}
                placeholder="custom"
                value={slippageInput}
                onBlur={() => {
                  parseCustomSlippage((rawSlippage / 100).toFixed(2))
                }}
                onChange={e => parseCustomSlippage(e.target.value)}
                color={!slippageInputIsValid ? 'red' : ''}
              />
            </RowBetween>
          </OptionCustom>
        </RowBetween>
        {!!slippageError && (
          <RowBetween
            style={{
              fontSize: '14px',
              paddingTop: '7px',
              color: slippageError === SlippageError.InvalidInput ? 'red' : '#F3841E'
            }}
          >
            {slippageError === SlippageError.InvalidInput
              ? 'Enter a valid slippage percentage'
              : slippageError === SlippageError.RiskyLow
              ? 'Your transaction may fail'
              : 'Your transaction may be frontrun'}
          </RowBetween>
        )}
      </AutoColumn>
    </>
  )
}
