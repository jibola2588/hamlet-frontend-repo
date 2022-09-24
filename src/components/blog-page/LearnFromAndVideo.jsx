import ELearningVideo  from "../../components/blog-page/E-learningVideo"
import LearnFromSection  from "../../components/blog-page/Learn-from-Section"


export default function LearnFromAndVideo() {
    
    return (
        <div className="grid lg:grid-cols-2 bg-[#5AB1BB] pt-20 lg:pt-40 pb-52 relative space-y-[8rem] lg:space-y-0">
        < LearnFromSection />
        < ELearningVideo />

        </div>
    )
}
