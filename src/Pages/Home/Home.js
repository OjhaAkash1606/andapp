import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main role="main">
      <div className="indexheight">
        <div className="container indexcontent">
          <h1>
            Let's Find You{" "}
            <strong className="pinktext"> The Best Insurance </strong>
          </h1>

          <div className="row align-items-center justify-content-center">
            <div className="col-auto">
              <a href="/" className="box">
                <img src="img/car.png" alt="" />
                <h4>Private Car</h4>
              </a>
            </div>
            <div className="col-auto">
              <Link to="/Bike" className="box">
                <img src="img/bike.png" alt="" />
                <h4>Two Wheeler</h4>
              </Link>
              {/* <a href="/bike" className="box">
                <img src="img/bike.png" alt="" />
                <h4>Two Wheeler</h4>
              </a> */}
            </div>
            <div className="col-auto">
              <a href="/" className="box">
                <img src="img/health.png" alt="" />
                <h4>Health</h4>
              </a>
            </div>
            <div className="col-auto">
              <a href="/" className="box">
                <img src="img/travel.png" alt="" />
                <h4>Travel</h4>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
