import React from "react";

const WhyChooseUs: React.FC = () => {
  const points = [
    "1 on 1 Sessions",
    "Experienced Instructors",
    "Tailored Study Plans",
    "Curated Practice Problems",
  ];

  return (
    <section className="text-center py-5 bg-dark text-white">
      <h2 className="section-title mb-5 text-white">
        Why Choose MathCode Academy?
      </h2>
      <div className="row justify-content-center px-3">
        {points.map((item, index) => (
          <div className="col-10 col-sm-6 col-md-3 mb-4" key={index}>
            <div className="card border-0 shadow-sm h-100 p-4 rounded-4 bg-light-blue">
              <div className="card-body d-flex flex-column align-items-center">
                <div className="mb-3 text-primary fs-3">
                  <i className="bi bi-check-circle"></i>
                </div>
                <h5 className="card-title fw-semibold">{item}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
