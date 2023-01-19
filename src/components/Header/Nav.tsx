import React from 'react'
import styled from 'styled-components'
import TranslatedText from '../TranslatedText'
import { NavLink } from 'react-router-dom'
const Nav: React.FC = () => {
  return (
    <StyledNav>
      <NavLink to="/home">
        <div style={{ display: 'flex', gap: '3px' }}>
          <img src="Vector.png" alt="" />
          <TranslatedText translationId={198}>Markets</TranslatedText>
        </div>
      </NavLink>
      <NavLink to="/swap">
        <div style={{ display: 'flex', gap: '3px' }}>
          <img src="Vector 2.png" alt="" />
          <TranslatedText translationId={200}>Swap</TranslatedText>
        </div>
      </NavLink>
      <NavLink to="/undefined">
        <div style={{ display: 'flex', gap: '3px' }}>
          <img src="bridge.png" />
          <TranslatedText translationId="nav-pud-vault">Bridge</TranslatedText>
        </div>
      </NavLink>
      <NavLink to="/undefined">
        <div style={{ display: 'flex', gap: '3px' }}>
          <img src="staking.png" alt="" />
          <TranslatedText translationId={218}>Staking</TranslatedText>
        </div>
      </NavLink>
      <NavLink to="/undefined">
        <div style={{ display: 'flex', gap: '3px' }}>
          <img src="farming.png" alt="" />
          <TranslatedText translationId={219}>Farming</TranslatedText>
        </div>
      </NavLink>

      <NavLink to="/add/ETH">
        <div style={{ display: 'flex', gap: '3px' }}>
          <img src="liquidity.png" alt="" />
          <TranslatedText translationId={220}>Liquidity</TranslatedText>
        </div>
      </NavLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  font-size: 19px;
  font-weight: 700;
  padding-left: 25px;
  ${({ theme }) => theme.mediaWidth.upToMedium`
  display: none;
  width: 30px;
  margin-right: 10px;
  `};
`

export default Nav
