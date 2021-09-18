import React, {useEffect, } from 'react'


export const PageNotFound: React.FC = () => {
    useEffect(()=>{
        document.title = "Phionthrium | 404"
    },[])

    return (
        <>
        404
        </>
    )
}
