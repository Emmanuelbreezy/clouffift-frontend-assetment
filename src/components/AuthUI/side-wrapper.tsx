import React from "react";
import peopleads from '../../assets/images/people-ads.png';

import styled from 'styled-components';
import { device } from "../UI/Devices";
import { Wrapper } from "../UI/Grid";


export const SideWrapper = (props:any) =>{
    return (
        <Wrapper>
        <ImgContainer>
            <img src={peopleads} style={{ width:"100%", height:"100vh"}} alt="" />
            <OverLay>
                <div style={{padding:"1.8em 0 0 2.3em"}}>
                    <Header>SFS</Header>
                    <Span>Capital</Span>
                </div>
                <div style={{position:"absolute", top: '35%',transform: 'translate(8%,50%)', padding: '10px'}}>
                    <Span style={{  fontFamily:"'Fira Sans',sans-serif",}}>Welcome to:</Span>
                    <Header style={{  fontFamily:"'Fira Sans',sans-serif",}}>SFS Capital</Header>
                </div>
            </OverLay>
        </ImgContainer>
       </Wrapper>

    );
}



const Header = styled.h4`
    font-family: Roboto;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0px;
    text-align: left;
    margin:0;
    color: #FFFFFF;
`;



const Span = styled.span`
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0px;
    text-align: left;
    color: #FFFFFF;
`;
const OverLay = styled.div`
     top:0;
    width:100%;
    opacity: 0.8;
    height:100%;
     position:absolute;
   background:#002058;

`;

const ImgContainer = styled.div`
    overflow:hidden;
    position:relative;
    width:100%;
    height:auto;

    @media ${device.laptop} {
        width: 80%;
    }
`










