import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function Chart() {

  const dataList = [
  {
    activity: 'Walking',
    amount: 12,
  },
  {
    activity: 'Brushing Teeth',
    amount: 19,
  },
  {
    activity: 'Sleeping',
    amount: 10,
  },
  {
    activity: 'Video Games',
    amount: 14,
  },
  {
    activity: 'Jogging',
    amount: 13,
  },
  ];

  const activities = [];
  const amounts = [];

  for (let i = 0; i < dataList.length; i++) {
    activities.push(dataList[i].activity)
  }

  for (let i = 0; i < dataList.length; i++) {
    amounts.push(dataList[i].amount)
  }

  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    // labels: activities,
    datasets: [
      {
        label: 'Monthly',
        // data: amounts,
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },

      {
        label: 'Weekly',
        data: [2, 3, 5, 7, 6],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },

    ],
  };

  return (
    <Doughnut className="max-h-screen" data={data} />
  );
}

export default Chart;