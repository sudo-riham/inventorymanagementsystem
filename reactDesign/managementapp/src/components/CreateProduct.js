import {useState} from "react";


export default function AddProduct() {

    const [name, setName] = useState("")
    const [file, setFile] = useState("");
    const [count,setCount] = useState("");

    async function addProduct(){
        console.warn(name,count,file)
        const formData = new FormData();
        formData.append('photo', file);
        formData.append('name', name);
        formData.append('count', count);
        let result = await fetch("http://localhost:8000/api/addproduct",{
                     method: 'POST',
                     body: formData
    });
    alert("Data has been added")
    }
    // const handleChange = (event) => {
    //     const name = event.target.name;
    //     const value = event.target.value;
    //     setInputs(values => ({...values, [name]: value }));
    // }
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     axios.post('http:localhost:1234/api/product/save', inputs);
    //     console.log(inputs);
    
    return (
        <div>
        <h1> Create Products </h1>
        <div className = "col-sm-6 offset-sm-3">
                        
                        <input type="text" name="name" className="form-control" 
                        onChange={(e)=>setName(e.target.value)}  placeholder="Name"/> <br/>
                       
                        <input type="file" name="photo" className="form-control" 
                        onChange={(e)=>setFile(e.target.files[0])}  placeholder="Photo"/> <br/>
                       
                        <input type="text" name="count" className="form-control" 
                        onChange={(e)=>setCount(e.target.value)}  placeholder="count"/> <br/>
                        
                        <button onClick={addProduct} ontype="submit" className="btn btn-primary"> Submit</button> 
                      
        </div>
        </div>
    )
}