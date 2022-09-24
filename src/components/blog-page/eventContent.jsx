import webEvent from "../../assets/images/webEvent.png";
import androidEvent from "../../assets/images/androidEvent.png";
import pythonEvent from "../../assets/images/Phyton.png"

export const EventContent = () => {
    return (
        <div className="mt-16">
            <header>
                <p className="text-[#00349A] font-[500] text-[24px]">Our Events</p>
                <p className="text-[16px] font-[400] text-[#797979] mt-2">Some of the top events happening this week!</p>
            </header>
            <div className="grid grid-cols-2 lg:grid-cols-3 mt-9 gap-x-9 gap-y-6 md:gap-x-16 md:gap-y-10">
                <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                    <img src={webEvent} alt="web-image" />
                </button>
                <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                    <img src={pythonEvent} alt="pyt-image" />
                </button>
                <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                    <img src={androidEvent} alt="android-image" />
                </button>
                <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                    <img src={webEvent} alt="web-image" />
                </button>
                <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                    <img src={pythonEvent} alt="pyt-image" />
                </button>
                <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                    <img src={androidEvent} alt="pyt-image" />
                </button>
                <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                    <img src={webEvent} alt="web-image" />
                </button>
            </div>
        </div>
    )
}