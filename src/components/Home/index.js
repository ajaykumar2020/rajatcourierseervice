import React from 'react'
import Banner from './banner'
import GlobalEaseSection from './globalEaseSection'
import Services from './services'
import LatestArticles from './latestArticles'
import RequestForm from './requestForm'
import Header from '../Header'
import Footer from '../Footer'
import WIcon from '../../assets/whatsapp.png'
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
        <a
        href="https://wa.me/8650779013?text=Hello!%20I%20am%20interested%20in%20your%20farm%20products."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300"
      >
       <img
       src={WIcon}
       className="w-10 h-10 object-contain"
       />
      </a>``
    </div>
  )
}

export default Home