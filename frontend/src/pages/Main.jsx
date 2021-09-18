import React, {useEffect, } from 'react'
import { NavBar } from '../Components/NavBar/NavBar'
// import NavBar from '../Components/index'

export const MainPage = () => {

    useEffect(()=>{
        document.title = "Phionthrium | Home"
    },[])

    return (
        <>
            <NavBar/>
            hi
        </>
    )
}
