import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import { contextRtoCityOnSelect } from '../../App';

function Bikeindex() {

  const importContext = useContext(contextRtoCityOnSelect);



  useEffect(() => {
    importContext.setActivePageIndex(0);
    importContext.setGetMake("");
    importContext.setGetRtoCity("");
    importContext.setGetModel("");
    importContext.setGetVariant("");
  }, [importContext]);

  if (performance.navigation.type === 1) {
    window.sessionStorage.clear();
    // clearing the sessionstorage data
  }


  return (
    <main role="main">
      <section className="bg-gray padd ins-index bikediv">
        <div className="container max-1100">
          <div className="row">
            <div className="col-12 col-lg-8">
              <div className="w-box text-center">
                <div className="padd-md">
                  <h1 className="mb-0">
                    <span> Two Wheeler</span> Insurance
                  </h1>
                </div>

                <Tabs active="active" class="fortabheight">
                  <TabList>
                    <Tab>BrandNew</Tab>
                    <Tab>Renewal</Tab>
                    <Tab>Already have our quotation?</Tab>
                  </TabList>

                  <TabPanel>
                    <div class="padd-md">
                      <img
                        src="img/bike-vector.png"
                        class="img-fluid"
                        alt="bike-vector"
                      />
                    </div>
                    <div class="b-center bg-gray bottom-box">
                      <Link to="/VehicleDetails" class="btn btn-pink" onClick={() => sessionStorage.setItem("RequestObject", JSON.stringify({ "PolicyType": "New" }))}>
                        Proceed
                      </Link>
                      {/* <a href="#" class="btn btn-pink">
                        Proceed{" "}
                      </a> */}
                    </div>
                  </TabPanel>
                  {<TabPanel>
                    <div class="padd-md">
                      <img
                        src="img/bike-vector.png"
                        class="img-fluid"
                        alt="bike-vector"
                      />
                    </div>
                    <div class="b-center bg-gray bottom-box">
                      <Link to="/VehicleDetails" class="btn btn-pink" onClick={() => sessionStorage.setItem("RequestObject", JSON.stringify({ "PolicyType": "Renewal" }))}>
                        Proceed
                      </Link>
                      {/* <a href="#" class="btn btn-pink">
                        Proceed{" "}
                      </a> */}
                    </div>
                  </TabPanel>
                  }<TabPanel>
                    <div class="padd-md">
                      <div class="row">
                        <div class="col-md-6">
                          <img
                            src="img/bike-vector.png"
                            class="img-fluid"
                            alt="bike-vector"
                          />
                        </div>
                        <div class="col-md-6 ">
                          <div class="d-flex flex-column h-100">
                            <div class="mt-auto mb-auto">
                              <label class="font-weight-bold">
                                Old Quotation Number
                              </label>
                              <div class="form-group">
                                <input
                                  class="form-control"
                                  placeholder="Enter quotation number"
                                />
                              </div>

                              <button class="btn btn-pink mb-4 mb-md-0">
                                {" "}
                                Load Details
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>{" "}
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="w-box text-center too-busy">
                <div className="padd-md">
                  <h1 className="mb-2">
                    <span> Too busy to do this?</span>{" "}
                  </h1>
                  <p>Buy policy in easier way</p>
                  <img
                    src="img/upload.gif"
                    className="img-fluid mt-4 mb-4"
                    alt="upload file"
                  />
                  <h4 className="title1">In a Hurry</h4>
                  <p className="gray-t">
                    Upload Your Current Policy & Receive Suitable Quotes Without
                    Any Hassle
                  </p>
                  <div className="b-center mt-4">
                    <a href="/" className="btn btn-pink">
                      Upload
                    </a>
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

export default Bikeindex;
