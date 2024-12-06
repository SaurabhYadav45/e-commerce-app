import React from "react";
import { useEffect, useState } from "react";
import Product from '../components/Product';
import Spinner from "../components/Spinner";



const Home = () =>{

    const API_URL = "https://fakestoreapi.com/products";
    const[loading, setLoading] = useState(false);
    const [items, setItems] = useState([]);

    async function fetchData(){
        setLoading(true);
        
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            setItems(data);
        } catch (error) {
            console.log("Error found");
            setItems([]);
        }
        setLoading(false);
    }

    useEffect(() =>{
        fetchData();
    }, []);
    

    return(
        <div>
            {
                loading ? <Spinner /> : 
                 items.length > 0 ?
                 ( 
                    <div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
                        {
                            items.map((item) => (
                                <Product key={item.id} item={item}></Product>
                            ))
                        }
                    </div>
                 ):
                 <div>
                    <p className="flex justify-center items-center">No Data Found</p>
                 </div>
            }
        </div>
    );
}


export default Home;