import React from "react";
import TopOffers from "./TopOffers";
import Review from "./Review";
import Data from "./Assest/Data/Data.json";
import GImg from "./GImg";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
const PineAppartment = (props) => {
  const location=useLocation();
  const message=location.state?.message;
  console.log(message)
  const Offer = Data.offers;

  // Review
  const ReviewData = [
    {
      name: "Annette Black",
      message:
        "Elementum ut quam tincidunt egestas vitae elit, hendrerit. Ullamcorper nulla amet lobortis elit, nibh condimentum enim. Aliquam felis nisl tellus sodales lectus dictum tristique proin vitae. Odio fermentum viverra tortor quis.",
      date: "Jan 17, 2021",
      img: "https://source.unsplash.com/random/?men",
      like: "(3)",
      share: "(0)",
    },
    {
      name: "Darrell Steward",
      message:
        "Vel dictum nunc ut tristique. Egestas diam amet, ut proin hendrerit. Dui accumsan at phasellus tempus consequat dignissim.",
      date: "Dec 1, 2020",
      img: "https://source.unsplash.com/random/?women",
      like: "(0)",
      share: "(1)",
    },
    {
      name: "Floyd Miles",
      message:
        "Viverra nunc blandit sapien non imperdiet sit. Purus tempus elementum aliquam eu urna. A aenean duis non egestas at libero porttitor integer eget. Sed dictum lobortis laoreet gravida.",
      date: "Oct 28, 2020",
      img: "https://source.unsplash.com/random/?profile_image",
      like: "(2)",
      share: "(1)",
    },
  ];

  //BreadCrumb

  const BreadCrubOp = [`'Home','Catalog',${"name"}`];
  return (
    <>
      {/* Grid */}

      <GImg />
      {/* Second Section */}

      <div className="container">
        <div className="row justify-content-around">
          <div className="col-md-6">
            <span className="badge bg-success mx-1">Verified</span>
            <span className="badge bg-primary mx-1">New</span>
            <div className="my-5">
              <p className="mx-2">
                {props.price} <span>/month</span>
              </p>
            </div>
            {/* Overview */}

            <div className="overview mt-4">
              <h2>Overview</h2>
              <p>{props.itemDes}</p>
              <a href="/" className="text-danger text-decoration-none">
                Show more
              </a>
            </div>
            <div className="mt-5">
              {/* Property-deatils */}
              <div className="property-deatils">
                <h2>{props.items}</h2>
                <ul className="list-unstyled">
                  <li>
                    <p>
                      Type: <span>apartment</span>
                    </p>
                  </li>
                  <li>
                    <p>
                      Apartment area: <span>56 sq.m </span>
                    </p>
                  </li>
                  <li>
                    <p>
                      Built: <span>2015 </span>
                    </p>
                  </li>
                  <li>
                    <p>
                      Bedrooms: <span> 4 </span>
                    </p>
                  </li>
                  <li>
                    <p>
                      Bathrooms:<span> 2 </span>
                    </p>
                  </li>
                  <li>
                    <p>
                      Parking places: <span>2 </span>
                    </p>
                  </li>
                  <li>
                    <p>
                      Pets allowed: <span>cats only</span>
                    </p>
                  </li>
                </ul>
              </div>

              {/* Amenities */}
              <div className="Amenities my-4">
                <h2>Amenities</h2>
                <div className="row my-2 shadow-sm py-5">
                  <div className="col-md-4">
                    <p>WiFi</p>
                    <p>Parking place</p>
                    <p>TV</p>
                  </div>
                  <div className="col-md-4">
                    <p>Heating</p>
                    <p>Air conditioning</p>
                    <p>Laundry</p>
                  </div>
                  <div className="col-md-4">
                    <p>Dishwasher</p>
                    <p>Iron</p>
                    <p>Security cameras</p>
                  </div>
                  <a href="/" className="text-decoration-none text-danger">
                    Show more
                  </a>
                </div>
              </div>

              {/* publish */}

              <div className="row my-4">
                <p className="col-md-4">
                  Published: <span>Dec 9, 2020</span>
                </p>
                <p className="col-md-4">
                  Ad number:<span>681013232</span>{" "}
                </p>
                <p className="col-md-4">
                  Views:<span>48</span>{" "}
                </p>
              </div>

              {/* Review */}
              <h2 className="px-3">4,9 (32 reviews)</h2>

              <div className="container">
                <div className="bg-white rounded shadow-sm p-4 mb-4 restaurant-detailed-ratings-and-reviews">
                  {" "}
                  <a
                    href="/"
                    className="btn btn-outline-primary btn-sm float-right"
                  >
                    Top Rated
                  </a>
                  <h5 className="my-5">All Ratings and Reviews</h5>
                  {ReviewData.map((e) => {
                    return (
                      <Review
                        name={e.name}
                        date={e.date}
                        like={e.like}
                        share={e.share}
                        message={e.message}
                        image={e.img}
                      />
                    );
                  })}
                  <a
                    className="text-center w-100 d-block mt-4 font-weight-bold text-decoration-none text-dark"
                    href="/"
                  >
                    See All Reviews
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 pt-4">
            <div className="container border-start shadow-sm p-3">
              <div className="reviews-members-header">
                <span className="">
                  <a>
                    <img
                      width="35px"
                      height="37px"
                      alt="Generic placeholder image"
                      src="https://images.unsplash.com/photo-1597393922738-085ea04b5a07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwYmxhY2slMjB3b21hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                      className="mr-3 rounded-pill"
                    />
                    <h6 className="mt-2">Floyd Miles</h6>
                  </a>
                  <p className="text-gray">Imperial Property Group Agent</p>
                  <p>(302) 555-0107</p>
                  <p>floyd_miles@email.com</p>
                </span>
              </div>

              {/* Form */}
              <form className="px-4">
                <div className="mb-3">
                  <input
                    type="email"
                    defaultValue=""
                    className="form-control text-muted"
                    placeholder="Your Name*"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    defaultValue=""
                    className="form-control text-muted"
                    placeholder="Your Email*"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    defaultValue=""
                    className="form-control text-muted"
                    placeholder="Password*"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    style={{ width: "22vw", height: "10vh" }}
                  ></textarea>
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    defaultValue=""
                    className="form-check-input text-muted"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Send news, tips and promos from Real state to my email.
                  </label>
                </div>
                <div className="mb-3">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Recently viewed */}

      <div className="container">
        <div className="row">
          <div className="col-10">
            <h2>Recently viewed</h2>
          </div>
          <div className="col-2">
            <p>View all</p>
          </div>
        </div>
        <div className="row">
          {Offer.slice(0, 4).map((e) => {
            return (
              <TopOffers
                n="3"
                img={e.img}
                offer={e.offer}
                items={e.item}
                itemDes={e.itemDes}
                price={e.price}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PineAppartment;
