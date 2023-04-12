import React from "react";

const Review = (props) => {
  return (
    <>
      <div className="reviews-members pt-4 pb-4">
        <div className="media">
          <div className="media-body">
            <div className="reviews-members-header">
              <span className="d-flex gap-5 justify-content-lg-between">
                <a>
                  {" "}
                  <img
                    width="30px"
                    height="30px"
                    alt="Generic placeholder image"
                    src={props.image}
                    className="mr-3 rounded-pill"
                  />
                  <h6 className="m-y2">{props.name}</h6>
                </a>
                <p className="text-gray">{props.date}</p>
              </span>
            </div>
            <div className="reviews-members-body">
              <p>
                {props.message}
              </p>
            </div>
            <div className="reviews-members-footer">
              <a className="text-decoration-none text-dark" href="/">
                <i className="fa-sharp fa-solid fa-heart"></i> {props.like}
              </a>
              <a className="text-decoration-none text-dark" href="/">
                <i className="fa-light fa-comment-lines"></i> {props.share}
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Review;
