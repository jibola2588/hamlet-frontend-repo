import React from 'react'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className='bg-[#EBF1FF] overflow-hidden'>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 relative pb-44">
                <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-start">
                    <div className="heroText flex-auto mt-2 sm:mt-12 space-y-5  sm:space-y-6 flex-col font-[Satoshi]">
                        <h1 className='text-[#00349A] font-bold leading-[45px] text-[25px] md:leading-[50px] sm:text-[45px] md:text-[45px] lg:leading-[55px] lg:text-[47px] xl:leading-[67px] xl:text-[54px]'>About the Solution</h1>
                        <div className=''>
                            <p className="font-normal text-base leading-6 text-[#14142B]">Discover a wide range of resources written by experienced tech professionals</p>
                            <p className="font-normal text-base leading-6 text-[#14142B]">at Enyata. Never miss a new post, stay updated by subscribing to our blog.</p>
                        </div>
                    </div>
                    <div className="heroShapes flex-1 mt-6 md:mt-0 lg:mr-14">
                        <div className="shape1 mr-8 sm:mt-8 w-44 md:w-[296.77px] h-44 md:h-[296.77px] bg-[#FBE3B2] rounded-full"></div>
                        <div className="shape2 -mt-6 sm:mt-16 md:-ml-80  lg:-ml-2 xl:ml-14 w-44 md:w-[296.77px] h-44 md:h-[296.77px] bg-[#D2F8FF] rounded-full absolute left-[150px] sm:left-[225px] md:left-[850px] top-[300px] sm:top-[260px] md:top-[135px]"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection