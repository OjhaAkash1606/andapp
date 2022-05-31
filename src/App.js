import React, { createContext, useState } from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Bikeindex from "./Pages/Bike/Bikeindex";
import { Routes, Route, Navigate } from "react-router-dom";
// import NotFound from "./Pages/Error/NotFound";
import { VehicleDetails } from "./Pages/Motor/TwoWheeler/VehicleDetails";
import BikePlanList from "./Pages/BikePlanList/BikePlanList";
// import TwService from "./Api/Bike/TwService";
import { Provider } from "react-redux";
import store from "./Redux/store";
import Make from "./Components/Step/Make";
import RtoCity from "./Components/Step/RtoCity";

export const contextRtoCityOnSelect = createContext();

function App() {

  const [getRtoCity, setGetRtoCity] = useState();
  const [getMake, setGetMake] = useState();
  const [forwordMake, setForwordMake] = useState();
  const [getModel, setGetModel] = useState();
  const [getVariant, setGetVariant] = useState();
  const [activePageIndex, setActivePageIndex] = useState(0);
  const [ManufacturingYear, setManufacturingYear] = useState();
  const [prePolicy, setPrePolicy] = useState();
  // const [vehicleDetails, setVehicleDetails] = useState([]);

  const handleOnSelect = (item) => {
    // setVehicleDetails((preData) => [{ ...preData, RTODetail: item }]);

    // console.log(item);
    setGetRtoCity(item.Name);
  };

  const goNextPage = () => {
    setActivePageIndex((index) => index + 1);
  };

  const goPrevPage = () => {
    setActivePageIndex((index) => index - 1);
  };

  const handleOnMake = (item) => {
    // setVehicleDetails((preData) => [{ ...preData, Make: item }]);

    setForwordMake(item);

    setGetMake(item.Name);
  };

  const handleOnModel = (item) => {
    // setVehicleDetails((preData) => [{ ...preData, Model: item }]);
    setGetModel(item);
  };


  const handleOnVariant = (item) => {
    // setVehicleDetails((preData) => [{ ...preData, Variant: item }]);
    // console.log(item);
    setGetVariant(item.Name);
  };

  const handleOnManufacturingYear = (item) => {
    // setVehicleDetails((preData) => [{ ...preData, ManufacturingYear: item }]);
    setManufacturingYear(item.Name);
  };

  const handleOnPrePolicy = (item) => {
    setPrePolicy(item.Name);
  };

  // sessionStorage.setItem("VehicleDetails", vehicleDetails.map((item) => JSON.stringify(item)));
  const data = {
    handleOnSelect, getRtoCity, setGetRtoCity,
    getMake, setGetMake, handleOnMake, forwordMake,
    handleOnModel, getModel, setGetModel,
    goNextPage, goPrevPage, activePageIndex, setActivePageIndex,
    handleOnVariant, getVariant, setGetVariant,
    handleOnManufacturingYear,
    handleOnPrePolicy
  };

  // console.log(ManufacturingYear);
  // console.log(vehicleDetails.at(-1));

  return (
    <Provider store={store}>
      <contextRtoCityOnSelect.Provider value={data} >
        {/* <UserContainerJsx /> */}
        {/* <UserContainer /> */}
        {/* <TwService /> */}
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Bike" element={<Bikeindex />} />

          <Route path="/VehicleDetails" element={<VehicleDetails />} />
          <Route path="/BikePlanList" element={<BikePlanList />} />
          <Route path="/*" element={<Navigate to="/" />} />



        </Routes>
        <Footer />
      </contextRtoCityOnSelect.Provider>
    </Provider>
  );
}

export default App;

// {/* <TwService />
// <Header />
// <Routes>
//   <Route path="/" exact element={<Home />} />
//   <Route path="/home" element={<Home />} />
//   <Route path="/Bike" element={<Bikeindex />} />
//   <Route path="/VehicleDetails" element={<VehicleDetails />} />
//   <Route path="/BikePlanList" element={<BikePlanList />} />
//   {/* <Route path="/*" element={<NotFound />} /> */}
//   <Route path="/*" element={<Navigate to="/" />} />
// </Routes>
// <Footer /> */}
