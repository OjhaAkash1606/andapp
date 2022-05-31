import { hover } from "@testing-library/user-event/dist/hover";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { contextRtoCityOnSelect } from '../../App';



const Wizard = ({ children }) => {

  const wizardOnClick = useContext(contextRtoCityOnSelect);


  const pages = React.Children.toArray(children);
  const currentPage = pages[wizardOnClick.activePageIndex];
  // console.log(pages);



  const ButtonPrev = () =>
    wizardOnClick.activePageIndex > 0 && wizardOnClick.activePageIndex < pages.length ? (
      <div onClick={wizardOnClick.goPrevPage} className="btn btn-pink btn-pre">
        <i className="fa fa-angle-left" aria-hidden="true"></i>
        Previous
      </div>
    ) : null;


  // wizardOnClick.activePageIndex === pages.length - 1 ? <>const ButtonNext = () =>
  // </> : null;

  /* const ButtonNext = () => {
    wizardOnClick.activePageIndex === pages.length - 1 ? <>

      <div
        onClick={wizardOnClick.goNextPage}
        className="btn btn-pink btn-next"
        wz-next="ChangeIndex()"
      >
        <i className="fa fa-angle-right" aria-hidden="true"></i>{<Link to="/BikePlanList"> Get Quote </Link>}
      </div>
    </> : null;


    {  < Link to="/BikePlanList"> Get Quote </Link> : "Next"}
  }; */



  const ButtonNext = () =>

    wizardOnClick.activePageIndex < pages.length - 1 ?
      <div
        onClick={wizardOnClick.goNextPage}
        className="btn btn-pink btn-next"
        wz-next="ChangeIndex()"
      >
        <i className="fa fa-angle-right" aria-hidden="true"></i>Next
      </div >
      : wizardOnClick.activePageIndex === pages.length - 1 ?
        <div
          className="btn btn-pink btn-next"
          wz-next="ChangeIndex()"
        >
          <Link to="/BikePlanList"><i className="fa fa-angle-right" aria-hidden="true"></i> Get Quote</Link>
        </div > : null;




  return (
    <>

      {currentPage}

      <div className="row mt-auto">
        <div className="col-12 mt35">
          <div className="b-center bg-gray bottom-box">
            <ButtonPrev />
            <ButtonNext />
          </div>
        </div>
      </div>
    </>
  );
};

export default Wizard;
