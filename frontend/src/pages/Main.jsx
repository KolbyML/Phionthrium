import React, {useEffect, } from 'react'
import { NavBar } from '../Components/NavBar/NavBar'
import { About } from './About'
// import NavBar from '../Components/index'

export const MainPage = () => {

    useEffect(()=>{
        document.title = "Phionthrium | Home"
        
        // const requestOptions = {
        //     method: 'DELETE',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({
        //         "uid": "4",
        //         "keys": "TESTING.7#%",
        //     })
        // };
        // fetch('https://aesthetic-nova-304123.uw.r.appspot.com/api/entry/remove/', requestOptions)
        //     .then(response => response.json()).catch(err=>console.log(err))
        //     .then(data => console.log(data));
    },[])

    return (
        <>
            <NavBar/>
            <About/>
        </>
    )
}
