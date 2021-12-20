import React from 'react'
import Footer from '../Common/Footer/Footer'
import LandingSection from '../Common/LandingPage/LandingSection'
import Navbar from '../Common/Navbar/Navbar'
import ApplicationPrices from './Components/ApplicationPrices/ApplicationPrices'

function Price() {
    return (
        <div>
            <Navbar activePage="Pricing plans" />
            <LandingSection activePage="Pricing plans" />
            <ApplicationPrices />
            <Footer activeState="pricing"/>
        </div>
    )
}

export default Price
