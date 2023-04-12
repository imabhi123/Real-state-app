import React from "react";
import TopOffers from "../TopOffers";
import SideBar from "../SideBar";
import BreadCrub from "../BreadCrub";
import Data from "../Assest/Data/Data.json";

const Catlog = () => {
  

  var datas =Data;
  let handleItemClick=(e)=>{
    
    console.log(e.target.id)
  
 
  }

  const CatlogData = Data.offers;
  return (
    <>
      <div className=" row justify-content-between">
        {/* SideBar*/}
        <div className="col-md-3">
          <SideBar />
        </div>

        {/* Right-container */}
        <div className="col-md-9">
          {/* Breadcrub */}
          <BreadCrub PageName1="Home" PageName2="Catalog" Current="active" />

          <div className="container">
            <h1>Property for sell</h1>
          </div>

          {/* Catlog */}
          {/* <div className="row">
            {CatlogData.map((e) => {
              return (
                <TopOffers
                  n="3 shadow-sm mx-2"
                  img={e.img}
                  offer={e.offer}
                  items={e.item}
                  itemDes={e.itemDes}
                  price={e.price}
                  onClick={handleItemClick} // Pass the function as a prop
                />
              );
            })}
          </div> */}

          <div className="row">
            {CatlogData.map((e) => {
              return (
                <TopOffers
                id = {e.id}
                  key={e.id} // Add a unique key to each element in the list
                  n="3 shadow-sm mx-2"
                  img={e.img}
                  offer={e.offer}
                  items={e.item}
                  itemDes={e.itemDes}
                  price={e.price}
                  onClick={handleItemClick} // Pass a function that will call the handleItemClick function with the current element as an argument
                />
              );
            })}
          </div>

          <div className="my-4">{/* pagination */}</div>
        </div>
      </div>
    </>
  );
};

export default Catlog;
