import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import VehicleDetailsHeading from "../Common/Heading/VehicleDetailsHeadiig";
import VehicleDetailsSearch from "../Common/Search/VehicleDetailsSearch";
import { connect } from "react-redux";
import { fetchModel } from "../../Redux";

import { contextRtoCityOnSelect } from '../../App';

function Model({ modelData, fetchModel }) {
  const selectedMake = useContext(contextRtoCityOnSelect);

  const [storeSelectedMake, setStoreSelectedMake] = useState();

  useEffect(() => {
    fetchModel();
    setStoreSelectedMake(selectedMake.forwordMake);

  }, [fetchModel, selectedMake]);

  let model = [];
  let allSelectedModel = [];
  let displayModel = [];
  for (let i = 0; i < modelData.users.length; i++) {

    model.push(modelData.users[i]);
  }

  for (let value of model) {
    if (value.MakeId === storeSelectedMake?.Id) {
      allSelectedModel.push(value);
      if (value.IsTop === "True") {
        displayModel.push(value);
      }
    }
  }



  console.log(model);
  console.log(allSelectedModel);
  console.log(displayModel);

  return (
    <>
      <VehicleDetailsHeading label={"Model"} />
      <div className="row">
        <div className="col-12">
          <div className="pl35 pr35">
            <VehicleDetailsSearch
              type={"text"}
              list={"auto-complete"}
              placeholder={"Search Model"}
              id={"auto-complete"}
              // value={""}
              items={allSelectedModel}
            />
            <div className="model-list">
              <ul>
                {displayModel.map((item) => (
                  <>
                    <li className="active" key={item.Id} onClick={() => (selectedMake.handleOnModel(item), selectedMake.goNextPage())} >
                      <Link to="">{item.Name}</Link>
                    </li>
                  </>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


const mapStateToProps = state => {
  return {
    modelData: state.model
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchModel: () => dispatch(fetchModel())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Model);
