import React from 'react'
import styled from 'styled-components'
// import Carsole from "./Carsolle/Carasole"
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
  padding: 3rem 0;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
  padding: 0;
 `};

`

const Homecard = styled.div`
  padding:.5rem 6rem;  
 
  border-radius:1.3rem;
  text-align: center;
  margin-bottom: 50px;
  color: rgb(82 220 174);
  box-shadow: 0px 0px 5px 4px rgb(82 220 174);
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
   white-space:no-wrap;
   padding:.5rem;
  `};
`
const Homecardtrade= styled.div`
   padding: 0px 62px; 
  
  border-radius:1.3rem;
  text-align: center;
  margin-bottom: 50px;
  color:rgb(237 170 108);
  box-shadow: 0px 0px 5px 4px rgb(237 170 108);
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
  white-space:no-wrap;
  padding:.5rem;
 `};
`
const Homecardto= styled.div`
   padding: 0px 62px; 
  
  border-radius:1.3rem;
  text-align: center;
  margin-bottom: 50px;
  color:rgb(232 105 89);
  box-shadow: 0px 0px 5px 4px rgb(232 105 89);
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
  white-space:no-wrap;
  padding:.5rem;
 `};
`

const Homecardthree= styled.div`
padding: 0px 70px; 
border-radius:1.3rem;
text-align: center;
margin-bottom: 50px;
color:rgb(63 34 108);
box-shadow: 0px 0px 5px 4px rgb(63 34 108);
${({ theme }) => theme.mediaWidth.upToExtraSmall`
white-space:no-wrap;
padding:.5rem;
`};
`

const Mytext = styled.div`
  color: #fff;
  font-size: 55px;
  line-height: 1.2em;
  font-weight: 600;
  text-align: center;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    font-size: 40px;
  `};
`
const Bannertxt = styled.div`
  color: #fff;
  font-size: 22px;
  line-height: 1.7em;
  font-weight: 600;
  text-align: center;
`
const Bannerheading = styled.div`
margin-bottom: 43px;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
  padding: 3.5rem;
 `};
`
const Buttondiv = styled.div`
  text-align: -webkit-center;
`
const LaunchButton = styled.div`
  padding: 1rem 1rem;
  font-size: 28px;
  border-radius: 0.3rem;
  background: red;
  width: 14rem;
  font-weight: bolder;
  margin-top: 50px;
`
const Sectiotwosection = styled.div`
  display: flex;
  justify-content: space-around;

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
  display: unset;
  justify-content: unset;
`};
 
`
const Cardcustom = styled.div`
  display: flex;
  justify-content: space-between;

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
  display: unset;
  justify-content: unset;
`};
 
`


const Home = () => {
  return (
    <Body>
      <Container>
        <Bannerheading>
          <Mytext>
            A Cross-Chain Protocol
            <br /> Where Trust meets Needs
          </Mytext>
          <Bannertxt>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Minima nostrum delectus commodi.
          </Bannertxt>
          <Buttondiv>
            <LaunchButton>Launch Swap</LaunchButton>
          </Buttondiv>
        </Bannerheading>
      </Container>
      {/* section two start  */}
      <Container>
        <Bannerheading>
          <Mytext>Statistics</Mytext>
          </Bannerheading>
          <Sectiotwosection>
            <div>
              <Homecard>
              <h2 className="" style={{margin:'0', lineHeight:'37px'}}>Total Value Locked(TVL)</h2>
              <Mytext> $1,154,896.54</Mytext>
              </Homecard>
              <Homecardtrade>
              <h2 className="" style={{margin:'0', lineHeight:'37px'}}>Total Value Locked(TVL)</h2>
              <Mytext> $1,154,896.54</Mytext>
              </Homecardtrade>
              <Cardcustom>
            <Homecardto>
            <h2 className="" style={{margin:'0', lineHeight:'37px'}}>Tokens</h2>
              <Mytext>3500+</Mytext>
            </Homecardto>
            <Homecardthree>
            <h2 className="" style={{margin:'0', lineHeight:'37px'}}>APY</h2>
              <Mytext>27%</Mytext>
            </Homecardthree>
          </Cardcustom>

            </div>
            <div>
             <img src="mission.png" alt="" style={{width:'100%'}} />
            </div>
          </Sectiotwosection>
          
     
      </Container>
      {/* section three start */}
      <Container >
        <Bannerheading>
          <Mytext>Why We Use LeBo</Mytext>
          </Bannerheading>
          <Sectiotwosection> 
          {/* <Carsole/> */}
          </Sectiotwosection>
      </Container >
    </Body>
  )
}

export default Home
