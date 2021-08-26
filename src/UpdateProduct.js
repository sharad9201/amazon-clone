import Header from "./Header";
import {withRouter} from 'react-router-dom'
import {useEffect, useState} from 'react'

function UpdateProduct(props){

    const [data, setData] = useState([])

    useEffect( async ()=>{
       let result = await fetch("http://127.0.0.1:8000/api/getProduct/"+props.match.params.id);
       result = await result.json();
       setData(result);
    },[])

    // console.warn("props", props.match.params.id)
    return (
        <div className="">
            <Header />
            <input type="text" defaultValue={data.name} /> <br />
            <input type="text" defaultValue={data.description} /> <br />
            <input type="text" defaultValue={data.price} /> <br />
            <input type="file" defaultValue={data.file_path} /> <br />
            <img style={{width:90}} src={"http://localhost:8000/"+data.file_path} /> <br />
        <button className="update">Update</button>
         </div>
   )
}
export default withRouter(UpdateProduct)