import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Image from '../components/Image'

import FeedbackCard from '../components/Feedbacks'
import PetFriendlyObjectives from '../components/PetFriendlyObjectives'
function Home() {
  return (
    <div>
      <Nav/>
      <div className='min-h-screen'>
        <Banner/>
        <Image/>
        <PetFriendlyObjectives/>
        <FeedbackCard/>
      </div>

      <Footer/>
    </div>
  )
}

export default Home
