import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const Chart = () => {
  const pData = [5000, 8000, 6500, 9000, 7000];
  const uData = [3000, 6000, 4500, 7000, 5000];
  const xLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];

  return (
    <div className='w-full bg-base-100 rounded-3xl p-2 md:p-6 shadow-xl border border-base-200 overflow-hidden'>
      <div className="w-full overflow-x-auto">
        <BarChart
          height={350}
          width={500} 
          series={[
            { data: pData, label: 'Users', color: '#60a5fa' },
            { data: uData, label: 'Providers', color: '#34d399' },
          ]}
          xAxis={[{ 
            data: xLabels, 
            scaleType: 'band',
          }]}
          margin={{ top: 70, bottom: 30, left: 40, right: 10 }}
          slotProps={{
            legend: {
              direction: 'row',
              position: { vertical: 'top', horizontal: 'middle' },
              padding: -10,
            },
          }}
          sx={{
            "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel": {
              fill: "currentColor !important",
            },
            "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": {
              fill: "currentColor !important",
            },
            "& .MuiChartsLegend-root text": {
              fill: "currentColor !important",
            }
          }}
        />
      </div>
    </div>
  );
};

export default Chart;