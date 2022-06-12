import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function Chart({ counterState }) {

  // preparing data to be passed into chart
  const activityArray = [];
  const activityAmount = [];
  for (const key in counterState) {
    const obj = counterState[key];
    activityArray.push(obj.name);
    activityAmount.push(obj.count);
  }

  const data = {
    labels: activityArray,
    datasets: [
      {
        label: 'Daily',
        data: activityAmount,
        backgroundColor: [
          'rgb(211, 68, 68, 0.2)',
          'rgb(218, 162, 65, 0.2)',
          'rgb(185, 218, 65, 0.2)',
          'rgb(134, 218, 65, 0.2)',
          'rgb(65, 182, 218, 0.2)',
          'rgb(65, 85, 218, 0.2)',
          'rgb(136, 65, 218, 0.2)',
          'rgb(213, 65, 218, 0.2)',
          'rgb(218, 65, 131, 0.2)',
          'rgb(218, 121, 65, 0.2)',
          'rgb(218, 200, 65, 0.2)',
          'rgb(65, 208, 218, 0.2)',
          'rgb(65, 129, 218, 0.2)',
          'rgb(101, 65, 218, 0.2)',
          'rgb(177, 65, 218, 0.2)',
          'rgb(218, 65, 180, 0.2)',
        ],
        borderColor: [
          'rgb(211, 68, 68, 1)',
          'rgb(218, 162, 65, 1)',
          'rgb(185, 218, 65, 1)',
          'rgb(134, 218, 65, 1)',
          'rgb(65, 182, 218, 1)',
          'rgb(65, 85, 218, 1)',
          'rgb(136, 65, 218, 1)',
          'rgb(213, 65, 218, 1)',
          'rgb(218, 65, 131, 1)',
          'rgb(218, 121, 65, 1)',
          'rgb(218, 200, 65, 1)',
          'rgb(65, 208, 218, 1)',
          'rgb(65, 129, 218, 1)',
          'rgb(101, 65, 218, 1)',
          'rgb(177, 65, 218, 1)',
          'rgb(218, 65, 180, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Doughnut className="max-h-[600px] max-w-[600px]" data={data} />
  );
}

export default Chart;
