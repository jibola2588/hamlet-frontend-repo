import ELearningVideo  from "../../components/landing-page/E-learningVideo"
import LearnFromSection  from "../../components/landing-page/learn-from-section"


export default function LearnFromAndVideo() {
    
    return (
        <div className="grid md:grid-cols-2 max-w-6xl mx-auto pt-40 pb-32 relative space-y-[8rem] md:space-y-0">
        < ELearningVideo />
        < LearnFromSection />
        </div>
    )
}