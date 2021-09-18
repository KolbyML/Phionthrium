import React, {useEffect, } from 'react'


export const MainPage: React.FC = () => {

    useEffect(()=>{
        document.title = "Phionthrium | Home"
    },[])

    return (
        <>
        hi
        </>
    )
}
