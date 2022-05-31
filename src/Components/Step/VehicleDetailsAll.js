import React, { useState } from "react";
import VehicleDetailsHeading from "../Common/Heading/VehicleDetailsHeadiig";
import VehicleDetailsSearch from "../Common/Search/VehicleDetailsSearch";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

function VehicleDetailsAll({ data }) {
  // const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <VehicleDetailsHeading label={"Vehicle Details"} />

      <div className="row">
        <div className="col-12">
          <div className="pl35 pr35">
            <div class="row">
              <div class="col-12 ">
                <div class="pl35 pr35">
                  <div class="row">
                    <div class="col-lg-4  mb-lg-3">
                      <label class="font-weight-bold w-100 text-left ">
                        {" "}
                        Manufacture Date
                      </label>
                      <div class="input-group mb-3 dateinput">
                        {/* <DatePicker selected={startDate} onChange={(date: Date) => setStartDate(date)} /> */}
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Date"
                        />
                        <div class="input-group-append">
                          {" "}
                          <span class="input-group-text">
                            <img src="img/dateicon.png" alt="" />
                          </span>{" "}
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 mb-lg-3">
                      <label class="font-weight-bold w-100 text-left">
                        {" "}
                        Purchase \ Regd. Date
                      </label>
                      <div class="input-group mb-3 dateinput">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Date"
                        />
                        <div class="input-group-append">
                          {" "}
                          <span class="input-group-text">
                            <img src="img/dateicon.png" alt="" />
                          </span>{" "}
                        </div>
                      </div>
                    </div>

                    {(data.prePStatus?.value === "Not Expired" || data.prePStatus?.value === "Expired within 90 days") &&

                      < div class="col-lg-4 mb-lg-3">
                        <label class="font-weight-bold w-100 text-left">
                          {" "}
                          Expiry Date
                        </label>
                        <div class="input-group mb-3 dateinput">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Date"
                          />
                          <div class="input-group-append">
                            {" "}
                            <span class="input-group-text">
                              <img src="img/dateicon.png" alt="" />
                            </span>{" "}
                          </div>
                        </div>
                      </div>
                    }
                  </div>
                  <div class="row ">
                    <div className="col-md-6 mb20">
                      <div className="bxcl  w-100 flex-grow-1 flex-shrink-1">
                        <p className="position-absolute poscl mb10">TP Previous Policy</p>
                        <div className="d-block font-weight-bold mb10">
                          TP Previous Policy Insurer
                        </div>
                        <select className="custom-select ng-pristine ng-empty ng-touched ng-invalid ng-invalid-required"
                          name="TPPreviousInsurer" id="TPPreviousInsurer" required>
                          <option label="ACKO GENERAL INSURANCE LIMITED" value="42">
                            ACKO GENERAL INSURANCE LIMITED
                          </option>

                        </select>
                        <div className="text-danger text-left">
                          <span>
                            TP previous policy insurer is required.
                          </span>
                        </div>

                      </div>

                    </div>
                    <div className="col-md-6 mb20">
                      <div className="bxcl  w-100 flex-grow-1 flex-shrink-1 ">
                        <p className="position-absolute poscl mb10">TP Previous Policy</p>
                        <div className="d-block font-weight-bold mb10">
                          TP Policy Expiry Date
                        </div>


                        <div class="input-group mb-3 dateinput">
                          {/* <DatePicker selected={startDate} onChange={(date: Date) => setStartDate(date)} /> */}
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Date"
                          />
                          <div class="input-group-append">
                            {" "}
                            <span class="input-group-text">
                              <img src="img/dateicon.png" alt="" />
                            </span>{" "}
                          </div>
                        </div>
                      </div>

                    </div>
                    <div class="col-lg-6 mb20">
                      <div class="bxcl  w-100 flex-grow-1 flex-shrink-1">
                        <p class=" mb10 position-absolute poscl d-none d-lg-block">
                          Customer Type
                        </p>
                        <div class="font-weight-bold mb10">
                          Vehicle Owned By
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                          <input
                            type="radio"
                            id="customRadioInline12"
                            name="customRadioInline1"
                            class="custom-control-input"
                          />
                          <label
                            class="custom-control-label"
                            for="customRadioInline12"
                          >
                            Individual
                          </label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                          <input
                            type="radio"
                            id="customRadioInline13"
                            name="customRadioInline1"
                            class="custom-control-input"
                          />
                          <label
                            class="custom-control-label"
                            for="customRadioInline13"
                          >
                            Organization
                          </label>
                        </div>
                      </div>
                    </div>




                    {data.proPType !== "OD Only" &&
                      < div class="col-lg-6 mb20">
                        <div class="bxcl  w-100 flex-grow-1 flex-shrink-1">
                          <p class="position-absolute poscl mb10 d-none d-lg-block">
                            Licence validity
                          </p>
                          <div class="d-block font-weight-bold mb10">
                            Do you have a valid driving license?
                          </div>
                          <div class="custom-control custom-radio custom-control-inline">
                            <input
                              type="radio"
                              id="customRadioInline15"
                              name="customRadioInline1"
                              class="custom-control-input"
                            />
                            <label
                              class="custom-control-label"
                              for="customRadioInline15"
                            >
                              Yes
                            </label>
                          </div>
                          <div class="custom-control custom-radio custom-control-inline">
                            <input
                              type="radio"
                              id="customRadioInline16"
                              name="customRadioInline1"
                              class="custom-control-input"
                            />
                            <label
                              class="custom-control-label"
                              for="customRadioInline16"
                            >
                              No
                            </label>
                          </div>
                        </div>
                      </div>
                    }
                    <div class="col-lg-6 mb20">
                      <div class="bxcl  w-100 flex-grow-1 flex-shrink-1">
                        <p class="position-absolute poscl mb10 d-none d-lg-block">
                          PA Cover
                        </p>
                        <div class="d-block font-weight-bold mb10">
                          Do you have already Personal Accidental (PA) cover of
                          Rs. 1500000?
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                          <input
                            type="radio"
                            id="customRadioInline15"
                            name="customRadioInline1"
                            class="custom-control-input"
                          />
                          <label
                            class="custom-control-label"
                            for="customRadioInline15"
                          >
                            Individual
                          </label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                          <input
                            type="radio"
                            id="customRadioInline16"
                            name="customRadioInline1"
                            class="custom-control-input"
                          />
                          <label
                            class="custom-control-label"
                            for="customRadioInline16"
                          >
                            Organization
                          </label>
                        </div>
                      </div>
                    </div>
                    {console.log(data.prePStatus?.value)}
                    {(data.prePStatus?.value === "Not Expired" || data.prePStatus?.value === "Expired within 90 days") &&
                      <>

                        <div class="col-lg-6 mb20">
                          <div class="bxcl  w-100 flex-grow-1 flex-shrink-1 h-100 ">
                            <p class="position-absolute poscl mb10 d-none d-lg-block">
                              Owner Change
                            </p>
                            <div class="d-block font-weight-bold mb10">
                              Owner changed in last 12 months?
                            </div>
                            <div class="d-flex">
                              <div class="custom-control custom-radio custom-control-inline">
                                <input
                                  type="radio"
                                  id="customRadioInline15"
                                  name="customRadioInline1"
                                  class="custom-control-input"
                                />
                                <label
                                  class="custom-control-label"
                                  for="customRadioInline15"
                                >
                                  Yes
                                </label>
                              </div>
                              <div class="custom-control custom-radio custom-control-inline">
                                <input
                                  type="radio"
                                  id="customRadioInline16"
                                  name="customRadioInline1"
                                  class="custom-control-input"
                                />
                                <label
                                  class="custom-control-label"
                                  for="customRadioInline16"
                                >
                                  No
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-6 mb-3 mb-xl-0">
                          <div class="bxcl  w-100 flex-grow-1 flex-shrink-1 h-100">
                            <p class="position-absolute poscl mb10 d-none d-lg-block">
                              Claim
                            </p>
                            <div class="d-block font-weight-bold mb10">
                              Claim made in expiring policy?
                            </div>
                            <div class="custom-control custom-radio custom-control-inline">
                              <input
                                type="radio"
                                id="customRadioInline15"
                                name="customRadioInline1"
                                class="custom-control-input"
                              />
                              <label
                                class="custom-control-label"
                                for="customRadioInline15"
                              >
                                Yes
                              </label>
                            </div>
                            <div class="custom-control custom-radio custom-control-inline">
                              <input
                                type="radio"
                                id="customRadioInline16"
                                name="customRadioInline1"
                                class="custom-control-input"
                              />
                              <label
                                class="custom-control-label"
                                for="customRadioInline16"
                              >
                                No
                              </label>
                            </div>
                          </div>
                        </div>
                        {console.log(data.proPType)}
                        {

                          data.proPType !== "TP Only" && < div class="col-lg-6 mb-3 mb-xl-0">
                            <div class="bxcl  w-100 flex-grow-1 flex-shrink-1">
                              <p class="position-absolute poscl mb10 d-none d-lg-block">
                                NCB
                              </p>
                              <div class="d-block font-weight-bold mb10">
                                Previous No Calim Bonus (NCB)
                              </div>
                              <select class="custom-select">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                          </div>}
                      </>
                    }
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

export default VehicleDetailsAll;
