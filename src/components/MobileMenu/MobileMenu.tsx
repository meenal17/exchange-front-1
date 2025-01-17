import React from 'react'
import styled, { keyframes } from 'styled-components'

// import { NavLink } from 'react-router-dom'
import TranslatedText from '../TranslatedText'
import useHTPrice from '../../hooks/useHtPrice'
import { useActiveWeb3React } from '../../hooks'
import TopDecoration from './TopDecoration'
import BottomDecoration from './BottomDecoration'

interface MobileMenuProps {
  onDismiss: () => void
  visible?: boolean
}

function isZero(num: number) {
  return Math.abs(num - 0) <= 1e-8
}

// eslint-disable-next-line react/prop-types
const MobileMenu: React.FC<MobileMenuProps> = ({ onDismiss, visible }) => {
  const { pippiPrice } = useHTPrice()
  const { account } = useActiveWeb3React()
  if (visible) {
    return (
      <StyledMobileMenuWrapper>
        <StyledBackdrop onClick={onDismiss} />
        <StyledMobileMenu>
          <Bg></Bg>
          <TopDecoration />
          <BottomDecoration />
          <Cn>
            <StyledAbsoluteLink href="#">
              <img src="LeBo.png" alt="LeBo" />
            </StyledAbsoluteLink>
          </Cn>
          <Cn>
            <StyledAbsoluteLink href="#">
              <img src="Vector.png" alt="" />
              <TranslatedText translationId={198}>Markets</TranslatedText>
            </StyledAbsoluteLink>
          </Cn>
          <Cn>
            <StyledAbsoluteLink href="#">
              <img src="Vector 2.png" alt="" />
              <TranslatedText translationId={200}>Swap</TranslatedText>
            </StyledAbsoluteLink>
          </Cn>
          <Cn>
            <StyledAbsoluteLink href="#">
              <img src="bridge.png" />
              <TranslatedText translationId="nav-pud-vault">Bridge</TranslatedText>
            </StyledAbsoluteLink>
          </Cn>
          <Cn>
            <StyledAbsoluteLink href="#">
              <img src="staking.png" alt="" />
              <TranslatedText translationId={218}>Staking</TranslatedText>
            </StyledAbsoluteLink>
          </Cn>

          <Cn>
            <StyledAbsoluteLink href="#">
              <img src="farming.png" alt="" />
              <TranslatedText translationId={348}>Farming</TranslatedText>
            </StyledAbsoluteLink>
          </Cn>
          <Cn>
            <StyledAbsoluteLink href="#">
              <img src="liquidity.png" alt="" />
              <TranslatedText translationId={370}>Liquidity</TranslatedText>
            </StyledAbsoluteLink>
          </Cn>
          <Bottom>
            {account && !isZero(pippiPrice) && <Price className="number">1PUD=${pippiPrice.toFixed(3)}</Price>}
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
  bottom: 120px;
  right: 0;
  margin: auto;
  text-align: center;
  .mobile-lng-swith {
    width: 100%;
    height: 30px;
    line-height: 30px;
    margin-bottom: 20px;
  }
`

const Bg = styled.div`
  position: absolute;
  right: 0;
  width: 70%;
  height: 300px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  transform: rotate(180deg);
`
const StyledBackdrop = styled.div`
  position: absolute;
  top: 0px;
  right: 0;
  bottom: 0;
  left: 0;
  // background-color: ${props => props.theme.colors.bg5};
  backdrop-filter: blur(3px);
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
  background-color: ${props => props.theme.colors.bg1};
  border-left: 1px solid ${props => props.theme.colors.bg1};
  position: absolute;
  top: 0;
  right: 100%;
  bottom: 0;
  width: calc(100% - 130px);
  padding-top: 24px;
`

// const StyledLink = styled(NavLink)`
//   position: relative;
//   box-sizing: border-box;
//   color: rgb(127, 134, 143);
//   font-size: 16px;
//   font-weight: 700;
//   text-align: left;
//   text-decoration: none;
//   &.active {
//     color: ${props => props.theme.colors.red3};
//   }
// `
const StyledAbsoluteLink = styled.a`
  position: relative;
  color: rgb(127, 134, 143);
  font-size:16px;
  font-weight: 700;
  text-decoration: none;
  &:hover {
    color: ${props => props.theme.colors.red3};
  }
  &.active {
    color: ${props => props.theme.colors.red3};
  }
`
const Cn = styled.div`
  margin: 24px 24px 0 24px;
`
const Price = styled.div`
  width: 100%;
  padding-top: 22px;
  padding-bottom: 10px;
  color: ${props => props.theme.colors.primary};
  text-align: left;
  font-weight: bolder;
`
export default MobileMenu
