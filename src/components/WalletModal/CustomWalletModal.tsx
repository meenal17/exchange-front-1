import React, {useEffect } from 'react'
import styled from 'styled-components'
import { useWalletModalOpencustome,useWalletModalTogglecustome } from '../../state/application/hooks'

import Modal from '../Modal'
// import MetamaskIcon from '../../assets/images/metamask.png'
import { ReactComponent as Close } from '../../assets/images/x.svg'
import {  fortmatic } from '../../connectors'
import { OVERLAY_READY } from '../../connectors/Fortmatic'

const CloseIcon = styled.div`
  position: absolute;
  right: 1rem;
  top: 14px;
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`

const CloseColor = styled(Close)`
  path {
    stroke: ${({ theme }) => theme.colors.text4};
  }
`

const Wrapper = styled.div`
  ${({ theme }) => theme.flexColumnNoWrap}
  margin: 0;
  padding: 0;
  width: 100%;
`

const HeaderRow = styled.div`
  ${({ theme }) => theme.flexRowNoWrap};
  padding: 1rem 1rem;
  font-weight: 500;
  color: ${props => (props.color === 'blue' ? ({ theme }) => theme.colors.primary1 : 'inherit')};
  ${({ theme }) => theme.mediaWidth.upToMedium`
    padding: 1rem;
  `};
`

const ContentWrapper = styled.div`
  // background-color: ${({ theme }) => theme.colors.bg2};
  background-color: ${({ theme }) => theme.colors.bg1};
  padding: 2rem;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  ${({ theme }) => theme.mediaWidth.upToMedium`padding: 1rem`};
`

const UpperSection = styled.div`
  position: relative;

  h5 {
    margin: 0;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    font-weight: 400;
  }

  h5:last-child {
    margin-bottom: 0px;
  }
  h4 {
    margin-top: 0;
    font-weight: 500;
  }
`


export default function  WalletModalcustome() {


  const walletModalOpencustome = useWalletModalOpencustome()
  const toggleWalletModalcustome = useWalletModalTogglecustome()

  
  // close on connection, when logged out before
 

  // close wallet modal if fortmatic modal is active
  useEffect(() => {
    fortmatic.on(OVERLAY_READY, () => {
        toggleWalletModalcustome()
    })
  }, [toggleWalletModalcustome])

  // get wallets user can switch too, depending on device/browser


  function getModalContent() {
    
      return (
        <UpperSection>
          <CloseIcon onClick={toggleWalletModalcustome}>
            <CloseColor />
          </CloseIcon>
          <HeaderRow>Setting</HeaderRow>
          <ContentWrapper>
           hello
          </ContentWrapper>
        </UpperSection>
      )
    
  }

  return (
    <Modal isOpen={walletModalOpencustome} onDismiss={useWalletModalTogglecustome} minHeight={false} maxHeight={90}>
      <Wrapper>{getModalContent()}</Wrapper>
    </Modal>
  )
}
