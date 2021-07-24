import React from "react";
import { Row } from "../components/UI/Grid";
import { SideWrapper } from "../components/AuthUI/side-wrapper";


type AuthLayoutProps = {
    children:any
}

export const AuthLayout = (props:AuthLayoutProps) => {
    return (
        <Row >
           <SideWrapper />
           {props.children}
        </Row>
    )
}

export default AuthLayout;

