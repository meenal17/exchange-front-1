import React from 'react'
import styled from 'styled-components'
import { darken, lighten } from 'polished'

import { RowBetween } from '../Row'
import { ChevronDown } from 'react-feather'
import { Button as RebassButton, ButtonProps } from 'rebass/styled-components'

const Base = styled(RebassButton)<{
  padding?: string
  width?: string
  borderRadius?: string
  altDisabledStyle?: boolean
}>`
  padding: ${({ padding }) => (padding ? padding : '12px')};
  width: ${({ width }) => (width ? width : '78%')};
  font-weight: 500;
  margin: 3px auto; 
  text-align: center;
  border-radius: 14px;
  margin-top:0.5rem;
  border-radius: ${({ borderRadius }) => borderRadius && borderRadius};
  outline: none;
  // border: 1px solid transparent;
  color: white;
  text-decoration: none;
  // display: flex;
  // justify-content: center;
  // flex-wrap: nowrap;
  align-items: center;
  cursor: pointer;
  // position: relative;
  z-index: 1;
  &:disabled {
    cursor: auto;
  }

  > * {
    user-select: none;
  }
`

export const ButtonPrimary = styled(Base)`
  background: ${({ theme }) => theme.gradient};
  color: ${({ theme }) => theme.colors.white};

  &:focus {
    // box-shadow: 0 0 0 1pt ${({ theme }) => darken(0.05, theme.colors.primary1)};
  }
  &:active {
    // box-shadow: 0 0 0 1pt ${({ theme }) => darken(0.1, theme.colors.primary1)};
  }
  &:disabled {
    background: ${({ theme, altDisabledStyle }) => (altDisabledStyle ? theme.gradient : theme.colors.mybg)};
    color: ${({ theme, altDisabledStyle }) => (altDisabledStyle ? 'white' : theme.colors.buttonText)};
    cursor: not-allowed;
    box-shadow: none;
    // border: 1px solid transparent;
    
    outline: none;
    opacity: ${({ altDisabledStyle }) => (altDisabledStyle ? '0.7' : '1')};
  }
`

export const ButtonLight = styled(Base)`
  background: ${({ theme }) => theme.gradient};
  color: ${({ theme }) => theme.colors.buttonText};
  font-size: 16px;
  font-weight: 500;
  &:focus {
    box-shadow: 0 0 0 1pt ${({ theme, disabled }) => !disabled && darken(0.03, theme.colors.primary5)};
    background-color: ${({ theme, disabled }) => !disabled && darken(0.03, theme.colors.primary5)};
  }
  &:hover {
    background-color: ${({ theme, disabled }) => !disabled && darken(0.03, theme.colors.primary5)};
  }
  &:active {
    box-shadow: 0 0 0 1pt ${({ theme, disabled }) => !disabled && darken(0.05, theme.colors.primary5)};
    background-color: ${({ theme, disabled }) => !disabled && darken(0.05, theme.colors.primary5)};
  }
  :disabled {
    opacity: 0.4;
    :hover {
      cursor: auto;
      background-color: ${({ theme }) => theme.colors.primary5};
      box-shadow: none;
      // border: 1px solid transparent;
      outline: none;
    }
  }
`

export const ButtonGray = styled(Base)`
  background-color: ${({ theme }) => theme.colors.bg0};
  color: ${({ theme }) => theme.colors.text3};
  font-size: 16px;
  font-weight: 500;
  &:focus {
    // box-shadow: 0 0 0 1pt ${({ theme, disabled }) => !disabled && darken(0.05, theme.colors.bg0)};
    box-shadow: none!important;
    background-color: ${({ theme, disabled }) => !disabled && darken(0.05, theme.colors.bg0)};
  }
  &:hover {
    // background-color: ${({ theme, disabled }) => !disabled && darken(0.05, theme.colors.RedBg)};
    // color: #fff!important;
    background-color: #c06f6f7a;
    color: #cb8181!important;
  }
  &:active {
    box-shadow: 0 0 0 1pt ${({ theme, disabled }) => !disabled && darken(0.1, theme.colors.bg0)};
    background-color: ${({ theme, disabled }) => !disabled && darken(0.1, theme.colors.bg0)};
  }
`

export const ButtonSecondary = styled(Base)`
background: linear-gradient(88deg,#0bc496,#1f6d99);
  color: ${({ theme }) => theme.colors.buttonText};
  font-size: 18px;
  font-weight: bold;
  border-radius: 15px;
  // padding: 8px 43px;
  margin-top:15px;
  padding: ${({ padding }) => (padding ? padding : '10px')};

  &:focus {
    box-shadow: 0 0 0 1pt ${({ theme }) => theme.colors.primary4};
    background: linear-gradient(88deg,#0bc496,#1f6d99);;
  }
  &:hover {
    background: linear-gradient(88deg,#0bc496,#1f6d99);
  }
  &:active {
    box-shadow: 0 0 0 1pt ${({ theme }) => theme.colors.primary4};
    background: linear-gradient(88deg,#0bc496,#1f6d99);
  }
  &:disabled {
    background-color: ${({ theme }) => theme.colors.primary5};
    opacity: 50%;
    cursor: auto;
  }

  ${({ theme }) => theme.mediaWidth.upToMedium`
  padding: 0px 8px;
font-size: 14px;
  `};
`

