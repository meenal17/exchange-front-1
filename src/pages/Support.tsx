import React from 'react'
import styled from 'styled-components'
const Support = () => {
  const Supportecard = styled.div`
    padding: 7px 4px;
    border-radius: 15px;
    background: #2b2b2b91;
    color: #d2d2d2;
    width: 16rem;
    margin: 5px;
    opacity: 0.2px;
    // box-shadow: 0px 0px 5px 4px rgb(38 49 91);
    box-shadow: crimson;
    display: flex;
    justify-content: center;
    gap: 10px;
    align-items: center;
    ${({ theme }) => theme.mediaWidth.upToExtraSmall`
     width: 10rem !important;
     margin: 15px !important;
     max-height:45px !important;
  `};
    ${({ theme }) => theme.mediaWidth.upToSmall`
   width: 10.5rem;
`};
    ${({ theme }) => theme.mediaWidth.upToMedium`
     width: 15rem;
`};

    ${({ theme }) => theme.mediaWidth.upToLarge`
width: 20rem;
margin: 20px;
max-height: 95px;
 `};
  `
  const Supportecardto = styled.div`
    padding: 7px 4px;
    border-radius: 9px;
    background: #2b2b2b91;
    color: #d2d2d2;
    width: 15rem;
    opacity: 0.2px;
    box-shadow: 0px 0px 5px 4px rgb(38 49 91);
    box-shadow: crimson;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    ${({ theme }) => theme.mediaWidth.upToLarge`
    margin: 0 16px;
  `};
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
  margin: 0 5px;
  max-height:40px
`};
  `
  const Supportecarddesk = styled.div`
    padding: 14px 20px;
    border-radius: 9px;
    background: #2b2b2b91;
    color: #d2d2d2;
    margin: 10px 37px;
    width: 24rem;
    opacity: 0.2px;
    box-shadow: 0px 0px 5px 4px rgb(38 49 91);
    box-shadow: crimson;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    margin:19px 1px;
    width: 10.8rem;
    padding:unset;
  `};
    ${({ theme }) => theme.mediaWidth.upToSmall`
  margin:19px 1px;
  width: 10.8rem;
  padding:unset;
  `};
    ${({ theme }) => theme.mediaWidth.upToMedium`
  margin:19px 1px;
  width: 10.8rem;
  padding:unset;
  `};
  `
  // const Supportecardthree = styled.div`
  //   padding: 7px 4px;
  //   border-radius: 9px;
  //   background: #2b2b2b91;
  //   color:#d2d2d2;
  //   width: 15rem;
  //   opacity: 0.2px;
  //   // box-shadow: 0px 0px 5px 4px rgb(38 49 91);
  //   box-shadow: crimson;
  //   display: flex;
  //   justify-content: space-evenly;
  //   align-items: center;
  //   ${({ theme }) => theme.mediaWidth.upToExtraSmall`
  //   margin:19px 1px;
  //   width: unset;
  //   padding:unset;
  // `};
  // `
  const Parentsupportcard = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 20px 0px;
    ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    display: unset;
    justify-content:unset;
  `};
    ${({ theme }) => theme.mediaWidth.upToSmall`
  display: unset;
  justify-content:unset;
  `};
    ${({ theme }) => theme.mediaWidth.upToMedium`
  display: unset;
    justify-content:unset;
  `};
  `
  const Parentsupportcardnew = styled.div`
    display: none;
    justify-content: space-around;
    padding: 20px 0px;
    ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    display: flex;
    justify-content:space-between;
    padding:unset;
  `};
    ${({ theme }) => theme.mediaWidth.upToSmall`
  display: flex;
  justify-content:space-between;
  padding:unset;
  `};
    ${({ theme }) => theme.mediaWidth.upToMedium`
  display: flex;
    justify-content:space-between;
    padding:unset;
  `};
  `

  const Parentsupportcarddesk = styled.div`
    display: flex;
    padding: 20px 0px;
    justify-content: center;
    ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    display:none;
    justify-content:space-between;
    padding:unset;
  `};
    ${({ theme }) => theme.mediaWidth.upToSmall`
  display:none;
  justify-content:space-between;
  padding:unset;
  `};
    ${({ theme }) => theme.mediaWidth.upToMedium`
   display:none;
    justify-content:space-between;
    padding:unset;
  `};
  `

  const SupportCardForMobile = styled.div`
    ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    display: flex;
    justify-content: space-between;
  `};
    ${({ theme }) => theme.mediaWidth.upToSmall`
  display: flex;
  justify-content:center;
  Align-item:center;
  text-Align:center
`};
    ${({ theme }) => theme.mediaWidth.upToMedium`
display: flex;
justify-content:center;
  Align-item:center;
  text-Align:center
`};
  `
  const Cardimg = styled.div`
    text-align: center;
    ${({ theme }) => theme.mediaWidth.upToExtraSmall`
      font-size: 0.8rem;
      
 `};
  `
  const Bannerheading = styled.div`
    margin-bottom: 43px;
    ${({ theme }) => theme.mediaWidth.upToExtraSmall`
  padding: 1.5rem;
  margin-bottom:unset;
 `};
  `
  const HeadingMytext = styled.div`
    color: #fff;
    font-size: 46px;
    line-height: 1.2em;
    font-weight: 800;
    text-align: center;
    font-family: 'Inter', sans-serif !important;
 background: linear-gradient(113deg,#45ff6c,#47a7ae,#0892ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    ${({ theme }) => theme.mediaWidth.upToExtraSmall`
font-size: 24px;
background: linear-gradient(113deg,#c0f5cb,#47a7ae,#0892ff);
 -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`};
  `
  const Containersupport = styled.div`
  padding: 13rem 0;
  width:80%;
    margin: 0 auto;
    background: url(/images/astronaut.png);
    background-position: bottom;
    background-repeat: no-repeat;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
  padding: 0;
  background:unset;
 `};
`
  return (
    <>
    <Containersupport>

    <Bannerheading>
        <HeadingMytext>Support Network</HeadingMytext>
        <div className='headingborderthree'>

                  </div>
      </Bannerheading>
      <SupportCardForMobile>       
        <Parentsupportcard>
          <Supportecard style={{ boxShadow: '0px 0px 5px 4px rgb(38 49 91)' }}>
            <Cardimg>
              <img src="images/eth.png" alt="bsc" className="cardimgsize" />
            </Cardimg>
            <Cardimg>
              <h2 className="headingfontsize">Ethereum</h2>
            </Cardimg>
          </Supportecard>
          <Supportecard style={{ boxShadow: 'hsl(0deg 1% 66% / 63%) 1px 0px 4px 3px' }}>
            <Cardimg>
              <img src="images/polygon.png" alt="bsc" className="cardimgsize" />
            </Cardimg>
            <Cardimg>
              <h2 className="headingfontsize"> Polygon</h2>
            </Cardimg>
          </Supportecard>

          <Supportecard style={{ boxShadow: '#742c2c 0px 0px 5px 4px' }}>
            <Cardimg>
              <img src="images/ava.png" alt="bsc" className="cardimgsize" />
            </Cardimg>
            <Cardimg>
              <h2 className="headingfontsize">Avalanche</h2>
            </Cardimg>
          </Supportecard>
          <Supportecard style={{ boxShadow: '0px 0px 5px 4px rgb(38 49 91)' }}>
            <Cardimg>
              <img src="images/fantom.png" alt="bsc" className="cardimgsize" />
            </Cardimg>
            <Cardimg>
              <h2 className="headingfontsize">Fantom</h2>
            </Cardimg>
          </Supportecard>
        </Parentsupportcard>
        {/* second row */}
        <Parentsupportcard>
          <Supportecard style={{ boxShadow: ' rgb(240 185 11) 0px 0px 7px 1px' }}>
            <Cardimg>
              <img src="images/bsc.png" alt="bsc" className="cardimgsize" />
            </Cardimg>
            <Cardimg>
              <h2 className="headingfontsize">Bsc</h2>
            </Cardimg>
          </Supportecard>
          <Supportecard style={{ boxShadow: 'rgb(90 15 15) 0px 0px 5px 4px' }}>
            <Cardimg>
              <img src="images/tron.png" alt="bsc" className="cardimgsize" />
            </Cardimg>
            <Cardimg>
              <h2 className="headingfontsize">Tron</h2>
            </Cardimg>
          </Supportecard>
          <Supportecard style={{ boxShadow: 'rgb(48 23 91) 0px 0px 5px 4px' }}>
            <Cardimg>
              <img src="images/wyzth.png" alt="bsc" className="cardimgsize" />
            </Cardimg>
            <Cardimg>
              <h2 className="headingfontsize">Wyzth</h2>
            </Cardimg>
          </Supportecard>
          <Supportecard style={{ boxShadow: 'rgb(47 75 88) 0px 0px 5px 4px' }}>
            <Cardimg>
              <img src="images/fantom.png" alt="bsc" className="cardimgsize" />
            </Cardimg>
            <Cardimg>
              <h2 className="headingfontsize">Lebo Chain</h2>
            </Cardimg>
          </Supportecard>
        </Parentsupportcard>
      </SupportCardForMobile>

      {/* backend by the best */}
      <Bannerheading>
        <HeadingMytext style={{marginTop:'2rem'}}>Backend By The Best</HeadingMytext>
        <div className='headingborderfour'>

                  </div>
      </Bannerheading>

      <Parentsupportcardnew>
        <Supportecardto>
          <Cardimg>
            <img src="images/Group6.png" alt="bsc" className="cardimgsizeto" />
          </Cardimg>
          <Cardimg>
            <h2 className="mobiletext">Conitelgraph</h2>
          </Cardimg>
        </Supportecardto>
        <Supportecardto>
          <Cardimg>
            <img src="images/Group7.png" alt="bsc" className="cardimgsizeto" />
          </Cardimg>
          <Cardimg>
            <h2 className="mobiletext">Yourstory</h2>
          </Cardimg>
        </Supportecardto>
        <Supportecardto>
          <Cardimg>
            <img src="images/Group8.png" alt="bsc" className="cardimgsizeto" />
          </Cardimg>
          <Cardimg>
            <h2 className="mobiletext">Coindesk</h2>
          </Cardimg>
        </Supportecardto>
      </Parentsupportcardnew>

      {/* backend by best for desktop */}

      <Parentsupportcarddesk>
        <Supportecarddesk>
          <Cardimg>
            <img src="images/Group6.png" alt="bsc" className="cardimgsize" />
          </Cardimg>
          <Cardimg>
            <h2>Conitelgraph</h2>
          </Cardimg>
        </Supportecarddesk>
        <Supportecarddesk>
          <Cardimg>
            <img src="images/Group7.png" alt="bsc" className="cardimgsize" />
          </Cardimg>
          <Cardimg>
            <h2>Yourstory</h2>
          </Cardimg>
        </Supportecarddesk>
        <Supportecarddesk>
          <Cardimg>
            <img src="images/Group8.png" alt="bsc" className="cardimgsize" />
          </Cardimg>
          <Cardimg>
            <h2>Coindesk</h2>
          </Cardimg>
        </Supportecarddesk>
      </Parentsupportcarddesk>
      </Containersupport>
    </>
  )
}

export default Support
