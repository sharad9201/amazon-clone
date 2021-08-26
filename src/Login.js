import Header from "./Header";
import React, {useState, useEffect} from 'react'
import {useHistory } from 'react-router-dom'

function Login(){
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const history = useHistory()

    useEffect(()=>{
        if(localStorage.getItem('user-info')){
            history.push('./add')
        }
    },[])
    // button wala login 
    async function logIn(){
        let item = {email,password}
        let result = await fetch("http://127.0.0.1:8000/api/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(item)
        })
        result = await result.json()
        localStorage.setItem('user-info',JSON.stringify(result))
        history.push('/add')
    }
    return (
        <div className="">
                 <Header />
                <div className="">
                    <h1>User LOg up</h1>
                   
                    <input type="text" value={email} placeholder="email" onChange={(e)=>setEmail(e.target.value)} className="form-control" />
                    <br />
                    <input type="text" value={password} placeholder="password" onChange={(e)=>setPassword(e.target.value)} className="form-control" />
                    <br />
                    <button onClick={logIn} className="btn btn-primary"> log up </button>
                </div>
        </div>
    )
}
export default Login