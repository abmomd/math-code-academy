import NavbarComponent from "../components/NavbarComponent";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <>
      <NavbarComponent />
      <div className="container-fluid text-white mt-5 d-flex flex-column w-100">
        <h1 className="mb-4 text-center">Contact Us</h1>

        <div
          className="card-contact-us bg-dark text-white shadow-lg p-4 w-100 mx-auto"
          style={{ maxWidth: "800px" }}
        >
          <div className="mb-3 text-start">
            <h4>📧 Email:</h4>
            <p className="mb-2">ashrafbhura8@gmail.com</p>
          </div>

          <div className="mb-3 text-start">
            <h4>📞 Phone:</h4>
            <p className="mb-2">+91 9586753377</p>
          </div>

          <div className="mb-3 text-start">
            <h4>📍 Address:</h4>
            <p className="mb-2">Bangalore, India</p>
          </div>

          <div className="mb-3 text-start ">
            <h4>💬 Get in Touch:</h4>
            <p>
              Have questions or suggestions? Feel free to reach out! We’ll
              respond within 24 hours.
            </p>
          </div>

        </div>
      </div>
              {/* Whatsapp Contact Section */}
        <section className="mt-5 py-5 ">
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

export default ContactUs;
