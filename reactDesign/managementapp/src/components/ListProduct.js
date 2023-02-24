import React from 'react'
import {useEffect} from "react";
import {useState} from "react";
import Table from 'react-bootstrap/Table';

function ListProduct() {
    const [data, setData] = useState("");
    useEffect(() => {
        getData();
    },[])
    async function deleteOperation(id)
    {
        let result = await fetch("http://localhost:8000/api/delete/"+id,{
            method:'DELETE'
        });
        result = await result.json();
        console.warn(result);
        getData();
        
    }
    async function getData(){
        let result = await fetch("http://localhost:8000/api/list");
            result = await result.json();
            setData(result)
    }
    return (
        <div>
        <h1> List Products </h1>
        <Table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Count</th>
          {/* <th>Image</th> */}
          <th>Operations</th>
        </tr>
            {
                data.map((item)=>
                <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.count}</td>
                    {/* <td><img style={{width:100}} src={"http://localhost:8000/"+item.photo}/></td>  */}
                    <td><span onClick={()=>deleteOperation(item.id)}>Delete</span></td>
                </tr>
                    )
            }
        </Table>
        </div>
    )
}
export default ListProduct;