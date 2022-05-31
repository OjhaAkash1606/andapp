import React, { useContext } from "react";
import contextRtoCityOnSelect from '../../App';
function BikePlanList() {

  const winBack = useContext(contextRtoCityOnSelect);

  window.onpopstate = () => { winBack.setActivePageIndex(7); };

  // 
  return (
    <main role="main" class="bike bike-planlist-page  bdrbtm greybg pt-4 pb-5">
      <div class="container-fluid   pdbtm">
        <div class="row">
          <div class="col-12  mb15">
            <div class="container">
              <div class="row">
                <div class="col-12 mb-1">
                  <uib-progressbar value="55" striped="true"></uib-progressbar>
                </div>
              </div>
              <div class="plan-list-top">
                <div class="row">
                  <div class="col-12 pt-2 pb-2  ">
                    <div class="row justify-content-between flex-lg-wrap">
                      <div class="col-sm-12 col-lg-auto col-xl-auto">
                        <div class="d-flex flex-wrap">
                          {" "}
                          <span class="d-browntext font-weight-bold pr-1">
                            Qutation Number :
                          </span>{" "}
                          AUIBMTRPC20190516045655{" "}
                        </div>
                      </div>

                      <div class="d-none d-lg-block col-sm-12 col-lg-auto col-xl-auto  text-lg-right">
                        {" "}
                        <a href="#" class="pinktext">
                          {" "}
                          <i class="fas fa-chevron-left"></i> Back{" "}
                        </a>{" "}
                      </div>
                    </div>
                    <div class="row justify-content-between">
                      <div class=" d-none d-xl-block col-12 text-center font-weight-bold mb-2">
                        Compare Two Wheeler Insurance
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12 ">
            <div class="container">
              <div class=" wh-bg border-radius-5 forpd shadow">
                <div class="bdr border-radius-5 p-3 mb-3 position-relative">
                  <div class="absolutepostext">
                    <strong> Vehicle Details </strong>
                  </div>
                  <div class="row">
                    <div class="col-auto">
                      <strong> RTO & City : </strong> GJ-01 Ahmedabad
                    </div>
                    <div class="col-auto">
                      <strong> Vehicle Model :</strong> BAJAJ AVENGER CRUISE
                      (220 CC)-PETROL
                    </div>
                  </div>
                </div>
                <div class="row planlist-row">
                  <div class="col-lg-auto leftside menusidebar forcustom">
                    <div class="icon-menu  d-xs-block d-sm-block d-lg-none">
                      {" "}
                      <i class="fas fa-sliders-h"></i>
                    </div>
                    <div class="card openpanel">
                      <div class="card-header dark-blue">
                        <h5 class="m-0">Change IDV </h5>
                      </div>
                      <div class="card-body darkgreybg font12">
                        <h3 class="mb10  mt0 mb-2">
                          Set your IDV
                          <div class="mb-3">
                            <small>(insured declared value)</small>
                          </div>
                        </h3>
                        <div class="custom-control custom-radio mb-2">
                          <input
                            type="radio"
                            id="customRadio1"
                            name="customRadio"
                            class="custom-control-input"
                            ng-click="ShowPassport('N')"
                          />
                          <label
                            class="custom-control-label"
                            for="customRadio1"
                          >
                            Is BI-Fuel Kit?
                          </label>
                        </div>
                        <div class="form-group">
                          <input type="text" class="form-control inputtext" />
                          <small> ( Min - Infinity , Max - -Infinity )</small>
                        </div>

                        <div class="custom-control custom-radio mb-2">
                          <input
                            type="radio"
                            id="customRadio2"
                            name="customRadio"
                            class="custom-control-input"
                            ng-click="ShowPassport('Y')"
                          />
                          <label
                            class="custom-control-label"
                            for="customRadio2"
                          >
                            PA Cover for unnamed person?
                          </label>
                        </div>
                        <div ng-show="IsVisible">
                          <input
                            type="text"
                            id="txtPassportNumber"
                            class="form-control"
                          />
                          <small> ( Min - Infinity , Max - -Infinity )</small>
                          <select class="custom-select">
                            <option selected>Low to High</option>
                            <option value="1">Boots</option>
                            <option value="2">Shoes</option>
                            <option value="3">Feet</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <uib-accordion close-others="oneAtATime" class="lefttoggle">
                      <div
                        uib-accordion-group
                        class="panel-default"
                        ng-init="status.open = true"
                        is-open="status.open"
                      >
                        <uib-accordion-heading>
                          {" "}
                          Additional Cover{" "}
                          <i
                            class="pull-right fa ico"
                            ng-class="{'fa-minus': status.open, 'fa-plus': !status.open}"
                          ></i>{" "}
                        </uib-accordion-heading>
                        <div class="custom-control custom-checkbox mb-3">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="customCheck1"
                            ng-model="ShowPassport1"
                          />
                          <label
                            class="custom-control-label"
                            for="customCheck1"
                          >
                            Check this custom checkbox
                          </label>
                        </div>
                        <div class="custom-control custom-checkbox mb-3">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="customCheck2"
                          />
                          <label
                            class="custom-control-label"
                            for="customCheck2"
                          >
                            Check this custom checkbox
                          </label>
                        </div>
                      </div>
                      <div
                        uib-accordion-group
                        class="panel-default"
                        is-open="status1.open"
                      >
                        <uib-accordion-heading>
                          {" "}
                          Other Details
                          <i
                            class="pull-right fa ico"
                            ng-class="{'fa-minus': status1.open, 'fa-plus': !status1.open}"
                          ></i>{" "}
                        </uib-accordion-heading>
                        <p class="mb-2">
                          <span> Manufacture Date : </span>
                          <label>
                            <strong> 01-Oct-2020 </strong>
                          </label>
                        </p>
                        <p class="mb-2">
                          <span> Purchase Date : </span>
                          <label>
                            <strong>01-Oct-2020 </strong>
                          </label>
                        </p>
                        <p class="mb-2">
                          <span> Registration Date : </span>
                          <label>
                            <strong>01-Oct-2020 </strong>
                          </label>
                        </p>
                        <p class="mb-2">
                          <span> Policy expiry date : </span>
                          <label>
                            <strong>01-Oct-2020 </strong>
                          </label>
                        </p>
                      </div>
                      <div
                        uib-accordion-group
                        class="panel-default"
                        is-open="status2.open"
                      >
                        <uib-accordion-heading>
                          {" "}
                          Discount{" "}
                          <i
                            class="pull-right fa ico"
                            ng-class="{'fa-minus': status2.open, 'fa-plus': !status2.open}"
                          ></i>{" "}
                        </uib-accordion-heading>
                        <div class="custom-control custom-checkbox mb-3">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="customCheck1"
                            ng-model="ShowPassport1"
                          />
                          <label
                            class="custom-control-label"
                            for="customCheck1"
                          >
                            Check this custom checkbox
                          </label>
                        </div>
                        <div class="custom-control custom-checkbox mb-3">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="customCheck2"
                          />
                          <label
                            class="custom-control-label"
                            for="customCheck2"
                          >
                            Check this custom checkbox
                          </label>
                        </div>
                      </div>
                    </uib-accordion>

                    <div class="text-center mt15 mb15">
                      <button class="btn recalculatebtn  pl5 pr5 btn-block">
                        Re-Calculates Quote
                      </button>
                    </div>

                    <uib-accordion close-others="oneAtATime" class="lefttoggle">
                      <div
                        uib-accordion-group
                        class="panel-default pinkback"
                        is-open="status11.open"
                      >
                        <uib-accordion-heading>
                          {" "}
                          Insurance Company 11
                          <i
                            class="pull-right fa ico"
                            ng-class="{'fa-minus': status11.open, 'fa-plus': !status11.open}"
                          ></i>
                        </uib-accordion-heading>
                        <div class="form-group">
                          <section id="search" class="searchicon">
                            <div
                              angucomplete-alt
                              id="ex1"
                              placeholder="Search countries"
                              maxlength="50"
                              pause="100"
                              selected-object="selectedCountry"
                              local-data="countries"
                              search-fields="name"
                              title-field="name"
                              minlength="1"
                              input-class="form-control search-box"
                              match-class="highlight"
                            ></div>
                          </section>
                        </div>
                        <div class="custom-control custom-checkbox mb-3">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="customCheck1"
                            ng-model="ShowPassport1"
                          />
                          <label
                            class="custom-control-label"
                            for="customCheck1"
                          >
                            IFFCOTOKIO
                          </label>
                        </div>
                        <div class="custom-control custom-checkbox mb-3">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="customCheck1"
                            ng-model="ShowPassport1"
                          />
                          <label
                            class="custom-control-label"
                            for="customCheck1"
                          >
                            TATA
                          </label>
                        </div>
                        <div class="custom-control custom-checkbox mb-3">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="customCheck1"
                            ng-model="ShowPassport1"
                          />
                          <label
                            class="custom-control-label"
                            for="customCheck1"
                          >
                            {" "}
                            NEWINDIA
                          </label>
                        </div>
                      </div>
                    </uib-accordion>
                  </div>

                  <div class="col-lg righside common--cl">
                    <div class="row">
                      <div class="col-sm-12 ">
                        <div class="mb-3  topbar">
                          <div class="row justify-content-between align-items-center ">
                            <div class="col-sm-auto bltext">
                              {" "}
                              <strong ng-click="onloadpop()">
                                Showing 8 Results
                              </strong>
                            </div>
                            <div class="col-sm-auto">
                              {" "}
                              <a
                                href="#"
                                class="dflex align-center"
                                ng-click="editpop()"
                              >
                                {" "}
                                <img
                                  src="img/edit.png"
                                  alt=" "
                                  class="mr-2 align-self-center"
                                />
                              </a>
                              <a
                                href="#"
                                class="dflex align-center"
                                ng-click="emailpop()"
                              >
                                {" "}
                                <img
                                  src="img/email.png"
                                  alt=""
                                  class="mr-2 align-self-center"
                                />{" "}
                              </a>
                              <a
                                href="#"
                                class="dflex align-center"
                                ng-click="emailpop()"
                              >
                                {" "}
                                <img
                                  src="img/whatsup.png"
                                  alt=""
                                  class="mr-2 align-self-center"
                                />{" "}
                              </a>
                              <a
                                href="#"
                                class="dflex align-center"
                                ng-click="emailpop()"
                              >
                                {" "}
                                <img
                                  src="img/pdf.png"
                                  alt=""
                                  class="mr-2 align-self-center"
                                />{" "}
                              </a>
                            </div>

                            <div class="col-sm-auto">
                              <div class="showres premium-sorting text-md-right text-lg-right  text-sm-right d-xl-flex">
                                <span class="text-nowrap sortby d-none d-xl-inline-block">
                                  Sort By :
                                </span>
                                <select class="custom-select">
                                  <option selected>Low to High</option>
                                  <option value="1">Boots</option>
                                  <option value="2">Shoes</option>
                                  <option value="3">Feet</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-12 pb-3 ">
                        <div class="planlistdiv mb-3">
                          <div class="row lesspadding justify-content-between align-items-center ">
                            <div class="col-auto  col-xl-auto order-1 ">
                              <div class="p-1 mb-2 mb-md-0">
                                <img
                                  src="img/comp-logo/acko.png"
                                  alt=""
                                  class="img-fluid productlogo "
                                />
                              </div>
                            </div>
                            <div class="col-xl order-3 order-md-2 order-xl-2  col-md-auto">
                              <p class="font-weight-bold mb-2 text-break ">
                                Private Car Liability Policy 11
                              </p>
                              <div class="premiumlinktext mb-2">
                                <a
                                  href="#"
                                  class="pinktext"
                                  ng-click="openModal()"
                                >
                                  {" "}
                                  Premium Breakup
                                </a>{" "}
                                <a href="#" class="pinktext">
                                  {" "}
                                  Add On
                                </a>
                              </div>
                            </div>
                            <div class="col-xl-auto order-4 col-md-12 order-xl-3 order-md-4 d-flex flex-wrap font14 coverdiv">
                              <div class="d-flex align-items-center forcustom mb-2  mr-2 mr-xl-0 ">
                                <span class="text-nowrap pr-2">Cover For </span>
                                <strong>2 Yrs</strong>
                              </div>

                              <div class="row lesspadding  mr-2 mr-xl-0 mb-2">
                                <div class="col-auto">
                                  {" "}
                                  <strong class="pinktext">NCB</strong>{" "}
                                  <span>: 45% </span>{" "}
                                </div>
                                <div class="col-auto">
                                  {" "}
                                  <strong class="pinktext">IDV</strong>{" "}
                                  <span>: 145326</span>{" "}
                                </div>
                              </div>
                              <p class="mb-0 font-weight-bold">
                                1 Year OD +5 Years TP
                              </p>
                            </div>

                            <div class=" col-auto col-xl-auto order-2 col-md-auto order-md-3 order-xl-4 forcustom d-md-flex justify-content-md-end">
                              <div class="mr-xl-2 mb-2 mb-md-0">
                                <div class="font-weight-bold font14 text-center">
                                  Buy Now
                                </div>
                                <button class="btn btn-pink">
                                  {" "}
                                  <i class="fas fa-rupee-sign mr-1"></i>3,47,800{" "}
                                </button>
                                <p class="text-center mt-1 mb-1 font14">
                                  Excluding GST
                                </p>
                              </div>
                            </div>
                          </div>

                          <div class="bdrtop p5 mt10 greybg">
                            <div class="row  addon-detailtext">
                              <div class="col-sm-6 col-md-4">
                                <div class="bullet">Emergency Cover : NA</div>
                              </div>
                              <div class="col-sm-6 col-md-4">
                                <div class="bullet">
                                  Zero Depreciation : Applicable
                                </div>
                              </div>
                              <div class="col-sm-6 col-md-4">
                                <div class="bullet">Return to Invoice : NA</div>
                              </div>
                              <div class="col-sm-6 col-md-4">
                                <div class="bullet">
                                  Road Side Assistance : NA
                                </div>
                              </div>
                              <div class="col-sm-6 col-md-4">
                                <div class="bullet">Emergency Cover : NA</div>
                              </div>
                              <div class="col-sm-6 col-md-4">
                                <div class="bullet">
                                  Zero Depreciation : Applicable
                                </div>
                              </div>
                              <div class="col-sm-6 col-md-4">
                                <div class="bullet">Return to Invoice : NA</div>
                              </div>
                              <div class="col-sm-6 col-md-4">
                                <div class="bullet">
                                  Road Side Assistance : NA
                                </div>
                              </div>
                              <div class="col-sm-6 col-md-4">
                                <div class="bullet">Emergency Cover : NA</div>
                              </div>
                              <div class="col-sm-6 col-md-4">
                                <div class="bullet">
                                  Zero Depreciation : Applicable
                                </div>
                              </div>
                              <div class="col-sm-6 col-md-4">
                                <div class="bullet">Return to Invoice : NA</div>
                              </div>
                              <div class="col-sm-6 col-md-4">
                                <div class="bullet cross">
                                  Road Side Assistance : NA
                                </div>
                              </div>
                              <div class="col-sm-6 col-md-4">
                                <div class="bullet included">
                                  Road Side Assistance : NA
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-sm-12">
                        <div class="dontgetquote pl10 pr10 pt20 pb20">
                          <p class="lightblue-text text-center mb-0 ">
                            Insurance provider(s) which didn't produce quotes
                            for the selected combination. <br />
                            Might be possible reason at insurance company's end
                            like MMV decline or RTO restricted or some technical
                            issue.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-sm-12  pb20">
                        <div class="border-top-2 pt15">
                          <div class="row sm--logos flex-wrap">
                            <div class="col-xs-6 col-sm-3">
                              <div class="whitebg  mb-2 d-flex justify-content-center">
                                {" "}
                                <img
                                  src="img/comp-logo/acko.png"
                                  alt=""
                                  class="img-fluid"
                                />{" "}
                              </div>
                            </div>
                            <div class="col-xs-6 col-sm-3">
                              <div class="whitebg mb-3 d-flex justify-content-center">
                                {" "}
                                <img
                                  src="img/comp-logo/acko.png"
                                  alt=""
                                  class="img-fluid"
                                />{" "}
                              </div>
                            </div>
                            <div class="col-xs-6 col-sm-3 ">
                              <div class="whitebg  mb-3 d-flex justify-content-center">
                                {" "}
                                <img
                                  src="img/comp-logo/acko.png"
                                  alt=""
                                  class="img-fluid"
                                />{" "}
                              </div>
                            </div>
                            <div class="col-xs-6 col-sm-3 ">
                              <div class="whitebg  mb-3 d-flex justify-content-center">
                                {" "}
                                <img
                                  src="img/comp-logo/acko.png"
                                  alt=""
                                  class="img-fluid"
                                />{" "}
                              </div>
                            </div>
                            <div class="col-xs-6 col-sm-3 ">
                              <div class="whitebg  mb-3 d-flex justify-content-center">
                                {" "}
                                <img
                                  src="img/comp-logo/acko.png"
                                  alt=""
                                  class="img-fluid"
                                />{" "}
                              </div>
                            </div>
                            <div class="col-xs-6 col-sm-3 ">
                              <div class="whitebg  mb-3 d-flex justify-content-center">
                                {" "}
                                <img
                                  src="img/comp-logo/acko.png"
                                  alt=""
                                  class="img-fluid"
                                />{" "}
                              </div>
                            </div>
                            <div class="col-xs-6 col-sm-3 ">
                              <div class="whitebg  mb-3 d-flex justify-content-center">
                                <img
                                  src="img/comp-logo/acko.png"
                                  alt=""
                                  class="img-fluid"
                                />{" "}
                              </div>
                            </div>
                            <div class="col-xs-6 col-sm-3 ">
                              <div class="whitebg mb-3 d-flex justify-content-center">
                                {" "}
                                <img
                                  src="img/comp-logo/acko.png"
                                  alt=""
                                  class="img-fluid"
                                />{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="row lesspadding justify-content-center">
                      <div class="col-md-auto font-weight-bold pt10 text-center">
                        Find quote for :
                      </div>
                      <div class="col-md-auto text-center form-group">
                        <select class="custom-select customwidth">
                          <option selected>Salutation</option>
                          <option value="1">Boots</option>
                          <option value="2">Shoes</option>
                          <option value="3">Feet</option>
                        </select>
                      </div>
                      <div class="col-md-auto text-center">
                        <button class="btn btn-pink mt5">Send</button>
                      </div>
                    </div>

                    <div class="multi-select">
                      <label for="">Find quote for:</label>

                      <div class="mb-2 mb-lg-0">
                        <div class="dropdown cq-dropdown" data-name="statuses">
                          <div
                            class="btn-group  w-100"
                            uib-dropdown
                            is-open="status.isopen"
                          >
                            <button
                              id="single-button"
                              type="button"
                              class="btn btn-default btn-sm dropdown-toggle"
                              uib-dropdown-toggle
                              ng-disabled="disabled"
                            >
                              No Disease <span class="caret"></span>
                            </button>

                            <ul
                              class="dropdown-menu"
                              uib-dropdown-menu
                              role="menu"
                              aria-labelledby="single-button"
                            >
                              <li>
                                <label class="radio-btn">
                                  <div class="form-check w-100 pl-0">
                                    <input
                                      type="checkbox"
                                      class="form-check-input"
                                      id="d1{{index}}"
                                      value="Diabetes"
                                      ng-model="disease[$index].IsAsthma"
                                    />
                                    <label
                                      class="form-check-label"
                                      for="d1{{index}}"
                                    >
                                      Diabetes
                                    </label>
                                  </div>
                                </label>
                              </li>
                              <li>
                                <label class="radio-btn">
                                  <div class="form-check w-100 pl-0">
                                    <input
                                      type="checkbox"
                                      class="form-check-input"
                                      id="d2{{index}}"
                                      value="Blood Pressure"
                                      ng-model="disease[$index].IsAsthma"
                                    />
                                    <label
                                      class="form-check-label"
                                      for="d2{{index}}"
                                    >
                                      Blood Pressure
                                    </label>
                                  </div>
                                </label>
                              </li>
                              <li>
                                <label class="radio-btn">
                                  <div class="form-check w-100 pl-0">
                                    <input
                                      type="checkbox"
                                      class="form-check-input"
                                      id="d3{{index}}"
                                      value="Heart Disease"
                                      ng-model="disease[$index].IsAsthma"
                                    />
                                    <label
                                      class="form-check-label"
                                      for="d3{{index}}"
                                    >
                                      Heart Disease
                                    </label>
                                  </div>
                                </label>
                              </li>
                              <li>
                                <label class="radio-btn condition">
                                  <div class="form-check w-100 pl-0">
                                    <input
                                      type="checkbox"
                                      class="form-check-input"
                                      id="d4{{index}}"
                                      value="Other Conditions"
                                      ng-model="disease[$index].IsAsthma"
                                    />
                                    <label
                                      class="form-check-label"
                                      for="d4{{index}}"
                                    >
                                      Other Conditions
                                    </label>
                                    <textarea
                                      class="form-control other-text"
                                      placeholder="Enter Other Conditions"
                                      rows="2"
                                    ></textarea>
                                  </div>
                                </label>
                              </li>
                              <li>
                                <button
                                  type="button"
                                  class="btn btn-xs btn-default save"
                                  value="Save"
                                >
                                  Done11
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <button class="btn btn-pink" ng-click="sendbtn()">
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default BikePlanList;
