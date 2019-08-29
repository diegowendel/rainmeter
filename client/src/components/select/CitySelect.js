import React from 'react';
import Select from 'react-select';
import { FormattedMessage } from 'react-intl';

const CitySelect = (props) => {
  return (
    <Select className="basic-single mb-1 w-600"
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
      placeholder={<FormattedMessage id="CitySelect.placeholder" />} />
  );
};

export default CitySelect;
