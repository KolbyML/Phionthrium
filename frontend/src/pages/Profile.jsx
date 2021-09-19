import React, {useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { NavBar } from '../Components/NavBar/NavBar'

export const Profile = () => {
    const { id } = useParams() 
    const [entryData, setEntryData] = useState({})

    useEffect(()=> {
        fetch(`https://aesthetic-nova-304123.uw.r.appspot.com/api/entry/?entry=${id}`)
            .then(res=>res.json()).catch(err=>{
                // console.log(err)
            })
            .then(data=>{
                // console.log(data)
                setEntryData(data)
            })
    },[])

    return (
        <>
            <NavBar />
            <div>
                <div className="profile">
                    <div className="profileMiscContainer">
                        <div className="profileImageContainer">
                            <img className="profileImage" src="https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2FtcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="wow" />
                        </div>
                        <div className="supportButton"><h1 className="buttonText">Support</h1></div>
                    </div>
                    <div className="profileInfoContainer">
                        <div className="profileTextContainer">
                            <h1 className="profileHeader">{entryData.name}</h1>
                            <p className="profileDescription">
                                {entryData.description}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="hoverBlock"></div>
            </div>
        </>
    )
}