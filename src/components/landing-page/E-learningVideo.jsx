import DottedFrame from '../../assets/images/Dotted-frame.svg'
import ELearningVideo from '../../assets/videos/Stop Trying To Memorize Code  Do This Instead_480p.mp4'

import './E-learningVideo.css'

export default function StartLearningVideo() {
    return (
        <section className='mt-0'>
            <div className='relative
                 items-center gap-y-16 gap-x-20
                lg:max-w-8xl  lg:px-8 place-items-start'>

                <div className="bg-[#14142B] opacity-20 absolute w-full md:w-[386.03px] h-[465.84px] -top-[6rem]  "></div>
                <img className='absolute left-[9.5rem] -top-[3.5rem]' src={DottedFrame} alt="dotted-frame" />
                
                <video className='sm:m-auto ' src={ELearningVideo} type="video/mp4" controls>
                </video>
            </div>
        </section>
    )
}

