import React from 'react'
import Hero from '../Assets/Hero'
import { Popular } from '../Assets/Popular'
import Offers from '../Assets/Offers'
import NewCollections from '../Assets/NewCollections'
import Newsletter from '../Assets/Newsletter'
import Footer from '../Assets/Footer'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Offers/>
        <NewCollections/>
        <Newsletter/>
        <Footer />
    </div>
  )
}

export default Home