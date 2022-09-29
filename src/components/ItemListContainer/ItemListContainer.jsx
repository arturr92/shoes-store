import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { ItemList } from "../ItemList/ItemList";
import { SpinnerLoading } from '../Spinner/SpinnerLoading';

export const ItemListContainer = ({greeting, color, text, size}) => {

    const [data, setData] = useState(null);

    const { categoriaId } = useParams();

    useEffect(()=> {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'products');
        if(categoriaId) {
            const queryFilter = query(queryCollection, where('category', '==', categoriaId))
            getDocs(queryFilter)
                .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() }))))
        } else {
            getDocs(queryCollection)
                .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() }))))
        }
    }, [categoriaId])
    
    return <div>
            {data ? <ItemList products = {data}/> :  <SpinnerLoading />}
        </div>;
};
