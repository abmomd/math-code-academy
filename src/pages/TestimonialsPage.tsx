import NavbarComponent from "../components/NavbarComponent";
import "./HomePage.css";
import WhatsappFloatingButton from "../components/WhatsappFloatingButton";
import WhatsappContactUs from "../components/WhatsappContactUs";
import Testimonials from "../components/Testimonials";


const Testimonial = () => {
  return (
    <>
      <NavbarComponent />
      <div className="container-fluid p-0 ">

        {/* Testimonial Section */}
         <Testimonials />

        {/* WhatsApp Floating Button */}
          <WhatsappFloatingButton />

       
        {/* WhatsApp Contact Us Section */}
        <WhatsappContactUs />




      </div>
    </>
  );
};

export default Testimonial;
