import { Header } from "./Header";
import {Main} from "./Main";
import {Footer} from"./Footer"
import { Outlet } from "react-router-dom";

export const MainLayput=()=>{
    return(<>
     <Header/>
    
    <Main>
        <Outlet/>
    </Main>
    
     <Footer/>
    </>)
}