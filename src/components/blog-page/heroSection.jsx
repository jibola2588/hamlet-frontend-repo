import blogImage from '../../assets/images/blog.png'

export const HeroSection = () => {
    return(
        <div className="bg-[#EBF1FF] overflow-hidden">
            <div className="pt-16 sm:px-2 lg:relative lg:pt-10 lg:px-0 font-[satoshi]">
                <div 
                className="mx-auto 
                grid max-w-6xl 
                grid-cols-1 items-center gap-y-16 gap-x-20 px-4
                lg:max-w-8xl lg:grid-cols-2 lg:px-8"
                >
                    <div className="relative pb-6 z-10 md:text-center lg:text-left">
                        <div className="relative">
                            {/* <p>Where tech talents come to grow</p> */}
                            <h3 className="font-bold leading-[67px] text-[56px] text-[#00349A]">Where tech talents</h3> 
                            <h3 className="font-bold leading-[67px] text-[56px] text-[#00349A]">come to grow</h3>
                            <p className="h-[48px] mt-[24px] lg:w-[547.87px] normal font-[400] text-[16px] text-[#14142B]">Discover a wide range of resources written by experienced tech professionals<br />
                            at Enyata. Never miss a new post, stay updated by subscribing to our blog.</p>
                            {/* <p className="h-[48px] sm:mt-10 md:-mt-[20px] normal font-[400] text-[16px] text-[#14142B]">
                            </p> */}

                            <div className="lg:mt-7 mt-20 md:mt-10 flex space-x-0">
                                <input 
                            className="p-4 relative text-sm placeholder-[#0F0F12] w-full rounded-[25px] border focus:outline-none border-[#00349A]" 
                            type="email"
                            placeholder="Enter your email" />
                            <button className="text-white hover:border hover:bg-[#fff] hover:border-[#00349A] hover:text-[#00349A] right-0 text-sm absolute lg:px-9 py-[17px] bg-[#00349A] rounded-[25px] px-7">Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <div className="relative lg:static pb-0 xl:pl-10">
                    {/* <img className="relative  bottom-0 pb-0" src={blogImage} alt="hero-image" /> */}
                    
                        <div className="pb-0">
                            <img src={blogImage} alt="hero-image" />
                            {/* <div className="-mt-[27rem] pb-20 -ml-5 w-72 h-72 rounded-full bg-[#fbe3b2]"></div>
                            <div className="w-72 h-72 bg-[#d2f8ff] ml-40 -mt-[9rem] rounded-full"></div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}