// src/components/Instructor.tsx
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import profileImg from "../images/profile.jpg" // adjust path
import profileFatema from "../images/Fatema_profile.jpeg"; // adjust path

interface Instructor {
  id: number;
  name: string;
  degree: string;
  role: string;
  image: string;
  linkedin: string;
}

const instructors: Instructor[] = [
  {
    id: 1,
    name: "Muhammed Ashraf Bhura",
    degree: "B.Tech - NIT Surat",
    role: "Software Engineer | Educator",
    image: profileImg,
    linkedin: "https://www.linkedin.com/in/muhammed-ashraf-bhura-099a95200/",
  },
  {
    id: 2,
    name: "Fatema Bhatt",
    degree: "MSc Math - NIT Surat",
    role: "Educator | Math Enthusiast | Olympiad Mentor",
    image: profileFatema,
    linkedin: "https://www.linkedin.com/in/fatema-bhatt-172154196/",
  },
];

const Instructors: React.FC = () => {
  return (
    <section className="bg-dark text-white py-5">
      <div className="about-container d-flex flex-column align-items-center">
        <h1 className="text-center mb-4">Instructors</h1>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          {instructors.map((instructor) => (
            <div
              key={instructor.id}
              className="col-12 col-md-6 d-flex flex-column align-items-center mb-5"
            >
              <div className="d-flex align-items-center text-center">
                {/* Profile Image */}
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="profile-img rounded-circle shadow me-4"
                  style={{ width: "150px", height: "150px" }}
                />

                {/* Instructor Details */}
                <div className="text-start">
                  <h3 className="mb-1">{instructor.name}</h3>
                  <p className="mb-2">{instructor.degree}</p>
                  <p className="mb-2">{instructor.role}</p>

                  {/* LinkedIn Button */}
                  <a
                    href={instructor.linkedin}
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructors;
