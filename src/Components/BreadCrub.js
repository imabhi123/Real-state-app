import React from "react";
import { Link } from "react-router-dom";

const BreadCrub = (props) => {

  return (
    <>
      <div className="container mt-2">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link className={`text-decoration-none text-dark ${props.Current}`} to="/">
                {props.PageName1}
              </Link>
            </li>
           ` <li className="breadcrumb-item active" aria-current="page">
              <Link
                className="text-decoration-none text-dark"
                to="/catalog"
              >
                {props.PageName2}
              </Link>
            </li>
          </ol>
        </nav>
      </div>
    </>
  );
};

export default BreadCrub;
