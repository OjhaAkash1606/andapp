import React from "react";

const VehicleDetailsHeading = (props) => {
  const { label } = props;

  return (
    <>
      <div className="info-top mb35">
        <a href="#" className="left-arrow" wz-previous="ChangeIndex()">
          <i className="fa fa-angle-left" aria-hidden="true"></i>
        </a>
        <h6>{label}</h6>
        <a href="#" className="right-arrow" wz-next="ChangeIndex()">
          <i className="fa fa-angle-right" aria-hidden="true"></i>
        </a>
      </div>
    </>
  );
};

export default VehicleDetailsHeading;
