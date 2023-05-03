import React from "react";
import Header from "./EmployeeDashboard";

const Col = () => {
  return (
    <>
      <Header />
      <div>
        {/* <div className="container text-center"> */}
        <h3 className="text-center">col-6 = 12/2</h3>
        <div className="row ">
          <div className="col-6 col1 ">columns 1</div>
          <div className="col col1   ">columns 2</div>
        </div>
        <h3 className="text-center">col-4 = 12/3</h3>
        <div className="row  ">
          <div className="col-4 col2  ">columns 1</div>
          <div className="col  col2 ">columns 2</div>
          <div className="col col2  ">columns 3</div>
        </div>
        <h3 className="text-center">col-3 = 12/4</h3>
        <div className="row  ">
          <div className="col-3 col3  ">columns 1</div>
          <div className="col  col3 ">columns 2</div>
          <div className="col col3  ">columns 3</div>
          <div className="col col3  ">columns 4</div>
        </div>
        <h3 className="text-center">col-2 = 12/6</h3>
        <div className="row  ">
          <div className="col-2 col4  ">columns 1</div>
          <div className="col  col4 ">columns 2</div>
          <div className="col col4  ">columns 3</div>
          <div className="col col4  ">columns 4</div>
          <div className="col col4  ">columns 5</div>
          <div className="col col4  ">columns 6</div>
        </div>
        <h3 className="text-center">col-1 = 12/12</h3>
        <div className="row  ">
          <div className="col-1 col5  ">columns 1</div>
          <div className="col col5 ">columns 2</div>
          <div className="col col5  ">columns 3</div>
          <div className="col col5  ">columns 5</div>
          <div className="col col5  ">columns 5</div>
          <div className="col col5  ">columns 6</div>
          <div className="col col5  ">columns 7</div>
          <div className="col col5 ">columns 8</div>
          <div className="col col5  ">columns 9</div>
          <div className="col col5  ">columns 10</div>
          <div className="col col5  ">columns 11</div>
          <div className="col col5  ">columns 12</div>
        </div>

        {/* </div> */}
      </div>
    </>
  );
};

export default Col;
