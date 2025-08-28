// src/components/WhatsappContactUs.tsx
import React from "react";

const WhatsappContactUs: React.FC = () => {
  return (
    <section className="py-5 bg-dark">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10">
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-between bg-light shadow-sm p-4 rounded-4 border border-light">
              {/* Text Section */}
              <div className="mb-3 mb-md-0 text-center text-md-start text-dark">
                <h5 className="fw-bold mb-1">
                  Have any queries? or Want a Free Trial Class?
                </h5>
                <p className="mb-0">Reach out to us on WhatsApp</p>
              </div>

              {/* WhatsApp Button */}
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
  );
};

export default WhatsappContactUs;
