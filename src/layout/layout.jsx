import React from "react";
import { Footer,Header } from "../components";
import { Outlet } from "react-router-dom";
import layout from "./layout.module.css"

export const MainLayout = ()=>{



  return (<>
    <div className={layout.block}>
<header><Header/></header>

<main><Outlet/></main>
    </div>

    <footer><Footer/></footer>

  </>)
}