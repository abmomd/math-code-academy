import NavbarComponent from "../components/NavbarComponent";
import "./AboutUs.css"; // Add CSS for styling
import profileImg from "../images/profile.jpg";
import profileFatema from "../images/Fatema_profile.jpeg";
import WhatsappContactUs from "../components/WhatsappContactUs";
import WhatsappFloatingButton from "../components/WhatsappFloatingButton";
import { FaLinkedin } from "react-icons/fa";

const AboutUs = () => {



  return (
    <>
      <NavbarComponent />

    
<section className="bg-dark text-white py-5">
  <div className="about-container d-flex flex-column align-items-center mt-5">
    <h1 className="text-center mb-4">Instructors</h1>
  </div>

  {/* Profile Section */}
  <div className="about-container d-flex flex-column align-items-center mt-5 mb-5">
    <div className="d-flex align-items-center text-center">
      {/* Profile Image */}
      <img
        src={profileImg}
        alt="Founder"
        className="profile-img rounded-circle shadow me-4"
        style={{ width: "150px", height: "150px" }}
      />

      {/* Instructor Details */}
      <div className="text-start">
        <h3 className="mb-1">Muhammed Ashraf Bhura</h3>
        <p className="mb-2">B.Tech - NIT Surat</p>
        <p className="mb-2">Software Engineer | Educator</p>

        {/* LinkedIn Button */}
        <a
          href="https://www.linkedin.com/in/muhammed-ashraf-bhura-099a95200/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-primary btn-sm d-flex align-items-center mt-2"
          style={{ width: "fit-content" }}
        >
          <FaLinkedin className="me-2" /> LinkedIn
        </a>
      </div>
    </div>
  </div>

  {/* Profile Section */}
  <div className="about-container d-flex flex-column align-items-center mt-5 mb-5">
    <div className="d-flex align-items-center text-center">
      {/* Profile Image */}
      <img
        src={profileFatema}
        alt="Founder"
        className="profile-img rounded-circle shadow me-4"
        style={{ width: "150px", height: "150px" }}
      />

      {/* Instructor Details */}
      <div className="text-start">
        <h3 className="mb-1">Fatema Bhatt</h3>
        <p className="mb-2">MSc Math - NIT Surat</p>
        <p className="mb-2">Educator | Math Enthusiast | Olympiad Mentor</p>

        {/* LinkedIn Button */}
        <a
          href="https://www.linkedin.com/in/fatema-bhatt-172154196/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-primary btn-sm d-flex align-items-center mt-2"
          style={{ width: "fit-content" }}
        >
          <FaLinkedin className="me-2" /> LinkedIn
        </a>
      </div>
    </div>
  </div>
  <WhatsappContactUs />
</section>

      
      <WhatsappFloatingButton />

    </>
    
  );
};

export default AboutUs;
