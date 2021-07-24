import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Label } from "./Typography";

type ButtonProps = {
    className:any;
    path:string | "";
    primary:any;
    children:React.ReactNode;
    shadow:boolean;
    link:boolean;
    style:any;
}

const Button = ({path,className,children,style="",link=false}:ButtonProps) =>{
return link ? <Link to={path} style={style} className={className}>{children}</Link> : <button  style={style} className={className}>{children}</button>
}

export const StyledButton = styled(Button)`
    width: auto;
    height: auto;
    background: ${props => props.primary ? " #FFD873" : "#fff"};
    box-shadow: ${props => props.shadow ? "0 5px 10px rgba(0,0,0,0.3)" : "none" };
    border-radius: 2px;
    font-family: Fira Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;  
    text-align: center;
    color: ${props => props.primary ? " #041942;" :"#000"};
    border:none;
    text-decoration: none;
    cursor: pointer;
`



const Anchor = ({path,className,active,text,icon}:any) =>{
    return (
    <Link to={path} className={className} style={{ opacity:`${active ? 1 : 0.4}`}}>
        <div  style={{width:"50px"}}>{icon}</div>
        <Label style={{ opacity:`${active ? 1 : 0.4}`}}>
            {text}
        </Label>    
    </Link>
    ) 
}

export const NavLink = styled(Anchor)`
    width: 100%;
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 0.6em 0;
    cursor: pointer;
   transform: translate(15%,85%);
   
    
    :hover {
      background-color: rgba("0,0,0,.2");
  }

`;
