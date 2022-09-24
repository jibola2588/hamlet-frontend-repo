import postImage from "../../assets/images/postImage.png";
import logoPng from "../../assets/images/djlcvdc 1.png";
import dot from "../../assets/images/Ellipse 77.png"

export const BlogContent = ()  => {
    return (
        <div className="mt-16">
            <header className="w-full border-b-2 border-[#00349A] pb-[14px] mb-10">
                <p className="text-[#00349A] font-[500] text-[20px]">Latest Posts</p>
            </header>
            <div className="mt-7 grid grid-cols-1 gap-x-28 md:grid-cols-2 items-center">
                <div>
                    <div className="flex items-center">
                        <img className="h-[24px] w-[65.93px]" src={logoPng} alt="little-logo" />
                        <img className="ml-2" src={dot} alt="dot" />
                        <p className="text-[#AAAAAA] ml-3"><span></span>August 10, 2022</p>
                    </div>
                    <div className="mt-5">
                        <h4 className="font-[700] text-[36px] text-[#00349A]">The Makings of a Successful<br /> Product Manager I</h4>
                    </div>
                    <div className="mt-2">
                        <p className="font-[400] text-[16px] text-[#14142B]">Discover a wide range of resources written by experienced <br />
                        professionals at Enyata, Never miss a new post, stay updated by <br />subscribing to our blog......</p>
                    </div>
                    <div className="mt-4 flex space-x-5 items-center pb-2">
                        <button className="bg-[#CA7DF9] capitalize py-[8px] px-[20px] rounded-[22.14px] text-[12px] font-[500]">productivity</button>
                        <p className="text-[#AAAAAA]">4 min read</p>
                    </div>
                </div>
                <div>
                    <img className="" src={postImage} alt="post-image" />
                </div>
            </div>
            <hr className="mt-5" />
            <div className="mt-7 grid grid-cols-1 gap-x-28 md:grid-cols-2 items-center">
                <div>
                    <div className="flex items-center">
                        <img className="h-[24px] w-[65.93px]" src={logoPng} alt="little-logo" />
                        <img className="ml-2" src={dot} alt="dot" />
                        <p className="text-[#AAAAAA] ml-3"><span></span>August 10, 2022</p>
                    </div>
                    <div className="mt-5">
                        <h4 className="font-[700] text-[36px] text-[#00349A]">The Makings of a Successful<br /> Product Manager I</h4>
                    </div>
                    <div className="mt-2">
                        <p className="font-[400] text-[16px] text-[#14142B]">Discover a wide range of resources written by experienced <br />
                        professionals at Enyata, Never miss a new post, stay updated by <br />subscribing to our blog......</p>
                    </div>
                    <div className="mt-4 flex space-x-5 items-center pb-2">
                        <button className="bg-[#F46036] capitalize py-[8px] px-[20px] rounded-[22.14px] text-[12px] font-[500]">design</button>
                        <p className="text-[#AAAAAA]">4 min read</p>
                    </div>
                </div>
                <div>
                    <img className="" src={postImage} alt="post-image" />
                </div>
            </div>
            <hr className="mt-5" />
            <div className="mt-7 grid grid-cols-1 gap-x-28 md:grid-cols-2 items-center">
                <div>
                    <div className="flex items-center">
                        <img className="h-[24px] w-[65.93px]" src={logoPng} alt="little-logo" />
                        <img className="ml-2" src={dot} alt="dot" />
                        <p className="text-[#AAAAAA] ml-3"><span></span>August 10, 2022</p>
                    </div>
                    <div className="mt-5">
                        <h4 className="font-[700] text-[36px] text-[#00349A]">The Makings of a Successful<br /> Product Manager I</h4>
                    </div>
                    <div className="mt-2">
                        <p className="font-[400] text-[16px] text-[#14142B]">Discover a wide range of resources written by experienced <br />
                        professionals at Enyata, Never miss a new post, stay updated by <br />subscribing to our blog......</p>
                    </div>
                    <div className="mt-4 flex space-x-5 items-center pb-2">
                        <button className="bg-[#5AB1BB] capitalize py-[8px] px-[20px] rounded-[22.14px] text-[12px] font-[500]">web development</button>
                        <p className="text-[#AAAAAA]">4 min read</p>
                    </div>
                </div>
                <div>
                    <img className="" src={postImage} alt="post-image" />
                </div>
            </div>
            <hr className="mt-5" />
        </div>
    )
}