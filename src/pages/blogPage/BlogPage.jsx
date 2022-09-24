import Navbar from "../../components/navbars/Landing-Page-Navbar"
import { HeroSection } from "../../components/blog-page/heroSection"
import { Tabs } from "../../components/blog-page/Tabs"
import LearnFromAndVideo from "../../components/blog-page/LearnFromAndVideo"
import Footer from "../../components/footer/Footer"

export const BlogPage = () => {
    return (
        <div>
            
            <Navbar />
            <HeroSection />
            <Tabs />
            <LearnFromAndVideo />
            <Footer />

        </div>
    )
}