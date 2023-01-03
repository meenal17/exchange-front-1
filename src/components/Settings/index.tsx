import React from 'react'
import styled from 'styled-components'
import { useWalletModalTogglecustome } from '../../state/application/hooks'


export const CONNECTOR_STORAGE_ID = 'CONNECTOR_STORAGE_ID'

const SettingsTab: React.FC<{}> = () => {
  
  const toggleWalletModalcustome = useWalletModalTogglecustome()
 
  
  return (
    <StyledAccountButton>
    
         <div className="accountbuttontest">
        <Button onClick={toggleWalletModalcustome}>
        <i className="fa fa-cog seetingstyle" aria-hidden="true" ></i>
        </Button>
        </div>
      
      
    </StyledAccountButton>
  )
}
const Button = styled.div`
  align-items: center;
  // background:transparent;
  // background: ${props => props.theme.colors.primary};
  // border-radius: 100px;
  color: #fff;
  cursor: pointer;
  display: flex;
  // font-size: 14px;
  // height: 36px;
  font-weight: 700;
  justify-content: center;
  outline: none;
  // padding-left: 16px;
  // padding-right: 16px;
  width: 100%;
  // background: linear-gradient(92deg,#ebc1a3,#d890a2,#f5c1a9);
	// -webkit-background-clip: text;
	// -webkit-text-fill-color: transparent;
  &:hover {
    // background-color: ${props => props.theme.colors.primary};
    box-shadow: 0px 4px 4px rgb(0 0 0 / 0.2);
  }
`
const StyledAccountButton = styled.div`
  button {
    :hover {
      background: ${props => props.theme.colors.primary};
    }
  }
  @media (max-width: 850px) {
    button {
      padding: 6px 10px;
      font-size: 12px;
      border-radius: 8px;
    }
  }
`

export default SettingsTab
