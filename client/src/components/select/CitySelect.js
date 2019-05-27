import React from 'react';
import Select from 'react-select';

const CitySelect = (props) => {
  return (
    <Select className="basic-single"
      classNamePrefix="select"
      isDisabled={props.isDisabled}
      isLoading={props.isLoading}
      isClearable={true}
      isRtl={false}
      isSearchable={true}
      getOptionLabel={(option) => option.name}
      getOptionValue={(option) => option.id}
      options={props.options}
      onChange={(selectedCity) => props.onChange("selectedCity", selectedCity)}
      value={props.value}
      placeholder="Selecione sua cidade..." />
  );
};

export default CitySelect;
