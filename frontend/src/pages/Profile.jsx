import React, {useEffect, useState } from 'react'
import { useParams } from 'react-router'

export const Profile = () => {
    const { id } = useParams() 
    return (
        <div>
            {id}
        </div>
    )
}