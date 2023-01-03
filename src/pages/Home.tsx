import React from 'react'
import styled from 'styled-components'
import Carsole from './Carsolle/Carasole'
import Support from './Support'
import Footer from './HomeFooter/Footer'
import Particle from './particle/Particle'
const Body = styled.div`
  // background: url('/background.png');
  // background: black;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  //position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`

// const Container = styled.div`
//   padding: 3rem 0 ;
//   // width: 50%;
//     margin: 0 auto;
//   ${({ theme }) => theme.mediaWidth.upToExtraSmall`
//   padding: 0;
//  `};
// `
const Container1 = styled.div`
padding: 0px 10px;
padding-top: 7rem;
background: url(/bg_handshake.png);
background-size: cover;
background-position: center;
background-repeat: no-repeat;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
  padding: 0;
  margin: unset;
 `};
`
const Container2 = styled.div`
  padding: 3.8rem 0;
  margin: 0 auto;
  background: url(/bg_moon.png);
  // background-size: cover;
  // background-position: center;
  background-repeat: no-repeat;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
  padding: 0;
  background: unset;
 `};
`
const Container3 = styled.div`
  padding: 0rem 0;
  margin: 0 auto;
  background: url(/ar.png);
  // background-size: cover;
  // background-position: center;
  background-repeat: no-repeat;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
  padding: 0;
  background:unset;
 `};
`
const Containerto = styled.div`
  // padding: 3rem 0;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
  background-size: contain;
    background-image: url(./missioto.png);
    background-repeat: no-repeat;
    background-position: center;
    top: 25%;
 `};

  ${({ theme }) => theme.mediaWidth.upToSmall`
 background-size: contain;
 background-image: url(./missioto.png);
 background-repeat: no-repeat;
 background-position: center;
 top: 25%;
`};
  ${({ theme }) => theme.mediaWidth.upToMedium`
background-size: contain;
    background-image: url(./missioto.png);
    background-repeat: no-repeat;
    background-position: center;
    top: 25%;
`};
`

const Homecard = styled.div`
  padding: 0.5rem 6rem;

  border-radius: 1.3rem;
  text-align: center;
  margin-bottom: 50px;
  color: rgb(62 144 145);
  box-shadow: 0px 0px 5px 4px rgb(56 115 116);
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
   white-space:no-wrap;
      padding: 19px 4px;
    margin: 5px 12px;
  `};
`
const Homecardtrade = styled.div`
  padding: 0px 62px;

  border-radius: 1.3rem;
  text-align: center;
  margin-bottom: 50px;
  color: rgb(237 170 108);
  box-shadow: 0px 0px 5px 4px rgb(237 170 108);
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
  white-space:no-wrap;
     padding: 19px 4px;
    margin: 20px 12px;
 `};
`
const Homecardto = styled.div`
  padding: 0px 62px;

  border-radius: 1.3rem;
  text-align: center;
  margin-bottom: 50px;
  color: rgb(232 105 89);
  box-shadow: 0px 0px 5px 4px rgb(232 105 89);
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
  white-space:no-wrap;
    padding: 0px 44px
 `};
`

const Homecardthree = styled.div`
  padding: 0px 70px;
  border-radius: 1.3rem;
  text-align: center;
  margin-bottom: 50px;
  color: rgb(63 34 108);
  box-shadow: 0px 0px 5px 4px rgb(63 34 108);
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
white-space:no-wrap;
padding: 0px 49px;
`};
`

const Mytext = styled.div`
  color: #fff;
  font-size: 55px;
  line-height: 1.2em;
  font-weight: 600;
  text-align: center;

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
  font-size: 28px;
  `};
