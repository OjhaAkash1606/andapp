import React, { useState, useEffect, useRef, useContext } from 'react';
import { connect } from 'react-redux';
import VehicleDetailsHeading from '../../../Components/Common/Heading/VehicleDetailsHeadiig';
import VehicleDetailsSearch from '../../../Components/Common/Search/VehicleDetailsSearch';
import { fetchUsers } from '../../../Redux';
import { contextRtoCityOnSelect } from '../../../App';
import { Link } from 'react-router-dom';


function Demo({ userData, fetchUsers }) {

  const UseRtoCityOnSelect = useContext(contextRtoCityOnSelect);

  const [selectedBrand, setSelectedBrand] = useState();
  const [showText, setShowText] = useState(false);
  const [height, setHeight] = useState();
  const [searchValue, setSearchValue] = useState();
  const [selectCity, setSelectCity] = useState([]);
  const [cSelectZone, setCSelectZone] = useState();
  const [nameLength, setNameLength] = useState();


  const listRef = useRef();





  const paddingFromBottom = () => {
    const newHeight = listRef.current?.clientHeight + 100 + "px";
    setHeight(newHeight);
  };

  useEffect(() => {
    fetchUsers();
    paddingFromBottom();

  }, [fetchUsers, showText, UseRtoCityOnSelect]);

  let rtodata = [];
  for (let i = 0; i < userData.users?.length; i++) {
    rtodata.push(userData.users[i]);
  }

  function groupArrayOfObjects(list, key) {
    return list.reduce(function (rv, x) {
      ; (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  }

  var groups = [];
  groups = groupArrayOfObjects(rtodata, 'DisplayOrder');
  var Zones = Object.values(groups);

  Zones.map((value, index) => {
    value.Index = index;
    value.CityName = value[0].CityName;
    value.TopCityName = value[0].TopCityName;
    value.Checked = false;
  });

  let Index = 0;
  let NewRTOData = [];

  Zones.map(zone => {
    if (Index < 12) {
      NewRTOData.push(zone);
    }
    Index++;
  });

  const flatrtoData = rtodata.flat();
  // console.log(flatrtoData);

  const cityName = [];
  const flatNewRTOData = NewRTOData.flat();

  const newFlatNewRTOData = flatNewRTOData.map(item =>
    cityName.push(item.CityName)
  );
  const uniqueCityName = [...new Set(cityName)];

  const ChangeRTOVisibility = selectZone => {
    setSelectCity([]);
    let preSelectZone = cSelectZone;


    NewRTOData.map((item) => {

      if (item[0].CityName === selectZone) {

        for (let value of item) {
          setNameLength(value.Name.length);
          setSelectCity((pre) => [...pre, value]);
        }

        setShowText(true);
      }
    });

    if (preSelectZone === selectZone) { setShowText(!showText); }

    setCSelectZone(selectZone);
  };


  const divStyle = {
    paddingBottom: height

  };
  const adjustPadding = nameLength > 11 ? 3 : 4;
  const newPadding = {
    paddingBottom: 10 + (Math.ceil(selectCity.length / adjustPadding) * 43)
  };




  return (
    <>
      {/* {console.log(searchValue)} */}
      <VehicleDetailsHeading label={'RTO & City'} />
      <div className='row'>
        <div className='col-12'>
          <div className='pl35 pr35'>
            <VehicleDetailsSearch
              type={'text'}
              list={'auto-complete'}
              placeholder={'Search RTO & City'}
              id={'auto-complete'}
              value={"searchValue"}
              items={rtodata}
            />
            <div className='citylist'  >
              {
                uniqueCityName.map((item) => (
                  <>
                    <div className='citydiv'>
                      <div onClick={() => ChangeRTOVisibility(item)}
                        style={cSelectZone === item && showText ? newPadding : null}>
                        <a
                          className='citytext'
                          value={selectedBrand}
                        >
                          {item}
                        </a>
                        < div
                          className={
                            cSelectZone === item && showText
                              ? 'showdiv animated fadeIn app'
                              : 'showdiv order5 animated fadeIn'}
                          ref={listRef}>
                          {
                            selectCity.map((item, ind) => (
                              <>

                                <div className='smdiv ' onClick={() => (UseRtoCityOnSelect.handleOnSelect(item), UseRtoCityOnSelect.goNextPage())}>
                                  <a className='bluetext'   >{item.Name} </a>
                                </div>
                              </>
                            ))}
                        </div>
                      </div>
                    </div>
                  </>
                ))
              }


            </div>
          </div>
        </div>
      </div>


    </>
  );


}

const mapStateToProps = state => {
  return {
    userData: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Demo);

/*  */