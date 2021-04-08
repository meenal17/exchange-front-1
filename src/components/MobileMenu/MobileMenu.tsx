import React from 'react'
import styled, { keyframes } from 'styled-components'

import { NavLink } from 'react-router-dom'
import TranslatedText from '../TranslatedText'
import LngSwith from '../Header/LngSwith'

interface MobileMenuProps {
  onDismiss: () => void
  visible?: boolean
}

// eslint-disable-next-line react/prop-types
const MobileMenu: React.FC<MobileMenuProps> = ({ onDismiss, visible }) => {
  if (visible) {
    return (
      <StyledMobileMenuWrapper>
        <StyledBackdrop onClick={onDismiss} />
        <StyledMobileMenu>
          <Bg></Bg>
          <Cn>
            <StyledAbsoluteLink href="https://app.pippi.finance">
              <TranslatedText translationId={130}>Home</TranslatedText>
            </StyledAbsoluteLink>
          </Cn>
          <Cn>
            <StyledAbsoluteLink href="https://app.pippi.finance/farms">
              <TranslatedText translationId={112}>Farm</TranslatedText>
            </StyledAbsoluteLink>
          </Cn>
          <Cn>
            <StyledAbsoluteLink href="https://app.pippi.finance/staking">
              <TranslatedText translationId={114}>Staking</TranslatedText>
            </StyledAbsoluteLink>
          </Cn>
          <Cn>
            <StyledAbsoluteLink href="https://app.pippi.finance/xpipi">
              <TranslatedText translationId={132}>xPIPI Pools</TranslatedText>
            </StyledAbsoluteLink>
          </Cn>
          <Cn>
            <StyledLink className="active" to="/">
              <TranslatedText translationId={116}>Exchange</TranslatedText>
            </StyledLink>
          </Cn>
          <Cn>
            <StyledAbsoluteLink href="https://app.pippi.finance/airdrop">
              <TranslatedText translationId={230}>airDrop</TranslatedText>
            </StyledAbsoluteLink>
          </Cn>
          <Cn>
            <StyledAbsoluteLink href="https://app.pippi.finance/nft">
              <TranslatedText translationId={258}>NFT</TranslatedText>
            </StyledAbsoluteLink>
          </Cn>
          <Bottom>
            <LngSwith className="mobile-lng-swith"></LngSwith>
          </Bottom>
        </StyledMobileMenu>
      </StyledMobileMenuWrapper>
    )
  }
  return null
}

const Bottom = styled.div`
  position: absolute;
  left: 0;
  z-index: 1000;
  width: 80%;
  bottom: 40px;
  right: 0;
  margin: auto;
  text-align: center;
  .mobile-lng-swith {
    width:100%;
    height: 30px;
    line-height: 30px;
    margin-bottom: 20px;
  }
`

const Bg = styled.div`
  position: absolute;
  left: 0;
  width: 70%;
  height: 300px;
  background-position: center;
  background-repeat: no-repeat;
  background: url(${require('../../assets/images/mobile-menu-bg.png')});
  background-size: contain;
`
const StyledBackdrop = styled.div`
  position: absolute;
  top: 0px;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${(props) => props.theme.colors.bg5};
`

const StyledMobileMenuWrapper = styled.div`
  position: fixed;
  top: 0px;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
`

const slideIn = keyframes`
  0% {
    transform: translateX(0)
  }
  100% {
    transform: translateX(100%);
  }
`

const StyledMobileMenu = styled.div`
  animation: ${slideIn} 0.3s forwards ease-out;
  background-color: ${(props) => props.theme.colors.bg1};
  border-left: 1px solid ${(props) => props.theme.colors.bg1};
  position: absolute;
  top: 0;
  right: 100%;
  bottom: 0;
  width: calc(100% - 130px);
  padding-top: 40px;
`

const StyledLink = styled(NavLink)`
  position: relative;
  box-sizing: border-box;
  color: ${(props) => props.theme.colors.normal};
  font-size: 16px;
  font-weight: 700;
  text-align: left;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.colors.red3};
    &::after {
      position: absolute;
      content: '';
      left: 0;
      bottom: -5px;
      width: 100%;
      height: 2px;
      background: ${(props) => props.theme.colors.red3};
    }
  }
  &.active {
    color: ${(props) => props.theme.colors.red3};
    &::after {
      position: absolute;
      content: '';
      left: 0;
      bottom: -5px;
      width: 100%;
      height: 2px;
      background: ${(props) => props.theme.colors.red3};
    }
  }
`
const StyledAbsoluteLink = styled.a`
  position: relative;
  color: ${(props) => props.theme.colors.normal};
  font-weight: 700;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.colors.red3};
    &::after {
      position: absolute;
      content: '';
      left: 0;
      bottom: -5px;
      width: 100%;
      height: 2px;
      background: ${(props) => props.theme.colors.red3};
    }
  }
  &.active {
    color: ${(props) => props.theme.colors.red3};
    &::after {
      position: absolute;
      content: '';
      left: 0;
      bottom: -5px;
      width: 100%;
      height: 2px;
      background: ${(props) => props.theme.colors.red3};
    }
  }
`
const Cn = styled.div`
  margin: 32px 24px;
`
export default MobileMenu
