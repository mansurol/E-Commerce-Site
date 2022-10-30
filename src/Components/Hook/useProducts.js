import { useEffect, useState } from "react";


const useProducts = () => {
    const [viewProduct , setProduct] = useState([])
    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then (data => setProduct(data))
        },[]);

        return  [viewProduct , setProduct] ;
}

export default useProducts;