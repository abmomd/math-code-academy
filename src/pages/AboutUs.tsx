import NavbarComponent from "../components/NavbarComponent";
import "./AboutUs.css"; // Add CSS for styling
import profileImg from "../images/profile.jpg";
import profileFatema from "../images/Fatema_profile.jpeg";
import { FaLinkedin } from "react-icons/fa";

const AboutUs = () => {
  const courses = [
    { "name": "USACO", "description": "USACO (United States of America Computing Olympiad) is a prestigious programming competition for high school students in the USA. It helps select students for the International Olympiad in Informatics (IOI)." },
    { "name": "ZCO / INOI", "description": "ZCO (Zonal Computing Olympiad) and INOI (Indian National Olympiad in Informatics) are India's gateway contests for IOI selection. Excelling in INOI can earn you a spot in the International Team." },
    { "name": "CCC Course", "description": "The CCC (Canadian Computing Competition) is a programming contest by the University of Waterloo. It tests problem-solving skills and is a stepping stone to the CCO and IOI." },
    { "name": "AP CSE", "description": "AP Computer Science (AP CSE) is an advanced placement course for high school students, primarily in the USA, covering fundamental programming and problem-solving concepts using Python or Java." },
    { "name": "IGCSE CSE", "description": "IGCSE Computer Science is an internationally recognized curriculum covering programming, algorithms, and computational thinking. It lays the foundation for AI, ML, and advanced computing fields." }
]
;

  return (
    <>
      <NavbarComponent />

    
<section>
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
</section>

            {/* Whatsapp Contact Section */}
        <section className="py-5 ">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10">
                <div className="d-flex flex-column flex-md-row align-items-center justify-content-between bg-light-blue shadow-sm p-4 rounded-4 border border-light">
                  <div className="mb-3 mb-md-0 text-center text-md-start">
                    <h5 className="fw-bold mb-1">
                      Have any queries? or For Free Trial Class
                    </h5>
                    <p className="mb-0">
                      Reach out to us on WhatsApp
                    </p>
                  </div>
                  <a
                    href="https://wa.me/919586753377"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success d-flex align-items-center gap-2 px-4 py-2 shadow-sm"
                  >
                    <i className="bi bi-whatsapp fs-5"></i>
                    <span>Message Us on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>



    </>
    
  );
};

export default AboutUs;
