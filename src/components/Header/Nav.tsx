import React from 'react'
import styled from 'styled-components'
import TranslatedText from '../TranslatedText'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledAbsoluteLink href="#">
        <TranslatedText translationId={198}>Mrarkets</TranslatedText>
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="#">
        <TranslatedText translationId={200}>Swap</TranslatedText>
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="#">
        <TranslatedText translationId="nav-pud-vault">Bridge</TranslatedText>
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="#">
        <TranslatedText translationId={218}>Staking</TranslatedText>
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="#"> <TranslatedText translationId={219}>Farming</TranslatedText></StyledAbsoluteLink>
     
      <StyledAbsoluteLink href="#">
      <TranslatedText translationId={220}>Liquidity</TranslatedText>
        
      </StyledAbsoluteLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  font-size: 14px;
  font-weight: 700;
  padding-left: 25px;
  ${({ theme }) => theme.mediaWidth.upToMedium`
  display: none;
  width: 30px;
  margin-right: 10px;
  `};
  
`

const StyledAbsoluteLink = styled.a`
  position: relative;
  color: rgb(127, 134, 143);
  margin-right: 24px;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  @media (max-width: 400px) {
    margin-right: 24px;
  }
`
export default Nav
