import React from 'react'
import { Col, Row } from 'react-bootstrap'

export const Header = () => {
    return (
        <Row>
            <Col>
                <div className='my-4 '>
                    <h2 className='text-center fw-bold mb-3 title'>قائمة الطعام</h2>
                    <div className='d-flex justify-content-center '>
                        <p className='underline'></p>
                    </div>
                </div>
            </Col>
        </Row>
    )
}
