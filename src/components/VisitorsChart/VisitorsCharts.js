import React from 'react'
import './VisitorsChart.css'
import {
  Chart as ChartJS, CategoryScale, LinearScale, BarElement,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import CountUp from 'react-countup';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
);

function VisitorsCharts(props) {
  const labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  };
  const dataFilterd = () => {
    let data = []
    for (let j = 0; j < labels.length; j++) {
      let count = 0
      for (let i = 0; i < props.statistics.length; i++) {
        const date = new Date(props.statistics[i].createdAt)
        if (date.getMonth() === j) count = count + 1
      }
      data.push(count)
    }
    return data
  }
  const data = {
    labels,
    datasets: [
      {
        data: dataFilterd(),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  }

  return (
    <>
      <div className="app__ml-2 col-6 col-sm-12">
        <Bar height={300} width={400} options={options} data={data} />
      </div>
      <div className="app__ml-2 col-6 col-sm-12">
        <div className='w-100'>
          <h4>Total Visitors</h4>
          <CountUp duration={0.5} end={props.statistics.length} />
        </div>
      </div>
    </>
  )
}

export default VisitorsCharts