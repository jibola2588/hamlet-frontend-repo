import videoFrame from "../../assets/images/videoframe.png";

const QuickInfo = ({bgColor}) => {
  return (
    <div className={`${bgColor} pl-[6rem] pb-24 flex items-end w-1/2`} >
      <div className=" text-white">
        <div>
          <h1 className="font-[700] text-[56px]">Get ahead, stay ahead</h1>
        </div>
        <div className="mt-[25px]">
          <p className="font-[500] text-[18px]">
            Join members from over 60+ countries to learn from
          </p>
          <p className="font-[500] text-[18px]">curated mentors in tech.</p>
        </div>
        <div className="mt-[30px]">
          <button className="flex items-center bg-white/25 hover:bg-[#3c52b3] px-[2rem] py-6 rounded-[10px]">
            <img src={videoFrame} alt="video" />
            <p className="ml-5 font-[500] text-[18px]">
              Learn how hamlet works
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};
export default QuickInfo;
