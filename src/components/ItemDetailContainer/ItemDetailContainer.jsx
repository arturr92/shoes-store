import { useState, useEffect } from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail';

export const ItemDetailContainer = () => {

    const [data, setData] = useState([]);

    useEffect( () => {
        detailData();
    }, []);

    const detailData = async () => {
        try {
            const response = await fetch('/detail.json');
            const detailJson = await response.json();
            setData(detailJson);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <ItemDetail detailData={data} />
        </div>
    )
}
