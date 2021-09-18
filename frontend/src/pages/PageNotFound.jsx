import React, {useEffect, } from 'react'


export const PageNotFound = () => {
    useEffect(()=>{
        document.title = "Phionthrium | 404"
    },[])

    return (
        <>
        404
        </>
    )
}
