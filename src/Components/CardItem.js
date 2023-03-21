import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Zoom from 'react-reveal/Zoom';


export const NewCardItem = ({itemsData}) => {


    return (
        <Row className='my-5'>
            {
            
            itemsData.length >= 1 ? (
                itemsData.map ( (item) => {
                    return (
                        <Col key={item.id} lg="12" sm="6">
                            <Zoom>
                            <div>
                            <Card className='item-card d-flex flex-lg-row mb-5'>
                                <img className='img-card' src={item.imgURL} alt='Error'/>
                                <Card.Body>
                                    <div className='d-lg-flex justify-content-between mb-3'> 
                                            <Card.Title className='title-card'> {item.title}</Card.Title>
                                            <h5 className='price-card'>{item.price}</h5>
                                    </div>
                                    <Card.Text className='text-card overflow-ellipsis text-black-50'>
                                            {item.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            </div>
                            </Zoom>
                        </Col>
                        
                    )
                })
            ) : <h3 className='text-center'> لا يوجد أصناف طعام</h3>
            }
        </Row>
    )
}



