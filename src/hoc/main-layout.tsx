import React from "react";
import { ContentWrapper } from "../components/MainUI/content-wrapper";
import { SideBar } from "../components/MainUI/side-bar";
import { Row } from "../components/UI/Grid";

type MainLayoutProps = {
    children:any
}

export const MainLayout = (props:MainLayoutProps) => {
    return (
       <Row style={{alignItems:"flex-start"}}>
           <SideBar />
           <ContentWrapper>
               {props.children}
           </ContentWrapper>
       </Row>
    )
}


export default MainLayout;