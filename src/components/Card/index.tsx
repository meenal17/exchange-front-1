import React from 'react'
import styled from 'styled-components'
import { CardProps, Text } from 'rebass'
import { Box } from 'rebass/styled-components'

const Card = styled(Box)<{ padding?: string; border?: string; borderRadius?: string }>`
  width: 100%;
  border-radius: 16px;
  padding: 1.25rem;
  padding: ${({ padding }) => padding};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
`
export default Card

export const LightCard = styled(Card)`
  border: 1px solid ${({ theme }) => theme.colors.bg0};
  background-color: ${({ theme }) => theme.colors.bg1};
`

export const GreyCard = styled(Card)`
  background-color: ${({ theme }) => theme.colors.newb2};
`

export const OutlineCard = styled(Card)`
  border: 1px solid ${({ theme }) => theme.colors.bg3};
`

export const YellowCard = styled(Card)`
  background-color: rgba(243, 132, 30, 0.05);
  color: ${({ theme }) => theme.colors.yellow2};
  font-weight: 500;
`

export const PinkCard = styled(Card)`
  background-color: rgba(255, 0, 122, 0.03);
  color: ${({ theme }) => theme.colors.primary1};
  font-weight: 500;
`

const BlueCardStyled = styled(Card)`
  // background-color: ${({ theme }) => theme.colors.primary5};
  background:#262321;
  // color: ${({ theme }) => theme.colors.normal};
  border-radius: 12px;
  width: fit-content;
`

export const BlueCard = ({ children, ...rest }: CardProps) => {
  return (
    <BlueCardStyled {...rest}>
      <Text fontWeight={500} color="#000">
        {children}
      </Text>
    </BlueCardStyled>
  )
}
