import NavbarComponent from "../components/NavbarComponent";
import "./HomePage.css";
import profileImg from "../images/profile.jpg";
import profileFatema from "../images/Fatema_profile.jpeg";

const Home = () => {
  return (
    <>
      <NavbarComponent />
      <div className="container-fluid p-0 ">
        {/* Hero Section */}
        <section className="bg-white text-black text-center py-5">
          <h1 className="display-3 fw-bold">MathCode Academy</h1>
          <p className="lead fst-italic">Where Code Meets Math Excellence</p>
          {/* <button className="btn btn-light btn-lg mt-4 px-5 py-2 shadow-sm">
            Explore Courses
          </button> */}
        </section>

        {/* Why Choose Us */}
        <section className="text-center py-5  bg-dark text-white">
          <h2 className="section-title mb-5 text-white">
            Why Choose MathCode Academy?
          </h2>
          <div className="row justify-content-center px-3">
            {[
              "Expert Faculty",
              "Structured Curriculum",
              "Live Doubt Support",
              "Olympiad & JEE Prep",
            ].map((item, index) => (
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
          {/* WhatsApp Floating Button */}
          <a
            href="https://wa.me/919586753377"
            className="whatsapp-float"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
          >
            <i className="bi bi-whatsapp"></i>
            <span className="whatsapp-text">Contact Now</span>
          </a>
        </section>

        {/* Our Courses */}
        <section className="bg-light text-center py-5">
          <h2 className="section-title mb-5">Math Courses</h2>
          <div className="row justify-content-center px-3">
            {[
              "Math Olympiads",
              "IB / IGCSE /ICSE - Math",
              "USA - AIME And AMC",
              "USA - AP Courses",
              "Canada - Gauss, Pascal, Fermat",
              "UK - UKMT",
              "India - RMO, INMO",
              "IIT-JEE Foundation",
              "SAT Math",
              "NTSE / KVPY",
            ].map((course, index) => (
              <div className="col-10 col-sm-6 col-md-3 mb-4" key={index}>
                <div className="card border-0 shadow-sm h-100 p-4 rounded-4 bg-light-blue">
                  <div className="card-body d-flex flex-column align-items-center">
                    <div className="mb-3 text-info fs-3">
                      <i className="bi bi-journal-code"></i>
                    </div>
                    <h5 className="card-title fw-semibold">{course}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-light py-5">
          <div className="container">
            <h2 className="section-title text-center mb-5 fw-bold">
              Math Courses
              <div className="mx-auto mt-2"></div>
            </h2>
            <div className="row g-4">
              {[
                {
                  name: "Math Olympiads",
                  place: "USA",
                  version: "AMC - American Mathematics Competitions",
                  feedback:
                    "AMC is a series of mathematics competitions that help students develop problem-solving skills and prepare for higher-level contests like AIME and USAMO. It is a great way to challenge students and enhance their mathematical thinking.",
                },
                {
                  name: "Advanced Placements (AP) Courses",
                  place: "USA",
                  version: "AP PreCalculus , AP Calculus, AP Statistics",
                  feedback: " ",
                },
                {
                  name: "Twinkle Krishna",
                  place: "India",
                  version: "Physics - Electricity",
                  feedback:
                    "In Class 12, my son found the chapters on electricity and magnetism challenging. He took classes with Ashraf quite close to his board exams and his entrance exams. The classes helped him understand the concepts well. We found Ashraf's teaching style quite adaptive to the learner's requirements. And most important, Ashraf was able to inspire my son and instilled in him a desire to learn more about the topics.",
                },
              ].map((t, index) => (
                <div className="col-sm-12 col-md-6 col-lg-4" key={index}>
                  <div className="testimonial-card h-100 p-4 rounded-4 shadow-sm">
                    <h5 className="fw-bold text-black">{t.name}</h5>
                    <h6 className="text-primary fw-semibold mb-1">{t.place}</h6>
                    <p className="text-muted mb-3">{t.version}</p>
                    <p className="small text-black">{t.feedback}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Courses */}
        <section className="bg-light text-center py-5">
          <h2 className="section-title mb-5">Programming Courses</h2>
          <div className="row justify-content-center px-3">
            {[
              "DSA",
              "Math Olympiads",
              "Python for Kids",
              "USACO & ZCO Prep",
              "ZCO Prep",
              "Competitive Programming",
              "IIT-JEE Math",
            ].map((course, index) => (
              <div className="col-10 col-sm-6 col-md-3 mb-4" key={index}>
                <div className="card border-0 shadow-sm h-100 p-4 rounded-4 bg-light-blue">
                  <div className="card-body d-flex flex-column align-items-center">
                    <div className="mb-3 text-info fs-3">
                      <i className="bi bi-journal-code"></i>
                    </div>
                    <h5 className="card-title fw-semibold">{course}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-5 bg-white">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10">
                <div className="d-flex flex-column flex-md-row align-items-center justify-content-between bg-light-blue shadow-sm p-4 rounded-4 border border-light">
                  <div className="mb-3 mb-md-0 text-center text-md-start">
                    <h5 className="fw-bold mb-1">
                      Have any queries? or For Free Trial Class
                    </h5>
                    <p className="mb-0">
                      Check out our{" "}
                      <a
                        href="/faqs"
                        className="text-primary text-decoration-underline"
                      >
                        FAQs
                      </a>{" "}
                      or reach out to us on WhatsApp
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

        <section>
          <div className="about-container d-flex flex-column align-items-center mt-5">
            <h1 className="text-center mb-4">Instructors</h1>
          </div>

          {/* Profile Section */}
          <div className="about-container d-flex flex-column align-items-center mt-5 mb-5">
            {/* <h1 className="text-center mb-4">Instructor</h1> */}

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
                <p className="mb-2">B.Tech - NIT Surat </p>
                <p className="mb-2">Software Engineer | Educator</p>
              </div>
            </div>
          </div>

          {/* Profile Section */}
          <div className="about-container d-flex flex-column align-items-center mt-5 mb-5">
            {/* <h1 className="text-center mb-4">Instructor</h1> */}

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
                <p className="mb-2">MSc Math - NIT Surat </p>
                <p className="mb-2">
                  Educator | Math Enthusiast | Olympiad Mentor
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-light py-5">
          <div className="container">
            <h2 className="section-title text-center mb-5 fw-bold">
              Testimonials
              <div className="mx-auto mt-2"></div>
            </h2>
            <div className="row g-4">
              {[
                {
                  name: "Gemy M George",
                  place: "USA",
                  version: "Programming Competition - USACO",
                  feedback:
                    "Isabel has always been interested in programming, but after starting classes with Ashraf, she was introduced to new concepts and approaches that strengthened her analytical and logical thinking skills. This exposure has deepened her interest and aligns well with her goal of pursuing a college major involving structured programming. Ashraf has a remarkable talent for teaching and mentoring and I highly recommend him as an educator.",
                },
                {
                  name: "Tanvi Banerjee",
                  place: "India",
                  version: "Olympiad Math",
                  feedback:
                    "Mr. Ashraf is a highly dedicated and passionate educator who has had a significant impact on my son’s academic growth, particularly in mathematics. Through his patient guidance, consistent encouragement, and deep subject knowledge, he has helped my son not only strengthen his mathematical foundation but also develop a genuine interest in the subject. Under Mr. Ashraf’s mentorship, my son has gained the confidence to take on complex problems and has gone on to excel in several mathematics competitions.",
                },
                {
                  name: "Twinkle Krishna",
                  place: "India",
                  version: "Physics - Electricity",
                  feedback:
                    "In Class 12, my son found the chapters on electricity and magnetism challenging. He took classes with Ashraf quite close to his board exams and his entrance exams. The classes helped him understand the concepts well. We found Ashraf's teaching style quite adaptive to the learner's requirements. And most important, Ashraf was able to inspire my son and instilled in him a desire to learn more about the topics.",
                },
              ].map((t, index) => (
                <div className="col-sm-12 col-md-6 col-lg-4" key={index}>
                  <div className="testimonial-card h-100 p-4 rounded-4 shadow-sm">
                    <h5 className="fw-bold text-black">{t.name}</h5>
                    <h6 className="text-primary fw-semibold mb-1">{t.place}</h6>
                    <p className="text-muted mb-3">{t.version}</p>
                    <p className="small text-black">{t.feedback}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
