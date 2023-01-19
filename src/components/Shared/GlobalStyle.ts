import { createGlobalStyle } from 'styled-components'

export const FixedGlobalStyle = createGlobalStyle`
    html, input, textarea, button {
      font-family: 'Inter', sans-serif !important;
      letter-spacing: -0.018em;
      font-display: fallback;
    }
    @supports (font-variation-settings: normal) {
      html, input, textarea, button {
        font-family: 'Inter', sans-serif !important;
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

    nav a {
      
      color: rgb(127, 134, 143);
      margin-right: 30px;
      text-decoration: none;
      transition: transform 0.3s; 
      background: linear-gradient(to right, #13b9aa 0%, #1e729a 100%);
      background-clip: border-box;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: border-box;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 20px;

    }

    nav a.active{
      background: #ccc;
      background-clip: border-box;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    nav a:hover {
      background: #ccc;
      background-clip: border-box;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      transform: scale(1.2);
    }
`

export const ThemedGlobalStyle = createGlobalStyle`
    html {
      color: ${({ theme }) => (theme as any).colors.text1};
      // background-image:url(./background.png);
    }

    body {
      min-height: 100vh;
      // background:hwb(188deg 6% 92%);
      background:#1c1717;
      // background-repeat: no-repeat;
      // background-image:url(./background.png);
      // background-size:cover;
      ${({ theme }) => (theme as any).mediaWidth.upToMedium`
      min-height: 100vh;
      // background-repeat: no-repeat;
      // background-image:url(./background.png);
      // background-size:cover;
      `};
    }
    
  
    .currency_scroller::-webkit-scrollbar {
      width: 4px;
    }
     
    .currency_scroller::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }
     
    .currency_scroller::-webkit-scrollbar-thumb {
      background-color: grey;
      outline: 1px solid slategrey;

    }

   @media screen and (max-width:480px){
    nav {
      display:none!important
    }
   }


// .handshake_bg_img {
//   position: relative;
//   display: block;
//   width: 100%;
//   max-width: 1920px;
//   margin: 3rem auto;
// }

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
  .accountbuttontest{
    // background: #1D1F20;
    position: relative;
    border-radius:
    borderWidth:3px;
    border-radius:3px;
    padding:10px;
    display: inline-flex;
    gap:3px;
  }
  // .accountbutton:after {
  //   content: '';
  //   position: absolute;
  //   top: calc(-1 * 3px);
  //   left: calc(-1 * 3px);
  //   height: calc(100% + 3px * 2);
  //   width: calc(100% + 3px * 2);
  //   background: linear-gradient(92deg,#ebc1a3,#d890a2,#be7d8d,#f5c1a9,#f0c1a6);
  //   border-radius: calc(2 * 3px);
  //   z-index: -1;
  //   background-size: 300% 300%;
  // }

  .accountbuttonxyz{
    background: #1D1F20;
    position: relative;
    border-radius:
    border-width:3px;
    border-radius:10px;
    padding:10px;
    display: inline-flex;
    gap:10px;
    border:none;
    align-items:center;
    width:170px;
    ${({ theme }) => (theme as any).mediaWidth.upToSmall`
   gap:5px;
`};

  }
  .accountbuttonxyz:after {
    content: '';
    position: absolute;
    top: calc(-1 * 3px);
    left: calc(-1 * 3px);
    height: calc(100% + 3px * 2);
    width: calc(100% + 3px * 2);
    background: linear-gradient(92deg,#ebc1a3,#d890a2,#be7d8d,#f5c1a9,#f0c1a6);
    border-radius: calc(2 * 6px);
    z-index: -1;
    background-size: 300% 300%;
  }
  .accountbuttonxyz:hover{
    background:#000 !important;
  }
  .LaunchButton{
    background: transparent;
    position: relative;
    border-radius:
    borderWidth:3px;
    border-radius:9px;
    padding: 6px 1rem;
   font-size: 1.5rem;
    display: inline-flex;
    font-weight:600;
   
  }
  .LaunchButton:after {
    content: '';
    position: absolute;
    top: calc(-1 * 3px);
    left: calc(-1 * 3px);
    height: calc(100% + 1px * 2);
    width: calc(100% + 3px * 2);
    border:3px solid #3e8b9a;
    // background: linear-gradient(127deg,#46c2a8,#3e8b9a,#498fb5);
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
    font-weight: 600;
  }

 .poolcardsd{
  text-align: center;
  font-size: 25px;
  font-weight: bolder;
  color: #e5e6e6;
  border-bottom: 1px solid #282828;
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
${({ theme }) => (theme as any).mediaWidth.upToExtraSmall`
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
${({ theme }) => (theme as any).mediaWidth.upToExtraSmall`
font-size:1.2rem;
`};
${({ theme }) => (theme as any).mediaWidth.upToSmall`

`};
${({ theme }) => (theme as any).mediaWidth.upToMedium`

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
  position:fixed;
  left: 0;
  bottom: 0;
  z-index:-1;
  bottom: -40px;
  ${({ theme }) => (theme as any).mediaWidth.upToMedium`
display:none;
`};
.globaleimg{
  width:25%;
}
}
.fontss{
  font-size: 15px !important;
  font-weight: bold;
  text-align:center;
  margin-bottom:7px;
  ${({ theme }) => (theme as any).mediaWidth.upToMedium`
  font-size:13px !important;
  `};
}
.sub-font {
  font-size: 15px !important;
  font-weight: 400;
  text-align:center;
  margin-bottom:5px;
}
.icons{
  display:flex;
  gap:30px;
  align-items: center;
  margin-top: 10px;
}
.background {
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  z-index: 0;
}
.headingborder{
  border-top: 1px solid #53ad9e;
  width: 14rem !important;
  margin: 0 auto;
    margin-top: 0px;
 
  margin-top: 0px;
${({ theme }) => (theme as any).mediaWidth.upToExtraSmall`
width:9rem !important;
`};
}
.headingborderto{
  border-top: 1px solid #53ad9e;
  width: 20rem !important;
  margin: 0 auto;
  
  margin-top: -8px;
${({ theme }) => (theme as any).mediaWidth.upToExtraSmall`

width: 15rem !important;
margin-top: -4px;
`};
}
.headingborderthree{
  border-top: 1px solid #53ad9e;
  width: 24rem;
  margin: 0 auto;
   
  margin-top: 0px;
  margin-top: -8px;
${({ theme }) => (theme as any).mediaWidth.upToExtraSmall`
width:15rem;
margin-top:-5px;
`};
}
.headingborderfour{
  border-top: 1px solid #53ad9e;
  width: 30rem;
  margin: 0 auto;
    margin-top: 0px;
  margin-top: -8px;  
${({ theme }) => (theme as any).mediaWidth.upToExtraSmall`
width:18rem;
margin-top:-4px;
`};
}
.headingborderfive{
  border-top: 1px solid #4d5053;
    width: 25rem;
//   margin: 0 auto;
//     margin-top: 0px;
//   margin-top: -8px;  
// ${({ theme }) => (theme as any).mediaWidth.upToExtraSmall`
// width:18rem;
// margin-top:-4px;
// `};
}
.settingmy{
    display: flex;
    justify-content: end;
    width: 100%;
    margin-left:-80px;
    // margin-top:60px;
    align-items:center;
    ${({ theme }) => (theme as any).mediaWidth.upToExtraSmall`
    margin-top:3px;
    margin-bottom:10px;
`};
}
#myDIV {
  // width: 100%;
  // padding: 50px 0;
  // text-align: center;
  // background-color: lightblue;
  // margin-top: 20px;
