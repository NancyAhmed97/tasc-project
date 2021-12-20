import React from 'react'
import Footer from '../Common/Footer/Footer'
import LandingSection from '../Common/LandingPage/LandingSection'
import Navbar from '../Common/Navbar/Navbar'

function Price() {
    return (
        <div>
            <Navbar activePage="Contact us"/>
            <LandingSection activePage="Contact us" />
            <Footer activeState="contact" />
        </div>
    )
}

export default Price
