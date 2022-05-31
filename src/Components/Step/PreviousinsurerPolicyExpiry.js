import React, { useContext, useEffect, useState } from "react";
import VehicleDetailsHeading from "../Common/Heading/VehicleDetailsHeadiig";
import VehicleDetailsSearch from "../Common/Search/VehicleDetailsSearch";
import { connect } from "react-redux";
import { fetchPreviousInsure } from "../../Redux";
import { contextRtoCityOnSelect } from '../../App';

function PreviousinsurerPolicyExpiry({ insureData, fetchPreviousInsure, setMethod }) {


  const policyContext = useContext(contextRtoCityOnSelect);
  const value = JSON.parse(
    (window.onload = sessionStorage.getItem("RequestObject"))
  );

  let insuer = [];
  let allInsuer = [];
  for (let i = 0; i < insureData?.users?.length; i++) {
    insuer.push(insureData.users[i]);
  }

  useEffect(() => {
    fetchPreviousInsure();
  }, [fetchPreviousInsure]);

  if (insuer.length > 8) {
    for (let i = 0; i < 8; i++) {
      allInsuer.push(insuer[i]);
    }
  }

  return (
    <>
      <VehicleDetailsHeading label={"Previous insurer & Policy Expiry"} />

      {value.PolicyType === "New" ? (
        <div className="row">
          <div className="col-12">
            <div className="pl35 pr35">
              <div className="row">
                {/* New Policy Type */}

                <div className="col-12 mb30">
                  <div className="bxcl  w-100 flex-grow-1 flex-shrink-1">
                    <p className="position-absolute poscl mb10 d-none d-lg-block font-weight-bold blcl">
                      Proposed Policy Type
                    </p>

                    <div className="custom-control custom-radio custom-control-inline">
                      <input
                        type="radio"
                        id="customRadioInline15"
                        name="customRadioInline1"
                        className="custom-control-input"
                      />
                      <label
                        className="custom-control-label"
                        for="customRadioInline15"
                      >
                        Comprehensive (OD + TP)
                      </label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                      <input
                        type="radio"
                        id="customRadioInline16"
                        name="customRadioInline1"
                        className="custom-control-input"
                      />
                      <label
                        className="custom-control-label"
                        for="customRadioInline16"
                      >
                        TP Only
                      </label>
                    </div>
                  </div>
                </div>

                <div className="row ng-scope">
                  <div className="col-md-auto pt-2">
                    <label className="font-weight-bold">
                      Select Policy Term
                    </label>
                  </div>
                  <div className="col-md d-flex">
                    <select
                      className="custom-select m-width ng-pristine ng-valid ng-not-empty ng-touched"
                      ng-change="ChangeBusinessTypeValue(ddlBusinessType)"
                      ng-model="ddlBusinessType"
                      name="BusinessType"
                      id="BusinessType"
                    >
                      <option value="2">
                        1 Year Own Damage + 5 Years Third Party
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : value.PolicyType === "Renewal" ? (
        <div className="row">
          <div className="col-12">
            <div className="pl35 pr35">
              <div className="row">
                {/* Renwel Policy Type */}

                <div className="col-12 mb30">
                  <div className="bxcl  w-100 flex-grow-1 flex-shrink-1">
                    <p className="position-absolute poscl mb10 d-none d-lg-block font-weight-bold blcl">
                      Proposed Policy Type
                    </p>

                    <div className="custom-control custom-radio custom-control-inline">
                      <input
                        type="radio"
                        id="customRadioInline15"
                        name="customRadioInline1"
                        className="custom-control-input"
                        value="Comprehensive (OD + TP)"
                        onChange={(e) => setMethod.setProPType(e.target.defaultValue)}
                      />
                      <label
                        className="custom-control-label"
                        for="customRadioInline15"
                      >
                        Comprehensive (OD + TP)
                      </label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                      <input
                        type="radio"
                        id="customRadioInline16"
                        name="customRadioInline1"
                        className="custom-control-input"
                        value={"OD Only"}
                        onChange={(e) => setMethod.setProPType(e.target.defaultValue)}
                      />
                      <label
                        className="custom-control-label"
                        for="customRadioInline16"
                      >
                        OD Only
                      </label>
                    </div>

                    <div className="custom-control custom-radio custom-control-inline">
                      <input
                        type="radio"
                        id="customRadioInline17"
                        name="customRadioInline1"
                        value={"TP Only"}
                        className="custom-control-input"
                        onChange={(e) => setMethod.setProPType(e.target.defaultValue)}
                      />
                      <label
                        className="custom-control-label"
                        for="customRadioInline17"
                      >
                        TP Only
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xl-6 mb-3 mb20">
                  <div className="bxcl  w-100 flex-grow-1 flex-shrink-1">
                    <p className="position-absolute poscl mb10 d-none d-lg-block font-weight-bold blcl">
                      Previous Policy Expiring Status
                    </p>
                    <div className="custom-control custom-radio custom-control-inline">
                      <input
                        type="radio"
                        id="customRadioInline18"
                        name="customRadioInline2"
                        className="custom-control-input"
                        value={"Not Expired"}
                        onChange={(e) => setMethod.setPrePStatus({ value: e.target.defaultValue, id: e.target.checked })}
                      />
                      <label
                        className="custom-control-label"
                        for="customRadioInline18"
                      >
                        Not Expired
                      </label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                      <input
                        type="radio"
                        id="customRadioInline19"
                        name="customRadioInline2"
                        className="custom-control-input"
                        value={"Expired within 90 days"}
                        onChange={(e) => setMethod.setPrePStatus({ value: e.target.defaultValue, id: e.target.checked })}
                      />
                      <label
                        className="custom-control-label"
                        for="customRadioInline19"
                      >
                        Expired within 90 days
                      </label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                      <input
                        type="radio"
                        id="customRadioInline20"
                        name="customRadioInline2"
                        className="custom-control-input"
                        value={"Expired with more than 90 days"}
                        onChange={(e) => setMethod.setPrePStatus({ value: e.target.defaultValue, id: e.target.checked })}
                      />
                      <label
                        className="custom-control-label"
                        for="customRadioInline20"
                      >
                        Expired with more than 90 days
                      </label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                      <input
                        type="radio"
                        id="customRadioInline21"
                        name="customRadioInline2"
                        className="custom-control-input"
                        value={"Don't remember Previous insurer"}
                        onChange={(e) => setMethod.setPrePStatus({ value: e.target.defaultValue, id: e.target.checked })}
                      />
                      <label
                        className="custom-control-label"
                        for="customRadioInline21"
                      >
                        Don't remember Previous insurer
                      </label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                      <input
                        type="radio"
                        id="customRadioInline22"
                        name="customRadioInline2"
                        className="custom-control-input"
                        value={"I bought an old vehicle"}
                        onChange={(e) => setMethod.setPrePStatus({ value: e.target.defaultValue, id: e.target.checked })}
                      />
                      <label
                        className="custom-control-label"
                        for="customRadioInline22"
                      >
                        I bought an old vehicle
                      </label>
                    </div>
                  </div>
                </div>
                {/* {console.log(prePStatus)} */}
                {setMethod.prePStatus?.value === "Not Expired" ||
                  setMethod.prePStatus?.value === "Expired within 90 days" || setMethod.prePStatus?.value === undefined ? (
                  <>
                    <div className="col-xl-6 mb-3  mb20">
                      <div className="bxcl  w-100 flex-grow-1 flex-shrink-1 h-100">
                        <p className="position-absolute poscl mb10 d-none d-lg-block font-weight-bold blcl">
                          Previous Policy Type
                        </p>

                        <div className="custom-control custom-radio custom-control-inline">
                          <input
                            type="radio"
                            id="customRadioInline23"
                            name="customRadioInline3"
                            className="custom-control-input"
                            value={"Comprehensive (OD + TP)"}
                            onChange={(e) => setMethod.setPrePType(e.target.defaultValue)}
                          />
                          <label
                            className="custom-control-label"
                            for="customRadioInline23"
                          >
                            Comprehensive (OD + TP)
                          </label>
                        </div>
                        {setMethod.proPType === "OD Only" ? (
                          <div className="custom-control custom-radio custom-control-inline">
                            <input
                              type="radio"
                              id="customRadioInline24"
                              name="customRadioInline3"
                              className="custom-control-input"
                              value={"Own Damage"}
                              onChange={(e) => setMethod.setPrePType(e.target.defaultValue)}
                            />
                            <label
                              className="custom-control-label"
                              for="customRadioInline24"
                            >
                              Own Damage
                            </label>
                          </div>
                        ) : (
                          <div className="custom-control custom-radio custom-control-inline">
                            <input
                              type="radio"
                              id="customRadioInline25"
                              name="customRadioInline3"
                              className="custom-control-input"
                              value={"Third Party"}
                              onChange={(e) => setMethod.setPrePType(e.target.defaultValue)}
                            />
                            <label
                              className="custom-control-label"
                              for="customRadioInline25"
                            >
                              Third Party
                            </label>
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                ) : null}
              </div>
              {setMethod.prePStatus?.value === "Not Expired" ||
                setMethod.prePStatus?.value === "Expired within 90 days" || setMethod.prePStatus?.value === undefined ? (
                <>
                  <label className="text-left w-100 font-weight-bold">
                    Previous insurer & Policy Expiry
                  </label>

                  <VehicleDetailsSearch
                    type={"text"}
                    list={"auto-complete"}
                    placeholder={"Search Previous insuer"}
                    id={"auto-complete"}
                    value={""}
                    items={insuer}
                  />

                  <div className="policylist mb-3">
                    <ul>
                      {insuer.length > 8
                        ? allInsuer.map((item, i) => (
                          <>
                            <li className="active" key={i} onClick={() => (policyContext.handleOnPrePolicy(item), policyContext.goNextPage())}>
                              <a>{item.CShortName}</a>
                            </li>
                          </>
                        ))
                        : insuer.map((item, i) => (
                          <>
                            <li className="active" key={i}>
                              <a>{item.CShortName}</a>
                            </li>
                          </>
                        ))}
                    </ul>
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    insureData: state.Insurer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPreviousInsure: () => dispatch(fetchPreviousInsure()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PreviousinsurerPolicyExpiry);
