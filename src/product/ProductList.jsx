import {useEffect, useState} from "react";
import Product from "./Product.jsx";

export default function ProductList() {
    const [products, setProducts] = useState([]);
    const [load, setLoad] = useState(false);

    function handleClick(){
        console.info(`Handle Click`);
        setLoad(true);
    }

    useEffect(() => {
        console.info(`Call Use Effect with []`)
    }, []);

    useEffect(() => {
        console.info('Call Use Effect');
        if(load){
            fetch("/products.json")
                .then((response) => response.json())
                .then((data) => setProducts(data));
        }

        return () => {
            console.info("Product List component unmounted");
        }
    }, [load]);

    return (
        <>
            <h1>Product List</h1>
            <button onClick={handleClick}>Load Products</button>
            {products.map((product) => (
                <Product product={product} key={product.id}/>
            ))}
        </>
    )
}
