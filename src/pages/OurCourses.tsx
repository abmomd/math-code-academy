import NavbarComponent from "../components/NavbarComponent";
import "./HomePage.css";
import CoursesSectionMaths from "../components/CoursesSectionMaths";
import CoursesSectionProgramming from "../components/CoursesSectionProgramming";
import CoursesSectionPhysics from "../components/CoursesSectionPhysics";
import WhatsappFloatingButton from "../components/WhatsappFloatingButton";
import WhatsappContactUs from "../components/WhatsappContactUs";


const OurCouses = () => {
  return (
    <>
      <NavbarComponent />
      <div className="container-fluid p-0 ">


 
        {/* Courses Sections */}
        <CoursesSectionMaths />
        <CoursesSectionProgramming />
        <CoursesSectionPhysics />

        {/* WhatsApp Floating Button */}
          <WhatsappFloatingButton />

       
        {/* WhatsApp Contact Us Section */}
        <WhatsappContactUs />




      </div>
    </>
  );
};

export default OurCouses;
