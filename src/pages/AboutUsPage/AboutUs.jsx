import React from 'react'
import CourseRating from '../../components/about-us/CourseRating'
import HeroSection from '../../components/about-us/HeroSection'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbars/Landing-Page-Navbar'


function AboutUs() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CourseRating />
      <Footer />
    </>
  )
}

export default AboutUs