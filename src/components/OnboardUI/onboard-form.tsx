import React from "react";
import { StyledButton } from "../UI/Button";
import styled from 'styled-components';
import { Row, Wrapper } from "../UI/Grid";
import { Label, StyledHeader, StyledSpan } from "../UI/Typography";
import { FormContainer, Input } from "../UI/Form";
import { device } from "../../components/UI/Devices";

type OnboardFormProps = {}

export const OnboardForm = (props:OnboardFormProps) => {
    return(
       <Wrapper  style={{height:"100vh"}}>
                <Container>
                 
                    <StyledSpan small primary style={{opacity:'0.5',}}>Already have an account?</StyledSpan>
                    <StyledButton  path={"/login"} 
                        link={true} 
                        primary={false}
                        shadow 
                        className=""
                        style={{ marginLeft:"2.0em",padding: '0.6em 2.1em',color:'#002058'}}>Login</StyledButton>
               </Container>
             
                <FormContainer>
                    <Para>
                        <StyledHeader minilarge bold primary style={{marginBottom:"0.4em"}}>Create an account</StyledHeader>
                        <StyledSpan primary small style={{opacity: "0.4",lineHeight:"24px"}}>Lets onboard you so we will know who you are. it will only take a minute</StyledSpan>
                    </Para>
                <br /> <br />
                    <form>
                        <div className="form-group">
                            <Label primary>Firstname</Label>
                            <div>
                                <Input type="text" className="form-control" placeholder="Firstname" value="John" />
                            </div>
                        </div>
                        <br />
                        <div className="form-group">
                            <Label primary>Lastname</Label>
                            <div>
                                <Input type="text" className="form-control" placeholder="Lastname" value="John Doe" />
                            </div>
                        </div>
                        <br />
                        <div className="form-group">
                            <Label primary>Email</Label>
                            <div>
                                <Input type="email" className="form-control"  placeholder="Email" value="johndoe@gmail.com"/>
                            </div>
                        </div>
                        <br />
                        <div className="form-group">
                            <Label primary>Password</Label>
                            <div>
                                <Input type="password" className="form-control"  placeholder="Password"/>
                            </div>
                        </div>
                        <br /><br />
                        <Row style={{flexDirection:"row" , justifyContent:"space-between"}}>
                            <StyledSpan style={{color:"#FFD873"}} small>Previous</StyledSpan>
                            <StyledButton
                             link={false}
                             primary={true}
                             shadow={false} 
                             className=""
                             path={""}
                             style={{ padding: "0.6em 2.5em"}}
                            >Signup</StyledButton>
                        </Row>
                    </form>
                    <br />
                    <br />
                    <br />
                </FormContainer>
       </Wrapper>
         
    );
}

const Container = styled.div`
    display:flex;
    padding:2.5em 0;
    padding-right:0.8em;
    align-items:center;
    justify-content:flex-end;

    @media ${device.laptop} {
        padding-right:3em;
        padding:2.5em;
  }
`;



const Para = styled.div`
    width:100%;
    @media ${device.laptop} {
    width: 80%;
  }
`;