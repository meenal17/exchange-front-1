import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'
import { NavLink, Link as HistoryLink } from 'react-router-dom'

import { ArrowLeft } from 'react-feather'
import { RowBetween } from '../Row'
import QuestionHelper from '../QuestionHelper'
import TranslatedText from '../TranslatedText'

const Tabs = styled.div`
  ${({ theme }) => theme.flexRowNoWrap}
  align-items: center;
  border-radius: 15px;
  justify-content: center;
box-shadow: rgb(68 235 214) 0px 0px 5px;
    border: 1px solid grey;
  column-gap: 24px;
`
// const Liquiditybox=styled.div`
// bbox-sizing: border-box;
// margin: 0;
// min-width: 0;
// width: unset;
// display: -webkit-box;
// display: -webkit-flex;
// display: -ms-flexbox;
// display: flex;
// padding: 0;
// -webkit-align-items: center;
// -webkit-box-align: center;
// -ms-flex-align: center;
// align-items: center;
// -webkit-box-pack: justify;
// -webkit-justify-content: space-between;
// -ms-flex-pack: justify;
// justify-content: space-between;
// `
const activeClassName = 'ACTIVE'

const StyledNavLink = styled(NavLink).attrs({
  activeClassName
})`
  ${({ theme }) => theme.flexRowNoWrap}
  align-items: center;
  justify-content: center;
  height: 2.6rem;
  border-radius: 15px;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  padding:2px 17px;
  margin:5px;
  color: ${({ theme }) => theme.colors.text3};
  font-size: 28px;
  font-weight:bold;

  &.${activeClassName} {
    border-radius: 15px;
    font-weight: bold;
    background:linear-gradient(88deg,#0bc496,#1f6d99);
    color:#c6cee1;
    
    // color: ${({ theme }) => theme.colors.text2};
  }

  :hover,
  :focus {
    color: ${({ theme }) => darken(0.1, theme.colors.text1)};
  }
`

const ActiveText = styled.div`
  font-weight: 500;
  font-size: 20px;
`

const StyledArrowLeft = styled(ArrowLeft)`
  color: ${({ theme }) => theme.colors.text1};
`

export function SwapPoolTabs({ active }: { active: 'swap' | 'pool' }) {
  return (
    <Tabs style={{ marginBottom: '20px', background:'#1a1a1a', }}>
      <StyledNavLink id={`swap-nav-link`} to={'/swap'} isActive={() => active === 'swap'}>
        <TranslatedText translationId={268}>Market</TranslatedText>
      </StyledNavLink>
      <StyledNavLink id={`pool-nav-link`} to="" isActive={() => active === 'pool'}>
        <TranslatedText translationId={270}>Limit</TranslatedText>
      </StyledNavLink>
    </Tabs>
  )
}

export function FindPoolTabs() {
  return (
    <Tabs>
      <RowBetween style={{ padding: '1rem' }}>
        <HistoryLink to="/add/ETH">
          <StyledArrowLeft />
        </HistoryLink>
        <ActiveText>Import Pool</ActiveText>
        <QuestionHelper text={"Use this tool to find pairs that don't automatically appear in the interface."} />
      </RowBetween>
    </Tabs>
  )
}

export function AddRemoveTabs({ adding }: { adding: boolean }) {
  return (
        <div className='poolcardsd'>{adding ? 'Add' : 'Remove'} Liquidity</div>
  )
}
