import NavbarComponent from "../components/NavbarComponent";
// import "./ContactUs.css";
import "./HomePage.css";
import WhatsappContactUs from "../components/WhatsappContactUs";
import WhatsappFloatingButton from "../components/WhatsappFloatingButton";
const ContactUs = () => {
  return (
    <>
      <NavbarComponent />

            <div className="container-fluid bg-dark text-white d-flex flex-column w-100 mt-0">
        
        <h1 className="mb-4 text-center bg-dark "></h1>
            <h2 className="mb-4 text-center">For more details about the course, please contact us and let's discuss.</h2>

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
              We’ll respond within 24 hours.
            </p>
          </div>

        </div>
        <WhatsappContactUs />
        <WhatsappFloatingButton />

      </div>
    </>
  );
};

export default ContactUs;
