import React, {useContext, useEffect, useState } from 'react'
import { PublicKeyContext } from '../App'
import { useHistory } from 'react-router'

export const Login = () => {
    const { publicKey, setPublicKey } = useContext(PublicKeyContext)
    const [inputKey, setInputKey] = useState("")
    const history = useHistory();
    const ethereum = window.ethereum
    useEffect(()=>{
        document.title = "Phionthrium | Login"
        // console.log(window.ethereum)
    },[])


    return (
        <div className="login">
            <div style={{display: "flex", flexDirection: "row", padding:"30px"}} className="transition" title="go back">
                <div className = "backButton" onClick={() => {history.push("/"); }}  style={{display: 'flex', alignItems: "center"}}><img src={"arrow.svg"} alt="back button" /></div>
                <div className = "backButton" onClick={() => {history.push("/"); }}  style={{display: 'flex', alignItems: "center", color: "white",}}><h2 style={{fontWeight: "400"}}>Back</h2></div>
            </div>
            <h1>Login</h1>
            <div className="glassy">
                <div style={{color: "#161616"}}><p><b>Ethereum Public Wallet Key:</b></p></div>
                <input value={inputKey} onChange={e=>setInputKey(e.target.value)} placeholder="Public Wallet Key Here" />
                <div className="breakLine"></div>
                <button className="transition loginButton " onClick={() => {setPublicKey(inputKey); setInputKey(""); console.log(publicKey); }} title="Use MetaMask to get Wallet Key"><b>Use MetaMask</b></button>
                {ethereum && publicKey ? <p style={{color: "#161616"}}>Detected Key: {publicKey}</p> : null}
            </div>
        </div>
    )
}