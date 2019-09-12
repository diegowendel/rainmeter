import React from 'react';
import Select from 'react-select';
import { FormattedMessage } from 'react-intl';
import { stateOptions } from '../../data/Data';

const customStyles = {
  control: (provided) => ({
    ...provided,
    fontFamily: "'ABeeZee', sans-serif"
  })
};

const StateSelect = (props) => {
  return (
    <Select className="basic-single mb-1 w-600"
      classNamePrefix="select_state"
      isDisabled={false}
      isLoading={false}
      isClearable={true}
      isRtl={false}
      isSearchable={true}
      options={stateOptions}
      onChange={(selectedState) => props.onChange("selectedState", selectedState)}
      styles={customStyles}
      value={props.value}
      placeholder={<FormattedMessage id="StateSelect.placeholder" />} />
  );
};

export default StateSelect;
