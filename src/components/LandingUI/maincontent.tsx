import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import lady from '../../assets/images/woman.png'
import logo from '../../assets/images/logo.png'
import { LandCard } from "../UI/LandCard";
import { Row } from "../UI/Grid";
import { device } from "../UI/Devices";
import { Small, StyledHeader } from "../UI/Typography";


export const MainContent = () => {

    return(
        <div>
        <Row style={{justifyContent: "space-between"}}>
            <LandingWrapper>
                <div>
                    <StyledHeader primary size={"40px"} >Our Mission is to Empower your Financial Freedom</StyledHeader>
                    <p><Small>We help make dreams happen. Come to us with your dreams of a better future and we will make it happen.</Small></p>
                    <br /><br />
                    <StyledLink  to="/login" style={{padding: '1.0em 1.3em'}}>Get started now</StyledLink>
                </div>
                <div style={{position:"absolute",width:"100%",top:"2%", left:0}}>
                    <Wrap>
                    <div>
                        <img src={logo} alt=""  style={{width:"68px", height:"68px"}} />
                    </div>
                    <div> 
                        <List>
                            <li style={{paddingRight:"0"}}>
                                <Link to="/login" style={{color:"white", textDecoration:"none", fontSize:"18px", fontFamily:"Fira Sans"}}>Login</Link>
                            </li>
                            <li>
                                <StyledLink to="/onboard" style={{padding: '0.6em 1.1em'}}>Signup</StyledLink>
                            </li>
                        </List>
                    </div>
                  </Wrap>
                </div>
            </LandingWrapper>
            <ImageContainer>
                <img src={lady} alt="" />
            </ImageContainer>
        </Row>
        <br />
        <Row style={{justifyContent: "center"}}>
            <Div style={{}}>
                <StyledHeader primary size={"40px"}  >Your guide to financial wellness</StyledHeader>
            </Div>
        </Row>
        <Row style={{alignItems:"start",   justifyContent: "center", padding:"2.0em 0",}}>
            <LandCard 
                title={"Invest for growth"}
                desc={"Invest with us and see your wealth grow"}
                icon={
                    <svg width="63" height="42" viewBox="0 0 63 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M41.011 42.6782C52.7962 42.6782 62.3501 33.1244 62.3501 21.3391C62.3501 9.55384 52.7962 0 41.011 0C29.2257 0 19.6719 9.55384 19.6719 21.3391C19.6719 33.1244 29.2257 42.6782 41.011 42.6782Z" fill="#F9A825"/>
                    <path d="M1 16.2185V50.7321C1 52.0579 2.07481 53.1327 3.40065 53.1327H48.8601" stroke="#002058" stroke-width="2" stroke-linecap="round"/>
                    <path d="M18.7193 27.1738C19.811 27.1738 20.6961 28.0589 20.6961 29.1507V45.536C20.6961 46.6278 19.811 47.5128 18.7193 47.5128C17.6275 47.5128 16.7424 46.6278 16.7424 45.536V29.1507C16.7424 28.0589 17.6275 27.1738 18.7193 27.1738ZM28.6267 32.5086C29.7185 32.5086 30.6036 33.3937 30.6036 34.4855V45.536C30.6036 46.6278 29.7185 47.5129 28.6267 47.5129C27.5349 47.5129 26.6498 46.6278 26.6498 45.536V34.4855C26.6498 33.3937 27.5349 32.5086 28.6267 32.5086ZM8.81182 37.8434C9.90361 37.8434 10.7887 38.7285 10.7887 39.8203V45.536C10.7887 46.6278 9.90361 47.5129 8.81182 47.5129C7.72003 47.5129 6.83496 46.6278 6.83496 45.536V39.8203C6.83496 38.7285 7.72003 37.8434 8.81182 37.8434ZM38.5341 19.1716C39.6259 19.1716 40.511 20.0567 40.511 21.1485V45.5359C40.511 46.6277 39.6259 47.5127 38.5341 47.5127C37.4423 47.5127 36.5573 46.6277 36.5573 45.5359V21.1485C36.5573 20.0567 37.4423 19.1716 38.5341 19.1716Z" fill="#002058" stroke="#002058"/>
                    </svg>
                }
                />
                  <LandCard 
                    title={"Think of the rainy day"}
                    desc={"Invest with us and see your wealth growGet ready for the rainy day. Invest today in our growth instrument."}
                    icon={
                        <svg width="63" height="42" viewBox="0 0 63 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M45.038 31.2787C43.8767 24.363 37.712 19.0703 30.2604 19.0703C22.8059 19.0703 16.6393 24.3672 15.4814 31.2869C24.7764 31.1778 37.3441 31.175 45.038 31.2787Z" fill="#F9A825" stroke="#363F41" stroke-width="2"/>
                        <path d="M1 40.3499H61.4669" stroke="#363F41" stroke-width="2" stroke-linecap="round"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M30.9013 0C32.5526 0 33.8914 1.33872 33.8914 2.99012V8.17299C33.8914 9.82439 32.5526 11.1631 30.9013 11.1631C29.2499 11.1631 27.9111 9.82439 27.9111 8.17299V2.99012C27.9111 1.33872 29.2499 0 30.9013 0Z" fill="#363F41"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M56.1417 10.3458C57.3094 11.5135 57.3094 13.4067 56.1417 14.5744L52.4768 18.2393C51.3091 19.407 49.4159 19.407 48.2482 18.2393C47.0805 17.0716 47.0805 15.1783 48.2482 14.0106L51.913 10.3458C53.0807 9.17806 54.974 9.17807 56.1417 10.3458Z" fill="#363F41"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.38679 10.3456C7.55451 9.17791 9.44775 9.17791 10.6155 10.3456L14.2803 14.0105C15.448 15.1782 15.448 17.0714 14.2803 18.2391C13.1126 19.4069 11.2194 19.4069 10.0516 18.2391L6.38679 14.5743C5.21908 13.4066 5.21908 11.5133 6.38679 10.3456Z" fill="#363F41"/>
                        </svg>
                        
                    }
                />
                 <LandCard 
                    title={"Grow your knowledge"}
                    desc={"Learn how to get more from your money with easy-to-understand articles and videos from financial experts."}
                    icon={
                        <svg width="35" height="48" viewBox="0 0 35 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.4298 5.12866C20.4298 5.12866 -11.556 33.0256 20.4298 47.7429C52.9632 33.1477 20.4298 5.12866 20.4298 5.12866Z" fill="#F9A825"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5698 1.36841C14.5698 1.36841 -15.9622 29.2653 14.5698 43.9826C45.6243 29.3875 14.5698 1.36841 14.5698 1.36841Z" stroke="#363F41" stroke-width="2"/>
                        <path d="M15.3379 18.9155L21.855 12.6487" stroke="#363F41" stroke-width="2" stroke-linecap="round"/>
                        <path d="M14.0345 32.7023L2.30371 21.4221" stroke="#363F41" stroke-width="2" stroke-linecap="round"/>
                        <path d="M14.6855 3.83838V42.7662" stroke="#363F41" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    }
                />
        </Row>
        <Spacer />
        </div>
    );
}

