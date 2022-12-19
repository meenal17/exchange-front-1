import React from 'react'
import styled from 'styled-components'

export const BodyWrapper = styled.div`
   background: ${({ theme }) => theme.colors.newbg3};
  position: relative;
    width: 100%;
    max-width: 420px;
    // background: #242222;
    box-shadow: 0px 2px 10px rgb(68 235 214);
    border-radius: 21px;
    padding: 1rem
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
