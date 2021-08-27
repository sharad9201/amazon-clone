import Header from "./Header";
import {useState} from 'react'

function SearchProduct(){
   
    

    return (
        <div className="">
            <Header />
            <h1>SearchComponent</h1>
            <div className="col-sm-6 offset-sm-4">
                      <input type="text" className="form-control" placeholder="Search here" />

            </div>

         </div>
   )
}
export default SearchProduct