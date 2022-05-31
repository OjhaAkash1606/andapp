import React, { useContext } from "react";
import VehicleDetailsHeading from "../Common/Heading/VehicleDetailsHeadiig";
import VehicleDetailsSearch from "../Common/Search/VehicleDetailsSearch";
import { contextRtoCityOnSelect } from '../../App';

function ManufactureYear() {

  const wizardOnClick = useContext(contextRtoCityOnSelect);

  const value = JSON.parse(
    (window.onload = sessionStorage.getItem("RequestObject"))
  );

  const IsRenewalPolicy = value.PolicyType === "Renewal";

  let RegistrationYears = new Array();

  new Date().getFullYear();
  if (!IsRenewalPolicy && value.PolicyType === "New") {
    var date = new Date();
    var newDate = new Date();
    newDate = new Date(date);
    newDate.setDate(newDate.getDate() - 180);
    if (newDate.getFullYear() === date.getFullYear()) {
      var minimumRegistrationYear = new Date().getFullYear();
    } else {
      var minimumRegistrationYear = new Date().getFullYear() - 1;
    }
    var maximumRegistrationYear = new Date().getFullYear();
    for (var x = minimumRegistrationYear; x <= maximumRegistrationYear; x++) {
      var year = { Id: x, Name: x, Checked: false };
      RegistrationYears.push(year);
    }
  } else {
    var month = new Date().getMonth();

    if (month === 11) {
      var maximumRegistrationYear = new Date().getFullYear();
      var minimumRegistrationYear = maximumRegistrationYear - 20;
    } else {
      var maximumRegistrationYear = new Date().getFullYear() - 1;
      var minimumRegistrationYear = maximumRegistrationYear - 20;
    }

    for (var x = minimumRegistrationYear; x <= maximumRegistrationYear; x++) {
      var year = { Id: x, Name: x, Checked: false };
      RegistrationYears.push(year);
    }
  }

  var Year = RegistrationYears.reverse();

  const arr = [];
  return (
    <>
      <VehicleDetailsHeading label={"Manufacture Year"} />

      <div className="row">
        <div className="col-12">
          <div className="pl35 pr35">
            <VehicleDetailsSearch
              type={"text"}
              list={"auto-complete"}
              placeholder={"Search Manufacture Year"}
              id={"auto-complete"}
              value={""}
              items={Year}
            />

            <div class="row">
              <div class="col-12">
                <div class="pl35 pr35">
                  <div class="Reg-year-list">
                    <ul>
                      {Year.length > 0 &&
                        Year.map((item) => (
                          <li>
                            <a onClick={() => (wizardOnClick.handleOnManufacturingYear(item), wizardOnClick.goNextPage())}>{item.Name}</a>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ManufactureYear;
