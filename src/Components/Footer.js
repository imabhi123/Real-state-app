import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="text-center text-lg-start bg-light text-muted">
        {/* Section: Social media */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"></section>
        {/* Section: Social media */}
        {/* Section: Links  */}
        <section className="">
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <div className="text-center mb-4">
                  <Link className="navbar-brand" to="/">
                    <i className="fa-solid fa-magnifying-glass bg-danger p-2 rounded-pill text-white shadow"></i>{" "}
                    Real State
                  </Link>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center mb-3">
                  <p>
                    <span>example@email.com</span>
                    <br />
                    <span>888831969738</span>
                  </p>
                  <ul className="list-inline">
                    <li className="list-inline-item bg-danger opacity-50 p-2 rounded-pill  quickitem-link">
                      <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-facebook fa-2x"></i>
                      </a>
                    </li>
                    <li className="list-inline-item bg-danger opacity-50 p-2 rounded-pill  quickitem-link">
                      <a
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-twitter fa-2x"></i>
                      </a>
                    </li>
                    <li className="list-inline-item bg-danger opacity-50 p-2 rounded-pill  quickitem-link">
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-instagram  fa-2x"></i>
                      </a>
                    </li>
                    <li className="list-inline-item bg-danger opacity-50 p-2 rounded-pill  quickitem-link">
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-linkedin fa-2x"></i>
                      </a>
                    </li>
                    <li className="list-inline-item bg-danger opacity-50 p-2 rounded-pill  quickitem-link">
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-google  fa-2x"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-2 col-lg-4 col-xl-3 mx-auto mb-3">
                <h6 className="text-uppercase fw-bold mb-4">Quick Links</h6>

                <p>
                  <a
                    className="text-decoration-none text-dark"
                    href="#!"
                  >
                    Buy a property
                  </a>{" "}
                </p>
                <p>
                  <a
                    className="text-decoration-none text-dark"
                    href="#!"
                  >
                    Sell a property
                  </a>
                </p>
                <p>
                  {" "}
                  <a
                    className="text-decoration-none text-dark"
                    href="#!"
                  >
                    Sell a property
                  </a>{" "}
                </p>
                <p>
                  {" "}
                  <a
                    className="text-decoration-none text-dark"
                    href="#!"
                  >
                    Rent a property
                  </a>
                </p>
                <p>
                  <a
                    className="text-decoration-none text-dark"
                    href="#!"
                  >
                    Сalculate your property
                  </a>
                </p>
                <p>
                  <a
                    className="text-decoration-none text-dark"
                    href="/"
                  >
                    Top offers
                  </a>
                </p>
                <p>
                  <a
                    className="text-decoration-none text-dark"
                    href="/"
                  >
                    Top cities
                  </a>
                </p>
              </div>
              <div className="col-md-2 col-lg-4 col-xl-3 mx-auto mb-3">
                <h6 className="text-uppercase fw-bold mb-4">About</h6>

                <p>
                  <a href="#!" className="text-dark">
                    Our agents
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-dark">
                    Help & support
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-dark">
                    Contacts
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-dark">
                    News
                  </a>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-5 col-lg-3 col-xl-3 m-0 p-0">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Recent Posts</h6>
                <div className="row d-flex align-items-center">
                  <div className="col-md-3 ">
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Recent post"
                      className="rounded"
                      style={{ width: "5em" }}
                    />
                  </div>
                  <div className="col-md-9">
                    <small className="text-danger">Home improvement</small>
                    <h6 className="mb-1">
                      Your Guide to a Smart Apartment Searching
                    </h6>
                    <p className="mt-2 mb-0">
                      Mi justo, varius vitae cursus ipsum sem massa amet{" "}
                      <p className="d-flex justify-content-evenly mt-3 text-dark">
                        <span className="text-dark">Nov 23</span>

                        <span className="text-dark">No comments</span>
                      </p>
                    </p>
                  </div>
                  <hr />
                  <div className="row d-flex align-items-center">
                    <div className="col-md-3 ">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Recent post"
                        className="rounded"
                        style={{ width: "5em" }}
                      />
                    </div>
                    <div className="col-md-9">
                      <small className="text-danger">Home improvement</small>
                      <h6 className="mb-1">
                        Your Guide to a Smart Apartment Searching
                      </h6>
                      <p className="mt-2 mb-0">
                        Mi justo, varius vitae cursus ipsum sem massa amet{" "}
                      </p>
                      <p className="d-flex justify-content-evenly mt-3 text-dark">
                        <span className="text-dark">Nov 23</span>

                        <span className="text-dark">No comments</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>

        {/* Section: Links  */}
        {/* Copyright */}
        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.025)" }}
        >
          © All rights reserved. Made by
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            Satya Kabir PVT LTD . BHOPAL M.P
          </a>
        </div>
      </footer>
    </>
  );
};
export default Footer;