export const ButtonPink = styled(Base)`
  // background-color: ${({ theme }) => theme.colors.primary1};
  border: 1px solid #15A7A6;
  color: white;
  background:transparent;

  &:focus {
    box-shadow: 0 0 0 1pt ${({ theme }) => darken(0.05, theme.colors.plus)};
    background-color: ${({ theme }) => darken(0.05, theme.colors.plus)};
  }
  &:hover {
    background-color: ${({ theme }) => darken(0.05, theme.colors.plus)};
  }
  &:active {
    box-shadow: 0 0 0 1pt ${({ theme }) => darken(0.1, theme.colors.plus)};
    background-color: ${({ theme }) => darken(0.1, theme.colors.plus)};
  }
  &:disabled {
    background-color: ${({ theme }) => theme.colors.primary1};
    opacity: 50%;
    cursor: auto;
  }
`

export const ButtonOutlined = styled(Base)`
  // border: 1px solid #5f907f;
  border: 1px solid #E5B0A3;
  background-color: transparent;
  font-weight: bold;
  font-size: 18px
  color: ${({ theme }) => theme.colors.text1};

  &:focus {
    box-shadow: 0 0 0 1px #5f907f;
  }
  &:hover {
    box-shadow: 0 0 0 1px #5f907f;
  }
  &:active {
    box-shadow: 0 0 0 1px #5f907f;
  }
  &:disabled {
    opacity: 50%;
    cursor: auto;
  }
`
export const ButtonOutlinedto = styled(Base)`
   border: 1px solid #5f907f;
  background-color: transparent;
  font-weight: bold;
  font-size: 18px
  color: ${({ theme }) => theme.colors.text1};

  &:focus {
    box-shadow: 0 0 0 1px #5f907f;
  }
  &:hover {
    box-shadow: 0 0 0 1px #5f907f;
  }
  &:active {
    box-shadow: 0 0 0 1px #5f907f;
  }
  &:disabled {
    opacity: 50%;
    cursor: auto;
  }
`





export const ButtonEmpty = styled(Base)`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary1};
  display: flex;
  justify-content: center;
  align-items: center;

  &:focus {
    background-color: ${({ theme }) => theme.colors.advancedBG};
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.advancedBG};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.advancedBG};
  }
  &:disabled {
    opacity: 50%;
    cursor: auto;
  }
`

export const ButtonWhite = styled(Base)`
  border: 1px solid #edeef2;
  background-color: ${({ theme }) => theme.colors.bg1};
  color: black;

  &:focus {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    box-shadow: 0 0 0 1pt ${darken(0.05, '#edeef2')};
  }
  &:hover {
    box-shadow: 0 0 0 1pt ${darken(0.1, '#edeef2')};
  }
  &:active {
    box-shadow: 0 0 0 1pt ${darken(0.1, '#edeef2')};
  }
  &:disabled {
    opacity: 50%;
    cursor: auto;
  }
`

const ButtonConfirmedStyle = styled(Base)`
  // background-color: ${({ theme }) => lighten(0.5, theme.colors.green1)};
  background-color: #0bc496;
  // color: ${({ theme }) => theme.colors.green1};
  color:#fff;
  // border: 1px solid ${({ theme }) => theme.colors.green1};

  &:disabled {
    opacity: 60%;
    cursor: auto;
  }
`

const ButtonErrorStyle = styled(Base)`
  // background-color: ${({ theme }) => theme.colors.red1};
  border: 1px solid ${({ theme }) => theme.colors.red1};

  &:focus {
    box-shadow: 0 0 0 1pt ${({ theme }) => darken(0.05, theme.colors.red1)};
    background-color: ${({ theme }) => darken(0.05, theme.colors.red1)};
  }
  &:hover {
    background-color: ${({ theme }) => darken(0.05, theme.colors.red1)};
  }
  &:active {
    box-shadow: 0 0 0 1pt ${({ theme }) => darken(0.1, theme.colors.red1)};
    background-color: ${({ theme }) => darken(0.1, theme.colors.red1)};
  }
  &:disabled {
    opacity: 50%;
    cursor: auto;
    box-shadow: none;
    background-color: ${({ theme }) => theme.colors.red1};
    border: 1px solid ${({ theme }) => theme.colors.red1};
  }
`

export function ButtonConfirmed({
  confirmed,
  altDisabledStyle,
  ...rest
}: { confirmed?: boolean; altDisabledStyle?: boolean } & ButtonProps) {
  if (confirmed) {
    return <ButtonConfirmedStyle {...rest} />
  } else {
    return <ButtonPrimary {...rest} altDisabledStyle={altDisabledStyle} />
  }
}

export function ButtonError({ error, ...rest }: { error?: boolean } & ButtonProps) {
  if (error) {
    return <ButtonErrorStyle {...rest} />
  } else {
    return <ButtonGray {...rest} />
  }
}

export function ButtonDropdown({ disabled = false, children, ...rest }: { disabled?: boolean } & ButtonProps) {
  return (
    <ButtonPrimary {...rest} disabled={disabled}>
      <RowBetween>
        <div style={{ display: 'flex', alignItems: 'center' }}>{children}</div>
        <ChevronDown size={24} />
      </RowBetween>
    </ButtonPrimary>
  )
}

export function ButtonDropdownLight({ disabled = false, children, ...rest }: { disabled?: boolean } & ButtonProps) {
  return (
    <ButtonOutlinedto {...rest} disabled={disabled}>
      <RowBetween>
        <div style={{ display: 'flex', alignItems: 'center' }}>{children}</div>
        <ChevronDown size={24} />
      </RowBetween>
    </ButtonOutlinedto>
  )
}

export function ButtonRadio({ active, ...rest }: { active?: boolean } & ButtonProps) {
  if (!active) {
    return <ButtonWhite {...rest} />
  } else {
    return <ButtonPrimary {...rest} />
  }
}
