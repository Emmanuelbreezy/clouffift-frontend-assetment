import React from 'react';
import styled from 'styled-components';
import { device } from "./Devices";


export const Row = styled.div`
  position: relative;
  background-color: fff;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media ${device.laptop} {
    flex-direction: row;

  }
`;
 
export const Wrapper = styled.div`
  width:100%;
  height:auto;
`;

const Navigation = ({children,className}:any) =>{
  return <div className={className}>{children}</div>;
}

export const NavWrapper = styled(Navigation)`
    width:100%;
     background:#f9f9f9;
    border-bottom:1px solid #ddd;
    padding:0.8em 0;
    
    @media ${device.laptop} {
      padding:0.8em 0;
    }

`;


export const Box = styled.div`
    width:200px;
    height:50px;
    margin-right:2em;
    background: #F2994A;
    border-radius: 4px;
    padding:0.8em;
    
`;

const ExtraBox = ({children,className}:any) =>{
    return (<Box className={className}>
      {children}
      <div>
      <svg style={{position:"absolute", top:"5%",right:0}} width="137" height="134" viewBox="0 0 137 134" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.1" d="M137 60.1312C137 90.9444 25.6129 134 25.6129 134C25.6129 134 87.0983 55.6521 25.6129 60.1312C-35.8726 64.6103 25.6288 -19.7632 81.3065 4.33898C136.984 28.4412 137 29.318 137 60.1312Z" fill="url(#paint0_linear)"/>
          <defs>
          <linearGradient id="paint0_linear" x1="2.38917" y1="12.8193" x2="145.517" y2="63.9459" gradientUnits="userSpaceOnUse">
          <stop stop-color="white" stop-opacity="0.25"/>
          <stop offset="1" stop-color="white"/>
          </linearGradient>
          </defs>
          </svg>

          <svg style={{position:"absolute", bottom:0,right:"28%"}} width="88" height="75" viewBox="0 0 88 75" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.1" d="M88 41.1249C88 71.0819 40.1068 75 40.1068 75C40.1068 75 -10.701 61.9904 2.05459 41.1249C10.4616 27.3728 43.0361 74.5601 40.1067 24.6635C37.1774 -25.2332 88 11.1679 88 41.1249Z" fill="url(#paint0_linear)"/>
          <defs>
          <linearGradient id="paint0_linear" x1="1.53465" y1="7.17499" x2="90.2865" y2="43.5585" gradientUnits="userSpaceOnUse">
          <stop stop-color="white" stop-opacity="0.25"/>
          <stop offset="1" stop-color="white"/>
          </linearGradient>
          </defs>
          </svg>
  </div>
      
      </Box>)
  }

export const BigBox = styled(ExtraBox)`
    position:relative;
    width:85%;
    height:80px;
    background:${props => props.color};
    padding:1.8em ;
    margin: 0.4em 0.2em;

    @media ${device.laptop} {
      width:300px;
      height:80px;
  }
`;



