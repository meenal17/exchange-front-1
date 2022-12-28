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
      font-family: 'TSChapinero', sans-serif;
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
      background-image:url(./background.png);
    }

    body {
      min-height: 100vh;
      background-repeat: no-repeat;
      background-image:url(./background.png);
      background-size:cover;
      ${({ theme }) => (theme as any).mediaWidth.upToMedium`
      min-height: 100vh;
      background-repeat: no-repeat;
      background-image:url(./background.png);
      background-size:cover;
      `};
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
  .LaunchButton{
    background: #000;
    position: relative;
    border-radius:
    borderWidth:3px;
    border-radius:9px;
    padding: 12px 1rem;
   font-size: 28px;
    display: inline-flex;
    font-weight:600;
   
  }
  .LaunchButton:after {
    content: '';
    position: absolute;
    top: calc(-1 * 3px);
    left: calc(-1 * 3px);
    height: calc(100% + 3px * 2);
    width: calc(100% + 3px * 2);
    background: linear-gradient(127deg,#46c2a8,#3e8b9a,#498fb5);
    border-radius: 12px;
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

 .poolcardsd{
  text-align: center;
  font-size: 25px;
  font-weight: bolder;
  color: #e5e6e6;
  border-bottom: 1px solid grey;
  padding: 0px 10px 10px;
  margin-bottom:15px;
}

.mytexfdxdd{
  color: #fff !important;   
    background: #fff;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent
    ${({ theme }) => (theme as any).mediaWidth.upToMedium`
    font-size: unset;
    `};

}
.textnew{
  background: linear-gradient(106deg,#46c2a8,#5bbbce,#498fb5);;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.cardimgsize{
  width:3rem;
${({ theme }) => (theme as any).mediaWidth.upToLarge`
  width: 3.8rem;
`}
${({ theme }) => (theme as any).mediaWidth.upToMedium`
width: 1.8rem;
`}
${({ theme }) =>  (theme as any).mediaWidth.upToExtraSmall`
width:2rem;
`};
;
}
.cardimgsizeto{
  width:3rem;
  ${({ theme }) => (theme as any).mediaWidth.upToLarge`
width:3.2rem;
`};
${({ theme }) => (theme as any).mediaWidth.upToExtraSmall`
width:1.2rem;
`};
}

.mobiletext{
  ${({ theme }) => (theme as any).mediaWidth.upToMedium`
  white-space: nowrap;
  font-size: 15px;
`};

${({ theme }) => (theme as any).mediaWidth.upToLarge`
font-size: 25px;
white-space: nowrap;
`};
${({ theme }) => (theme as any).mediaWidth.upToExtraSmall`
font-size: 15px;
white-space: nowrap;
`};
}
.headingfontsize{
  
  ${({ theme }) => (theme as any).mediaWidth.upToLarge`
  font-size:2.2rem;
`};
${({ theme }) =>  (theme as any).mediaWidth.upToExtraSmall`
font-size:1.2rem;
`};
${({ theme }) =>(theme as any).mediaWidth.upToSmall`

`};
${({ theme }) =>(theme as any).mediaWidth.upToMedium`

`};

}
.xyz {
  width:100%
}

.xyz .globe-image-bg{
  display:none!important;

}

.globe-image-bg {
 margin:0;
 width:100%;
  position: absolute;
  left: 0;
  bottom: 0;
  ${({ theme }) => (theme as any).mediaWidth.upToMedium`
display:none;
`};
}
.fontss{
  font-size: 15px !important;
  ${({ theme }) => (theme as any).mediaWidth.upToMedium`
  font-size:13px !important;
  `};
}
`

