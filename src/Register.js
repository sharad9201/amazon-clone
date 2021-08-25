// import { result } from 'lodash'
import React, {useState, useEffect} from 'react'
import {useHistory } from 'react-router-dom'
import Header from "./Header";


function Register(){

    ///takes to the add product if we are logged in
    useEffect(()=>{
        if(localStorage.getItem('user-info')){
            history.push('./add')
        }
    },[])

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const history = useHistory()

    async function signUp(){
        let item = {name, password, email}
        console.warn(item)

        let result = await fetch("http://127.0.0.1:8000/api/register",{
            method: 'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept":"appliction/json"
            },
            body:JSON.stringify(item)
        })

        result = await result.json()
        console.warn("result", result)
        localStorage.setItem("user-info",JSON.stringify(result))
        history.push("/add")
    }
    return ( 
     <>
     <Header/>
     <div className="">
             <h1>User Sign up</h1>
             <input type="text" placeholder="name" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" />
             <br />
             <input type="text" value={email} placeholder="email" onChange={(e)=>setEmail(e.target.value)} className="form-control" />
             <br />
             <input type="text" value={password} placeholder="password" onChange={(e)=>setPassword(e.target.value)} className="form-control" />
             <br />
             <button onClick={signUp} className="btn btn-primary"> Sign up </button>
          </div>
     </>
    )
}
export default Register