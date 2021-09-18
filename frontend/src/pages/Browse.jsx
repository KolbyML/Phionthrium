import React, {useEffect, useState } from 'react'
import { NavBar } from '../Components/NavBar/NavBar'
// import NavBar from '../Components/index'

export const Browse = () => {
    const [serverError, setServerError] = useState(false)
    const [browseData, setBrowseData] = useState([])

    useEffect(()=>{
        document.title = "Phionthrium | Browse"

        fetch('https://aesthetic-nova-304123.uw.r.appspot.com/api/browse/')
            .then(res=>res.json()).catch(err=>{
                console.log(err)
                setServerError(true)
            })
            .then(data=>{
                console.log(data)
                setBrowseData(data)
            })
    },[])

    const getContent = () => {
        return browseData.map(item=> {
            return (
                <div><p>{item.name}</p></div>
            )
        })
    }

    return (
        <>
            <NavBar/>
            {/* grid */}
            <div>
                {serverError ? <h1 style={{color: "red", textAlign: "center"}}>Unfortunately the server is down, please try again at a different time</h1> : getContent()}
            </div>
        </>
    )
}
