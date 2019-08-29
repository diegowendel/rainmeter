import React from 'react';
import Select from 'react-select';
import { FormattedMessage } from 'react-intl';
import { stateOptions } from '../../data/Data';

const StateSelect = (props) => {
  return (
    <Select className="basic-single mb-1 mt-3 w-600"
      classNamePrefix="select"
      isDisabled={false}
      isLoading={false}
      isClearable={true}
      isRtl={false}
      isSearchable={true}
      options={stateOptions}
      onChange={(selectedState) => props.onChange("selectedState", selectedState)}
      value={props.value}
      placeholder={<FormattedMessage id="StateSelect.placeholder" />} />
  );
};

export default StateSelect;
