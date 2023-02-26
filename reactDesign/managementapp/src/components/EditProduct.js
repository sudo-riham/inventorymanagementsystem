// import { useEffect } from 'react';
// import {Router} from 'react-router-dom';
// import { useState } from 'react';

// function EditProduct(props) {
//     const [data, setData] = useState([])
//     console.warn("props",props.match.params.id);
//     useEffect(async ()=>{
//         let result = await fetch("http://localhost:8000/api/product/" + props.match.params.id);
//         result = await result.json();
//         setData(result);
    
//     })
  
// }
// export default EditProduct;