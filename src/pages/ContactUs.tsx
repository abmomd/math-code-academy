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

          <div className="mb-3 text-start">
            <h4>💬 Get in Touch:</h4>
            <p>
              Have questions or suggestions? Feel free to reach out! We’ll
              respond within 24 hours.
            </p>
          </div>

          <div className="mt-3 text-start">
            <a
              href="mailto:support@codewithashraf.com"
              className="btn btn-primary btn-lg"
            >
              Send an Email
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
