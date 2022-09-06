import React, { useEffect, useState } from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import { ItemList } from "../ItemList/ItemList";
import { SpinnerLoading } from '../Spinner/SpinnerLoading';

export const ItemListContainer = ({greeting, color, text, size}) => {

    const [data, setData] = useState(null);

    useEffect( () => {
        setTimeout(() => {
            showData();
        }, 3000);
    }, []);
    
    const showData = async () => {
        try {
            const response = await fetch('/data.json');
            const dataJson = await response.json() 
            setData(dataJson); 
        } catch (error) {
            console.error(error)
        }
    }
    
    /* const onAdd = (quantity) => {
        console.log(`Agregaste ${quantity} productos`);
    } */
    
    return <div>
            {/* <ItemCount 
            initial = {1}
            stock = {8}
            onAdd = {onAdd}
            /> */}
            {data ? <ItemList products = {data}/> :  <SpinnerLoading />}
        </div>;
};
