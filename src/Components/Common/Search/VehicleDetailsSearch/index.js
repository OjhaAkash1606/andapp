import React, { useState } from "react";
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { contextRtoCityOnSelect } from '../../../../App';

const VehicleDetailsSearch = (props) => {
  const { type, list, placeholder, value, id, items, onSelect, style } = props;
  // console.log(items);
  const UseRtoCityOnSelect = React.useContext(contextRtoCityOnSelect);

  // const [searchValue, setSearchValue] = useState();

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    // the item hovered
    // console.log(result);
  };

  const handleOnSelect = (item) => {
    // console.log(item);
    // setGetRtoCity(item.Name);
  };

  const handleOnClick = (item) => {
  };

  const handleOnFocus = () => {
    // console.log('Focused');
  };

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'center', cursor: "pointer", backgroundColor: "white", }}>{/* name:  */}{item.Name}</span>
      </>
    );
  };

  // console.log(items[0]);


  return (
    <div className="row">
      <div className="col-12">
        <div className="form-group">
          <ReactSearchAutocomplete
            type={type}
            list={list}
            className={"form-control"}
            placeholder={placeholder}
            items={items}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={items.length > 0 && items[0]?.Zone ? UseRtoCityOnSelect.handleOnSelect
              : items[0]?.MakeId ? UseRtoCityOnSelect.handleOnModel
                : items[0]?.VariantName ? UseRtoCityOnSelect.handleOnVariant
                  : items[0]?.CShortName ? UseRtoCityOnSelect.handleOnPrePolicy
                    : typeof items[0]?.Checked === "boolean" ? UseRtoCityOnSelect.handleOnManufacturingYear
                      : UseRtoCityOnSelect.handleOnMake
            }
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
            fuseOptions={{ keys: ["Name"] }}
            resultStringKeyName="Name"
            value={{ value }}
          />

        </div>
      </div>
    </div>
  );
};

export default VehicleDetailsSearch;






