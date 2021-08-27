import Header from "./Header";
import {useState} from 'react'
import {Table} from "react-bootstrap";

function SearchProduct(){
   const [data, setData]= useState([])
    async function search(key){
        let result = await fetch("http://127.0.0.1:8000/api/search/"+key)
        result = await result.json()
        setData(result)
    }

    return (
        <div className="">
            <Header />
            <h1>SearchComponent</h1>
            <div className="col-sm-6 offset-sm-4">
                      <input type="text" className="form-control" onClick={(e)=>search(e.target.value)} placeholder="Search here" />
<br />
                      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>     
         {
             data.map((item)=>
             <tr>
             <td>{item.id}</td>
             <td>{item.name}</td>
             {/* backend serve must be added to get the right image other image will be crash */}
             <td><img style={{width:140}} src={"http://localhost:8000/"+item.file_path} /></td>
             <td>{item.price}</td>
             <td>{item.description}</td>
            

           </tr>)
         }
        </tbody>
      </Table>

            </div>

         </div>
   )
}
export default SearchProduct