const LandingWrapper = styled.div`
    padding:5em 1em;
     width:90%;
     margin: 0 auto;
     text-align:center;
;
 @media ${device.laptop} {
    padding:5em 5em;
     width:30%;
     text-align:left;

  }
`;

const Div = styled.div`
    width:70%;
    text-align:center;
    margin-top:7rem;

    @media ${device.laptop} {
     width:30%;

  }
`;

const Wrap = styled.div`
    display:flex;
     align-items:center;
     justify-content:space-between;
      padding:0 1em 0em;

      @media ${device.laptop} {
        display:flex;
        align-items:center;
        justify-content:space-between;
        padding:0 5em 0.5em;

    }
`;

const List = styled.ul`
    display:flex;
    align-items:center; 
    list-style:none;
`;


const ImageContainer = styled.div`
    width:70%;
    height:400px;
    overflow:hidden;
    object-position: center;
   

    @media ${device.laptop} {
        width:50%;
    height:600px;
    overflow:hidden;
    border-bottom-left-radius: 50%;
    border-top-left-radius: 5px;
    

  }
    
`;

const StyledLink = styled(Link)`
    width: auto;
    height: auto;
    background: #FFD873;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    font-family: Fira Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;  
    text-align: center;
    color:#041942;
    border:none;
    text-decoration: none;
`;

const Spacer = styled.div`
    padding: 4.5em 0;
`