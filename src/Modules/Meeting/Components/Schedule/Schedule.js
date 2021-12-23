import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Availabletimes from './Components/Availabletimes/Availabletimes'
import ScheduleCalender from './Components/ScheduleCalender/ScheduleCalender'
function Schedule() {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={8} xd={12}>
                    <ScheduleCalender /> 

                    </Col>
                    <Col md={4} xd={12} className='p-0'>
                    <Availabletimes />
                    </Col>
                </Row>
           </Container>
        </div>
    )
}

export default Schedule
