import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Title from '../../../Common/Title/Title'
import "./AccountingManager.css"
function AccountingManager() {
    return (
        <div className='AccountingManager'>
<Container>
    <Row>
<Col md={6}xs={12}></Col>
<Col md={6}xs={12} className='textContainer'>
<Title  title="Accounting Manager"/>
{/* <ul className="mt-5"> */}
    <li><span>You can construct any type of report you need using our report architecture module.</span></li>
    <li><span>All data entry must be given approval by the account manager and then can be added to the database.</span></li>
    <li><span>The user interface is designed keeping in mind the time and energy cost for the entry process.</span></li>
{/* </ul> */}
</Col>
        </Row>
</Container>
        </div>
    )
}

export default AccountingManager
