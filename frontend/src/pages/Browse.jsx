import React, {useEffect, useState } from 'react'
import { NavBar } from '../Components/NavBar/NavBar'
// import NavBar from '../Components/index'

export const Browse = () => {
    const [serverError, setServerError] = useState(false)
    const [browseData, setBrowseData] = useState([])

    useEffect(()=>{
        document.title = "Phionthrium | Browse"

        
        // Simple POST request with a JSON body using fetch
        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({
        //         "user": "2345",
        //         "name": "Joe",
        //         "description": "Joe mama",
        //     })
        // };
        // fetch('https://aesthetic-nova-304123.uw.r.appspot.com/api/entry/add/', requestOptions)
        //     .then(response => response.json()).catch(err=>console.log(err))
        //     .then(data => console.log(data));

        fetch('https://aesthetic-nova-304123.uw.r.appspot.com/api/browse/')
            .then(res=>res.json()).catch(err=>{
                // console.log(err)
                setServerError(true)
            })
            .then(data=>{
                // console.log(data)
                setBrowseData(data)
            })
    },[])

    const getContent = () => {
        return browseData.map(item=> {
            console.log(item.img)
            return (
                <div className="card" key={item.uid}>
                    <div>
                        <img alt={item.name+"image"} src={item.img === null ? 'placeholder.svg' : item.img} />
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                    </div>
                </div>
            )
        })
    }

    return (
        <>
            <NavBar/>
            {/* grid */}
            <div className={!serverError ? "browseGrid" : null}>
                {serverError ? <h1 style={{color: "red", textAlign: "center"}}>Unfortunately the server is down, please try again at a different time</h1> : getContent()}
            </div>
        </>
    )
}
