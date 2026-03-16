import { Header } from "./Header";
import {Main} from "./Main";
import {Footer} from"./Footer"
import { Outlet } from "react-router-dom";

export const MainLayput=()=>{
    return(<>
      <div className="flex flex-col min-h-screen">
        <Header/>
        <Main>
            <Outlet/>
        </Main>
        <Footer/>
      </div>
    </>)
}