import Header from "./Header";
import React, { useState, useEffect } from "react";
import {Table} from "react-bootstrap";

function ProductList() {
  const [data, setData] = useState([]);
  useEffect( () => {
    getData()
  }, []);
  // console.warn(data);

 async function deleteOperation(id){

  let result = await fetch("http://127.0.0.1:8000/api/delete/"+id,{
    method:"DELETE"
  })

  result = await result.json()
  console.warn(result)
  getData()
}
// relaod the data when called
async function getData(){
  let result = await fetch("http://127.0.0.1:8000/api/list");
  result = await result.json();
  setData(result);
}

  return (
    <div>
      <Header />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Description</th>
            <th>Operations</th>


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
             <td><span className="delete" onClick={()=>{deleteOperation(item.id)}}> Delete</span></td>

           </tr>)
         }
        </tbody>
      </Table>
    </div>
  );
}

export default ProductList;
