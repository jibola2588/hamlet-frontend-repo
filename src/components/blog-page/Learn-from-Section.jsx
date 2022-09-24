import DottedFrame from '../../assets/images/Dotted-frame.svg'

export default function StartLearning() {
    return (
        <section className=' lg:pl-36 md:px-32 px-10 lg:px-0'>
            <div  className='grid mx-auto 
             max-w-6xl 
             items-center gap-y-16 gap-x-20 pr-4
            lg:max-w-8x place-items-start'>
                    <div className="place-self-start relative">
                        <h5 className="md:text-[40px] sm:text-[30px] text-[30px] font-[500] ">Learn from leading  universities and companies</h5>
                        <p className="col-5 text-[21px] md:pr-[6rem] mt-5 text-gray-500">
                        Start streams on video demand lectures today from top instructors in subject like business, computer science, data science, language learning, & more.
                        </p>
                        <button className="bg-[#00349A] rounded-[40px] text-white py-[18px] px-[32px] mt-7 relative z-10">Start Learning Now</button>
                        
                    </div>

            </div>

        </section>
    )
}

