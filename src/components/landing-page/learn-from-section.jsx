import DottedFrame from '../../assets/images/Dotted-frame.svg'

export default function StartLearning() {
    return (
        <div className="left flex-2 justify-center pl-[2rem] md:pl-[2.5rem] lg:pl-[4rem] xl:pl-[5rem] md:border-y-[25px] border-white">
                            <div className="text-center md:text-left">
                                <h5 className="font-bold md:leading-[30px] text-[25px] md:text-[30px] lg:leading-[40px] lg:text-[35px] text-black">Learning from leading</h5>
                                <h5 className="font-bold md:leading-[30px] text-[25px] md:text-[30px] lg:leading-[40px] lg:text-[35px]  text-black">Universities and companies</h5>
                                <div className="mt-2 lg:mt-[14px]">
                                    <p className="font-normal text-base leading-6 text-[#636468]">Start Streams on video demand lectures today from top</p>
                                    <p className="font-normal text-base leading-6 text-[#636468]">instructors in subjects like business, computer science,</p>
                                    <p className="font-normal text-base leading-6 text-[#636468]">data science, language learning & more.</p>
                                </div>
                                <div className="py-[16px]">
                                <button 
                                    className="font-bold flex-2 px-[32px] py-[14px] bg-[#00349A] rounded-full text-white text-sm leading-5 cursor-pointer hover:bg-[#fff] hover:text-[#00349A] border border-[#00349A]">
                                    Start learning now
                                </button>
                                </div>
                            </div>
                        </div> 
    )
}
