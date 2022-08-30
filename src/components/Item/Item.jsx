import {Card, Button} from 'react-bootstrap'

export const Item = ({productData}) => {

    return (
        <div className='col-md-4 mt-2'>
            <Card >
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                    <Card.Title>{productData.name}</Card.Title>
                    <Card.Text>
                    {productData.address.zipcode}
                    </Card.Text>
                    <Button variant="primary">SHOW MORE</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

