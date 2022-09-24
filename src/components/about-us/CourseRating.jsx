import React from 'react'
import './HeroSection.css'
import HeroImage from '../../assets/images/AboutFrame.png'
import { HeaderBottomPart } from '../landing-page/Header-Bottom-Part'


function CourseRating() {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 ">
           <div className="heroImage sm:-mt-[12.3rem] md:-mt-44 sticky">
            <img className='' src={HeroImage} alt="" />
           </div>
            <div className="my-[40px] lg:my-[50px] flex items-center">
              <HeaderBottomPart type="A"/>
              <HeaderBottomPart type="B"/>
              <HeaderBottomPart type="C"/>
              <HeaderBottomPart type="A"/>
              <HeaderBottomPart type="B"/>
              <HeaderBottomPart type="D"/>
            </div> 
        </div>
    )
}

export default CourseRating