import React from "react";
import styled from 'styled-components';
import { device } from "./Devices";
import { StyledHeader } from "./Typography";

type LandCardProps = {
    title:String;
    desc:String;
    icon:any;
}

export const LandCard = (props:LandCardProps) =>{
    
    return (
        <Wrapper style={{}}>
        <SvgContainer>
           {props.icon}
        </SvgContainer>
        <div style={{textAlign:"center",marginTop:"1.2em"}}>
            <StyledHeader primary size={"25px"}>{props.title}</StyledHeader>
            <Span>{props.desc}</Span>
        </div>
    </Wrapper>
    )
}

const Wrapper = styled.div`
    width:90%;
     padding:1.5em;
      display:flex;
       flex-direction:column;
       align-items:center;
       justify-content:center;

       @media ${device.laptop} {
          width:20%;

  }

`;

const SvgContainer = styled.div`
  width:65px;
  height:65px; 
  display:flex; 
  align-items:center;
   justify-content:center;
    text-align:center; 
    padding:0em 0.5em; 
    border-radius:15px;
     box-shadow:0px 3px 6px rgba(0, 0, 0, 0.161);

`
const Span = styled.span`
    font-family: Mulish;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: center;
    color: #B3B3B3;
`;


