import React, {useState} from 'react'
import styled from 'styled-components'
import { useWalletModalToggle } from '../../state/application/hooks'
import { useActiveWeb3React } from '../../hooks'
import TranslatedText from '../TranslatedText'
import { shortenAddress } from '../../utils'
import { walletlink, bsc } from "../../connectors"
export const CONNECTOR_STORAGE_ID = 'CONNECTOR_STORAGE_ID'
const AccountButton: React.FC<{}> = () => {
  const { account,connector } = useActiveWeb3React()
  const [lf, setLF] = useState(true);

  // const sushiBalance = useTokenBalance(getPipiAddress() as any)
  const toggleWalletModal = useWalletModalToggle()


  function myFunction() {
    console.log("hello im calling");
    var x = document.getElementById('myDIV')?.style
    if (x?.display === 'none') {
      x?.setProperty('display', 'block')
      setLF(true)
    } else {
      x?.setProperty('display', 'none')
      setLF(false)
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
              <img src="images/wallet.png" alt="" className="link" width={21} />
                <span className="text customtextstyle" style={{ fontSize: '17px' }}>
                  {shortenAddress(account)}
                </span>
                {lf? <img src="images/down.svg" alt="" style={{width:"20px",height:"12px"}}/> :<img src="images/up.svg" alt="" style={{width:"20px",height:"12px"}}/>}
               
              </button>
               
            </AccountInner>
            {/* <div id="myDIV" >This is my DIV element.</div> */}
            <Modal className="modal" id="myDIV" style={{display:"none"}}>
              <div>
                <h4 className="">Transactions</h4>
                <div>
                <ButtonCustom onClick={()=>{
                if(connector && walletlink && bsc){
                  (connector as any).handleClose();
                }
              }} >Disconnect</ButtonCustom>
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
  z-index: 100000;
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
    margin-top: -5px;
    left: -3px;
    top: 37px;
    width: 176px;
    padding: 4px 12px 12px 12px;
    display: none;
    padding-left: 20px;
    padding-bottom: 0;
    box-sizing: border-box;
    background: #000;
    border-color:transparent #e9bfa3 #e9bfa3 #e9bfa3;
    border-style:solid;
    border-width:0 3px 3px 3px ;
    // border: 3px solid #e9bfa3;
    box-shadow: 0px 4px 20px rgb(117 117 117 / 10%);
    border-top-left-radius: 0;
    border-bottom-left-radius: 12px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 12px;
  .flex {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`

export default AccountButton
