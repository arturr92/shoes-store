import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../ItemDetail/ItemDetail';

export const ItemDetailContainer = () => {

    const [data, setData] = useState([]);
    const { detailId } = useParams();
    
    useEffect( () => {
        detailData();
    }, []);

    const detailData = async () => {
        try {
            const response = await fetch('/data.json');
            const detailJson = await response.json();
            setData(detailJson.find(product => product.id === parseInt(detailId)));
            
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
