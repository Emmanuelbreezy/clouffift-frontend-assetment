import React,{useEffect} from "react";
import styled from "styled-components";
import { device } from "../../components/UI/Devices";
import { Row,BigBox,Box } from "../../components/UI/Grid";
import { StyledHeader,StyledSpan,Tiny } from "../../components/UI/Typography";
import { MainLayout } from "../../hoc/main-layout";

import displayimg from '../../assets/images/display-image.png'

type DashboardProps = {}

const Dashboard = (props:DashboardProps) => {
    useEffect(()=>{})
    return (
        <MainLayout>
            <div style={{ width:"90%", margin:"0 auto", height:"auto", marginBottom:"0.8em"}}>
                <ExtraRow >
                    <div>
                        <StyledHeader primary size={"34px"}>
                           Hi, Welcome
                        </StyledHeader>
                    </div>
                    <div>
                        <Box>
                            <Row style={{flexDirection:"row", justifyContent:"space-between"}}>
                                <StyledHeader size={"18px"}>Invest Now</StyledHeader>
                                <SvgCircular>
                                <svg width="18" height="16" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 10.6667H1.33333C0.597333 10.6667 0 10.0693 0 9.33333V1.33333C0 0.597333 0.597333 0 1.33333 0H12C12.736 0 13.3333 0.597333 13.3333 1.33333V9.33333C13.3333 10.0693 12.736 10.6667 12 10.6667ZM1.33333 1.33333V9.33333H12V1.33333H1.33333ZM2.66667 3.33333H10.6667V4.66667H2.66667V3.33333ZM2.66667 6H9.33333V7.33333H2.66667V6Z" fill="white"/>
                                    </svg>

                                </SvgCircular>
                            </Row>
                        </Box>
                    </div>
                </ExtraRow>
                <Row style={{}}>
                    <BigBox color="#F9A825">
                        <StyledHeader size={"14px"}>Total Invested</StyledHeader>
                        <Row style={{flexDirection:"row"}}>
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.8025 10.0153H12.3734V7.09488H14.8025C15.0104 7.09488 15.1782 6.89516 15.1782 6.64795C15.1782 6.40073 15.0104 6.20101 14.8025 6.20101H12.3734V0.448059C12.3734 0.200846 12.2055 0.00112337 11.9977 0.00112337C11.7899 0.00112337 11.622 0.200846 11.622 0.448059V6.20101H6.96809L3.79927 0.209217C3.71004 0.040218 3.53745 -0.0379958 3.37662 0.0178712C3.21578 0.0737381 3.10541 0.248322 3.10541 0.448038V6.20099H0.375703C0.167891 6.20099 -9.88788e-08 6.40071 -9.88788e-08 6.64792C-9.88788e-08 6.89514 0.167891 7.09486 0.375703 7.09486H3.10541V10.0153H0.375703C0.167891 10.0153 -9.88788e-08 10.215 -9.88788e-08 10.4623C-9.88788e-08 10.7095 0.167891 10.9092 0.375703 10.9092H3.10541V16.5517C3.10541 16.7989 3.2733 16.9986 3.48111 16.9986C3.68892 16.9986 3.85681 16.7989 3.85681 16.5517V10.9092H8.56963L11.6798 16.7905C11.7503 16.9232 11.8712 17 11.998 17C12.0332 17 12.0673 16.9944 12.1025 16.9832C12.2634 16.9274 12.3737 16.7528 12.3737 16.5531V10.9092H14.8029C15.0107 10.9092 15.1786 10.7095 15.1786 10.4622C15.1786 10.215 15.0107 10.0153 14.8029 10.0153L14.8025 10.0153ZM11.622 7.09488V10.0153H8.98505L7.44115 7.09488H11.622ZM3.85668 1.99839L6.07918 6.20101H3.85668V1.99839ZM3.85668 10.0153V7.09488H6.55236L8.09625 10.0153H3.85668ZM11.622 15.0013L9.45702 10.9092H11.622V15.0013Z" fill="white"/>
                                </svg>
                                <StyledSpan style={{paddingLeft:"0.2em"}}>35, 001,500.00</StyledSpan>
                        </Row>
                            <Tiny>from 15 investment plans</Tiny>
                    </BigBox>
                    <BigBox color="#0B638D">
                        <StyledHeader size={"14px"}>Total Earned</StyledHeader>
                        <Row style={{flexDirection:"row"}}>
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.8025 10.0153H12.3734V7.09488H14.8025C15.0104 7.09488 15.1782 6.89516 15.1782 6.64795C15.1782 6.40073 15.0104 6.20101 14.8025 6.20101H12.3734V0.448059C12.3734 0.200846 12.2055 0.00112337 11.9977 0.00112337C11.7899 0.00112337 11.622 0.200846 11.622 0.448059V6.20101H6.96809L3.79927 0.209217C3.71004 0.040218 3.53745 -0.0379958 3.37662 0.0178712C3.21578 0.0737381 3.10541 0.248322 3.10541 0.448038V6.20099H0.375703C0.167891 6.20099 -9.88788e-08 6.40071 -9.88788e-08 6.64792C-9.88788e-08 6.89514 0.167891 7.09486 0.375703 7.09486H3.10541V10.0153H0.375703C0.167891 10.0153 -9.88788e-08 10.215 -9.88788e-08 10.4623C-9.88788e-08 10.7095 0.167891 10.9092 0.375703 10.9092H3.10541V16.5517C3.10541 16.7989 3.2733 16.9986 3.48111 16.9986C3.68892 16.9986 3.85681 16.7989 3.85681 16.5517V10.9092H8.56963L11.6798 16.7905C11.7503 16.9232 11.8712 17 11.998 17C12.0332 17 12.0673 16.9944 12.1025 16.9832C12.2634 16.9274 12.3737 16.7528 12.3737 16.5531V10.9092H14.8029C15.0107 10.9092 15.1786 10.7095 15.1786 10.4622C15.1786 10.215 15.0107 10.0153 14.8029 10.0153L14.8025 10.0153ZM11.622 7.09488V10.0153H8.98505L7.44115 7.09488H11.622ZM3.85668 1.99839L6.07918 6.20101H3.85668V1.99839ZM3.85668 10.0153V7.09488H6.55236L8.09625 10.0153H3.85668ZM11.622 15.0013L9.45702 10.9092H11.622V15.0013Z" fill="white"/>
                                </svg>
                                <StyledSpan style={{paddingLeft:"0.2em"}}>1, 120,500.000</StyledSpan>
                        </Row>
                    </BigBox>
                    <BigBox color="#B2B7BC">
                        <StyledHeader size={"14px"}>Total Payoff</StyledHeader>
                        <Row style={{flexDirection:"row"}}>
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.8025 10.0153H12.3734V7.09488H14.8025C15.0104 7.09488 15.1782 6.89516 15.1782 6.64795C15.1782 6.40073 15.0104 6.20101 14.8025 6.20101H12.3734V0.448059C12.3734 0.200846 12.2055 0.00112337 11.9977 0.00112337C11.7899 0.00112337 11.622 0.200846 11.622 0.448059V6.20101H6.96809L3.79927 0.209217C3.71004 0.040218 3.53745 -0.0379958 3.37662 0.0178712C3.21578 0.0737381 3.10541 0.248322 3.10541 0.448038V6.20099H0.375703C0.167891 6.20099 -9.88788e-08 6.40071 -9.88788e-08 6.64792C-9.88788e-08 6.89514 0.167891 7.09486 0.375703 7.09486H3.10541V10.0153H0.375703C0.167891 10.0153 -9.88788e-08 10.215 -9.88788e-08 10.4623C-9.88788e-08 10.7095 0.167891 10.9092 0.375703 10.9092H3.10541V16.5517C3.10541 16.7989 3.2733 16.9986 3.48111 16.9986C3.68892 16.9986 3.85681 16.7989 3.85681 16.5517V10.9092H8.56963L11.6798 16.7905C11.7503 16.9232 11.8712 17 11.998 17C12.0332 17 12.0673 16.9944 12.1025 16.9832C12.2634 16.9274 12.3737 16.7528 12.3737 16.5531V10.9092H14.8029C15.0107 10.9092 15.1786 10.7095 15.1786 10.4622C15.1786 10.215 15.0107 10.0153 14.8029 10.0153L14.8025 10.0153ZM11.622 7.09488V10.0153H8.98505L7.44115 7.09488H11.622ZM3.85668 1.99839L6.07918 6.20101H3.85668V1.99839ZM3.85668 10.0153V7.09488H6.55236L8.09625 10.0153H3.85668ZM11.622 15.0013L9.45702 10.9092H11.622V15.0013Z" fill="white"/>
                                </svg>
                                <StyledSpan style={{paddingLeft:"0.2em"}}>501,500.00</StyledSpan>
                        </Row>
                    </BigBox>
                </Row>
                <div style={{marginBottom:"4.5em"}}>
                    <StyledHeader primary size={"16"}>Latest Investments</StyledHeader>
                    <br />
                    <Row style={{justifyContent:"space-between", alignItems:"flex-start"}}>
                        <Card>
                            <div>
                                <img src={displayimg} width="100%" height="auto" alt="" />
                            </div>
                            <div style={{ padding:"1.3em 1.5em 2.3em 1.5em"}}>
                                <div>
                                    <MiniSpan>Interest</MiniSpan>
                                    <MaxSpan>13% monthly</MaxSpan>
                                </div>
                                <br />
                                <div>
                                    <MiniSpan>Investable Amount</MiniSpan>
                                    <MaxSpan>55,000.00</MaxSpan>
                                </div>
                            </div>
                        </Card>

                        <Card>
                            <div style={{height:"300px"}}>
                                Chart    
                            </div>
                        </Card>
                    </Row>
                    
                </div>

                <br />
                <br />
            </div>
        </MainLayout>
    );
}

