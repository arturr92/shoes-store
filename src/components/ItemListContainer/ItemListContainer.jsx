import React from "react";
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemListContainer = ({greeting, color, text, size}) => {

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
        </div>;
};
