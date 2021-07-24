import styled from 'styled-components';
// import { device } from "./Devices";



const Header = (props:any) =>{
    return <h3 className={props.className}>{props.children}</h3>
}

export const StyledHeader = styled(Header)`
    font-family: 'Fira Sans', sans-serif;
    font-size: ${props => props.size};
    font-style: normal;
    font-weight: ${props => props.bold ? "bold" :"700"};
    letter-spacing: 0px;
    text-align: left;
    margin-bottom:0.4em;
    color: ${props => props.primary ? "#002058" : "#fff"};
`;

const Span = (props:any) =>{
    return <span style={props.style} className={props.className}>{props.children}</span>
}

export const StyledSpan = styled(Span)`
    font-family: 'Fira Sans', sans-serif;
    font-size:${props => props.small ? "16px": "20px"};
    font-style: normal;
    font-weight:${props => props.small ? "500": "400"};
    text-align: left;
    color: ${props => props.primary ? "#002058" : "#fff"};
  
`;

const LabelStyle = (props:any) =>{
    return <label style={props.style} className={props.className}>{props.children}</label>
}

export const Label = styled(LabelStyle)`
    font-family: 'Fira Sans', sans-serif;
    font-size:  14px;
    font-style: normal;
    font-weight: 500;
    text-align: left;
    color: ${props => props.primary ? "#041942" : "#fff"};
    opacity:0.3;
  
`;


export const Tiny = styled.span`
    font-family: Quicksand;
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    color: #FFFFFF;
    opacity: 0.5;
`;

export const List = styled.ul`
    list-style:none;
    padding-left:0;
`;

export const Small = styled.span`
    display: block;
    font-family: 'Fira Sans', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: left;
    color: #002058;
    opacity: 0.6;

`;