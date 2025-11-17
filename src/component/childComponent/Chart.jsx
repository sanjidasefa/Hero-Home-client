import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
const Chart = () => {
  
  const pData = [5000, 8000, 6500, 9000, 7000];
  const uData = [3000, 6000, 4500, 7000, 5000];
  const xLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
  return (
    <div className='mt-5 shadow-2xl'>
          <BarChart
      width={600}
      height={350}
      
      series={[
        { data: pData, label: 'Users' },
        { data: uData, label: 'Providers' },
      ]}
      xAxis={[{ data: xLabels }]}
      yAxis={[{ width: 60, max: 10000 }]}
    />

    </div>
  );
};

export default Chart;