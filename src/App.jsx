import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/home/Landing-Page";
import CoursePage from "./pages/coursePage/CoursePage";
import { BlogPage } from "./pages/blogPage/BlogPage";
import { ContactUs } from "./pages/contactUsPage/ContactUs";
import AboutUs from "./pages/AboutUsPage/AboutUs";
import { SignUp } from "./pages/signup/SignUp";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/courses" element={<CoursePage />} />
        <Route path="/contact" element={<ContactUs />}/>
        <Route path="/community" element={<BlogPage />}/>
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;
