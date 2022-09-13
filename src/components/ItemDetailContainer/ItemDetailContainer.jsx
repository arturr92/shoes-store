import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../ItemDetail/ItemDetail';

export const ItemDetailContainer = () => {

    const [data, setData] = useState([]);
    const { detailId } = useParams();
    console.log(detailId);
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
            {
                <h1>{detailId}</h1>
            }
            <ItemDetail detailData={data} />
        </div>
    )
}
