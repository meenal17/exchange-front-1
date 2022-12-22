import React from 'react'

import styled from 'styled-components'
const Body = styled.div`
  // background: url('https://wallpaperaccess.com/full/1267580.jpg');
  background: black;
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
`

const Homecard = styled.div`
  padding:.5rem 6rem;  
  border:1px solid #979797;
  border-radius:1.3rem;
  text-align: center;
  margin-bottom: 50px;
`
const Homecardto= styled.div`
   padding: 0px 62px; 
  border:1px solid #979797;
  border-radius:1.3rem;
  text-align: center;
  margin-bottom: 50px;
`
const Homecardtrade= styled.div`
   padding: 0px 62px; 
  border:1px solid #979797;
  border-radius:1.3rem;
  text-align: center;
  margin-bottom: 50px;
`
const Homecardthree= styled.div`
padding: 0px 70px; 
border:1px solid #979797;
border-radius:1.3rem;
text-align: center;
margin-bottom: 50px;
`

const Mytext = styled.div`
  color: #fff;
  font-size: 55px;
  line-height: 1.2em;
  font-weight: 600;
  text-align: center;
`
const Bannertxt = styled.div`
  color: #fff;
  font-size: 22px;
  line-height: 1.7em;
  font-weight: 600;
  text-align: center;
`
const Bannerheading = styled.div`
  padding: 6rem 0;
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
              <div style={{display:"flex",justifyContent:"space-between"}}>
            <Homecardto>
            <h2 className="" style={{margin:'0', lineHeight:'37px'}}>Tokens</h2>
              <Mytext>3500+</Mytext>
            </Homecardto>
            <Homecardthree>
            <h2 className="" style={{margin:'0', lineHeight:'37px'}}>APY</h2>
              <Mytext>27%</Mytext>
            </Homecardthree>
          </div>

            </div>
            <div>
              <h1>space image</h1>
            </div>
          </Sectiotwosection>
          
     
      </Container>
      {/* section three start */}
      <Container>
        <Bannerheading>
          <Mytext>Why We Use LeBo</Mytext>
          </Bannerheading>
          <Sectiotwosection>
           
          </Sectiotwosection>
          
     
      </Container>
    </Body>
  )
}

export default Home
