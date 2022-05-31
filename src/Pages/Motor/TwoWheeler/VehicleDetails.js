import React, { /* createContext, */ useContext, useEffect, useState } from "react";
import Input from "../../../Components/Common/Input";
import Wizard from "../../../Components/Wizard/Wizard";
import RtoCity from "../../../Components/Step/RtoCity";
import Make from "../../../Components/Step/Make";
import Model from "../../../Components/Step/Model";
import Variant from "../../../Components/Step/Variant";
import ManufactureYear from "../../../Components/Step/ManufactureYear";
import PreviousinsurerPolicyExpiry from "../../../Components/Step/PreviousinsurerPolicyExpiry";
import VehicleDetailsAll from "../../../Components/Step/VehicleDetailsAll";
import { contextRtoCityOnSelect } from '../../../App';

function VehicleDetails() {

  const [proPType, setProPType] = useState();
  const [prePType, setPrePType] = useState();
  const [prePStatus, setPrePStatus] = useState();

  const getValueFromContext = useContext(contextRtoCityOnSelect);
  // console.log(getValueFromContext.getRtoCity);



  const [policy, setPolicy] = useState();
  const [rtoCity, setRtoCity] = useState();
  const [makeValue, setMakeValue] = useState();
  const [modelValue, setModelValue] = useState();
  const [variantValue, setVariantValue] = useState();

  /* const getRtoCity = (item) => {
    setRtoCity(item);
  }; */



  useEffect(() => {
    const value = JSON.parse(window.onload = sessionStorage.getItem("RequestObject"));
    // console.log();
    setPolicy(value.PolicyType);
    // console.log(getRtoCity);
    setRtoCity(getValueFromContext.getRtoCity);
    setMakeValue(getValueFromContext.getMake);
    setModelValue(getValueFromContext.getModel?.Name);
    setVariantValue(getValueFromContext.getVariant);



  }, [getValueFromContext]);
  // console.log(importRtoCity);



  useEffect(() => {
    // const selectRtoCity = JSON.parse(window.onload = sessionStorage.getItem("RtoCity"));
    // console.log(importRtoCity);
    // setRtoCity(importRtoCity);
  });

  // console.log(rtoCity);
  // window.onload = sessionStorage.getItem("Policy Type");

  // console.log(getValueFromContext);



  return (
    <main role="main">
      <section className="bg-gray padd plan-info">
        <div className="container max-1100">
          <div className="row">
            <div className="col-md-4">
              <div className="w-box">
                <div className="padd-md w-100">
                  <div className="form-group floating-box">
                    <Input
                      type={"text"}
                      placeholder={"Policy Type"}
                      disabled={"disabled"}
                      readonly={"readonly"}
                      label={"Policy Type"}
                      value={policy}
                    />
                  </div>
                  <div className="form-group floating-box">
                    <Input
                      type={"text"}
                      placeholder={"RTO"}
                      disabled={"disabled"}
                      readonly={"readonly"}
                      label={"RTO & City"}
                      value={rtoCity}

                    />
                  </div>
                  <div className="form-group floating-box">
                    <Input
                      type={"text"}
                      placeholder={"Make"}
                      disabled={"disabled"}
                      readonly={"readonly"}
                      label={"Make"}
                      value={makeValue}
                    />
                  </div>
                  <div className="form-group floating-box">
                    <Input
                      type={"text"}
                      placeholder={"Model"}
                      disabled={"disabled"}
                      readonly={"readonly"}
                      label={"Model"}
                      value={modelValue}
                    />
                  </div>
                  <div className="form-group floating-box">
                    <Input
                      type={"text"}
                      placeholder={"Variant"}
                      disabled={"disabled"}
                      readonly={"readonly"}
                      label={"Variant"}
                      value={variantValue}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-8">
              <div className="w-box text-center b-info">
                <div className="plan-content bike-before-plan ">
                  <div className="row forminheight">
                    <div className="col-12">
                      <Wizard>
                        {/* <getRtoCityContext.Provider value={getRtoCity}> */}
                        <RtoCity />
                        <Make />
                        <Model />
                        <Variant />
                        <ManufactureYear />
                        <PreviousinsurerPolicyExpiry
                          setMethod={{
                            proPType, setProPType, prePType, setPrePType,
                            prePStatus, setPrePStatus
                          }} />
                        <VehicleDetailsAll data={{ proPType, prePType, prePStatus }} />
                      </Wizard>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export { VehicleDetails };
