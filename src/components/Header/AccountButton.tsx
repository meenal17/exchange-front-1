import React, { useCallback } from 'react'
import styled from 'styled-components'
// import useHTPrice from '../../hooks/useHtPrice'
// import useTokenBalance from '../../hooks/useTokenBalance'
// import { getBalanceNumber } from '../../utils/formatBalance'
// import { getPipiAddress } from '../../utils/addressHelpers'
// import { useI18n } from 'i18n/i18n-react'
import { useWalletModalToggle } from '../../state/application/hooks'
import { useActiveWeb3React } from '../../hooks'
import TranslatedText from '../TranslatedText'
import { shortenAddress } from '../../utils'
// import copyIcon from '../../assets/images/copy.png'

export const CONNECTOR_STORAGE_ID = 'CONNECTOR_STORAGE_ID'

const AccountButton: React.FC<{}> = () => {
  // const i18n = useI18n()
  // const { pippiPrice } = useHTPrice()
  const { account } = useActiveWeb3React()
  // const sushiBalance = useTokenBalance(getPipiAddress() as any)
  const toggleWalletModal = useWalletModalToggle()
  const handleSignOutClick = useCallback(() => {
    window.localStorage.removeItem(CONNECTOR_STORAGE_ID)
    // unsetConnector()
  }, [])
  // const copy = () => {
  //   const input = document.createElement('input')
  //   input.setAttribute('readonly', 'readonly')
  //   input.setAttribute('value', account || '')
  //   document.body.appendChild(input)
  //   input.setSelectionRange(0, 9999)
  //   if (document.execCommand('copy')) {
  //     document.execCommand('copy')
  //   }
  //   document.body.removeChild(input)
  // }

  function myFunction() {
    console.log("hello im calling");
    var x = document.getElementById('myDIV')?.style
    if (x?.display === 'none') {
      x?.setProperty('display', 'block')
    } else {
      x?.setProperty('display', 'none')
    }
  }
  return (
    <StyledAccountButton>
      {!account ? (
        <div className="accountbutton">
          <Button onClick={toggleWalletModal}>
            <TranslatedText translationId={204}>Connect Wallet</TranslatedText>
          </Button>
        </div>
      ) : (
        <>
          <AccountCn>
            <AccountInner>
              <button className="accountbuttonxyz" onClick={myFunction}>
              <img src="wallet.png" alt="" className="link" width={21} />
                <span className="text customtextstyle" style={{ fontSize: '17px' }}>
                  {shortenAddress(account)}
                </span>
                <img src="images/down_arrow.png" alt="" style={{width:"20px",height:"12px"}}/>
              </button>
               
            </AccountInner>
            {/* <div id="myDIV" >This is my DIV element.</div> */}
            <Modal className="modal" id="myDIV" style={{display:"none"}}>
              <div>
                <h4 className="">Transactions</h4>
                <div>
                <ButtonCustom onClick={handleSignOutClick}>Disconnect</ButtonCustom>
              </div>
              </div>

              {/* <div className="flex">
                <ButtonCustom onClick={handleSignOutClick}>Disconnect</ButtonCustom>
              </div> */}
            </Modal>
          </AccountCn>
        </>
      )}
    </StyledAccountButton>
  )
}
const Button = styled.div`
  align-items: center;
  background:transparent;
  // background: ${props => props.theme.colors.primary};
  border-radius: 100px;
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
  background: linear-gradient(92deg,#ebc1a3,#d890a2,#f5c1a9);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
  &:hover {
    // background-color: ${props => props.theme.colors.primary};
    box-shadow: 0px 4px 4px rgb(0 0 0 / 0.2);
  }
`
// const Link = styled.a`
//   display: block;
//   margin-top: 20px;
//   color: ${props => props.theme.colors.primary};
//   font-size: 14px;
//   line-height: 16px;
//   font-weight: bolder;
//   text-decoration: none;
// `
const ButtonCustom = styled.div`
  margin: 12px 0;
  // padding: 5px 12px;
  // border: 1px solid #7f868f;
  color:#dc2a2a;
  // text-align: center;
  // border-radius: 24px;
  cursor: pointer;
`
// const Content = styled.div`
//   padding-top: 12px;
//   padding-bottom: 12px;
//   border-bottom: 1px solid #d8dee3;
//   font-size: 14px;
//   line-height: 24px;
//   font-weight: bolder;
//   color: #2f3644;
//   .title {
//     color: #7f868f;
//   }
//   .money {
//     font-size: 16px;
//   }
//   .usdt {
//     font-size: 12px;
//   }
//   .subtitle {
//     display: flex;
//     justify-content: space-between;
//     img {
//       height: 18px;
//     }
//   }
// `
const AccountCn = styled.div`
  position: relative;
  width: 185px;
  height: 40px;
  // &:hover {
  //   .modal {
  //     display: block;
  //   }
  }
`
const AccountInner = styled.div`
  position: absolute;
  height: 70px;
  left: 0;
  width: 100%;
`
// const Account = styled.div`
//   position: absolute;
//   top: 0;
//   width: 100%;
//   border-radius: 100px;
//   padding: 0 0 0 12px;
//   display: flex;
//   align-items: center;
//   align-content: center;
//   justify-content: space-between;
//   justify-items: center;
//   cursor: pointer;
//   background: rgb(244, 247, 250);
//   .user-account {
//     width: 40px;
//   }
//   .text {
//     width: 95px;
//   }
//   .link {
//     width: 15px;
//   }
// `
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
const Modal = styled.div`
  position: absolute;
  right: 0;
  top: 56px;
  width: 300px;
  padding: 4px 12px 12px 12px;
  display: none;
  padding-left: 20px;
  padding-bottom: 0;
  box-sizing: border-box;
  background: #000;
  border:1px solid red;
  box-shadow: 0px 4px 20px rgba(117, 117, 117, 0.1);
  border-radius: 12px;
  .flex {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`

export default AccountButton
