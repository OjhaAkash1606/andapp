import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import VehicleDetailsHeading from "../Common/Heading/VehicleDetailsHeadiig";
import VehicleDetailsSearch from "../Common/Search/VehicleDetailsSearch";
import { connect } from "react-redux";
import { fetchMake } from "../../Redux";
import { contextRtoCityOnSelect } from '../../App';

function Make({ makeData, fetchMake }) {

  const [makeSearch, setMakeSearch] = useState();

  const getValueOnSelectContext = useContext(contextRtoCityOnSelect);
  // const [changeMake, setChangeMake] = useState([]);

  let make = [];
  for (let i = 0; i < makeData?.users?.length; i++) {
    make.push(makeData.users[i]);
  }

  let filterMake = [];

  for (let value of make) {
    value.IsTop && filterMake.push(value);
  }

  // console.log(filterMake);

  useEffect(() => {
    fetchMake();
    setMakeSearch(getValueOnSelectContext.onChooseValue);
  }, [fetchMake, getValueOnSelectContext]);

  // console.log(getValueOnSelectContext.setGetModel);
  let imgSrc;


  return (
    <>
      <VehicleDetailsHeading label={"Make"} />

      <div className="row">
        <div className="col-12">
          <div className="pl35 pr35">
            <VehicleDetailsSearch
              type={"text"}
              list={"auto-complete"}
              placeholder={"Search Make"}
              id={"auto-complete"}
              value={""}
              items={make}

            />

            <div className="iconlist">

              <ul>

                {
                  filterMake.map((item, ind) => (

                    imgSrc = item.Name.toLowerCase().replace(/ /g, ''),
                    < li className="active" key={item.Id} onClick={() => (getValueOnSelectContext.handleOnMake(item), getValueOnSelectContext.goNextPage())}>
                      <Link to="">
                        <img
                          src={`img/${imgSrc}.png`}
                          alt=""
                          className="img-fluid"
                        />
                        <span>{item.Name}</span>
                      </Link>
                    </li>
                  ))
                }
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
    makeData: state.make
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMake: () => dispatch(fetchMake())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Make);

