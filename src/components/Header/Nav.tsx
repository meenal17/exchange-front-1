import React from 'react'
import styled from 'styled-components'
import TranslatedText from '../TranslatedText'
import { NavLink } from 'react-router-dom'
import { useLocation } from "react-router-dom"
const Nav: React.FC = () => {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  console.log(params,"paramsparams");
  
  let url = window.location.href;
  let metaurl = url.split("/remove")[0]+'/remove'
  let metaurlto=url.split("/add")[0]+'/add'
 
 if(metaurl==="http://localhost:3001/#/remove" || metaurlto==="http://localhost:3001/#/add" ){

 }
 
  return (
    <StyledNav>
      <NavLink to="/undefined">
        <div style={{ display: 'flex', gap: '4px' }}>
          <img src="images/Vector.png" alt="" />
          <TranslatedText translationId={198}>Markets</TranslatedText>
        </div>
      </NavLink>
      <NavLink to="/swap">
        <div style={{ display: 'flex', gap: '4px' }}>
          <img src="images/Vector 2.png" alt="" />
          <TranslatedText translationId={200}>Swap</TranslatedText>
        </div>
      </NavLink>
      <NavLink to="/undefined">
        <div style={{ display: 'flex', gap: '3px' }}>
          <img src="images/bridge.png" />
          <TranslatedText translationId="nav-pud-vault">Bridge</TranslatedText>
        </div>
      </NavLink>
      <NavLink to="/undefined">
        <div style={{ display: 'flex', gap: '3px' }}>
          <img src="images/staking.png" alt="" />
          <TranslatedText translationId={218}>Staking</TranslatedText>
        </div>
      </NavLink>
      <NavLink to="/undefined">
        <div style={{ display: 'flex', gap: '3px' }}>
          <img src="images/farming.png" alt="" />
          <TranslatedText translationId={219}>Farming</TranslatedText>
        </div>
      </NavLink>

      <NavLink to="/add/ETH" className={(metaurl==="http://localhost:3001/#/remove" || metaurlto==="http://localhost:3001/#/add")?"active":""}>
        <div style={{ display: 'flex', gap: '3px' }}>
          <img src="images/liquidity.png" alt="" />
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
