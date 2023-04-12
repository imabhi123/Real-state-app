import React from "react";

const HeaderCards = (props) => {
  return (
    <>
      <div className="col-lg mt-3 w-25 col-md d-flex flex-column mx-2 p-0 shadow-sm align-items-center">
        <svg
          className="bd-placeholder-img rounded-circle "
          width="50"
          height="50"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect
            style={{ opacity: ".2" }}
            className="opacity-25"
            width="100%"
            height="100%"
            fill="var(--bs-secondary-color)"
          ></rect>
        </svg>
        <p className="fw-normal fs-6 fs-md-5 fw-bold text-centre">{props.heading}</p>
      </div>
    </>
  );
};

export default HeaderCards;
