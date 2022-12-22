import React from 'react'
import styled from 'styled-components'
const Support = () => {
  const Supportecard = styled.div`
    padding: 7px 4px;
    border-radius: 9px;
    background: #2b2b2b91;
    width: 15rem;
    opacity: 0.2px;
    // box-shadow: 0px 0px 5px 4px rgb(38 49 91);
    box-shadow: crimson;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    ${({ theme }) => theme.mediaWidth.upToExtraSmall`
   margin:18px;
  `};
  `
  const Parentsupportcard = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 20px 0px;
    ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    display: unset;
    justify-content:unset;
  `};
  `
  const SupportCardForMobile = styled.div`
    ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    display: flex;
    justify-content: space-between;
  `};
  `
  const Cardimg = styled.div`
    text-align: center;
  `
  return (
    <>
      <SupportCardForMobile>
        <Parentsupportcard>
          <Supportecard style={{ boxShadow: '0px 0px 5px 4px rgb(38 49 91)' }}>
            <Cardimg>
              <img src="eth.png" alt="bsc" width="50px" />
            </Cardimg>
            <Cardimg>
              <h2>Ethereum</h2>
            </Cardimg>
          </Supportecard>
          <Supportecard style={{ boxShadow: 'hsl(0deg 1% 66% / 63%) 1px 0px 4px 3px' }}>
            <Cardimg>
              <img src="polygon.png" alt="bsc" width="50px" />
            </Cardimg>
            <Cardimg>
              <h2>Polygon</h2>
            </Cardimg>
          </Supportecard>

          <Supportecard style={{ boxShadow: '#742c2c 0px 0px 5px 4px' }}>
            <Cardimg>
              <img src="ava.png" alt="bsc" width="50px" />
            </Cardimg>
            <Cardimg>
              <h2>Avalanche</h2>
            </Cardimg>
          </Supportecard>
          <Supportecard style={{ boxShadow: '0px 0px 5px 4px rgb(38 49 91)' }}>
            <Cardimg>
              <img src="fantom.png" alt="bsc" width="50px" />
            </Cardimg>
            <Cardimg>
              <h2>Fantom</h2>
            </Cardimg>
          </Supportecard>
        </Parentsupportcard>
        {/* second row */}
        <Parentsupportcard>
          <Supportecard style={{ boxShadow: ' rgb(240 185 11) 0px 0px 7px 1px' }}>
            <Cardimg>
              <img src="eth.png" alt="bsc" width="50px" />
            </Cardimg>
            <Cardimg>
              <h2>Ethereum</h2>
            </Cardimg>
          </Supportecard>
          <Supportecard style={{ boxShadow: 'rgb(90 15 15) 0px 0px 5px 4px' }}>
            <Cardimg>
              <img src="polygon.png" alt="bsc" width="50px" />
            </Cardimg>
            <Cardimg>
              <h2>Polygon</h2>
            </Cardimg>
          </Supportecard>
          <Supportecard style={{ boxShadow: 'rgb(48 23 91) 0px 0px 5px 4px' }}>
            <Cardimg>
              <img src="ava.png" alt="bsc" width="50px" />
            </Cardimg>
            <Cardimg>
              <h2>Avalanche</h2>
            </Cardimg>
          </Supportecard>
          <Supportecard style={{ boxShadow: 'rgb(47 75 88) 0px 0px 5px 4px' }}>
            <Cardimg>
              <img src="fantom.png" alt="bsc" width="50px" />
            </Cardimg>
            <Cardimg>
              <h2>Fantom</h2>
            </Cardimg>
          </Supportecard>
        </Parentsupportcard>
      </SupportCardForMobile>
    </>
  )
}

export default Support
