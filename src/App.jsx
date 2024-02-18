// CSS Style
import './App.css'
// import React
import React ,{ useState } from 'react'
// import Component
import Header from './component/header/Header'
import LandingPage from './component/landing page/LandingPage'
import Footer from './component/footer/Footer'
import OurBestWork from './component/Our best work/OurBestWork'

function App() {

  return (
    <>
      <Header/>
      <LandingPage/>
      <div className="container">
      <OurBestWork/>
      </div>
      <Footer/>
    </>
  )
}

export default App
