import { result } from 'lodash'
import React, {useState} from 'react'

function Register(){

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

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
    }
    return ( 
         <div className="">
             <h1>User Sign up</h1>
             <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" />
             <br />
             <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" />
             <br />
             <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" />
             <br />
             <button onClick={signUp} className="btn btn-primary"> Sign up </button>
          </div>
    )
}
export default Register