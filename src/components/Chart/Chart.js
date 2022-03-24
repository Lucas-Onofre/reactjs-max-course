import React from 'react';

import { ChartBar } from './ChartBar';
import './Chart.css';

export const Chart = ({ dataPoints }) => {
  const dataPointValues = dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues)

  return(
  <div className='chart'>
    {dataPoints.map(dataPoint => {
      return (
        <ChartBar 
          key={dataPoint.label} 
          value={dataPoint.value} 
          maxValue={totalMaximum} 
          label={dataPoint.label}
        />
      )
    })}
  </div>
  )
};