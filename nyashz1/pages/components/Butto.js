import React, {useCallback, useState} from 'react';
import {Select} from '@shopify/polaris';

export default function SelectExample() {
  const [selected, setSelected] = useState('today');

  const handleSelectChange = useCallback((value) => setSelected(value), []);

  const options = [
    {label: 'Today', value: 'today'},
    {label: 'Yesterday', value: 'yesterday'},
    {label: 'Last 7 days', value: 'lastWeek'},
    {label: 'Last month', value: 'lastMonth'},
    {label: 'Last Quater', value: 'lastQuarter'}
    ,
  ];

  return (
    <Select
      label="Date range"
      options={options}
      onChange={handleSelectChange}
      value={selected}
    />
  );
}
