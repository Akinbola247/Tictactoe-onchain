import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Howtoplay from '../components/Howtoplay'
import Upcoming from '../components/Upcoming'
import Newsletter from '../components/Newsletter'
import Company from '../components/Company'

const Home = () => {
  return (
    <Layout>
        <Hero />
        <Howtoplay />
        <Upcoming />
        <Newsletter />
        <Company />
    </Layout>
  )
}

export default Home