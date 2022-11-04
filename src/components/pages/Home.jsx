import React from "react";
import Clients from "./Home/Clients"
import Works from './Home/Works'
import Reviews from "./Home/Reviews"
import Services from './Home/Services'
import MainHome from "./Home/MainHome";
export default function Home(){
    return(
        <>
            <MainHome/>
            <Clients/>
            <Works/>
            <Reviews/>
            <Services/>
        </>
    )
}