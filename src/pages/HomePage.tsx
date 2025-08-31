import NavbarComponent from "../components/NavbarComponent";
import "./HomePage.css";
import HomePageIntro from "../components/HomePageIntro";
import CoursesSectionMaths from "../components/CoursesSectionMaths";
import CoursesSectionProgramming from "../components/CoursesSectionProgramming";
import CoursesSectionPhysics from "../components/CoursesSectionPhysics";
import Instructors from "../components/Instructor";
import WhatsappFloatingButton from "../components/WhatsappFloatingButton";
import WhatsappContactUs from "../components/WhatsappContactUs";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import keywords from "../data/keywords.json";
import { Helmet } from "react-helmet-async";



const Home = () => {
  return (
    <>
      <NavbarComponent />

      <div className="container-fluid p-0 ">

      
        {/* Intro Section */}
        <HomePageIntro />
        
        {/* Courses Sections */}
        <CoursesSectionMaths />
        <CoursesSectionProgramming />
        <CoursesSectionPhysics />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* WhatsApp Floating Button */}
          <WhatsappFloatingButton />

        {/* Instructors Section */}
        <Instructors/>

        {/* WhatsApp Contact Us Section */}
        <WhatsappContactUs />

        {/* Testimonial Section */}
         <Testimonials /> 




      </div>
    </>
  );
};

export default Home;
