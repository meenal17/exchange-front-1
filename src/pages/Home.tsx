import React from 'react'
import styled from 'styled-components'
// import Carsole from "./Carsolle/Carasole"
import Support from './Support'
const Body = styled.div`
  background: url('/background.png');
  // background: black;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  // position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`

const Container = styled.div`
  padding: 3rem 0 ;
  // width: 50%;
    margin: 0 auto;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
  padding: 0;
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
   padding:1.5rem;
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
  padding:1.5rem;
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
const HeadingMytext = styled.div`
  color: #fff;
  font-size: 55px;
  line-height: 1.2em;
  font-weight: 600;
  text-align: center;
  background: linear-gradient(127deg,#46c2a8,#3e8b9a,#498fb5);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
  font-size: 28px;
  `};
`
const Mytextto = styled.div`
  font-family: arial !important;
  color: #fff;
  font-size: 3rem;
  line-height: 1.2em;
  font-weight: 800;
  text-align: center;
  background: linear-gradient(127deg, #46c2a8, #3e8b9a, #498fb5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent
    ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    font-size: 27px;
  `};
`
const Bannertxt = styled.div`
  color: #fff;
  font-size: 22px;
  margin-top:10px;
  line-height: 1.3em;
  padding: 0 9rem;
  font-weight: 600;
  text-align: center;
  background: linear-gradient(214deg, #cb739b, #b07e89, #ecc5a3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
   
    font-size: 13px;
    line-height: 1.8em;
   `};
   ${({ theme }) => theme.mediaWidth.upToLarge`
   
    padding:0 5px;
    font-size:16px;
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
const Cardcustom = styled.div`
  display: flex;
  justify-content: space-between;

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
  display: flex;
  justify-content:space-between;
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
    <Body>
      <Container>
        <Bannerheading>
          <Mytextto>
            A Cross-Chain Protocol 
            <div>Where <span className="mytexfdxdd">Trust</span> meets{' '}
            <span className="mytexfdxdd">Needs</span>
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
      </Container>
      {/* section two start  */}

      <Container>
        <Containerto>
          <Bannerheading>
            <HeadingMytext>Statistics</HeadingMytext>
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
      </Container>

      {/* section three start */}
      {/* <Container>
        <Bannerheading>
          <Mytext>Why We Use LeBo</Mytext>
        </Bannerheading>
        // <Sectiotwosection>{/* <Carsole/> */}
      {/* </Sectiotwosection>
      </Container>  */}
      {/* section four start */}
      <Container>
        <Bannerheading>
          <HeadingMytext>Supported Networks</HeadingMytext>
        </Bannerheading>

        <Support />
      </Container>
    </Body>
  )
}

export default Home
