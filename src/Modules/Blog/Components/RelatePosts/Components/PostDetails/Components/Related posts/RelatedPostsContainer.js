import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Post from '../../../../../../../Common/Post/Post'
import "./RelatedPostsContainer.css"
function RelatedPostsContainer() {
    return (
        <div className='RelatedPostsContainer'>
            <Container fluid className='p-0'>
                <Row>
                    <h2 className='mb-3'>Related posts</h2>
                    <Col md={6} xs={12}>
                        <Post />
                    </Col>
                    <Col md={6} xs={12} className='ml-3'>
                        <Post />
                    </Col>
                    <Col md={6} xs={12} className='ml-3'>
                        <Post />
                    </Col>
                    <Col md={6} xs={12} className='ml-3'>
                        <Post />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default RelatedPostsContainer
