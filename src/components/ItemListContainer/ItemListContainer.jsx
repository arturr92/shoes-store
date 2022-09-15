import React, { useEffect, useState } from "react";
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
    
    return <div>
            {data ? <ItemList products = {data}/> :  <SpinnerLoading />}
        </div>;
};
