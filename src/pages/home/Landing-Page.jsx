import Navbar from "../../components/navbars/Landing-Page-Navbar"
import Header from "../../components/landing-page/Header"
import Categories from "../../components/landing-page/Categories"
import Testimony from "../../components/landing-page/Testimony"
import LeadingUniversities from "../../components/landing-page/leadingUniversities"
import LeadingUniversitiesTwo from "../../components/landing-page/leadingUniversitiesTwo"
import Footer from "../../components/footer/Footer"


export const LandingPage = () => { 
    return ( 
        <div>
            <Navbar />
            <Header /> 
            <LeadingUniversities />
            <Categories />
            <LeadingUniversitiesTwo />
            <Testimony />
             <Footer /> 
        </div>
    )
}