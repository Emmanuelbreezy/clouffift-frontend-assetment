import React from "react";
import styled from "styled-components";
import { NavWrapper, Row } from "../UI/Grid";
import { Label } from "../UI/Typography";
import avatar from "../../assets/images/kane.png"
import { device } from "../UI/Devices";
import logo from '../../assets/images/logo.png';


export const NavigationBar= (props:any) =>{
    return (
       <NavWrapper>
           <Row style={{flexDirection:"row",justifyContent:"space-between"}}>
               <div>
                   <LogoWrapper>
                       <img src={logo} alt="" width="40px" height="auto" />
                   </LogoWrapper>
                   <RoundedContainer>
                        <Label style={{opacity:1}}>Hi Andie! you are yet to complete your account setup</Label>
                   </RoundedContainer>
               </div>
               <div>
                   <div style={{display:"flex", alignItems:"center", marginRight:"2.3em"}}>
                       <img src={avatar} alt="" />
                       <Label primary  style={{opacity:1,marginLeft:"0.7em"}}>Andie kane</Label>
                   </div>
               </div>
           </Row>
        </NavWrapper>
    );
}


const RoundedContainer = styled.div`
    display: none;
    padding:0.5em 1.8em;
    margin: 0.6em 0.4em;
    background: #F9A825;
    border-radius: 50px;
    font-size: 13px;
    
  @media ${device.laptop} {
    display: block;
    padding:0.6em 1.8em;
    margin: 0.6em 0.6em;
    font-size: 14px;
  }

    
`;

const LogoWrapper = styled.div`
    display:block;
    padding-left:2.0em;
  @media ${device.laptop} {
    display: none;
    padding:0;
   
  }
`;









