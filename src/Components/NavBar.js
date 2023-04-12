import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [op1change, setOp1change] = useState("active");
  const [op2change, setOp2change] = useState("");
  const [op3change, setOp3change] = useState("");
  const [op4change, setOp4change] = useState("");
  const [op5change, setOp5change] = useState("");

  function handleChange(event) {
    const target = event.target;
    const name = target.name;

    setOp1change(name === "option1" ? "active" : "");
    setOp2change(name === "option2" ? "active" : "");
    setOp3change(name === "option3" ? "active" : "");
    setOp4change(name === "option4" ? "active" : "");
    setOp5change(name === "option5" ? "active" : "");
  }

  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light m-2">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              {" "}
              <i className="fa-solid fa-magnifying-glass bg-danger p-2 rounded-pill text-white shadow"></i>{" "}
              Real State
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse container-fluid mx-5"
              id="navbarSupportedContent"
            >
              <div className="container-fluid mx-5">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link
                      className={`nav-link fw-bold ${op1change}`}
                      aria-current="page"
                      to="/"
                      name="option1"
                      onClick={handleChange}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link fw-bold ${op2change}`}
                      aria-current="page"
                      name="option2"
                      onClick={handleChange}
                      to="/catalog"
                    >
                      Catalog
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link fw-bold ${op3change}`}
                      aria-current="page"
                      name="option3"
                      onClick={handleChange}
                      to="/account"
                    >
                      Account
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link fw-bold ${op4change}`}
                      aria-current="page"
                      name="option4"
                      onClick={handleChange}
                      to="/vender"
                    >
                      Vender
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 d-flex justify-content-between">
                
                  <Link 
                  className={`btn btn-sm fw-bold px-2 ${op5change}`}
                  onClick={handleChange}
                  name="option5"
                  to="/sign_in">Sign in</Link>
              
                <button className="btn btn-sm fw-bold btn-danger rounded text-white px-2">
                  Addproperty
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
