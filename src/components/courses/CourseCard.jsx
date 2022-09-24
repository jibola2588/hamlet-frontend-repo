import React from 'react'
import { Icon } from '@iconify/react';


function CourseCard({ backgroundImg, Reviews, courseDuration, courseReviews, courseViews, courseTitle, tutorName, tutorImg, slashPrice, currentPrice }) {
  return (
    <>
      <div className={`flex flex-col relative rounded-xl border-t border-b border-r border-l border-[#D9D9D9]  mt-2 md:mt-4 mb-0 font-[
  Satoshi]`}>

        {/* topCardSection */}
      <div className="border-b">
          {/* Course Image */}
          <div className='flex-1 m-2'>
          <img className='w-full' src={`${backgroundImg}`} alt="" />
        </div>


        {/* course Actions */}
        <div className="flex-1 flex flex-row w-full justify-around  md:px-1 py-4">
          {/* course Reviews */}
          <div className='flex flex-row items-center'>
            <Icon icon="clarity:star-line" color="#14142b" className='md:text-2xl -mt-0.5 md:-mt-1' />
            <div className='flex flex-row'>
              <p className='font-bold text-[#00349A] text-sm md:text-lg mr-1 md:mx-1'>{courseReviews}</p>
              <p className='font-bold text-[#D3D3D3] text-sm md:text-lg'>{Reviews}</p>
            </div>
          </div>

          {/* course Views */}
          <div className='flex flex-row items-center'>
            <Icon icon="gg:eye" color="#14142b" className='md:text-2xl' />
            <p className='font-bold text-[#00349A] mr-1 md:mx-1 text-sm md:text-lg'>{courseViews}</p>
          </div>

          {/* course Lessons*/}
          <div className='flex flex-row items-center'>
            <Icon icon="fluent:play-12-regular" color="#036525" className='md:text-2xl' />
            <div className='flex flex-row'>
              <p className='font-bold text-[#00349A] mr-1 md:mx-1 text-sm md:text-lg'>{courseDuration}</p>
              <p className='font-bold text-[#D3D3D3] text-sm md:text-lg'>Lesson</p>
            </div>
          </div>
        </div>
      </div>

      {/* bottomCardSecion */}
      <div className="m-2 flex flex-col">
        <div className="flex sm:h-[95px]">
          <h2 className="font-medium text-[18px] sm:text-[24px] text-[#00349A] flex-initial font-[
    Satoshi] mt-0 md:mt-2">{courseTitle}</h2>
        </div> 
          <div className="flex flex-row justify-between py-8 sm:h-[95px]">
            {/* course TutorDetails */}
              <div className='flex flex-row items-end'>
                <img className='w-[30px] h-[30px] md:w-[40px] md:h-[40px]' src={tutorImg} alt="" />
                <p className='font-medium text-[#00349A] text-sm md:text-lg mx-1'>{tutorName}</p>
              </div>
           

            {/* course Price*/}
              <div className='flex flex-row gap-2 font-medium items-end'>
                <p className='font-bold text-[#C4C4C4] text-sm md:text-lg line-through'>{slashPrice}</p>
                <p className='font-bold text-[#14142B] mr-1 md:mx-1 text-sm md:text-lg'>{currentPrice}</p>
              </div>
          </div>
      </div>
      </div>
    </>
  )
}

export default CourseCard



// coursesViews, courseTitle, coursePrice, tutorImg, tutorName