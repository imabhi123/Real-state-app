import React, { useState } from "react";

const SideBar = () => {
 

  const [values, setValues] = useState([2500, 7500]);

  const handleChange = (event) => {
    const targetValue = parseInt(event.target.value);
    const otherValue = values[1 - event.target.dataset.index];
    const newValues = [...values];
    newValues[event.target.dataset.index] = targetValue;
    if (targetValue > otherValue) {
      newValues[1 - event.target.dataset.index] = 10000 - targetValue;
    }
    setValues(newValues);
  };

  const trackStyle = {
    background: `linear-gradient(to right, #ccc ${values[0] / 100}%,
      #ccc ${values[1] / 100}%, #fff ${values[1] / 100}%, #fff 100%)`,
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className=""></div>
          <div className="d-flex justify-content-evenly">
            <p className="btn btn-white text-danger  shadow-sm">For rent</p>
            <p className="btn btn-white text-dark shadow-sm">For sale </p>
          </div>
          <div className="card mb-3 border-0">
            <div className="card-header bg-white border-0 text-dark fw-bold">
              {/* <i className="fas fa-shopping-cart me-2"></i> */}
              Location
            </div>
            <ul className="list-group list-group-flush">
              <button
                className="btn btn-white d-flex border my-1 justify-content-between"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span> New York</span> <i className="fas fa-chevron-down"></i>
              </button>
              <button
                className="btn btn-white d-flex border my-1 justify-content-between"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span> New York</span> <i className="fas fa-chevron-down"></i>
              </button>

              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </ul>
          </div>

          <div className="card mb-3">
            <div className="card-header bg-white border-0 text-dark fw-bold">
              {/* <i className="fas fa-shopping-cart me-2"></i> */}
              Property type
            </div>

            <ul className="list-group list-group-flush">
              <div className="form-check">
                <input
                  className="form-check-input text-danger"
                  type="checkbox"
                  defaultValue=""
                  id="flexCheckIndeterminate"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexCheckIndeterminate"
                >
                  House
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input text-danger"
                  type="checkbox"
                  defaultValue=""
                  id="flexCheckIndeterminate"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexCheckIndeterminate"
                >
                  Apartment
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input text-danger"
                  type="checkbox"
                  defaultValue=""
                  id="flexCheckIndeterminate"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexCheckIndeterminate"
                >
                  Room
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input text-danger"
                  type="checkbox"
                  defaultValue=""
                  id="flexCheckIndeterminate"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexCheckIndeterminate"
                >
                  Office
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input text-danger"
                  type="checkbox"
                  defaultValue=""
                  id="flexCheckIndeterminate"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexCheckIndeterminate"
                >
                  Commercial
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input text-danger"
                  type="checkbox"
                  defaultValue=""
                  id="flexCheckIndeterminate"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexCheckIndeterminate"
                >
                  Land
                </label>
              </div>
            </ul>
          </div>

          <div className="card mb-3">
            <div className="card-header bg-white border-0 text-dark fw-bold">
              {/* <i className="fas fa-shopping-cart me-2"></i> */}
              Price per month
            </div>
            <ul className="list-group list-group-flush">
              <div className="form-check">
                <input
                  type="range"
                  className="form-range w-100 px-md-3 text-danger"
                  max={10000}
                  min={0}
                  value={values[0]}
                  onChange={handleChange}
                  id="customRange1"
                  data-index="0"
                />
                <input
                  type="range"
                  className="form-range w-100 px-md-3 text-danger"
                  max={10000 - values[0]}
                  min={0}
                  value={values[1]}
                  onChange={handleChange}
                  id="customRange2"
                  data-index="1"
                />
                <div className="row">
                  <div
                    type="button"
                    className="p-0 border x-md-4 d-flex align-items-center col-md-5 justify-content-evenly"
                  >
                    <p className="p-0 m-0 border-right"> $</p>
                    <p className="p-0 m-0"> {values[0]}</p>
                  </div>
                  <div
                    type="button"
                    className="p-0 border mx-md-4 d-flex align-items-center col-md-5 justify-content-evenly"
                  >
                    <p className="p-0 m-0 border-right"> $</p>
                    <p className="p-0 m-0"> {values[1]}</p>
                  </div>
                </div>
                <div
                  className="double-range-slider-track"
                  style={trackStyle}
                ></div>
              </div>
            </ul>
          </div>

          <div className="card mb-3">
            <div className="card-header bg-white border-0 text-dark fw-bold">
              {/* <i className="fas fa-shopping-cart me-2"></i> */}
              Beds & baths
            </div>

            <ul className="list-group list-group-flush">
              <div className="form-check">
                <span className="text-muted">Bedrooms</span>

                <div className="row">
                  <div
                    type="button"
                    className="p-0 border px-md-4 d-flex align-items-center col-md-10 justify-content-evenly"
                  >
                    <p className="p-0 m-0 border">Studio</p>
                    <p className="p-0 m-0"> 1</p>
                    <p className="p-0 m-0"> 2</p>
                    <p className="p-0 m-0"> 3</p>
                    <p className="p-0 m-0"> 4+</p>
                  </div>
                </div>
              </div>
              <div className="form-check">
                <span className="text-muted">Bedrooms</span>

                <div className="row">
                  <div
                    type="button"
                    className="p-0 border px-md-4 d-flex align-items-center col-md-10 justify-content-evenly"
                  >
                    <p className="p-0 m-0 border"> $</p>
                    <p className="p-0 m-0"> 1</p>
                    <p className="p-0 m-0"> 2</p>
                    <p className="p-0 m-0"> 3</p>
                    <p className="p-0 m-0"> 4+</p>
                  </div>
                </div>
              </div>
            </ul>
          </div>

          <div className="card mb-3">
            <div className="card-header bg-white border-0 text-dark fw-bold">
              {/* <i className="fas fa-shopping-cart me-2"></i> */}
              Amenities
            </div>

            <ul className="list-group list-group-flush">
              <div className="form-check">
                <input
                  className="form-check-input text-danger"
                  type="checkbox"
                  defaultValue=""
                  id="flexCheckIndeterminate"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexCheckIndeterminate"
                >
                  Air conditioning
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input text-danger"
                  type="checkbox"
                  defaultValue=""
                  id="flexCheckIndeterminate"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexCheckIndeterminate"
                >
                  Balcony
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input text-danger"
                  type="checkbox"
                  defaultValue=""
                  id="flexCheckIndeterminate"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexCheckIndeterminate"
                >
                  Garage
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input text-danger"
                  type="checkbox"
                  defaultValue=""
                  id="flexCheckIndeterminate"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexCheckIndeterminate"
                >
                  Gym
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input text-danger"
                  type="checkbox"
                  defaultValue=""
                  id="flexCheckIndeterminate"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexCheckIndeterminate"
                >
                  Parking
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input text-danger"
                  type="checkbox"
                  defaultValue=""
                  id="flexCheckIndeterminate"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexCheckIndeterminate"
                >
                  Pool
                </label>
              </div>
            </ul>
          </div>

          <div className="card mb-3">
            <div className="card-header bg-white border-0 text-dark fw-bold">
              {/* <i className="fas fa-shopping-cart me-2"></i> */}
              Pets
            </div>

            <ul className="list-group list-group-flush">
              <div className="form-check">
                <input
                  className="form-check-input text-danger"
                  type="checkbox"
                  defaultValue=""
                  id="flexCheckIndeterminate"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexCheckIndeterminate"
                >
                  Cats allowed
                </label>
              </div>{" "}
              <div className="form-check">
                <input
                  className="form-check-input text-danger"
                  type="checkbox"
                  defaultValue=""
                  id="flexCheckIndeterminate"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexCheckIndeterminate"
                >
                  Dogs allowed
                </label>
              </div>
            </ul>
          </div>

          <div className="card mb-3">
            <div className="card-header bg-white border-0 text-dark fw-bold">
              {/* <i className="fas fa-shopping-cart me-2"></i> */}
              Additional options
            </div>

            <ul className="list-group list-group-flush">
              <div className="form-check">
                <input
                  className="form-check-input text-danger"
                  type="checkbox"
                  defaultValue=""
                  id="flexCheckIndeterminate"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexCheckIndeterminate"
                >
                  Verified
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input text-danger"
                  type="checkbox"
                  defaultValue=""
                  id="flexCheckIndeterminate"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexCheckIndeterminate"
                >
                  Featured
                </label>
              </div>
            </ul>
          </div>

          <div className="card mb-3 border-0 container w-75 mt-md-5 reset-btn">
            <button
              class="btn "
              type="reset"
            >
              Reset filters
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
