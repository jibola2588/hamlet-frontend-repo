import { Icon } from '@iconify/react';
import img1 from '../../assets/images/productMgt.png'
import img2 from '../../assets/images/html.png'
import img3 from '../../assets/images/backend.png'
import img4 from '../../assets/images/design.png'
import img5 from '../../assets/images/python.png'
import img6 from '../../assets/images/marketing.png'

import img7 from '../../assets/images/tutor1.png'
import img8 from '../../assets/images/tutor2.png'
import img9 from '../../assets/images/tutor3.png'
import img10 from '../../assets/images/tutor4.png'
import img11 from '../../assets/images/tutor5.png'
import img12 from '../../assets/images/tutor6.png'



export const Category = ({cat}) => {
  let data;
  switch(cat){ 
    case "1" : 
    data = { 
      topImg:img1,
      star:"4.5",
      bracket:"120",
      eye:"28,500",
      lesson:"36",
      bottomImg:img7,
      topic:"Product Management Intro-Course",
      tutor:"Kera David",
      CrossPrice:"65.0",
      price:"37.67"
    }
    break;
    case "2" : 
    data = { 
      topImg:img2,
      star:"5.0",
      bracket:"200",
      eye:"78,500",
      lesson:"96",
      bottomImg:img8,
      topic:"Introduction to html,css and javascript",
      tutor:"Jerry Thomas",
      CrossPrice:"55.0",
      price:"47.67"
    }
    break;
    case "3" : 
    data = { 
      topImg:img3,
      star:"5.1",
      bracket:"150",
      eye:"28,500",
      lesson:"46",
      bottomImg:img9,
      topic:"Introduction to python,Django & API's",
      tutor:"Patrick James",
      CrossPrice:"99.10",
      price:"57.67"
    }
    break;
    case "4" : 
    data = { 
      topImg:img4,
      star:"5.5",
      bracket:"180",
      eye:"82,500",
      lesson:"76",
      bottomImg:img10,
      topic:"Mastering the art of Designs and drawing",
      tutor:"Wade Warren",
      CrossPrice:"65.10",
      price:"37.67"
    }
    break;
    case "5" : 
    data = { 
      topImg:img5,
      star:"4.6",
      bracket:"100",
      eye:"45,500",
      lesson:"33",
      bottomImg:img11,
      topic:"Product Management Intro-Course",
      tutor:"Charles Stone",
      CrossPrice:"75.10",
      price:"47.67"
    }
    break;
    case "6" : 
    data = { 
      topImg:img6,
      star:"5.0",
      bracket:"220",
      eye:"35,500",
      lesson:"49",
      bottomImg:img12,
      topic:"Introduction to Affiliate Marketing",
      tutor:"Thomas Peter",
      CrossPrice:"65.10",
      price:"37.67"
    }
    break;
    default:
      break;
  }
    return (
        <>
          <div className={`category w-[340px] border-box relative rounded-xl hover:transition-shadow border-t border-b border-r border-l border-[#D9D9D9] bg-white  mb-0 font-[
      Satoshi]`}
      >

          <div className="border-b">
              <div className='flex-1 w-full boder-box h-[179px] p-2'>
              <img className='w-[100%] h-[100%] object-cover' src={data.topImg} alt="course images"  />
            </div>
    
            <div className="flex-1 flex flex-row w-full justify-between px-2  py-4">
              <div className='flex flex-row items-center'>
                <Icon icon="clarity:star-line" color="#14142b" className='md:text-xl -mt-0.5 md:-mt-1' />
                <div className='flex flex-row'>
                  <p className='font-bold text-[#00349A] text-[12px] md:text-lg mr-1 md:mx-1'>{data.star}</p>
                  <p className='font-bold text-[#D3D3D3] text-[12px] md:text-lg'>({data.bracket})</p>
                </div>
              </div>
    
              {/* course Views */}
              <div className='flex flex-row items-center'>
                <Icon icon="gg:eye" color="#14142b" className='md:text-xl' />
                <p className='font-bold text-[#00349A] mr-1 md:mx-1 text-[12px] md:text-lg'>{data.eye}</p>
              </div>
    
              {/* course Lessons*/}
              <div className='flex flex-row items-center'>
                <Icon icon="fluent:play-12-regular" color="#036525" className='md:text-xl' />
                <div className='flex flex-row'>
                  <p className='font-bold text-[#00349A] mr-1 md:mx-1 text-[12px] md:text-base'>{data.lesson}</p>
                  <p className='font-bold text-[#D3D3D3] text-[12px] md:text-base'>Lesson</p>
                </div>
              </div>
            </div>
          </div>
    
          {/* bottomCardSecion */}
          <div className="p-2 flex flex-col">
            <div className="flex sm:h-[95px]">
              <h2 className="font-medium text-[14px] sm:text-[20px] text-[#00349A] flex-initial font-[
        Satoshi] mt-0 md:mt-2">{data.topic}</h2>
            </div> 
              <div className="flex flex-row justify-between py-8 sm:h-[95px]">
                  <div className='flex flex-row items-end'>
                    <div className="w-[35px] h-[35px]">
                      <img src={data.bottomImg} alt="" className="w-[100%] h-[100%] object-cover"/>
                    </div>
                    <p className='font-medium text-[#00349A] text-[12px] md:text-base mx-1'>{data.tutor}</p>
                  </div>
               
    
                {/* course Price*/}
                  <div className='flex flex-row gap-2 font-medium items-end'>
                    <p className='font-bold text-[#C4C4C4] text-[12px] md:text-base line-through'>{data.CrossPrice}</p>
                    <p className='font-bold text-[#14142B] mr-1 md:mx-1 text-sm md:text-base'>{data.price}</p>
                  </div>
              </div>
          </div>
          </div>
        </>
      )
}


