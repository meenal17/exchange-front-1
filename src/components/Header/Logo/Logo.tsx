import React from 'react'
import styled from 'styled-components'
// import logoDark from '../../../assets/images/logo-pipi-light.png'
// import logoLight from '../../../assets/images/logo-pipi-light.png'
// import logoText from '../../../assets/images/logo_text.png'÷\

interface LogoProps {
  isDark: boolean
}
const Logo: React.FC<LogoProps> = ({ isDark }) => {
  return (
    <StyledLogo>
      <img src="lebo_logo.png" alt="logo" width={80}/>
    </StyledLogo>
  )
}

const StyledLogo = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  // margin-right: 42px;
  text-decoration: none;
  
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    .text {
      display: none
    }
  `};
`

export default Logo
