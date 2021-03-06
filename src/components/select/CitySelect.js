import React from 'react';
import Select from 'react-select';
import { FormattedMessage } from 'react-intl';

const customStyles = {
  control: (provided) => ({
    ...provided,
    fontFamily: "'ABeeZee', sans-serif"
  })
};

const CitySelect = (props) => {
  return (
    <Select className="basic-single mb-1 w-600"
      classNamePrefix="select_city"
      isDisabled={props.isDisabled}
      isLoading={props.isLoading}
      isClearable={true}
      isRtl={false}
      isSearchable={true}
      getOptionLabel={(option) => option.name}
      getOptionValue={(option) => option.id}
      options={props.options}
      onChange={(selectedCity) => props.onChange("selectedCity", selectedCity)}
      styles={customStyles}
      value={props.value}
      placeholder={<FormattedMessage id="CitySelect.placeholder" />} />
  );
};

export default CitySelect;