const SvgCircular = styled.div`
  width:25px;
  height:40px; 
  display:flex; 
  align-items:center;
   justify-content:center;
    text-align:center; 
    padding:0em 0.5em; 
    border-radius:50%;
    background: rgba(255,255,255,.4);
    opacity: 0.4;

`
const ExtraRow = styled(Row)`
    display:block;
  padding:0 0.2em 2.5em 0.2em;
  align-items: center;
  justify-content:space-between;

  @media ${device.laptop} {
    display:flex;
    padding:2em 1.2em ;
    align-items: center;
    justify-content:space-between;

    

  }
`;


const MiniSpan = styled.span`
    font-family: 'Fira Sans', sans-serif;
    font-style: normal;
    font-weight: 550;
    font-size: 10px;
    display: flex;
    align-items: flex-end;
    text-transform: uppercase;
    color: #B2B7BC;
`;

const MaxSpan = styled.h5`
font-family: 'Fira Sans', sans-serif;
font-weight: normal;
font-size: 14px;
 margin:0.3em 0;
display: flex;
align-items: flex-end;
text-transform: uppercase;
color: #898D92;

`;

const Card = styled.div`
    width:100%;
     height:auto; 
     background:white; 
     border-radius:10px;
     margin-bottom: 1.1em;

     @media ${device.laptop} {
        width:48%;
    }
`;


export default Dashboard;