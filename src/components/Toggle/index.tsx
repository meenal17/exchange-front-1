import React from 'react'
import styled from 'styled-components'

const ToggleElement = styled.span<{ isActive?: boolean; isOnSwitch?: boolean }>`
  padding: 0.8rem;
  border-radius: 14px;
  background: ${({ theme, isActive, isOnSwitch }) =>
    isActive ? (isOnSwitch ? theme.colors.buttonText : theme.colors.text4) : 'none'};
  color: ${({ theme, isActive, isOnSwitch }) =>
    isActive ? (isOnSwitch ? theme.colors.white : theme.colors.text2) : theme.colors.text3};
  font-size: 0.825rem;
  font-weight: 400;
`

const StyledToggle = styled.button<{ isActive?: boolean; activeElement?: boolean ; isOnSwitch?: boolean }>`
  border-radius: 16px;
  border: 1px solid #24585b;
  display: flex;
  width: fit-content;
  cursor: pointer;
  outline: none;
  padding: 2px 7px;
   background: ${({ theme, isActive, isOnSwitch }) =>
    isActive ? (isOnSwitch ? theme.colors.mybg : theme.colors.textmy) :  theme.colors.mybg};
  // background-color: transparent;
`

export interface ToggleProps {
  id?: string
  isActive: boolean
  toggle: () => void
}

export default function Toggle({ id, isActive, toggle }: ToggleProps) {


  return (
    <StyledToggle id={id} isActive={isActive} onClick={toggle}>
      <ToggleElement isActive={isActive} isOnSwitch={true}>
        
      </ToggleElement>
      <ToggleElement isActive={!isActive} isOnSwitch={false}>
       
      </ToggleElement>
    </StyledToggle>
  )
}
