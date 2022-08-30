import React, { useEffect, useState } from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import { ItemList } from "../ItemList/ItemList";
/* import Data from '../../data.json'; */

export const ItemListContainer = ({greeting, color, text, size}) => {

    const [data, setData] = useState([]);

    useEffect( () => {
        setTimeout(() => {
            showData();
        }, 1);
    }, []);
    
    const showData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const dataJson = await response.json() 
            setData(dataJson); 
        } catch (error) {
            console.error(error)
        }
    }

    

    const onAdd = (quantity) => {
        console.log(`Agregaste ${quantity} productos`);
    }
    
    return <div>
            <h1 style= {{color: color, textAlign: text, fontSize: size}}> {greeting} </h1>
            <ItemCount 
            initial = {1}
            stock = {8}
            onAdd = {onAdd}
            />
            <ItemList products = {data} />
        </div>;
};
