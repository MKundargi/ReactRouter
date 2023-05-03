import React from "react";
import Cards from "../../Inc/Cards";
import Navbar from "../Navbar";
import Task from "../Images/TwoCars/Task.png";
import Time from "../Images/TwoCars/Time.png";

const TwoCards = (props) => {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        {/* <div className="row"> */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4  g-5 shadow p-4">
          <Cards
            class="cards"
            title={props.title}
            img={<img src={Task} alt="" className="regisimg " />}
          />

          <Cards
            title={props.title1}
            img={<img src={Time} alt="" className="regisimg" />}
          />
        </div>
      </div>
    </>
  );
};

export default TwoCards;
