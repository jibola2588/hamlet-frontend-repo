import ELearningVideo  from "../../components/blog-page/E-learningVideo"
import LearnFromSection  from "../../components/blog-page/Learn-from-Section"


export default function LearnFromAndVideo() {
    
    return (
        <div className="grid lg:grid-cols-2 pt-40 pb-52 relative space-y-[8rem] lg:space-y-0">
        < LearnFromSection />
        < ELearningVideo />

        </div>
    )
}