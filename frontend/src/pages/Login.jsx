import React, {useEffect, useState } from 'react'


export const Login = () => {
    const [ethKey, setEthKey] = useState("")
    const [inputKey, setInputKey] = useState("")
    const ethereum = window.ethereum
    useEffect(()=>{
        document.title = "Phionthrium | Login"
        // console.log(window.ethereum)
    },[])

    ethereum.on('accountChanged', (accounts)=>{
        setEthKey(accounts[0])
    })

    return (
        <div className="login">
            <a href="/" className="transition" title="go back">
                <div style={{display: 'flex', alignItems: "center"}}><img src={"arrow.svg"} alt="back button" /></div>
                <div style={{display: 'flex', alignItems: "center"}}><p>Back</p></div>
            </a>
            <h1>Login</h1>
            <div className="glassy">
                <div style={{color: "#161616"}}><p><b>Ethereum Public Wallet Key:</b></p></div>
                <input value={inputKey} onChange={e=>setInputKey(e.target.value)} placeholder="Public Wallet Key Here" />
                <div className="breakLine"></div>
                <button className="transition loginButton " title="Use MetaMask to get Wallet Key"><b>Use MetaMask</b></button>
                {ethereum && ethKey ? <p style={{color: "#161616"}}>Detected Key: {ethKey}</p> : null}
            </div>
        </div>
    )
}
