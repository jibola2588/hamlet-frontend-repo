import DottedFrame from '../../assets/images/Dotted-frame.svg'
import ELearningVideo from '../../assets/videos/Stop Trying To Memorize Code  Do This Instead_480p.mp4'

import './E-learningVideo.css'

export default function StartLearningVideo() {
    return (
        <section className='mt-0'>
            <div className='relative
                 items-center gap-y-16 gap-x-20 px-4
                lg:max-w-8xl  lg:px-8 place-items-start'>

                <div className="bg-[#14142B] opacity-20 absolute w-[430px] h-[570px] -top-[6rem] right-0">
               
                </div>
                <img className='absolute left-[16rem] -top-[3.5rem]' src={DottedFrame} alt="dotted-frame" />
                
                <video className='sm:m-auto xl:w-[500px] lg:-left-[4.5rem] lg:w-[75%] md:w-[65%] sm:w-[80%] w-[80%] mx-auto' src={ELearningVideo} type="video/mp4" controls>
                </video>

            </div>

        </section>
    )
}

