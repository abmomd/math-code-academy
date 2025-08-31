import React from "react";

interface Course {
  level: string;
  title: string;
  students: string;
  desc: string;
  price: string;
  oldPrice: string;
}

const courses: Course[] = [
  {
    level: "USA",
    title: "AP Physics 1 : Algebra Based",
    students: "3200 Past Students",
    desc: "For students preparing for AP Physics 1 exam.",
    price: "₹1499",
    oldPrice: "₹1999",
  },
  {
    level: "USA",
    title: "AP Physics 2 : Algebra Based",
    students: "4100 Past Students",
    desc: "For students preparing for AP Physics 2 exam.",
    price: "₹2499",
    oldPrice: "₹2999",
  },
  {
    level: "USA",
    title: "AP Physics C : Mechanics",
    students: "2800 Past Students",
    desc: "For students preparing for AP Physics C: Mechanics exam.",
    price: "₹1999",
    oldPrice: "₹2499",
  },
  {
    level: "USA",
    title: "AP Physics C : Electricity and Magnetism",
    students: "3500 Past Students",
    desc: "For students preparing for AP Physics C: E&M exam.",
    price: "₹2299",
    oldPrice: "₹2799",
  },
  {
    level: "Cambridge",
    title: "IGCSE Physics",
    students: "2700 Past Students",
    desc: "Comprehensive IGCSE Physics course for all levels.",
    price: "₹2399",
    oldPrice: "₹2999",
  },
];

const CoursesSectionPhysics: React.FC = () => {
  return (
    <section className="bg-dark text-white py-5 courses-component">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Physics Courses</h2>
        <div className="row justify-content-center g-4">
          {courses.map((course, index) => (
            <div
              className="col-10 col-sm-6 col-md-4 col-lg-3"
              key={index}
            >
              <div className="card h-100 bg-black text-white border-0 shadow-lg rounded-4 p-3">
                <div className="card-body d-flex flex-column">
                  {/* Level + Title */}
                  <h5 className="fw-bold">{course.title}</h5>
                  <p className="text-warning small">{course.level}</p>

                  {/* Students
                  <p className="text-success fw-semibold">👥 {course.students}</p> */}

                  {/* Description */}
                  <p className="small flex-grow-1">{course.desc}</p>

                  {/* Pricing */}
                  {/* <div>
                    <span className="fs-4 fw-bold text-primary">{course.price}</span>{" "}
                    <span className="text-decoration-line-through text-muted">
                      {course.oldPrice}
                    </span>
                  </div> */}

                  {/* Discount */}
                  {/* <div className="bg-success bg-opacity-25 text-success text-center rounded-pill py-1 small mt-2">
                    Grab your seat now !
                  </div> */}

                  {/* Buttons */}
                  <div className="d-flex justify-content-center mt-4">
                    {/* <a href="#" className="btn btn-info btn-sm  px-3">
                      Book Demo
                    </a> */}
                    <a href="contact-us" className="btn btn-info btn-sm px-3">
                      Explore Course
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSectionPhysics;
