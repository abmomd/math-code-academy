import NavbarComponent from "../components/NavbarComponent";
import "./AboutUs.css"; // Add CSS for styling
import profileImg from "../images/profile.jpg";
import ContactUs from "./ContactUs";

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
      <div className="container text-white mt-5">
        <h1 className="text-center mb-4">About Us</h1>

        {/* Profile Section */}
        <div className="about-container d-flex flex-column align-items-center">
          <img src={profileImg} alt="Founder" className="profile-img rounded-circle shadow" />
          <p className="text-center mt-3">
            Welcome to <strong>Code With Ashraf</strong>! We are dedicated to helping students master programming and computer science with structured learning paths.
          </p>
        </div>

        {/* Course Offerings */}
        <h2 className="text-center mt-5">📚 Our Courses</h2>
        <div className="row justify-content-center mt-4">
          {courses.map((course, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4 d-flex">
              <div className="card bg-dark text-white p-3 shadow flex-fill text-center">
                <h5 className="fw-bold course-title">{course.name}</h5>
                <p>{course.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
    
  );
};

export default AboutUs;
