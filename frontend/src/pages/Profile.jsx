import React, {useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { NavBar } from '../Components/NavBar/NavBar'

export const Profile = () => {
    const { id } = useParams() 
    return (
        <>
            <NavBar />
            <div>
                <div className="hoverBlock"></div>
                <div className="profile">
                    <div className="profileMiscContainer">
                        <div className="profileImageContainer">
                            <img className="profileImage" src="https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2FtcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="wow" />
                        </div>
                        <div className="supportButton"><h1 className="buttonText">Support</h1></div>
                    </div>
                    <div className="profileInfoContainer">
                        <div className="profileTextContainer">
                            <h1 className="profileHeader">{id}</h1>
                            <p className="profileDescription">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lectus ligula, consequat ac molestie eleifend, suscipit vitae justo. Pellentesque vitae massa molestie, luctus nisl nec, imperdiet urna. Nam ullamcorper posuere nunc, quis commodo velit efficitur eu. Duis hendrerit felis ante, eu fermentum lacus scelerisque ut. Duis sed lacus at tellus blandit varius. In accumsan ipsum urna, et mollis arcu faucibus sed. Phasellus malesuada, lorem sit amet eleifend dictum, eros mi sollicitudin elit, eget tincidunt ex eros in neque. Aliquam suscipit fringilla erat, ut laoreet tellus convallis at.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}