import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Banner from '../components/Banner'

import ScrollTriggered from '../components/ScrollTriggered'
function Home() {
  return (
    <div>
      <Nav/>
      <div className='min-h-screen'>
        <Banner/>
        <ScrollTriggered/>
      </div>

      <Footer/>
    </div>
  )
}

export default Home
