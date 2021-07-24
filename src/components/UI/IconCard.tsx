import React from "react";
import styled from 'styled-components';
import { StyledSpan } from "./Typography";

type IconCardProps = {
    text:String;
    icon:any;
    ico:any;
}

export const IconCard = (props:IconCardProps) =>{
    
    return (
        <div style={{}}>
            <div style={{ width:"60%", margin:"0 auto" }}>
                        <SvgCircular>
                            {props.icon}
                        </SvgCircular>
                        <div style={{textAlign:"left",marginTop:"1.2em"}}>
                            <Row style={{ width: "75%",}}>
                                {props.ico}
                                <StyledSpan style={{ color:"#fff", opacity:1,marginLeft:"0.3em" }}>{props.text}</StyledSpan>
                            </Row>
                        </div>
             </div>
        </div>
    )
}


const Row = styled.div`
    position: relative;
    background-color: fff;
    width: 100%;
    display: flex;
    align-items: center;

`;

// const Span = styled.span`
//      font-family: 'Fira Sans', sans-serif;
//      font-style: normal;
//      font-weight: normal;
//     font-size: 16px;
//     line-height: 155%;
//     display: flex;
//     align-items: center;
//     color: #FFFFFF;
//     opacity: 0.5;
// `;

const SvgCircular = styled.div`
  width:50px;
  height:65px; 
  display:flex; 
  align-items:center;
   justify-content:center;
    text-align:center; 
    padding:0em 0.5em; 
    border-radius:50%;
    background: rgba(255,255,255,.4);
    opacity: 0.4;

`
