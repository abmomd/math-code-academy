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
    title: "AP Courses",
    students: "3200 Past Students",
    desc: "AP Pre-Calculus, AP Calculus AB/BC and AP Statistics for high school students.",
    price: "₹1499",
    oldPrice: "₹1999",
  },
  {
    level: "USA",
    title: "AMC, AIME, Mathcounts",
    students: "4100 Past Students",
    desc: "AMC - American Mathematics Competitions and Mathcounts preparation.",
    price: "₹2499",
    oldPrice: "₹2999",
  },
  {
    level: "Canada",
    title: "Gauss, Pascal, Fermat",
    students: "2800 Past Students",
    desc: "For Canadian contests including Gauss, Pascal, Fermat and CEMC exams.",
    price: "₹1999",
    oldPrice: "₹2499",
  },
  {
    level: "International",
    title: "IB / IGCSE / ICSE Math",
    students: "3500 Past Students",
    desc: "For students pursuing international boards with challenging math curricula.",
    price: "₹2299",
    oldPrice: "₹2799",
  },
  {
    level: "Cambridge",
    title: "A/O Level Math",
    students: "2700 Past Students",
    desc: "For students preparing for Cambridge O and A Level mathematics exams.",
    price: "₹2399",
    oldPrice: "₹2999",
  },
  {
    level: "Global",
    title: "Math Olympiads",
    students: "1900 Past Students",
    desc: "For advanced learners preparing for International and National Olympiads.",
    price: "₹3499",
    oldPrice: "₹4499",
  },
];

const CoursesSectionMaths: React.FC = () => {
  return (
    <section className="bg-dark text-white py-5 courses-component">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Math Courses</h2>
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
                    <a href="/contact-us" className="btn btn-info btn-sm px-3">
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

export default CoursesSectionMaths;
