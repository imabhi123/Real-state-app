import React from "react";
import { Link } from "react-router-dom";

const TopOffers = (props) => {
  return (
    <>
      <div className={`my-4 card col-md-${props.n}`} >
      <Link to={{ pathname: "/appartment", state: { message:props.id } }}>
       
        <img className="card-img-top" src={props.img} alt="Card image cap" />
        
        <div className="card-body" id={props.id}>
          <p className="card-title text-danger">{props.offer}</p>
          <p className="card-text text-dark">{props.items}</p>
          <p className="card-text text-muted">{props.itemDes}</p>
          <p className="card-text text-dark">{props.price}</p>
          <hr />
          <p className="card-text text-dark d-flex justify-content-evenly">
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </p>
        </div>
       </Link>
      </div>
    </>
  );
};

export default TopOffers;
