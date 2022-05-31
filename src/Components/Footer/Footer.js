import React from "react";

const style = {
  footer: {
    color: "white",
  },
  license: {
    textAlign: "center",
    color: "#ef3b85",
  },
  footerlogo: {
    textAlign: "center",
    color: "black",
  },
};

function Footer() {
  return (
    <footer className="page-section">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h6>Links</h6>
            <ul>
              <li>
                <a href="https://andapp.in/AboutUs">About Us</a>
              </li>
              <li>
                <a href="https://andapp.in/Team">Our Team</a>
              </li>
              <li>
                <a href="https://andapp.in/Grievance">Grievance </a>
              </li>
              <li>
                <a href="https://andapp.in/Contact">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6>Products</h6>
            <ul>
              <li>
                <a href="https://andapp.in/Products/LifeInsurance">
                  Life Insurance
                </a>
              </li>
              <li>
                <a href="https://andapp.in/Products/HelthInsurance">
                  Health Insurance
                </a>
              </li>
              <li>
                <a href="https://andapp.in/Products/MotorInsurance">
                  Motor Insurance
                </a>
              </li>
              <li>
                <a href="https://andapp.in/Products/TravelInsurance">
                  Travel Insurance
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6>Insurance Partners</h6>
            <ul>
              <li>
                <a href="https://andapp.in/InsurancePartners/HealthInsurance">
                  Health Insurance
                </a>
              </li>
              <li>
                <a href="https://andapp.in/InsurancePartners/GeneralInsurance">
                  General Insurance
                </a>
              </li>
              <li>
                <a href="https://andapp.in/InsurancePartners/LifeInsurance">
                  Life Insurance
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6>Contact Us</h6>
            <p>
              {" "}
              Mail Us :{" "}
              <a style={style.footer} href="mailto:hello@andapp.in">
                hello@andapp.in
              </a>
            </p>
            <p>
              Call Us :{" "}
              <a
                style={style.footer}
                href="tel:@System.Configuration.ConfigurationManager.AppSettings['
              SupportPhoneForContent']"
              >
                +91 9081003001
              </a>
            </p>
            <div className="row-box follo-icon">
              <a href="https://www.facebook.com/andapp.in" title="Facebook">
                <i className="fab fa-facebook-f" aria-hidden="true"></i>
              </a>
              <a href="https://www.instagram.com/andapp.in/" title="Instagram">
                <i className="fab fa-instagram" aria-hidden="true"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/andapp/"
                title="LinkedIn"
              >
                <i className="fab fa-linkedin-in" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row middle-f">
          <div className="col-md-12 text-center">
            <h4>iAND INSURANCE BROKER PRIVATE LIMITED</h4>
            <h6>Registered Office</h6>
            <p>
              1106, 11th floor, D & C Dynasty building, C G Road, Near Sardar
              Patel Stadium Cross roads, Navrangpura, Ahmedabad-380009
            </p>
            <p>CIN: U66000GJ2019PTC111177</p>
            <h6>Registered With IRDAI As Direct Broker- Life And General</h6>
            <p>
              IRDAI License No.{" "}
              <a
                href="https://andapp.in/website/docs/IRDA.pdf"
                style={style.license}
              >
                IRDA/DB 813/20
              </a>
              , Registraton No.727, Valid Up To 25th Aug 2023.
            </p>
            <p>
              <a
                href="https://www.irda.gov.in/Defaulthome.aspx?page=H1"
                style={style.footer}
              >
                IRDAI
              </a>{" "}
              |{" "}
              <a href="https://ibai.org/" style={style.footer}>
                IBAI
              </a>{" "}
              |{" "}
              <a href="https://www.policyholder.gov.in/" style={style.footer}>
                Policyholder.gov.in
              </a>{" "}
              |{" "}
              <a href="../website/docs/cod.pdf" style={style.footer}>
                Code of conduct
              </a>
              |{" "}
              <a href="../website/docs/AR.pdf" style={style.footer}>
                Annual Return
              </a>
            </p>
            <p>
              <a href="https://andapp.in/Disclaimer" style={style.footer}>
                Disclaimer
              </a>{" "}
              |{" "}
              <a href="https://andapp.in/PrivacyPolicy" style={style.footer}>
                Privacy Policy{" "}
              </a>{" "}
              |{" "}
              <a href="https://andapp.in/TermsofUse" style={style.footer}>
                Terms of Use
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="f-logo-bottom">
        <div className="f-logo">
          <a
            href="https://andapp.in/website/docs/DIPP71637_IAND_INSURANCE_BROKER_PRIVATE_LIMITED_RECOGNITION_91181352596090476.pdf"
            style={style.footerlogo}
          >
            <img
              src="https://andapp.in/website/images/startupindia.png"
              alt=""
            />
          </a>
        </div>
        <div className="f-logo">
          <a
            href="https://andapp.in/website/docs/iia certi.jpeg"
            style={style.footerlogo}
          >
            <img src="https://andapp.in/website/images/iia.png" alt="" />
          </a>
        </div>
        <div className="f-logo">
          <a
            href="https://andapp.in/website/docs/ibai.pdf"
            style={style.footerlogo}
          >
            {" "}
            <img src="https://andapp.in/website/images/ibai.png" alt="" />
          </a>
        </div>

        <div className="f-logo">
          <a
            href="https://andapp.in/website/docs/cii.pdf"
            style={style.footerlogo}
          >
            {" "}
            <img src="https://andapp.in/website/images/cii.png" alt="" />
          </a>
        </div>

        <div className="f-logo">
          <a
            href="https://andapp.in/website/docs/msme.pdf"
            style={style.footerlogo}
          >
            {" "}
            <img src="https://andapp.in/website/images/msme.png" alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