`
const Textwhy = styled.div`
  color: #fff;
  font-size:46px;
  font-family: 'Inter', sans-serif !important;
 background: linear-gradient(113deg,#45ff6c,#47a7ae,#0892ff);
  font-weight: 800;
  text-align: center;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0 auto;

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
  font-size: 28px;
  width: 249px;
 background:linear-gradient(113deg,#abe0b6,#67b1b6,#44a8f6cf);
  font-weight: 800;
  text-align: center;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  `};
`
const HeadingMytext = styled.div`
 font-family: 'Inter', sans-serif !important;
 background: linear-gradient(113deg,#45ff6c,#47a7ae,#0892ff);
  color: #fff;
  font-size: 46px;
  line-height: 0.9em;
  font-weight: 900;
  text-align: center;
  
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0 auto;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
  font-size: 30px;
  background: linear-gradient(113deg,#abe0b6,#47a7ae,#0892ff);
  color: #fff;
  line-height: 0.9em;
  font-weight: 900;
  text-align: center;
  
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  // width: 124px;
  `};
`


const Mytextto = styled.div`
  color: #fff;
  font-size: 3rem;
  line-height: 1.2em;
  font-weight: 900;
  text-align: center;
  font-family: 'Inter', sans-serif !important;
 background: linear-gradient(113deg,#92f0a6,#47a7ae,#0892ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent
    ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    font-size: 27px;
    line-height: 1.2em;
  font-weight: 900;
  text-align: center;
  font-family: 'Inter', sans-serif !important;
  background: linear-gradient(113deg,#abe0b6,#47a7ae,#0892ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent
  color: #fff;
  `};
`
const Bannertxt = styled.div`
font-family: 'Inter', sans-serif !important;
  color: #fff;
  font-size: 22px;
  margin-top: 10px;
  line-height: 1.3em;
  padding: 0 9rem;
  font-weight: 600;
  text-align: center;
  background: linear-gradient(92deg,#ebc1a3,#d890a2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`

    font-size: 16px;
    line-height: 1.8em;
   `};
  ${({ theme }) => theme.mediaWidth.upToLarge`
    padding:0 5px;
    font-size:19px;
   `};
   ${({ theme }) => theme.mediaWidth.upToMedium`
    padding:0 5px;
    font-size:12px;
   `};
`
const Bannerheading = styled.div`
  margin-bottom: 43px;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
  padding: 1.5rem;
  margin-bottom:unset;
 `};
`
const Buttondiv = styled.div`
  text-align: -webkit-center;
   text-align: center;
  padding-top: 50px;
`

const Sectiotwosection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
  display: unset;
  justify-content: unset;
  
`};
  ${({ theme }) => theme.mediaWidth.upToSmall`
  display: unset;
  justify-content: unset;
  
`};
`

const Carsolesection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
  display: unset;
  justify-content: unset;
  
`};
  ${({ theme }) => theme.mediaWidth.upToSmall`
  display: unset;
  justify-content: unset;
  
`};
`
const Cardcustom = styled.div`
  display: flex;
  justify-content: space-between;

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
  display: flex;
  justify-content: space-around;
`};
`
const Imangecard = styled.div`
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
display: none;

`};
  ${({ theme }) => theme.mediaWidth.upToSmall`
display: none;
`};
  ${({ theme }) => theme.mediaWidth.upToMedium`
display: none;
`};
`

const Home = () => {
  return (
    <>
  
      <div className="xyz">
      {/* <Particle />  */}
        <Body>
        {/* <Particle /> */}
          <div className="stars-wrapper">
          <Particle /> 
            <Container1>
              <Bannerheading>
                <Mytextto>
                  A Cross-Chain Protocol
                  <div>
                    Where <span className="mytexfdxdd">Trust</span> meets <span className="mytexfdxdd">Needs</span>
                  </div>
                </Mytextto>

                <Bannertxt>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. <div>Minima nostrum delectus commodi.</div>
                </Bannertxt>
                <Buttondiv>
                  <div className="LaunchButton">
                    {' '}
                    <span className="textnew">Launch Swap</span>{' '}
                  </div>
                </Buttondiv>
              </Bannerheading>
            </Container1>
            {/* section two start  */}

            <Container2>
            
              <Containerto>
                <Bannerheading>
                  <HeadingMytext>Statistics</HeadingMytext>
                  <div className='headingborder'>

                  </div>

                </Bannerheading>
                <Sectiotwosection>
                  <div>
                    <Homecard>
                      <h2 className="" style={{ margin: '0', lineHeight: '37px' }}>
                        Total Value Locked(TVL)
                      </h2>
                      <Mytext> $1,154,896.54</Mytext>
                    </Homecard>
                    <Homecardtrade>
                      <h2 className="" style={{ margin: '0', lineHeight: '37px' }}>
                        Total Value Locked(TVL)
                      </h2>
                      <Mytext> $1,154,896.54</Mytext>
                    </Homecardtrade>
                    <Cardcustom>
                      <Homecardto>
                        <h2 className="" style={{ margin: '0', lineHeight: '37px' }}>
                          Tokens
                        </h2>
                        <Mytext>3500+</Mytext>
                      </Homecardto>
                      <Homecardthree>
                        <h2 className="" style={{ margin: '0', lineHeight: '37px' }}>
                          APY
                        </h2>
                        <Mytext>27%</Mytext>
                      </Homecardthree>
                    </Cardcustom>
                  </div>
                  <Imangecard>
                    <img src="mission.png" alt="" style={{ width: '100%' }} />
                  </Imangecard>
                </Sectiotwosection>
              </Containerto>
            </Container2>

            {/* section three start */}
            <Container3>
              <Bannerheading>
                <Textwhy>Why We Use LeBo</Textwhy>

                <div className='headingborderto'>

                  </div>
              </Bannerheading>
              <Carsolesection>
                <Carsole />
              </Carsolesection>
            </Container3>
            <Support />
            <Footer />
          </div>
          
        </Body>

       
      </div>
    </>
  )
}

export default Home
