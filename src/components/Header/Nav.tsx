import React from 'react'
import styled from 'styled-components'
import TranslatedText from '../TranslatedText'
import { Link } from "react-router-dom";
const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledAbsoluteLink href="#">
     <div style={{display:"flex" ,gap:"3px"}}>
     <img src="Vector.png" alt="" />
        <TranslatedText translationId={198}>Markets</TranslatedText>
     </div>
      </StyledAbsoluteLink>
      <StyledAbsoluteLink >
        <Link to="/swap" style={{textDecoration:"none"}}>
      <div style={{display:"flex" ,gap:"3px"}}>
        <img src="Vector 2.png" alt="" />
        <TranslatedText translationId={200}>Swap</TranslatedText>
        </div>
        </Link>
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="#">
      <div style={{display:"flex" ,gap:"3px"}}>
        <img src="bridge.png"/>
        <TranslatedText translationId="nav-pud-vault">Bridge</TranslatedText>
        </div>
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="#">
      <div style={{display:"flex" ,gap:"3px"}}>
        <img src="staking.png" alt=""/>
        <TranslatedText translationId={218}>Staking</TranslatedText>
        </div>
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="#"> 
        <div style={{display:"flex" ,gap:"3px"}}>
      <img src="farming.png" alt=""/>
      <TranslatedText translationId={219}>
       Farming</TranslatedText>
       </div>
       </StyledAbsoluteLink>
     
      <StyledAbsoluteLink href="#">
      <Link to="/add/ETH" style={{textDecoration:"none"}}>
      
      <div style={{display:"flex" ,gap:"3px"}}>
      <img src="liquidity.png" alt=""/>
      <TranslatedText translationId={220}>Liquidity</TranslatedText>
      </div>
      </Link>
      </StyledAbsoluteLink>
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

const StyledAbsoluteLink = styled.a`
  position: relative;
  // color: rgb(127, 134, 143);
  margin-right: 24px;
  text-decoration: none;
    transition: transform .3s; /* Animation */

background: linear-gradient(to right, #13B9AA 0%, #1e729a 100%);
  background-clip: border-box;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
font-size:20px;
  &:hover {
    background: #ccc;
  background-clip: border-box;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
 transform: scale(1.2)
  }
  @media (max-width: 400px) {
    margin-right: 24px;
  }
`
export default Nav
