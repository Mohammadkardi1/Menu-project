import React from 'react'
import { Col, Row } from 'react-bootstrap'

export const Category = ({FilterByCategory, allCategories}) => {
    const onFilter = (cat) => {
        FilterByCategory(cat)
    }
    return (
        <Row>
            <Col sm="12" className='d-flex justify-content-center'>
                    { allCategories.length > 1 ? (
                        allCategories.map((category) => {
                            return (
                                <div key={Math.random()} >
                                    <button  onClick={() => onFilter(category)} className='btn-category mx-2'>{category}</button>
                                </div>
                            )
                        })
                    ) : null
                    }
            </Col>
        </Row>
    )
}
