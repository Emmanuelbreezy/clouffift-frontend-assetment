import React from "react";
import styled from "styled-components";
import android  from "../../assets/images/android.png";
import apple  from "../../assets/images/apple.png";
import web  from "../../assets/images/web.png";
import { device } from "../UI/Devices";
import { Row } from "../UI/Grid";
import { IconCard } from "../UI/IconCard";
import { StyledHeader } from "../UI/Typography";



export const Footer = () => {
    return(
        <StyledFooter>
           <Row style={{justifyContent:"center"}}>
                <div style={{width: "50%",}}>
                     <Spacer />
                     <Row>
                        <StyledHeader size={"58px"} >Our channels</StyledHeader>
                        <Span style={{marginLeft:"0em",  opacity: "0.5"}}>Get access to sfs life using any of the following plaforms</Span>
                     </Row>
                </div>
            </Row>
            
            <Row style={{alignItems:"center",   justifyContent: "center", padding:"2.0em 0",}}>
                 <IconCard 
                    
                     text={"Download on Play Store"}
                   icon={ <img src={android} alt="" />}
                   ico={
                    <svg width="25" height="auto" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.50034 18.4723L15.8684 11.1042C15.9822 10.9714 16.0416 10.8005 16.0349 10.6257C16.0281 10.4509 15.9557 10.2851 15.832 10.1615C15.7083 10.0378 15.5425 9.96534 15.3677 9.95859C15.193 9.95184 15.0221 10.0113 14.8892 10.1251L9.19478 15.8126V1.47228C9.19478 1.2881 9.12162 1.11146 8.99138 0.98123C8.86115 0.850997 8.68451 0.777832 8.50034 0.777832C8.31616 0.777832 8.13952 0.850997 8.00929 0.98123C7.87905 1.11146 7.80589 1.2881 7.80589 1.47228V15.8126L2.11839 10.1251C2.05614 10.0524 1.97953 9.99332 1.89337 9.95163C1.80721 9.90995 1.71337 9.88653 1.61773 9.88283C1.52209 9.87914 1.42672 9.89526 1.33761 9.93017C1.2485 9.96508 1.16756 10.018 1.09988 10.0857C1.03221 10.1534 0.979249 10.2343 0.944336 10.3234C0.909423 10.4126 0.893308 10.5079 0.897002 10.6036C0.900696 10.6992 0.92412 10.793 0.965803 10.8792C1.00749 10.9654 1.06653 11.042 1.13922 11.1042L8.50034 18.4723Z" fill="white"/>
                 </svg>
                   }
                /> 
                <BarVertz />
                <IconCard 
                    text={"Download on App Store"}
                   icon={ <img src={apple} alt="" />}
                   ico={
                       <svg width="25" height="auto" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.50034 18.4723L15.8684 11.1042C15.9822 10.9714 16.0416 10.8005 16.0349 10.6257C16.0281 10.4509 15.9557 10.2851 15.832 10.1615C15.7083 10.0378 15.5425 9.96534 15.3677 9.95859C15.193 9.95184 15.0221 10.0113 14.8892 10.1251L9.19478 15.8126V1.47228C9.19478 1.2881 9.12162 1.11146 8.99138 0.98123C8.86115 0.850997 8.68451 0.777832 8.50034 0.777832C8.31616 0.777832 8.13952 0.850997 8.00929 0.98123C7.87905 1.11146 7.80589 1.2881 7.80589 1.47228V15.8126L2.11839 10.1251C2.05614 10.0524 1.97953 9.99332 1.89337 9.95163C1.80721 9.90995 1.71337 9.88653 1.61773 9.88283C1.52209 9.87914 1.42672 9.89526 1.33761 9.93017C1.2485 9.96508 1.16756 10.018 1.09988 10.0857C1.03221 10.1534 0.979249 10.2343 0.944336 10.3234C0.909423 10.4126 0.893308 10.5079 0.897002 10.6036C0.900696 10.6992 0.92412 10.793 0.965803 10.8792C1.00749 10.9654 1.06653 11.042 1.13922 11.1042L8.50034 18.4723Z" fill="white"/>
                 </svg>
                   }
                /> 
                <BarVertz />
                <IconCard 
                    text={"Get Started Online"}
                   icon={  <img src={web} alt="" />}
                   ico={" "}
                />
                 <SimpleCard style={{}}>
                    <ul style={{listStyle:"none",padding:"0em 1.5em"}}>
                        <li>
                            <Span style={{ fontWeight:'lighter',lineHeight:"24.8px"}}>Contact us for more infomation</Span>
                        </li>
                        <li style={{marginTop:"0.2em"}}>
                            <Span style={{lineHeight:"24.8px", color:"#fff"}}>Info@sfsnigeria.com</Span>
                        </li>
                        <li style={{marginTop:"0.8em"}}>
                            <Span>098-793 079-383</Span>
                        </li>
                    </ul>
                 
                </SimpleCard> 
            </Row> 
        </StyledFooter>
      
    );
}


const SimpleCard = styled.div`
    width:70%;
    background:#F9A825;
    padding:1.3em 0.2em;
     border-radius:15px;

     @media ${device.laptop} {
        width:15%
    }

`;

const StyledFooter = styled.div`
    width: 100%;
    background-color: #152144;
    height: auto;
 
`;


const Span = styled.span`
     font-family: 'Fira Sans', sans-serif;
     font-style: normal;
     font-weight: normal;
    font-size: 16px;
    line-height: 155%;
    display: flex;
    align-items: center;
    color: #FFFFFF;
  
`;
const Spacer = styled.div`
    padding: 6.5em 0 0 0;
`

const BarVertz = styled.span`
    width: 2px;
    height:50px;
    opacity: 0.3;
    border-left: 1px solid #eee;
`
