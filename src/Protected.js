import React, { useEffect} from 'react'
import {useHistory } from 'react-router-dom'

function Protected(props){

    let Cmp=props.Cmp
    
    const history = useHistory()

    useEffect(()=>{
        if(!localStorage.getItem('user-info')){
            history.push('./register')
        }
    },[])
    return (
        <div className="">
            <Cmp />
        </div>
    )
}
export default Protected