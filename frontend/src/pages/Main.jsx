import React, {useEffect, } from 'react'
import { NavBar } from '../Components/NavBar/NavBar'
import { About } from './About'
// import NavBar from '../Components/index'

export const MainPage = () => {

    useEffect(()=>{
        document.title = "Phionthrium | Home"
    },[])

    return (
        <>
            <NavBar/>
            <About/>
        </>
    )
}
