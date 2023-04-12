import React from 'react';
import Select from 'react-select';

const Filters = ({ handleSort, sortOrder }) => {
  const options = [
    { value: 'domain', label: 'Domain' },
    { value: 'gender', label: 'Gender' },
    { value: 'availability', label: 'Availability' }
  ];

  return (
    <div className="sortBy">
      Sort by
      <Select
        value={sortOrder}
        className="select-filter"
        onChange={handleSort}
        options={options}
      />
    </div>
  );
};

export default Filters;