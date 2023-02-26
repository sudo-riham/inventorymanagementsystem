import React from 'react'
import { useState } from "react";
import { useEffect } from "react";
import {Table} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import "../App.css"

function Product(){
    const [data, setData] = useState([])
    useEffect(() => {
        getData();
    },[])
    async function getData(){
        let result = await fetch("http://localhost:8000/api/list");
            result = await result.json();
            setData(result)
    }
    async function deleteOperation(id)
    {
        let result = await fetch("http://localhost:8000/api/delete/"+id,{
            method:'DELETE'
        });
        result = await result.json();
        console.warn(result);
        getData();
        
    }
    async function search(key){
        console.warn(key)
        let result = await fetch("http://localhost:8000/api/search/"+key);
        result = await result.json();
        console.warn(result)
        setData(result)
    }
    return(
        <div>
            <div className="col-sm-6 offset-sm-3">
            <h1>Search </h1>
            <br/>
            <input type="text" onChange={(e)=>search(e.target.value)} className="form-control" placeholder="Search Products"/>
            <Table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Count</th>
          <th>Operations</th>
        </tr>
            {
                data.map((item)=>
                <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.count}</td>
                    <td className="delete"><span  onClick={()=>deleteOperation(item.id)}>Delete</span></td>
                    <Link to={"update/"+item.id}>
                    <td>
                        <span className="update">Update</span>
                    </td>
                    </Link>
                </tr>

                    )
            }
        </Table>
        </div>
        </div>
    )
}
export default Product;