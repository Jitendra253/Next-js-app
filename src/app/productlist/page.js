"use client"
import { useState,useEffect } from "react";
export default function Page(){
    const [product,setProduct] = useState([])
    useEffect(() => {
        async function getProducts() {
            const response = await fetch("https://dummyjson.com/products");
            const data = await response.json();

            console.log(data);
            setProduct(data.products)
        }

        getProducts();
    }, []);
    return(
        <div>
            <h1>Product List</h1>
            {
                product.map((item)=>(
                    <h2>{item.title}</h2>
                ))
            }
        </div>
    )
}