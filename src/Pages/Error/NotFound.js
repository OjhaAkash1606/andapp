import React from "react";

function NotFound() {
  return (
    <main>
      <div className="maincl text-center">
        <h1 className="heading-1">
          4
          <span>
            0<i className="fas fa-ghost"></i>
          </span>
          4
        </h1>
        <h2 className="heading-2">Error: 404 page not found</h2>
        <p className="heading-3">
          Sorry, the page you're looking for cannot be accessed
          <br />{" "}
          <button
            className="btn mt-3"
            style={{ backgroundColor: "#EF3B85", color: "white" }}
            // style="background-color: #EF3B85; color:white;"
          >
            Back to home
          </button>
        </p>
        <img src="img/bg.jpg" className="bg-image" alt="" style={{ width: "100%" }} />
      </div>
    </main>
  );
}

export default NotFound;
