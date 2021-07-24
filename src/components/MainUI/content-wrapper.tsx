import React from "react";
import { NavigationBar } from "./navigationbar";

export const ContentWrapper= (props:any) =>{
    return (
       <div style={{flexGrow:1, background:"#E5E5E5", height:"100vh", overflow:"hidden"}}>
           <NavigationBar />
          <div style={{flex:1, display:"flex", overflow:"auto", height:"100vh"}}>
                     {props.children}      
           </div> 
        </div>
    );
}









