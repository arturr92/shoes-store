import React from "react";

export const ItemListContainer = ({greeting, color, text, size}) => {
    return <div>
            <h1 style= {{color: color, textAlign: text, fontSize: size}}> {greeting} </h1>
        </div>;
};
