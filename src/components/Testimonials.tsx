import React from "react";

const Testimonials: React.FC = () => {
  const testimonials = [
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
  ];

  return (
    <section className="bg-light py-5">
      <div className="container">
        <h2 className="section-title text-center mb-5 fw-bold">
          Testimonials
          <div className="mx-auto mt-2"></div>
        </h2>
        <div className="row g-4">
          {testimonials.map((t, index) => (
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
  );
};

export default Testimonials;
