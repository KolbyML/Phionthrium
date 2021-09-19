import React, {useEffect, } from 'react'
import { NavBar } from '../Components/NavBar/NavBar'


export const PageNotFound = () => {
    useEffect(()=>{
        document.title = "Phionthrium | 404"
    },[])

    return (
        <>
            <NavBar/>
            <h1 style={{color: "red", textAlign: "center"}}>404 Page not Found</h1>
            <h2 style={{color: "red", textAlign: "center"}}>Perhaps it was stolen by a penguin 🤔</h2>
            <p style={{textAlign: "center", color: "blue"}}><a href="/"  style={{textAlign: "center", textDecoration: "none", color: "blue"}}>Back to Home</a></p>
        </>
    )
}
