import React from 'react'
import styled from 'styled-components'

export const BodyWrapper = styled.div`
   background: ${({ theme }) => theme.colors.newbg3};
  position: relative;
    width: 100%;
    max-width: 420px;
    // background: #242222;
    box-shadow: 0px 2px 10px rgb(82 220 174);
    border-radius: 9px;
    padding: 1rem
    border: 1px solid #6a7c76;
    margin-bottom:10px;
`



export const Container = styled.div`
  position: relative;
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function AppBody({ children }: { children: React.ReactNode }) {
  return <BodyWrapper>{children}</BodyWrapper>
}
