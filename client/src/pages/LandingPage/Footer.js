import React, { useEffect } from "react";

export default function Footer() {


  return (
    <>
      {/* <!-- Footer Start --> */}
      <div className="container-fluid text-white-50 footer pt-5" style={{backgroundColor : "black"}}>
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
              <a href="*index.html" className="d-inline-block mb-3">
                <h1 className="text-white">
                  <span className="text-primary">AD</span>VISIONS
                </h1>
              </a>
              <p className="mb-0">
                "We leverage data for actionable insights through AI-driven solutions, pioneering innovation towards a brighter future."
              </p>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
              <h5 className="text-white mb-4">Get In Touch</h5>
              <p>
                <i className="fa fa-map-marker-alt me-3"></i>27,STPI,  Botanical Garden,
                Noida, India
              </p>
              <p>
                <i className="fa fa-phone-alt me-3"></i>+91 8810316395
              </p>
              <p>
                <i className="fa fa-phone-alt me-3"></i>+91 7078054645
              </p>
              <p>
                <i className="fa fa-envelope me-3"></i>info@advisionslab.com

              </p>
              <div className="d-flex pt-2">
                {/* <a className="btn btn-outline-light btn-social" href="*">
                  <i className="fab fa-twitter"></i>
                </a> */}
                {/* <a className="btn btn-outline-light btn-social" href="*">
                  <i className="fab fa-facebook-f"></i>
                </a> */}
                <a className="btn btn-outline-light btn-social" href="mailto:info@advisionslab.com" target="_blank" rel="noreferrer">
                  <i className="fab fa-google"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="https://www.youtube.com/@navudayeducationalhub">
                  <i className="fab fa-youtube"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="https://www.linkedin.com/company/advisions-ard/mycompany/" target="_blank" rel="noreferrer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="https://www.upwork.com/agencies/1759834476800745472/" target="_blank" rel="noreferrer">
                <i class="fa-brands fa-upwork-up">Up</i>
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
  <h5 className="text-white mb-4">Popular Links</h5>
  <a className="btn btn-outline-light btn-bubble mb-2" href="/about">
    About Us
  </a>
  <a className="btn btn-outline-light btn-bubble mb-2" href="/contact">
    Contact Us
  </a>
  <a className="btn btn-outline-light btn-bubble mb-2" href="*">
    Privacy Policy
  </a>
  <a className="btn btn-outline-light btn-bubble mb-2" href="*">
    Terms & Condition
  </a>

</div>

            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
              <h5 className="text-white mb-4">Our Services</h5>
              <a className="btn btn-link" >
                Robotic Automation
              </a>
              <a className="btn btn-link" >
                Machine learning
              </a>
              <a className="btn btn-link" >
                Predictive Analysis
              </a>
              <a className="btn btn-link" >
                Data Science
              </a>
              <a className="btn btn-link" >
                Robot Technology
              </a>
            </div>
          </div>
        </div>
        <div className="container wow fadeIn" data-wow-delay="0.1s">
          <div className="copyright">
            <div className="row">
              <div className="col-md-9 text-center text-md-start mb-3 mb-md-0">
                Copyright &copy;{" 2022 "}
                <a className="border-bottom" href="*#">
                  Advisions Research and Development Pvt Ltd.
                </a>
                All Rights Reserved.
              </div>
              <div className="col-md-3 text-center text-md-end">
                <div className="footer-menu">
                  <a href="/">Home</a>
                  <a >Cookies</a>
                  <a href="/contact">Help</a>
                  <a >FAQs</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Footer End --> */}

      {/* <!-- Back to Top --> */}
      
    </>
  );
}