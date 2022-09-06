import { Spinner } from 'react-bootstrap';

export const SpinnerLoading = () => {
    return (
        <>
            <div className='text-center m-4'>
                <Spinner animation="border" size="xl" variant="primary" />
                <Spinner animation="border" variant="primary" />
                <Spinner animation="border" variant="warning" />
                <Spinner animation="grow" size="xl" variant="warning" />
                <Spinner animation="grow" variant="primary" />
                <Spinner animation="grow" variant="primary" />
                <div>
                <h4 className='mt-4'>CARGANDO PRODUCTOS...</h4>
                </div>
            </div>
        </>
    )
}
