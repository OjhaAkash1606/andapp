import React, { useContext, useEffect } from 'react';
import VehicleDetailsHeading from '../Common/Heading/VehicleDetailsHeadiig';
import VehicleDetailsSearch from '../Common/Search/VehicleDetailsSearch';
import { connect } from 'react-redux';
import { fetchVariants } from '../../Redux';
import { contextRtoCityOnSelect } from '../../App';
import { Link } from 'react-router-dom';

function Variant({ variantData, fetchVariants }) {

  const selectedVariant = useContext(contextRtoCityOnSelect);


  console.log(selectedVariant);


  useEffect(() => {
    fetchVariants();
  }, [fetchVariants, selectedVariant]);

  let variant = [];
  for (let i = 0; i < variantData?.users.length; i++) {
    variant.push(variantData?.users[i]);
  }
  console.log(variant);

  let displayVariant = [];
  let allDisplayVariant = [];

  variant.map((item) => {
    if (selectedVariant.getModel.Id === item.ModelId) {
      item.Name = item.VariantName + " " + item.FuelType;
      // const data = { item, Name };
      displayVariant.push(item);
    }
  });



  if (displayVariant.length > 13) {

    for (let i = 0; i < 12; i++) { allDisplayVariant[i].push(displayVariant[i]); }

  }





  // const arr = [] Id: '257'
  return (
    <>
      <VehicleDetailsHeading label={'Variant'} />

      <div className='row'>
        <div className='col-12'>
          <div className='pl35 pr35'>
            <VehicleDetailsSearch
              type={'text'}
              list={'auto-complete'}
              placeholder={'Search Variant'}
              id={'auto-complete'}
              value={''}
              items={displayVariant}
            />

            <div class='variant-list'>
              <ul>
                {displayVariant.length < 13 ?


                  displayVariant.map((item, i) => (
                    <>
                      <li class='active' key={i} onClick={() => (selectedVariant.handleOnVariant(item), selectedVariant.goNextPage())}>
                        <Link to="">
                          {item.VariantName}<br />{item.FuelType}
                        </Link>
                      </li>
                    </>
                  )) : allDisplayVariant.map((item, i) => (
                    <>
                      <li class='active' key={i} onClick={() => (selectedVariant.handleOnVariant(item), selectedVariant.goNextPage())}>
                        <Link to="">
                          {item.VariantName}<br />{item.FuelType}
                        </Link>
                      </li>
                    </>
                  ))


                  /* <li>
                  {' '}
                  <a href='#'>316i (1895 cc) - PETROL</a>{' '}
                  </li>
                  <li>
                    {' '}
                    <a href='#'>318 i (1995 cc) - PETROL</a>{' '}
                    </li>
                    <li>
                    {' '}
                    <a href='#'>320d (1995 cc) - DIESEL</a>{' '}
                    </li>
                    <li>
                    {' '}
                    <a href='#'>320d Highline (1995 cc) - DIESEL</a>{' '}
                    </li>
                    <li>
                    {' '}
                    <a href='#'>320d LCI (1995 cc) - DIESEL</a>{' '}
                  </li>
                  <li>
                    {' '}
                    <a href='#'>320i (1995 cc) - PETROL</a>{' '}
                  </li>
                  <li>
                    {' '}
                    <a href='#'>325i (2497 cc) - PETROL</a>{' '}
                  </li>
                  <li>
                    {' '}
                    <a href='#'>325i LCI (2497 cc) - PETROL</a>{' '}
                  </li>
                  <li>
                    {' '}
                    <a href='#'>330i (2996 cc) - PETROL</a>{' '}
                    </li> */
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
    variantData: state.variants
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchVariants: () => dispatch(fetchVariants())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Variant);
