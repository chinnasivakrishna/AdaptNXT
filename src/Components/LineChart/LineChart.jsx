import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';
import './LineChart.css'; // Ensure this file contains your custom CSS
import { BiInfoCircle } from "react-icons/bi";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  annotationPlugin
);

const LineChart = () => {
  const data = {
    labels: ['6/30/2024 - 7/6/2024', '7/7/2024 - 7/13/2024', '7/21/2024 - 7/27/2024'],
    datasets: [
      {
        label: 'orders',
        data: [4, 2, 2],
        borderColor: 'orange',
        backgroundColor: 'orange',
        tension: 0.1,
        pointStyle: 'circle',
        pointRadius: 5,
        pointHoverRadius: 8,
        yAxisID: 'y1',
        fill: false,
      },
      {
        label: 'sales',
        data: [1.4, 0.8, 0.5],
        borderColor: 'cyan',
        backgroundColor: 'cyan',
        tension: 0.4,
        pointStyle: 'circle',
        pointRadius: 5,
        pointHoverRadius: 8,
        yAxisID: 'y',
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      y: {
        type: 'linear',
        position: 'left',
        min: 0,
        max: 1.6,
        ticks: {
          callback: function (value) {
            return value.toFixed(1) + 'k';
          },
          stepSize: 0.4,
          font: {
            size: 12,
            family: 'Arial',
          },
        },
        border: {
          dash: [4, 4],
        },
        grid: {
          color: '#aaa',
          tickColor: '#000',
          tickBorderDash: [2, 3],
          tickLength: 10,
          tickWidth: 2,
          offset: false,
          drawTicks: true,
          drawOnChartArea: true,
        },
        beginAtZero: true,
      },
      y1: {
        type: 'linear',
        position: 'right',
        min: 0,
        max: 4,
        ticks: {
          stepSize: 1,
          font: {
            size: 12,
            family: 'Arial',
          },
        },
        grid: {
          drawOnChartArea: false,
        },
      },
      x: {
        border: {
          display: true,
          color: '#000',
          width: 0.6,
        },
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Disable the default legend
      },
      tooltip: {
        enabled: true,
        backgroundColor: '#ffffff',
        titleColor: '#000000',
        bodyColor: '#000000',
        borderColor: '#cccccc',
        borderWidth: 1,
        callbacks: {
          title: function (context) {
            return context[0].label;
          },
          label: function (context) {
            const label = context.dataset.label || '';
            let value = context.raw;
            if (label === 'sales') {
              value = (value * 1000).toFixed(0);
            } else {
              value = Math.round(value);
            }
            return `${label.charAt(0).toUpperCase() + label.slice(1)} - ${value}`;
          },
          afterBody: function () {
            return 'Avg Order Value - 351.00';
          },
        },
      },
      annotation: {
        annotations: {
          verticalLine: {
            type: 'line',
            xMin: '7/7/2024 - 7/13/2024',
            xMax: '7/7/2024 - 7/13/2024',
            borderColor: 'gray',
            borderWidth: 1,
            borderDash: [4, 4],
          },
        },
      },
    },
  };

  return (
    <div className='line-chart-container'>
      <h3>Sales vs Orders<BiInfoCircle /></h3>
      <Line data={data} options={options} style={{ marginTop: '60px' }} />
      <div className="custom-legend">
        <div className="legend-item">
          <span className="legend-icon orders"><span className='circle'></span></span>
          <span className="legend-label" style={{color:"orange"}}>orders</span>
        </div>
        <div className="legend-item">
          <span className="legend-icon sales"><span className='circle'></span></span>
          <span className="legend-label" style={{color:"cyan"}}>sales</span>
        </div>
      </div>
    </div>
  );
};

export default LineChart;