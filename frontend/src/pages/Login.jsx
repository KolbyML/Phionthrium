import React, {useEffect, } from 'react'


export const Login = () => {
    useEffect(()=>{
        document.title = "Phionthrium | Login"
    },[])

    return (
        <div className="login">
            <a href="/" className="transition">
                <div style={{display: 'flex', alignItems: "center"}}><img src={"arrow.svg"} /></div>
                <div style={{display: 'flex', alignItems: "center"}}><p>Back</p></div>
            </a>
            <h1>Login</h1>
            <div className="glassy">
                <div><p><b>Ethereum Public Wallet Key:</b></p></div>
                <input />
                <div></div>
                <button></button>
            </div>
        </div>
    )
}