display:none;
z-index:1111;
}
.buttonbdg{
  z-index:1111;
}
// .modal{
//   display:none;
// }

.sliph3{
  font-size: 22px;
  margin: 0rem 0rem 1.2rem 0;
}
.colseicon{
  border: 2px solid grey;
  padding: 1px;
  width: 2rem;
  border-radius: 37px;
}
.mode{
  font-size: 22px;
  margin: 1.5rem 0rem 0.3rem 0;
  color: #a3a3a3;
}
.plusico{
  // border: 1px solid rgb(17 115 110);
  padding: 0.2rem;
  border-radius: 11px;
  width: 22px;
  height: 22px;
  text-align: center;
  box-shadow: 0px 0px 2px 4px rgb(22 142 136);
  margin: 20px;
}
.plusicoto{
  // border: 1px solid rgb(17 115 110);
  padding: 0.2rem;
  border-radius: 11px;
  width: 22px;
  /* width: 200px; */
  height: 22px;
  text-align: center;
  box-shadow: 0px 0px 2px 4px #5f907f;
  margin: 10px;
}
.pooldiv{
  height: 166px;
    overflow-y: scroll;
}
.pooldiv::-webkit-scrollbar {
  width: 3px;
}
 
.pooldiv::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
 
.pooldiv::-webkit-scrollbar-thumb {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
    background:grey;
  
}
#postiondiv {
  position: absolute;
  bottom: 0;
  padding: 7px !important;
  width: 300px;
  // height:145px;
  // right: 247px;
  color: rgb(255, 255, 255);
  box-shadow: rgb(17, 2, 31) -6px 9px 32px 5px;
  background: linear-gradient(to right, rgb(19, 185, 170), rgb(30, 117, 155));
  border-right: 1px solid rgb(27, 31, 90);
  z-index: 1;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  animation: 4s slide-up;
  transition:2s  ease-out;
  text-align: center;
  right: 60px;
border-radius: 6px;
${({ theme }) => (theme as any).mediaWidth.upToSmall`
right: 18px;
`};
${({ theme }) => (theme as any).mediaWidth.upToMedium`
right: 21px;
`};
}

@keyframes slide-up {
  from {
   bottom:-145px;
  }
  to {
    bottom: 0%;
  }
}

#postiondivto {
  position: absolute;
  bottom: 0;
  padding: 7px !important;
  width: 300px;
  // height:145px;
  // right: 247px;
  color: rgb(255, 255, 255);
  box-shadow: rgb(17, 2, 31) -6px 9px 32px 5px;
  background: linear-gradient(to right, rgb(19, 185, 170), rgb(30, 117, 155));
  border-right: 1px solid rgb(27, 31, 90);
  z-index: 1;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  animation: 4s slide-up;
  transition:2s  ease-out;
  text-align: center;
border-radius: 6px;
right:60px;
${({ theme }) => (theme as any).mediaWidth.upToSmall`
right: 18px;
`};
${({ theme }) => (theme as any).mediaWidth.upToMedium`
right: 21px;
`};
}

.innercard{
  transform: translateY(-100%);
  transition: .5s;
  padding: 15px;
}
.innercardto{
  transform: translateY(-100%);
  transition: .5s;
  padding: 15px;
}
.iconjn {
   position: absolute;
   top: -5%;
   left: 45%;
  cursor: pointer;
  background: rgb(15, 178, 151);
  border-radius: 50%;
  width: 20px;
  height: 20px;
  // text-align:center;
overflow:hidden;

}

.active{
  color:#fcfcfc;
 }
`
