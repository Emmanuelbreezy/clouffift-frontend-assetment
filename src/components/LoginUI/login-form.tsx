import React from "react";
import { StyledButton } from "../UI/Button";
import styled from 'styled-components';
import { Row, Wrapper } from "../UI/Grid";
import { Label, StyledHeader, StyledSpan } from "../UI/Typography";
import { FormContainer, Input } from "../UI/Form";
import { device } from "../../components/UI/Devices";



export const LoginForm = (props:any) => {
    const {username, password} = props.data;
    return(
       <Wrapper  style={{height:"100vh"}}>
                <Container>
                 
                    <StyledSpan small primary style={{opacity:'0.5',}}>Already have an account?</StyledSpan>
                    <StyledButton  path={"/onboard"} 
                        link={true} 
                        primary={false}
                        shadow 
                        className=""
                        style={{ marginLeft:"2.0em",padding: '0.6em 2.1em',color:'#002058'}}>Signup</StyledButton>
               </Container>
               <Spacer />
                <FormContainer>
                    <Para>
                        <StyledHeader minilarge bold primary style={{marginBottom:"0.4em"}}>Login</StyledHeader>
                        <StyledSpan primary small style={{opacity: "0.4",lineHeight:"24px"}}>Sign in with your username or email and password</StyledSpan>
                    </Para>
                <br /> <br />
                    <form onSubmit={props.handleSubmit} method="post">
                        <div className="form-group">
                            <Label primary>Username</Label>
                            <div>
                                <Input type="text" className="form-control" name="username" placeholder="Username"  value={username} onChange={props.handleChange}/>
                            </div>
                        </div>
                        <br />
                        <div className="form-group">
                            <Label primary>Password</Label>
                            <div>
                                <Input type="password" className="form-control" name="password"  placeholder="Password" value={password} onChange={props.handleChange}/>
                            </div>
                        </div>
                        <br /><br />
                        <Row style={{flexDirection:"row" , justifyContent:"space-between"}}>
                            <StyledButton
                             link={false}
                             primary={true}
                             shadow={false} 
                             className=""
                             path={""}
                             style={{ padding: "0.6em 2.5em"}}
                            >Login</StyledButton>
                            <StyledSpan primary small>Forget password?</StyledSpan>
                        </Row>
                    </form>

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

const Spacer = styled.div`
    padding: 0.5em 0;
`