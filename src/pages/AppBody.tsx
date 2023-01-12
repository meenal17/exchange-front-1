import React from 'react'
import styled from 'styled-components'

export const BodyWrapper = styled.div`
   background: ${({ theme }) => theme.colors.newbg3};
   background: #121111;
   position: relative;
   width: 100%;
   max-width: 420px;
   box-shadow: 0px 0px 10px 0px rgb(82 220 174);
    border:1px solid grey;
   border-radius: 12px;
   padding: 1rem;
   /* border: 1px solid #6a7c76; */
   margin-bottom: 10px;
   margin-top: 10px;
   ${({ theme }) => theme.mediaWidth.upToMedium`
max-width: 320px;
`};
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
