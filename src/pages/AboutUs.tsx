import NavbarComponent from "../components/NavbarComponent";
import "./AboutUs.css"; // Add CSS for styling
import profileImg from "../images/profile.jpg";

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

{/* Profile Section */}
<div className="about-container d-flex flex-column align-items-center mt-5">
<h1 className="text-center mb-4">Instructor</h1>
  
  <div className="d-flex align-items-center text-center">
    {/* Profile Image */}
    <img src={profileImg} alt="Founder" className="profile-img rounded-circle shadow me-4" style={{ width: "150px", height: "150px" }} />

    {/* Instructor Details */}
    <div className="text-start">
      <h3 className="mb-1">Muhammed Ashraf Bhura</h3>
      <p className="mb-2">B.Tech - NIT Surat </p>
      <p className="mb-2">Software Engineer  | Competitive Programmer | Educator</p>
    </div>
  </div>

  {/* Welcome Message */}
  <p className="text-center mt-4">
    Welcome to <strong>Code With Ashraf</strong>! We are dedicated to helping students master programming and computer science with structured learning paths.
  </p>
</div>

<div className="container text-white mt-5">

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
