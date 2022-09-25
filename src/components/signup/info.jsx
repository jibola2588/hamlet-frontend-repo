import videoFrame from "../../assets/images/videoframe.png";

export const SignUpInfo = () => {
    return (
        <div className="bg-[#1f3697] pl-[139px] pr-[117px]">
            <div className="block mt-[593px] text-white">
                <div>
                    <p className="font-[700] text-[56px]">Get ahead, stay </p>
                    <p className="font-[700] text-[56px]">ahead</p>
                </div>
                <div className="mt-[25px]">
                    <p className="font-[500] text-[18px]">Join members from over 60+ countries to learn from</p>
                    <p className="font-[500] text-[18px]">curated mentors in tech.</p>
                </div>
                <div className="mt-[30px]">
                    <button className="flex items-center bg-[#5768b1] hover:bg-[#3c52b3] px-[2rem] py-6 rounded-[10px]">
                        <img src={videoFrame} alt="video" />
                        <p className="ml-5 font-[500] text-[18px]">Learn how hamlet works</p>
                    </button>
                </div>
            </div>
        </div>
    )
}