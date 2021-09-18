import React, {useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { NavBar } from '../Components/NavBar/NavBar'

export const Profile = () => {
    const { id } = useParams() 
    return (
        <div>
            <NavBar />
            <div>
                <div className="hoverBlock"></div>
                <div className="profile">
                </div>
            </div>
        </div>
    )
}