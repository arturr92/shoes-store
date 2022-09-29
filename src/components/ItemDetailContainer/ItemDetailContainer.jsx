import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../ItemDetail/ItemDetail';

export const ItemDetailContainer = () => {

    const [data, setData] = useState([]);
    const { detailId } = useParams();
    
    useEffect(()=> {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'products', detailId);
        getDoc(queryDoc)
            .then(res => setData({id: res.id, ...res.data()}))
    }, [detailId]);
    
    return (
        <div>
            <ItemDetail detailData={data} />
        </div>
    )
}
