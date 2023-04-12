import React from "react";
import { Link } from "react-router-dom";

const Property = (props) => {
  return (
    <>
      <div className={`mt-2 col-md-${props.n}`}>
        <div className="card">
          <Link to='/appartment'>
          <img className="card-img-top" src={props.img} alt="Card image cap" />
          </Link>
          <div className="card-body text-center">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text" style={props.style}>
               {props.des}
            </p>
            <a href="#" className="btn btn-sm border-danger fw-bold text-danger" style={props.style}>
              {props.button}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Property;
