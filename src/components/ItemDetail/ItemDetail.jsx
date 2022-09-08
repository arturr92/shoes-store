import '../ItemDetail/ItemDetail.css';



export const ItemDetail = ({detailData}) => {
    
    return (
        <div className='container__detail'>
            {
                detailData.map( detail => {
                    return(
                        <div className="details" key={detail.id}>
                            <div className=".img__details">
                                <img src={detail.img} alt={detail.alt}/>
                            </div>

                            <div className="box">
                                <div className="row">
                                <h2>{detail.brand}</h2>
                                <span>${detail.price}</span>
                                </div>

                                <p>{detail.model}</p>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur molestiae hic veritatis a! Nostrum nobis ab, illo magnam quae vero.</p>
                                <button className="cart">Agregar al carrito</button>
                        </div>
            </div>)})
            }
        </div>
    );
}
