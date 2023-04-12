import React from "react";
import Header from "../Assest/hero-image.jpg.jpg";
import HeaderCards from "../HeaderCards";
import Property from "../Property";
import TopOffers from "../TopOffers";
import Data from '../Assest/Data/Data.json'
import { Link } from "react-router-dom";

// import Banner from './Banner'
const Home = () => {
  // Cards Heading
  const Name = [
    "Houses",
    "Apartments",
    "Commercial",
    "Daily rental",
    "New buildings",
    "More",
  ];

  //Data
  const Datas = Data.offers

  return (
    <>
      {/* Header */}
      <div className="container w-100 mt-md-5">
        <div className="row featurette">
          <div className="col-md-7 px-md-5 mt-md-5 mt-0 w-md-50 ">
            <h1 className="featurette-heading fw-bold fs-1 mt-md-5">
              Easy way to find <br className="d-none d-md-inline" />{" "}
              <span>a perfect property</span>
            </h1>
            <p className="lead fs-6 my-md-4">
              We provide a complete service for the sale, purchase or rental of
              real estate. We have been operating more than 10 years. Search
              millions of apartments and houses on Real state.
            </p>
          </div>
          <div className="col-md-5 2-50 ">
            <img
              src={Header}
              alt="/"
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            />
          </div>
        </div>
      </div>

      {/* button Group */}

      <div className="container mx-auto d-flex mt-4">
        <div
          className="btn-group shadow-sm m-auto p-md-3 bg-body rounded row"
          role="group"
          aria-label="Basic example"
        >
          <button type="button" className="btn px-md-4 border-0 col-4 col-md-3">
            For rent
          </button>
          <button
            type="button"
            className="btn px-md-4 border-start col-4 col-md-3"
          >
            Location
          </button>
          <button
            type="button"
            className="btn px-md-4 border-start col-4 col-md-3"
          >
            Property type
          </button>
          <button
            type="button"
            className="btn px-md-4 border-start d-flex align-centre col-md-3"
          >
            Price
            <input
              type="range"
              className="form-range w-100 px-md-3 text-danger"
              max="100"
              min="10"
              value="50"
              id="customRange1"
            />
          </button>
        </div>
      </div>

      {/* card */}

      <div className="row d-flex justify-content-evenly mt-5">
        {Name.map((name, index) => {
          return <HeaderCards heading={name} id={index} />;
        })}
      </div>

      {/* Property */}

      <div className="container mt-5">
        <div className="row d-flex mt-md-4">
          {Datas.slice(0,3).map((e) => {
            return (
              <Property
                n="4"
                id={e.id}
                title={e.title}
                des={e.des}
                button={e.button}
                img={e.img}
              />
            );
          })}
        </div>
      </div>

      {/* Top Offer */}

      <div className="container mt-5">
        <h2> Top offers</h2>
        <div className="row">
        {Datas.slice(0, 4).map((e) => {
          return (
            <TopOffers
              n="3"
              id={e.id}
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

      {/* Added-TOday */}
      {/* <div className="container mt-5">
        <div className="d-flex align-item-center">
          <h3>Added today</h3>
          <div></div>
          <div className="d-flex">
            <p className="mx-3 btn shadow">Aparments</p>
            <p className="mx-3 btn shadow">Houses</p>
            <p className="mx-3 btn shadow text-danger">Rooms</p>
            <p className="mx-3 btn shadow">Commercial</p>
          </div>
        </div>
      </div> */}
{/* Calculate-Property */}


      <div className="row featurett align-items-center container mt-4 justify-center m-auto">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading">
            Сalculate the cost of
            <span className="text-muted"> your property</span>
          </h2>
          <p className="lead px-md-5">
            Real estate appraisal is a procedure that allows you to determine
            the average market value of real estate (apartment, house, land,
            etc.). Сalculate the cost of your property with our new Calculation
            Service.
          </p>
        </div>
        <div className="col-md-5 order-md-1">
          {/* <svg
      className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
      width={500}
      height={500}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Placeholder: 500x500"
      preserveAspectRatio="xMidYMid slice"
      focusable="false"
    >
      
      <title>Placeholder</title>
      <rect width="100%" height="100%" fill="#eee" />
      <text x="50%" y="50%" fill="#aaa" dy=".3em">
        500x500
      </text>
    </svg> */}

          <img
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto rounded-circle"
            width={500}
            height={500}
            src="https://cdn-baiem.nitrocdn.com/GSBApaQdqyjIxMSsUXDUDaOEuyRmXFhd/assets/static/optimized/rev-cbed654/wp-content/uploads/2020/05/teleconference-calculator-1024x763.png"
            alt="Recent post"
          />
        </div>
      </div>

      {/* <div>
  <div className="d-flex row">
    <div className="w-50 position-relative" id="AddedToday1">
      <button className="btn btn-primary px-3 m-3">verified</button>
      <button className="btn btn-info px-3 m-3">new</button>
      <div className="d-flex justify-content-around align-items-center position-absolute bottom-0 m-4">
        <div className="card-content">
          <p className="card-description text-white">
            118-11 Sutphin Blvd Jamaica, NY 11434
          </p>
          <h5 className="card-title text-white">Luxury Rental Villa</h5>
          <span className="card-description text-white">
            118-11 Sutphin Blvd Jamaica, NY 11434
          </span>
        </div>
        <div className="position-absolute right-0" style={{ right: "-26em" }}>
          <button className="btn btn-danger px-5">From $3,850</button>
        </div>
      </div>
    </div>
    <div className="w-50">
      <div className="position-relative mt-0" id="AddedToday2">
        <button className="btn btn-primary px-3 m-3">verified</button>
        <button className="btn btn-info px-3 m-3">new</button>
        <div className="d-flex justify-content-around align-items-center position-absolute bottom-0 m-4">
          <div className="card-content">
            <p className="card-description text-white">
              118-11 Sutphin Blvd Jamaica, NY 11434
            </p>
            <h5 className="card-title text-white">Luxury Rental Villa</h5>
            <span className="card-description text-white">
              118-11 Sutphin Blvd Jamaica, NY 11434
            </span>
          </div>
          <div className="position-absolute right-0" style={{ right: "-26em" }}>
            <button className="btn btn-danger px-5">From $3,850</button>
          </div>
        </div>
      </div>
      <div className="position-relative" id="AddedToday2">
        <button className="btn btn-primary px-3 m-3">verified</button>
        <button className="btn btn-info px-3 m-3">new</button>
        <div className="d-flex justify-content-around align-items-center position-absolute bottom-0 m-4">
          <div className="card-content">
            <p className="card-description text-white">
              118-11 Sutphin Blvd Jamaica, NY 11434
            </p>
            <h5 className="card-title text-white">Luxury Rental Villa</h5>
            <span className="card-description text-white">
              118-11 Sutphin Blvd Jamaica, NY 11434
            </span>
          </div>
          <div className="position-absolute right-0" style={{ right: "-26em" }}>
            <button className="btn btn-danger px-5">From $3,850</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> */}

      {/* Search-Property-By-City */}

      <div className="container mt-5">
        <div className="row justify-content-between">
          <div className="col-8">
            <h2>Search property by city</h2>
          </div>
          <div className="col-4">
            <Link className="text-dark text-end" to='catalog'>
               <p>View all</p>
            </Link>
          </div>
        </div>
   {/* Property */}
        <div className="row d-flex my-4">
          {Datas.slice(0,4).map((e) => {
            return (
              <Property
                id={e.id}
                n="3"
                img={e.img}
                style={{ display: "none" }}
                title={e.City}
              />
            );
          })}
        </div>
      </div>
      {/* Our Partner */}

      {/* <Banner/> */}

      <div className="container my-4">
        <h3>Top real estate agents</h3>
        <div className="my-3 row d-flex align-items-center">
          <div className="col-md-4 my-1 my-md-0 ">
            <img
              alt="img"
              src="https://plus.unsplash.com/premium_photo-1677553953986-a78e31a192f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
              className="image-fluid rounded-3"
            />
          </div>
          <div className="col-md-4 my-1 my-md-0 ">
            <img
              alt="img"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              className="image-fluid rounded-3"
            />
          </div>
          <div className="col-md-4 my-1 my-md-0 py-5 bg-light rounded-3 border-dark shadow accommodation">
            <h3>"I will select the best accommodation for you"</h3>
            <p>
              Amet libero morbi venenatis ut est. Iaculis leo ultricies nunc id
              ante adipiscing. Vel metus odio at faucibus ac. Neque id placerat
              et id ut. Scelerisque eu mi ullamcorper sit urna. Est volutpat
              dignissim nec.
            </p>
            <h3>Floyd Miles</h3>
            <p>Imperial Property Group Agent</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
