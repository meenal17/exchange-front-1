import React, { useRef, useContext, useState, useEffect } from 'react'
import { X } from 'react-feather'
import styled from 'styled-components'
import {
  useWalletModalOpencustome,
  useWalletModalTogglecustome,
  useSettingsMenuOpen,
  useToggleSettingsMenu
} from '../../state/application/hooks'
import { useUserSlippageTolerance, useUserDeadline, useAudioModeManager } from '../../state/user/hooks'
import Modalto from '../../components/Modal/Modalto'
import Modal from '../Modal'
import { AutoColumn } from '../Column'
import { RowFixed, RowBetween } from '../Row'
import { ReactComponent as Close } from '../../assets/images/cross.svg'
import { fortmatic } from '../../connectors'
import { OVERLAY_READY } from '../../connectors/Fortmatic'
import { ThemeContext } from 'styled-components'
import { Text } from 'rebass'
// import { ButtonError } from '../Button'
import TransactionSettings from '../TransactionSettings'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'
import { TYPE } from '../Shared'
import Toggle from '../Toggle'
// import TranslatedText from '../TranslatedText'
const CloseIcon = styled.div`
  position: absolute;
right: 1rem;
top: 14px;
border: 3px solid grey;
padding: 3px 5px;
width: rem;
border-radius: 37px;
text-align: center;
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
  padding: 0.5rem 4.5rem;
  font-weight: 900;
  font-size:33px;
  justify-content:center;
  color: #fff;
  // ${({ theme }) => theme.mediaWidth.upToMedium`
  //   padding: 1rem;
  // `};
`

const ContentWrapper = styled.div`
  // background-color: ${({ theme }) => theme.colors.bg2};
  background-color:#0d0b0b;
  padding: 1rem;
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

const StyledCloseIcon = styled(X)`
  height: 20px;
  width: 20px;
  font-weight:900;
  :hover {
    cursor: pointer;
  }

  > * {
    stroke: ${({ theme }) => theme.colors.text1};
  }
`

const StyledMenu = styled.div`
  // margin-left: 0.5rem;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  position: relative;
  border: none;
  text-align: left;
`

const Break = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.bg3};
`

const ModalContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  background-color: ${({ theme }) => theme.colors.bg2};
  border-radius: 20px;
`

export default function WalletModalcustome() {
  const walletModalOpencustome = useWalletModalOpencustome()
  const toggleWalletModalcustome = useWalletModalTogglecustome()

  // setting code
  const node = useRef<HTMLDivElement>()
  const open = useSettingsMenuOpen()
  const toggle = useToggleSettingsMenu()

  const theme = useContext(ThemeContext)
  const [userSlippageTolerance, setUserslippageTolerance] = useUserSlippageTolerance()

  const [deadline, setDeadline] = useUserDeadline()

  // const [expertMode, toggleExpertMode] = useExpertModeManager()

  const [audioMode, toggleSetAudioMode] = useAudioModeManager()

  // show confirmation view before turning on
  const [showConfirmation, setShowConfirmation] = useState(false)

  useOnClickOutside(node, open ? toggle : undefined)
  // setting code end

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
          <CloseColor  style={{position:'relative', top:'2px'}}/>
        </CloseIcon>

        <HeaderRow>Settings</HeaderRow>
        <div className="headingborderfive"></div>
        <ContentWrapper>
          <StyledMenu ref={node as any}>
            <Modal isOpen={showConfirmation} onDismiss={() => setShowConfirmation(false)} maxHeight={100}>
              <ModalContentWrapper>
                <AutoColumn gap="lg">
                  <RowBetween style={{ padding: '0 2rem' }}>
                    <div />
                    <Text fontWeight={500} fontSize={20}>
                      Are you sure?
                    </Text>
                    <StyledCloseIcon onClick={() => setShowConfirmation(false)} />
                  </RowBetween>
                  <Break />
                  <AutoColumn gap="lg" style={{ padding: '0 2rem' }}>
                    <Text fontWeight={500} fontSize={20}>
                      Expert mode turns off the confirm transaction prompt and allows high slippage trades that often
                      result in bad rates and lost funds.
                    </Text>
                    <Text fontWeight={600} fontSize={20}>
                      ONLY USE THIS MODE IF YOU KNOW WHAT YOU ARE DOING.
                    </Text>
                    {/* <ButtonError
                error={true}
                padding={'12px'}
                onClick={() => {
                  if (window.prompt(`Please type the word "confirm" to enable expert mode.`) === 'confirm') {
                    toggleExpertMode()
                    setShowConfirmation(false)
                  }
                }}
              >
                <Text fontSize={20} fontWeight={500} id="confirm-expert-mode">
                  Turn On Expert Mode
                </Text>
              </ButtonError> */}
                  </AutoColumn>
                </AutoColumn>
              </ModalContentWrapper>
            </Modal>

            <AutoColumn gap="md">
              {/* <Text fontWeight={600} fontSize={14}>
              <TranslatedText translationId={190}>Transaction Settings</TranslatedText>
            </Text> */}
              <TransactionSettings
                rawSlippage={userSlippageTolerance}
                setRawSlippage={setUserslippageTolerance}
                deadline={deadline}
                setDeadline={setDeadline}
              />
              {/* <Text fontWeight={600} fontSize={14}>
              <TranslatedText translationId={192}>Interface Settings</TranslatedText>
            </Text> */}
              {/* <RowBetween>
              <RowFixed>
                <TYPE.black fontWeight={400} fontSize={14} color={theme.colors.text2}>
                  <h2>Toggle Audio Mode</h2>
                </TYPE.black>
              </RowFixed>
              <Toggle isActive={audioMode} toggle={toggleSetAudioMode} />
            </RowBetween> */}
              <RowBetween>
                <RowFixed>
                  <TYPE.black fontWeight={400} fontSize={14} color={theme.colors.text2}>
                    <h2 className='mode'>Pro Mode</h2>
                  </TYPE.black>
                </RowFixed>
                <Toggle isActive={audioMode} toggle={toggleSetAudioMode} />
              </RowBetween>
              <RowBetween>
                <RowFixed>
                  <TYPE.black fontWeight={400} fontSize={14} color={theme.colors.text2}>
                    <h2 className='mode'>Practice Mode</h2>
                  </TYPE.black>
                </RowFixed>
                <Toggle  isActive={!audioMode} toggle={toggleSetAudioMode} />
              </RowBetween>
            </AutoColumn>
            {/* </MenuFlyout> */}
          </StyledMenu>
        </ContentWrapper>
      </UpperSection>
    )
  }

  return (
    <Modalto isOpen={walletModalOpencustome} onDismiss={useWalletModalTogglecustome} minHeight={false} maxHeight={90}>
      <Wrapper>{getModalContent()}</Wrapper>
    </Modalto>
  )
}
