import Header from "./Header";
import React, { useState, useEffect } from "react";
import {Table} from "react-bootstrap";

function ProductList() {
  const [data, setData] = useState([]);
  useEffect(async () => {
    let result = await fetch("http://127.0.0.1:8000/api/list");
    result = await result.json();
    setData(result);
  }, []);
  console.warn(data);

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

          </tr>
        </thead>
        <tbody>
         {
             data.map((item)=>
             <tr>
             <td>{item.id}</td>
             <td>{item.name}</td>
             <td><img style={{width:140}} src={"http://localhost:8000/"+item.file_path} /></td>
             <td>{item.price}</td>
             <td>{item.description}</td>
           </tr>)
         }
        </tbody>
      </Table>
    </div>
  );
}

export default ProductList;
