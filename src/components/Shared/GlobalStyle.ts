import { createGlobalStyle } from 'styled-components'

export const FixedGlobalStyle = createGlobalStyle`
    html, input, textarea, button {
      font-family: "Noto Sans", sans-serif;
      letter-spacing: -0.018em;
      font-display: fallback;
    }
    @supports (font-variation-settings: normal) {
      html, input, textarea, button {
        font-family: "Noto Sans", sans-serif;
      }
    }

    html,
    body {
      margin: 0;
      padding: 0;
    }

    * {
      box-sizing: border-box;
    }

    button {
      user-select: none;
    }

    html {
      font-family: "Noto Sans", sans-serif;
      font-size: 16px;
      font-variant: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
`

export const ThemedGlobalStyle = createGlobalStyle`
    html {
      color: ${({ theme }) => (theme as any).colors.text1};
      background-color:${({ theme }) => (theme as any).colors.bg0};
    }

    body {
      min-height: 100vh;
      background-repeat: no-repeat;
      background-image:url(./background.png);
      background-size:cover;
    }
    .currency_scroller::-webkit-scrollbar {
      width: 3px;
    }
     
    .currency_scroller::-webkit-scrollbar-track {
      background:blue;
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }
     
    .currency_scroller::-webkit-scrollbar-thumb {
      background-color: red;
      outline: 1px solid slategrey;
    }

   @media screen and (max-width:480px){
    nav {
      display:none!important
    }
   }
   .accountbutton{
    background: #1D1F20;
    position: relative;
    border-radius:
    borderWidth:3px;
    border-radius:3px;
    padding:10px;
    display: inline-flex;
    gap:3px;
  }
  .accountbutton:after {
    content: '';
    position: absolute;
    top: calc(-1 * 3px);
    left: calc(-1 * 3px);
    height: calc(100% + 3px * 2);
    width: calc(100% + 3px * 2);
    background: linear-gradient(92deg,#ebc1a3,#d890a2,#be7d8d,#f5c1a9,#f0c1a6);
    border-radius: calc(2 * 3px);
    z-index: -1;
    background-size: 300% 300%;
  }
  .seetingstyle{
    color: silver;
    font-size: 34px;
    font-weight:bold;
  }
  .customtextstyle{
    background: linear-gradient(92deg,#ebc1a3,#d890a2,#f5c1a9);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bolder;
  }
  
`

