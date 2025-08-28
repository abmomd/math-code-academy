import React from "react";
import student from "../images/studentGraphics.png"; // adjust the path to your image

const HomePageIntro: React.FC = () => {
  return (
    <section className="bg-dark text-white text-center text-lg-start py-5">
      <div className="container d-flex flex-column flex-lg-row align-items-center justify-content-between">
        
        {/* Left Side: Text */}
        <div className="mb-4 mb-lg-0">
          <h1 className="display-3 fw-bold">
            <span className="text">Math Code </span>Academy
          </h1>
          <p className="lead fst-italic">
            Where Code Meets <span className="text-tertiary">Math Excellence</span>
          </p>
          <a
            href="https://wa.me/919586753377"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-info btn-lg mt-4 px-5 py-2 shadow"
          >
            Book a Free Trial Class Now !
          </a>
        </div>

        {/* Right Side: Image */}
        <div>
          <img
            src={student}
            alt="Coding Illustration"
            className="img-fluid"
            style={{ maxWidth: "400px" }}
          />
        </div>
      </div>
    </section>
  );
};

export default HomePageIntro;
