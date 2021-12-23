import React from 'react'
import Navbar from '../Common/Navbar/Navbar'
import MeetngDetails from './Components/MeetngDetails/MeetngDetails'
import Schedule from './Components/Schedule/Schedule'
import Footer from '../Common/Footer/Footer'


function Meeting() {
    return (
        <div>
      <Navbar activePage="Meeting"/>
            <MeetngDetails />
            <Schedule />
             <Footer />

        </div>
    )
}

export default Meeting
