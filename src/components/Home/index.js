import React from 'react'
import Banner from './banner'
import GlobalEaseSection from './globalEaseSection'
import Services from './services'
import LatestArticles from './latestArticles'
import RequestForm from './requestForm'
import Header from '../Header'
import Footer from '../Footer'
const Home = () => {
  return (
    <div>
         <Header/>
        <Banner/>
        <RequestForm/>
        <GlobalEaseSection />
        <Services/>
        <LatestArticles/>
        <Footer/>
    </div>
  )
}

export default Home