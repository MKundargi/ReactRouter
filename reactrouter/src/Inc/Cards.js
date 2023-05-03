import React from "react";
import "../App.css";

const Cards = (props) => {
  return (
    <div>
      <div className="card card-border-width-0 w-100 shadow ">
        <div className="card card-border-width-0 ">
          <div className="mt-4">{props.img}</div>

          {/* <img src="../Components/Images/Register/contact.png" alt="" /> */}
          <div className="card-body">
            <h5 className="card-title text-center ">{props.title}</h5>
          </div>
          <hr className="w-75 mx-auto mt-2 mb-4" />
          {props.fun}
        </div>
      </div>
    </div>

    // <div className="container mt-4 mb-3">
    // <div class="row row-cols-1 row-cols-md-3 g-5 shadow p-4">
    //   <div class="col ">
    //     <div class="card w-25 shadow p-1">
    //       <div class="card-body">
    //         <h5 class="card-title">{props.title}</h5>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // </div>
  );
};

export default Cards;
